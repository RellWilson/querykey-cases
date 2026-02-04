/**
==========================================================================
@fileOverview
Network-free MCP tool smoke tests with mocked fetch to validate handlers and URL shaping.
@author
Platform Integrations
@maintainer
Platform Integrations
@usage
node --test test/mcp-tools.test.mjs
@dependencies
Node.js >= 18, global fetch/Response
@notes
Mocks HTTP to avoid hitting live APIs; focuses on path and payload handling.
@timestamp
2026-02-03 12:00:00 UTC
==========================================================================*/
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  toolSearchCases,
  toolGetCase,
  toolListCollections,
  toolSuggestCase,
  toolVerifyCase,
  toolListTrustEvents,
  toolGetCapabilities,
  forceApiBase
} from '../tools.mjs';

const originalFetch = global.fetch;

function stubFetch(resolvers) {
  global.fetch = async (url, options = {}) => {
    const key = String(url);
    const handler = resolvers[key] || resolvers['*'];
    if (!handler) {
      throw new Error(`Unhandled fetch for ${key}`);
    }
    return handler({ url: key, options });
  };
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' }
  });
}

test.after(() => {
  global.fetch = originalFetch;
});

test('toolSearchCases issues GET with query params', async () => {
  process.env.QKEY_API_BASE = 'http://api.example';
  forceApiBase('http://api.example');
  const hits = [];
  stubFetch({
    '*': ({ url }) => {
      hits.push(url);
      return jsonResponse({ ok: true, items: [] });
    }
  });
  const res = await toolSearchCases({ q: 'test', limit: 5, page: 2 });
  assert.equal(res.ok, true);
  assert.ok(hits[0].includes('/api/v1/cases'));
  assert.ok(hits[0].includes('q=test'));
  assert.ok(hits[0].includes('limit=5'));
  assert.ok(hits[0].includes('page=2'));
});

test('toolGetCase supports id and slug', async () => {
  process.env.QKEY_API_BASE = 'http://api.example';
  forceApiBase('http://api.example');
  const urls = [];
  stubFetch({
    '*': ({ url }) => {
      urls.push(url);
      return jsonResponse({ ok: true, id: 'id-or-slug' });
    }
  });
  await toolGetCase({ id: 'abc123' });
  await toolGetCase({ slug: 'case-slug' });
  assert.ok(urls[0].includes('/api/v1/cases/abc123'));
  assert.ok(urls[1].includes('/api/v1/cases/slug/case-slug'));
});

test('toolListCollections paginates with defaults', async () => {
  process.env.QKEY_API_BASE = 'http://api.example';
  forceApiBase('http://api.example');
  let lastUrl = '';
  stubFetch({
    '*': ({ url }) => {
      lastUrl = url;
      return jsonResponse({ ok: true, collections: [] });
    }
  });
  const res = await toolListCollections({ q: 'network', limit: 10, page: 3 });
  assert.equal(res.ok, true);
  assert.ok(lastUrl.includes('/api/v1/collections'));
  assert.ok(lastUrl.includes('q=network'));
  assert.ok(lastUrl.includes('limit=10'));
  assert.ok(lastUrl.includes('page=3'));
});

test('toolSuggestCase posts suggestion body', async () => {
  process.env.QKEY_API_BASE = 'http://api.example';
  forceApiBase('http://api.example');
  let captured = null;
  stubFetch({
    '*': ({ url, options }) => {
      captured = { url, method: options.method, body: options.body };
      return jsonResponse({ ok: true });
    }
  });
  await toolSuggestCase({ id: 'abc123', suggestion: 'Improve docs', fields: ['steps'], contact: 'user@example.com' });
  assert.ok(captured.url.includes('/api/v1/cases/abc123/suggest'));
  assert.equal(captured.method, 'POST');
  assert.ok(String(captured.body).includes('Improve docs'));
});

test('toolVerifyCase hits verify endpoint with slug', async () => {
  process.env.QKEY_API_BASE = 'http://api.example';
  forceApiBase('http://api.example');
  let urlHit = '';
  stubFetch({
    '*': ({ url }) => {
      urlHit = url;
      return jsonResponse({ ok: true, verified: true });
    }
  });
  const res = await toolVerifyCase({ slug: 'case-1', detail: 'recent', window_days: 30 });
  assert.equal(res.ok, true);
  assert.ok(urlHit.includes('/api/v1/cases/slug/case-1/verify'));
  assert.ok(urlHit.includes('detail=recent'));
  assert.ok(urlHit.includes('window_days=30'));
});

test('toolListTrustEvents passes query params and days default', async () => {
  process.env.QKEY_API_BASE = 'http://api.example';
  forceApiBase('http://api.example');
  let urlHit = '';
  stubFetch({
    '*': ({ url }) => {
      urlHit = url;
      return jsonResponse({ ok: true, events: [] });
    }
  });
  const res = await toolListTrustEvents({ limit: 5, cursor: 'abc', window_days: 15, intent: 'download' });
  assert.equal(res.ok, true);
  assert.ok(urlHit.includes('/api/v1/trust/events'));
  assert.ok(urlHit.includes('limit=5'));
  assert.ok(urlHit.includes('cursor=abc'));
  assert.ok(urlHit.includes('intent=download'));
  assert.ok(urlHit.includes('days=15'));
});

test('toolGetCapabilities returns first available descriptor', async () => {
  process.env.QKEY_API_BASE = 'http://api.example';
  forceApiBase('http://api.example');
  const hits = [];
  stubFetch({
    'http://api.example/api/portal/bootstrap': ({ url }) => {
      hits.push(url);
      return jsonResponse({ plan: 'enterprise', features: { sample: true } });
    },
    '*': ({ url }) => {
      hits.push(url);
      return jsonResponse({ plan: 'fallback' });
    }
  });
  const res = await toolGetCapabilities();
  assert.equal(res.plan, 'enterprise');
  assert.ok(hits[0].includes('/api/portal/bootstrap'));
});
