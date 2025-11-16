/**
==========================================================================
@fileOverview
Public entry for @querykey/cases-sdk. Exposes QueryKeyClient (ergonomic
wrapper) and underlying generated APIs for advanced scenarios.
@author
QueryKey SDK Team – Contact@QueryKey.com
@maintainer
Developer Platform (JS SDK)
@usage
import { QueryKeyClient } from '@querykey/cases-sdk';
const client = new QueryKeyClient({ baseUrl: 'http://localhost:8080', apiKey: 'qk_live_...' });
const r = await client.cases.search({ q: 'TypeError' });
@dependencies
fetch (global), OpenAPI generated clients (typescript-fetch)
@notes
ESM-only. No console logs – callers receive structured errors.
@timestamp
2025-11-04T00:00:00Z
==========================================================================*/
import {
  Configuration,
} from '../generated/runtime';
import { AgentsApi } from '../generated/apis/AgentsApi';
import { BundlesApi } from '../generated/apis/BundlesApi';
import { CollectionsApi } from '../generated/apis/CollectionsApi';
import { DefaultApi } from '../generated/apis/DefaultApi';

const RETRYABLE_STATUSES = new Set([429, 503]);
const BACKOFF_MAX_ATTEMPTS = 4;
const BACKOFF_SETTINGS = { initialMs: 250, multiplier: 2, maxMs: 4000, jitter: 0.25 };
const ERROR_CODE_BY_STATUS: Record<number, string> = {
  400: 'invalid_request',
  401: 'auth_required',
  402: 'payment_required',
  403: 'forbidden',
  404: 'not_found',
  406: 'not_acceptable',
  409: 'conflict',
  422: 'invalid_payload',
  429: 'rate_limited',
  500: 'server_error',
  503: 'service_unavailable'
};

export type DownloadResult = {
  data: ArrayBuffer;
  checksum: string;
  headerChecksum: string | null;
  checksumMatches: boolean | null;
  contentType: string | null;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function backoffDelay(attempt: number) {
  const base = Math.min(BACKOFF_SETTINGS.maxMs, BACKOFF_SETTINGS.initialMs * BACKOFF_SETTINGS.multiplier ** attempt);
  const jitter = base * BACKOFF_SETTINGS.jitter * Math.random();
  return base + jitter;
}

function bytesToHex(buffer: ArrayBuffer | Uint8Array) {
  const view = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  let hex = '';
  for (let i = 0; i < view.length; i++) {
    hex += view[i].toString(16).padStart(2, '0');
  }
  return hex;
}

async function sha256Hex(buffer: ArrayBuffer | Uint8Array): Promise<string> {
  const data = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  if (globalThis.crypto && globalThis.crypto.subtle) {
    const digest = await globalThis.crypto.subtle.digest('SHA-256', data);
    return bytesToHex(digest);
  }
  try {
    const nodeCrypto = await import('node:crypto');
    return nodeCrypto.createHash('sha256').update(data).digest('hex');
  } catch (_err) {
    // Fallback to manual hex conversion if node:crypto is unavailable
    return bytesToHex(data);
  }
}

function buildUrl(basePath: string, pathname: string, params?: Record<string, string | number | undefined>) {
  const url = new URL(pathname, basePath);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null || value === '') return;
      url.searchParams.set(key, String(value));
    });
  }
  return url;
}

async function downloadArchive(
  fetchApi: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>,
  url: URL
): Promise<DownloadResult> {
  const res = await fetchApi(url.toString(), { method: 'GET', headers: { Accept: 'application/octet-stream' } });
  await ensureOk(res, url.pathname);
  const data = await res.arrayBuffer();
  const checksum = await sha256Hex(data);
  const headerChecksum = res.headers.get('x-qkey-checksum-sha256');
  return {
    data,
    checksum,
    headerChecksum,
    checksumMatches: headerChecksum ? headerChecksum.toLowerCase() === checksum : null,
    contentType: res.headers.get('content-type')
  };
}

export type QueryKeyClientOptions = {
  baseUrl: string;
  apiKey?: string;
  timeoutMs?: number;
};

class SDKError extends Error {
  code?: string;
  status?: number;
  constructor(message: string, opts?: { code?: string; status?: number }) {
    super(message);
    this.name = 'SDKError';
    this.code = opts?.code;
    this.status = opts?.status;
  }
}

/** Simple fetch wrapper adding Authorization header and timeout */
function withAuthFetch(apiKey: string | undefined, timeoutMs: number) {
  const fetchWithRetry = async (input: RequestInfo | URL, init: RequestInit | undefined, attempt: number): Promise<Response> => {
    const ctl = new AbortController();
    const to = setTimeout(() => ctl.abort(), timeoutMs);
    try {
      const headers = new Headers(init?.headers);
      if (apiKey) headers.set('Authorization', `Bearer ${apiKey}`);
      const res = await fetch(input, { ...init, headers, signal: ctl.signal });
      if (!res.ok && RETRYABLE_STATUSES.has(res.status) && attempt + 1 < BACKOFF_MAX_ATTEMPTS) {
        await sleep(backoffDelay(attempt));
        return fetchWithRetry(input, init, attempt + 1);
      }
      return res;
    } catch (err: any) {
      if (err?.name === 'AbortError' && attempt + 1 < BACKOFF_MAX_ATTEMPTS) {
        await sleep(backoffDelay(attempt));
        return fetchWithRetry(input, init, attempt + 1);
      }
      throw err;
    } finally {
      clearTimeout(to);
    }
  };
  return async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => fetchWithRetry(input, init, 0);
}

async function throwHttpError(res: Response, targetPath: string): Promise<never> {
  const statusLine = `${res.status}${res.statusText ? ` ${res.statusText}` : ''}`;
  const ct = res.headers.get('content-type') || '';
  const fragments: string[] = [];

  if (ct.includes('application/json')) {
    try {
      const body = await res.clone().json();
      const errorSlug = typeof body?.error === 'string' ? body.error.replace(/_/g, ' ') : undefined;
      const codeSlug = typeof body?.code === 'string' ? body.code.replace(/_/g, ' ') : undefined;
      const message = typeof body?.message === 'string' ? body.message : undefined;
      const requiredTier = body?.required_tier || body?.requiredTier || body?.access?.required;
      if (errorSlug) fragments.push(errorSlug);
      if (codeSlug && codeSlug !== errorSlug) fragments.push(codeSlug);
      if (message) fragments.push(message);
      if (requiredTier) fragments.push(`requires ${String(requiredTier)} tier`);
    } catch {
      // ignore JSON parse issues
    }
  } else {
    try {
      const text = (await res.clone().text()).trim();
      if (text) fragments.push(text.length > 280 ? `${text.slice(0, 280)}…` : text);
    } catch {
      // ignore body read issues
    }
  }

  const detail = fragments.length ? ` ${fragments.join(' · ')}` : '';
  throw new SDKError(`We couldn't reach ${targetPath} (HTTP ${statusLine}).${detail}`, { status: res.status, code: ERROR_CODE_BY_STATUS[res.status] });
}

async function ensureOk(res: Response, targetPath: string): Promise<Response> {
  if (res.ok) return res;
  await throwHttpError(res, targetPath);
  return res; // Unreachable, satisfies TypeScript
}

export class QueryKeyClient {
  readonly config: Configuration;
  readonly defaultApi: DefaultApi;
  readonly agents: AgentsApi;
  readonly bundles: BundlesApi;
  readonly collections: CollectionsApi;
  /** Convenience namespaces */
  readonly cases: {
    search: (p: { q?: string; page?: number; limit?: number }) => Promise<any>;
    getById: (id: string) => Promise<any>;
    getBySlug: (slug: string, opts?: { acceptQKey?: boolean }) => Promise<any>;
    versionsById: (id: string) => Promise<any>;
    versionsBySlug: (slug: string) => Promise<any>;
    diffVersions: (p: { id?: string; slug?: string; fromVersion: number; toVersion: number }) => Promise<any>;
    iterateSearch: (p?: { q?: string; page?: number; limit?: number }) => AsyncGenerator<any, void, void>;
    submitSuggestion: (p: { id: string; suggestion: string; fields?: string[]; contact?: string }) => Promise<any>;
    verify: (p: { id?: string; slug?: string; detail?: 'recent' | 'full'; windowDays?: number }) => Promise<any>;
  };

  constructor(opts: QueryKeyClientOptions) {
    const timeoutMs = Math.max(1_000, Math.min(60_000, opts.timeoutMs ?? 10_000));
    const fetchApi = withAuthFetch(opts.apiKey, timeoutMs);
    this.config = new Configuration({ basePath: opts.baseUrl, fetchApi });
    this.defaultApi = new DefaultApi(this.config);
    this.agents = new AgentsApi(this.config);
    this.bundles = new BundlesApi(this.config);
    this.collections = new CollectionsApi(this.config);
    const basePath = String(this.config.basePath || opts.baseUrl);
    const fetcher = this.config.fetchApi!;

    // Cases helpers implemented via direct fetch to ensure JSON is returned
    // even if the generated client models these as void responses.
    this.cases = {
      search: async ({ q, page, limit } = {}) => {
        const url = buildUrl(basePath, '/api/v1/cases/search', { q, page, limit });
        const res = await fetcher(url.toString(), { method: 'GET' });
        await ensureOk(res, url.pathname);
        return res.json();
      },
      getById: async (id: string) => {
        if (!id) throw new SDKError('id is required');
        const url = buildUrl(basePath, `/api/v1/cases/${encodeURIComponent(id)}`);
        const res = await fetcher(url.toString(), { method: 'GET' });
        await ensureOk(res, url.pathname);
        return res.json();
      },
      getBySlug: async (slug: string, opts?: { acceptQKey?: boolean }) => {
        if (!slug) throw new SDKError('slug is required');
        const url = buildUrl(basePath, `/api/v1/cases/slug/${encodeURIComponent(slug)}`);
        const headers: Record<string, string> = {};
        if (opts?.acceptQKey) headers['Accept'] = 'application/qkey';
        const res = await fetcher(url.toString(), { method: 'GET', headers });
        await ensureOk(res, url.pathname);
        const ct = res.headers.get('content-type') || '';
        if (ct.includes('application/json')) return res.json();
        return res.text();
      },
      versionsById: async (id: string) => {
        if (!id) throw new SDKError('id is required');
        const url = buildUrl(basePath, `/api/v1/cases/${encodeURIComponent(id)}/versions`);
        const res = await fetcher(url.toString(), { method: 'GET' });
        await ensureOk(res, url.pathname);
        return res.json();
      },
      versionsBySlug: async (slug: string) => {
        if (!slug) throw new SDKError('slug is required');
        const url = buildUrl(basePath, `/api/v1/cases/slug/${encodeURIComponent(slug)}/versions`);
        const res = await fetcher(url.toString(), { method: 'GET' });
        await ensureOk(res, url.pathname);
        return res.json();
      },
      diffVersions: async ({ id, slug, fromVersion, toVersion }) => {
        if (!id && !slug) throw new SDKError('Provide id or slug');
        if (!Number.isFinite(fromVersion) || !Number.isFinite(toVersion)) {
          throw new SDKError('fromVersion and toVersion are required numbers');
        }
        const params = { from: fromVersion, to: toVersion };
        const url = id
          ? buildUrl(basePath, `/api/v1/cases/${encodeURIComponent(id)}/versions/diff`, params)
          : buildUrl(basePath, `/api/v1/cases/slug/${encodeURIComponent(slug as string)}/versions/diff`, params);
        const res = await fetcher(url.toString(), { method: 'GET' });
        await ensureOk(res, url.pathname);
        return res.json();
      },
      iterateSearch: (params = {}) => {
        const baseParams = { ...params };
        const client = this;
        return (async function* iterate() {
          let page = baseParams.page ?? 1;
          const limit = baseParams.limit ?? 25;
          // eslint-disable-next-line no-constant-condition
          while (true) {
            const result = await client.cases.search({ ...baseParams, page, limit });
            const entries = Array.isArray(result?.data)
              ? result.data
              : Array.isArray(result?.items)
                ? result.items
                : [];
            if (!entries.length) break;
            for (const entry of entries) yield entry;
            if (entries.length < limit) break;
            page += 1;
          }
        })();
      },
      submitSuggestion: async ({ id, suggestion, fields, contact }) => {
        if (!id) throw new SDKError('id is required');
        if (!suggestion || suggestion.trim().length < 10) throw new SDKError('suggestion must be at least 10 characters');
        const url = buildUrl(basePath, `/api/v1/cases/${encodeURIComponent(id)}/suggest`);
        const res = await fetcher(url.toString(), {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ suggestion, fields, contact })
        });
        await ensureOk(res, url.pathname);
        return res.json();
      },
      verify: async ({ id, slug, detail, windowDays } = {}) => {
        if (!id && !slug) throw new SDKError('Provide id or slug');
        const params = { detail, window_days: windowDays };
        const url = id
          ? buildUrl(basePath, `/api/v1/cases/${encodeURIComponent(id)}/verify`, params)
          : buildUrl(basePath, `/api/v1/cases/slug/${encodeURIComponent(slug as string)}/verify`, params);
        const res = await fetcher(url.toString(), { method: 'GET' });
        await ensureOk(res, url.pathname);
        return res.json();
      }
    };
  }

  // Capability descriptor (GET /api/)
  async getCapabilities(): Promise<any> {
    // The generated client currently exposes apiGet() as a VoidApiResponse,
    // so we fetch and parse JSON directly to return a useful payload.
    const url = buildUrl(basePath, '/api/');
    const res = await fetcher(url.toString(), { method: 'GET' });
    const ct = res.headers.get('content-type') || '';
    await ensureOk(res, '/api/');
    if (ct.includes('application/json')) return res.json();
    return res.text();
  }

  // Usage (GET /api/usage/me) – requires cookie auth per spec; CLI uses API key flows otherwise
  async getUsageSelf(): Promise<any> {
    // Fetch directly to remain compatible with mock and server responses
    const url = buildUrl(basePath, '/api/usage/me');
    const res = await fetcher(url.toString(), { method: 'GET' });
    await ensureOk(res, '/api/usage/me');
    return res.json();
  }

  // Collections
  async listCollections(p?: { ecosystem?: string; domain?: string; tier?: 'free' | 'professional' | 'enterprise'; page?: number; limit?: number }) {
    // Use direct fetch to support both mock shape ({items: []}) and server shape.
    const url = buildUrl(basePath, '/api/v1/collections', {
      ecosystem: p?.ecosystem,
      domain: p?.domain,
      tier: p?.tier,
      page: p?.page,
      limit: p?.limit
    });
    const res = await fetcher(url.toString(), { method: 'GET' });
    await ensureOk(res, url.pathname);
    return res.json();
  }
  async getCollection(id: string) {
    if (!id) throw new SDKError('id is required');
    const url = buildUrl(basePath, `/api/v1/collections/${encodeURIComponent(id)}`);
    const res = await fetcher(url.toString(), { method: 'GET' });
    await ensureOk(res, url.pathname);
    return res.json();
  }
  async downloadCollection(id: string, p: { format?: 'zip' | 'tar.gz'; download_intent: 'application' | 'research' }): Promise<DownloadResult> {
    if (!id) throw new SDKError('id is required');
    if (!p?.download_intent) throw new SDKError('download_intent is required');
    const url = buildUrl(basePath, `/api/v1/collections/${encodeURIComponent(id)}/download`, {
      format: p?.format,
      download_intent: p.download_intent
    });
    return downloadArchive(fetcher, url);
  }

  // Bundles
  async downloadCaseBundle(case_id: string, p: { format?: 'zip' | 'tar.gz'; download_intent: 'application' | 'research' }): Promise<DownloadResult> {
    if (!case_id) throw new SDKError('case_id is required');
    if (!p?.download_intent) throw new SDKError('download_intent is required');
    const url = buildUrl(basePath, `/api/v1/cases/${encodeURIComponent(case_id)}/bundle`, {
      format: p?.format,
      download_intent: p.download_intent
    });
    return downloadArchive(fetcher, url);
  }
  async getBundleManifest(id: string) {
    if (!id) throw new SDKError('id is required');
    const url = buildUrl(basePath, `/api/v1/bundles/${encodeURIComponent(id)}/manifest`);
    const res = await fetcher(url.toString(), { method: 'GET' });
    await ensureOk(res, url.pathname);
    return res.json();
  }
  async getBundleFiles(id: string) {
    if (!id) throw new SDKError('id is required');
    const url = buildUrl(basePath, `/api/v1/bundles/${encodeURIComponent(id)}/files`);
    const res = await fetcher(url.toString(), { method: 'GET' });
    await ensureOk(res, url.pathname);
    return res.json();
  }

  // Agents (Proof-of-Work, invites, delegated tokens)
  async agentChallenge(p?: { difficulty?: number; invite?: boolean }) {
    return this.agents.apiV1RegistrationChallengeGet(p);
  }
  async agentRegister(body: any) {
    return this.agents.apiV1RegistrationAgentPost(body);
  }
  async agentDelegatedToken(body?: any) {
    return this.agents.apiV1RegistrationDelegatedTokenPost(body);
  }
  async agentInviteConfirm(body: any) {
    return this.agents.apiV1RegistrationInviteConfirmPost(body);
  }
  async listPendingAgents(p?: { include_expired?: boolean; email?: string; limit?: number; offset?: number }) {
    return this.agents.apiV1AgentsPendingGet(p);
  }
  async agentInviteResend(id: string) {
    return this.agents.apiV1AgentsIdInviteResendPost({ id });
  }
  async agentInviteCancel(id: string, body?: any) {
    return this.agents.apiV1AgentsIdInviteCancelPost({ id }, body);
  }
  async agentRevoke(id: string, body?: any) {
    return this.agents.apiV1AgentsIdRevokePost({ id }, body);
  }
}

export { SDKError };
