/**
==========================================================================
@fileOverview
Shared tool schemas and HTTP helpers for MCP server; exported so tests can
invoke handlers without spinning the full stdio transport.
@author
QueryKey Platform SRE Guild – Contact@QueryKey.com
@maintainer
Platform Integrations (MCP)
@usage
Import helper functions inside MCP adapters and tests without booting the stdio transport.
@dependencies
zod, fetch (global)
@notes
Adds consent helpers to gate telemetry and exposes consent endpoints for adapters.
@timestamp
2026-02-09T00:00:00Z
==========================================================================*/
import { z } from 'zod';

// Runtime-safe constants; avoid TS-only "as const" syntax.
const CONSENT_CATEGORIES = Object.freeze(['functional', 'analytics', 'personalization', 'automation']);
const CONSENT_STATUS = Object.freeze(['granted', 'denied', 'pending']);

/**
 * Resolve candidate base URLs in priority order.
 * User note: local developer often uses https://www.querykey.local via Traefik.
 * We include that ahead of the raw 127.0.0.1 fallback unless an explicit env is set.
 */
function candidateBases() {
  return [
    process.env.QKEY_API_BASE,
    process.env.PUBLIC_BASE_URL,
    // Preferred edge/dev domain (user specified)
    'https://www.querykey.local',
    // Host-mapped portal (portable container) fallback
    'http://127.0.0.1:8081',
    // Fast localhost fallback to avoid long hangs
    'http://127.0.0.1:8080',
    // Additional variants if needed
    'http://www.querykey.local',
    'https://querykey.local',
    'http://querykey.local',
    // Common container/localhost default
    // (intentionally already included above)
  ].filter(Boolean).map(b => b.replace(/\/$/, ''));
}

let ACTIVE_API_BASE = null; // Will be set after first successful request
export function getActiveApiBase() { return ACTIVE_API_BASE || candidateBases()[0]; }
// Backwards export for existing imports; may change after first successful call
export let QKEY_API_BASE = getActiveApiBase();
export function forceApiBase(base) {
  if (!base) return;
  ACTIVE_API_BASE = String(base).replace(/\/$/, '');
  QKEY_API_BASE = ACTIVE_API_BASE;
}

const DEFAULT_TIMEOUT_MS = Number(process.env.QKEY_HTTP_TIMEOUT_MS || 2500);

async function fetchWithTimeout(url, options = {}, timeoutMs = DEFAULT_TIMEOUT_MS) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    if (err && err.name === 'AbortError') {
      const e = new Error(`Request timeout after ${timeoutMs}ms: ${url}`);
      e.code = 'ETIMEDOUT';
      throw e;
    }
    throw err;
  }
}
const QKEY_API_KEY = process.env.QKEY_API_KEY || '';

function authHeaders() {
  const headers = { 'accept': 'application/json' };
  if (QKEY_API_KEY) headers['authorization'] = `Bearer ${QKEY_API_KEY}`;
  return headers;
}

async function httpGet(pathname, params = {}, opts = {}) {
  const bases = candidateBases();
  let lastErr;
  for (const base of bases) {
    try {
      const url = new URL(pathname, base);
      Object.entries(params).forEach(([k, v]) => {
        if (v === undefined || v === null) return;
        url.searchParams.set(k, String(v));
      });
      // Allow self-signed certs for *.local HTTPS if not explicitly disabled
      const prevTls = process.env.NODE_TLS_REJECT_UNAUTHORIZED;
      const isLocalHttps = url.protocol === 'https:' && /\.local$/.test(url.hostname);
      if (isLocalHttps && process.env.QKEY_TLS_INSECURE !== '0') process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      const res = await fetchWithTimeout(url, { headers: authHeaders() });
      if (isLocalHttps) process.env.NODE_TLS_REJECT_UNAUTHORIZED = prevTls;
      if (!res.ok) {
        // Only retry on network style issues or 404; other status codes bubble up.
        if (res.status === 404) {
          if (opts && opts.allowNotFound) {
            ACTIVE_API_BASE = base;
            QKEY_API_BASE = base;
            try {
              const body = await res.json();
              if (body && (body.ok === false || body.status === 404)) return body;
              // Normalize arbitrary 404 body into standard shape
              return { ok: false, status: 404, error: 'not_found', body };
            } catch (_e) {
              return { ok: false, status: 404, error: 'not_found' };
            }
          }
          lastErr = new Error(`GET ${url} 404`);
          continue;
        }
        throw new Error(`GET ${url} failed: ${res.status}`);
      }
      ACTIVE_API_BASE = base; // cache
      QKEY_API_BASE = base; // keep exported variable aligned
      return res.json();
    } catch (err) {
      if (err && (err.code === 'ETIMEDOUT' || /fetch failed/i.test(err.message))) {
        lastErr = err;
        continue;
      }
      lastErr = err;
      continue; // try next base
    }
  }
  throw lastErr || new Error('All base URLs failed for GET ' + pathname);
}

async function httpPost(pathname, json) {
  const bases = candidateBases();
  let lastErr;
  for (const base of bases) {
    try {
      const url = new URL(pathname, base);
      const prevTls = process.env.NODE_TLS_REJECT_UNAUTHORIZED;
      const isLocalHttps = url.protocol === 'https:' && /\.local$/.test(url.hostname);
      if (isLocalHttps && process.env.QKEY_TLS_INSECURE !== '0') process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      const res = await fetchWithTimeout(url, {
        method: 'POST',
        headers: { ...authHeaders(), 'content-type': 'application/json' },
        body: JSON.stringify(json || {})
      });
      if (isLocalHttps) process.env.NODE_TLS_REJECT_UNAUTHORIZED = prevTls;
      if (!res.ok) {
        if (res.status === 404) { lastErr = new Error(`POST ${url} 404`); continue; }
        throw new Error(`POST ${url} failed: ${res.status}`);
      }
      ACTIVE_API_BASE = base;
      QKEY_API_BASE = base;
      return res.json();
    } catch (err) {
      if (err && err.code === 'ETIMEDOUT') { lastErr = err; continue; }
      lastErr = err;
      continue;
    }
  }
  throw lastErr || new Error('All base URLs failed for POST ' + pathname);
}

function normalizeConsentSnapshot(snapshot = {}) {
  const categories = {};
  CONSENT_CATEGORIES.forEach((category) => {
    const status = snapshot?.categories?.[category];
    if (CONSENT_STATUS.includes(status)) categories[category] = status;
  });
  return {
    categories,
    consent_id: snapshot?.consent_id || snapshot?.consentId,
    schema_version: snapshot?.schema_version || snapshot?.schemaVersion,
    jurisdiction: snapshot?.jurisdiction,
    updated_at: snapshot?.updated_at || snapshot?.updatedAt
  };
}

function telemetryAllowed(snapshot) {
  const categories = snapshot?.categories || {};
  return categories.analytics === 'granted' || categories.automation === 'granted';
}

export function ensureTelemetryAllowed(snapshot) {
  if (telemetryAllowed(snapshot)) return true;
  const err = new Error('We need your permission to run analytics before sending telemetry. Please update your consent preferences to continue.');
  err.code = 'consent_required';
  throw err;
}

export const SearchCasesInput = z.object({ q: z.string().min(1), limit: z.number().int().min(1).max(100).optional(), page: z.number().int().min(1).optional() });
export const GetCaseInput = z.object({ id: z.string().min(1) }).or(z.object({ slug: z.string().min(1) }));
export const ListCollectionsInput = z.object({ q: z.string().optional(), page: z.number().int().min(1).optional(), limit: z.number().int().min(1).max(100).optional() });
export const SuggestCaseInput = z.object({ id: z.string().min(1), suggestion: z.string().min(10), fields: z.array(z.string()).optional(), contact: z.string().optional() });
export const VerifyCaseInput = z.object({
  id: z.string().min(1).optional(),
  slug: z.string().min(1).optional(),
  detail: z.enum(['recent', 'full']).optional(),
  window_days: z.number().int().min(1).max(180).optional()
}).refine((val) => Boolean(val.id || val.slug), { message: 'Provide id or slug' });
export const TrustEventsInput = z.object({
  limit: z.number().int().min(1).max(100).optional(),
  cursor: z.string().optional(),
  event_type: z.string().optional(),
  intent: z.string().optional(),
  case_id: z.string().optional(),
  collection_id: z.string().optional(),
  research_id: z.string().optional(),
  actor_user_id: z.string().optional(),
  actor_agent_id: z.string().optional(),
  window_days: z.number().int().min(1).max(365).optional()
});
export const CapabilitiesInput = z.object({}).optional();
export const ConsentCategoriesInput = z.object({
  functional: z.enum(CONSENT_STATUS).optional(),
  analytics: z.enum(CONSENT_STATUS).optional(),
  personalization: z.enum(CONSENT_STATUS).optional(),
  automation: z.enum(CONSENT_STATUS).optional()
});
export const ConsentUpdateInput = z.object({
  categories: ConsentCategoriesInput.optional(),
  jurisdiction_override: z.string().min(2).optional(),
  age_bracket: z.string().optional(),
  consent_id: z.string().optional(),
  schema_version: z.string().optional()
});

export async function toolSearchCases({ q, limit = 10, page = 1 }) {
  return httpGet('/api/v1/cases', { q, limit, page });
}

export async function toolGetCase(payload) {
  if (payload.id) return httpGet(`/api/v1/cases/${encodeURIComponent(payload.id)}`);
  if (payload.slug) return httpGet(`/api/v1/cases/slug/${encodeURIComponent(payload.slug)}`);
  throw new Error('Missing id or slug');
}

export async function toolListCollections({ q = '', limit = 25, page = 1 }) {
  return httpGet('/api/v1/collections', { q, limit, page });
}

export async function toolSuggestCase({ id, suggestion, fields, contact }) {
  return httpPost(`/api/v1/cases/${encodeURIComponent(id)}/suggest`, { suggestion, fields, contact });
}

export async function toolVerifyCase({ id, slug, detail, window_days }) {
  const target = id ? `/api/v1/cases/${encodeURIComponent(id)}/verify` : `/api/v1/cases/slug/${encodeURIComponent(slug)}/verify`;
  const params = {};
  if (detail) params.detail = detail;
  if (window_days) params.window_days = window_days;
  return httpGet(target, params); // strict: do not swallow 404s here
}

export async function toolListTrustEvents({ limit = 25, cursor = null, event_type = null, intent = null, case_id = null, collection_id = null, research_id = null, actor_user_id = null, actor_agent_id = null, window_days = 30 } = {}) {
  const params = { limit, cursor, event_type, intent, case_id, collection_id, research_id, actor_user_id, actor_agent_id, days: window_days };
  // API uses /api/v1/trust/events with query params; must be authenticated
  return httpGet('/api/v1/trust/events', params);
}

export async function toolGetCapabilities() {
  // Use bootstrap endpoint for descriptor if available; fall back to plan summary
  try {
    return await httpGet('/api/portal/bootstrap');
  } catch (_) {
    try {
      return await httpGet('/api/v1/admin/usage');
    } catch (_) {
      return { plan: 'unknown', features: {}, capabilities: {} };
    }
  }
}

export async function toolGetConsent(opts = {}) {
  const allowNotFound = opts.allowNotFound !== undefined ? opts.allowNotFound : true;
  const res = await httpGet('/api/v1/consent', {}, { allowNotFound });
  if (res && res.ok === false && res.status === 404) return res;
  return normalizeConsentSnapshot(res || {});
}

export async function toolUpdateConsent(payload = {}) {
  const parsed = ConsentUpdateInput.parse(payload || {});
  const res = await httpPost('/api/v1/consent', parsed);
  return normalizeConsentSnapshot(res || {});
}
