/**
 * ==========================================================================
 * mcp/server.mjs
 *
 * @fileOverview
 * Model Context Protocol (MCP) server exposing QueryKey Cases tools for LLMs
 * and MCP-compatible clients. Provides search, fetch, collections, and trust
 * verification utilities over stdio transport with structured logging.
 *
 * @author
 * Farrel Wilson – Contact@QueryKey.com
 *
 * @maintainer
 * Core Platform Team (MCP Integration)
 *
 * @usage
 * node mcp/server.mjs
 *
 * @dependencies
 * @modelcontextprotocol/sdk (stdio transport), fetch (Node >=18)
 *
 * @notes
 * Reads QKEY_API_BASE and QKEY_API_KEY from environment.
 * Avoids console logging; uses platform structured logger when available.
 *
 * @license
 * QueryKey™ is a trademark of Farrel Wilson. All rights reserved.
 * @timestamp 2025-11-07T00:00:00Z
 * ==========================================================================
 */
let ServerCtor = null;
let StdioTransportCtor = null;
try {
  const sdkServer = await import('@modelcontextprotocol/sdk/server/index.js');
  const sdkStdio = await import('@modelcontextprotocol/sdk/server/stdio.js');
  ServerCtor = sdkServer.Server || sdkServer.default || null;
  StdioTransportCtor = sdkStdio.StdioServerTransport || sdkStdio.default || null;
} catch (_) {
  // SDK unavailable; will use fallback JSON-RPC loop
}
// Removed unused path/url imports to satisfy lint no-unused-vars rule
import {
  SearchCasesInput,
  GetCaseInput,
  ListCollectionsInput,
  SuggestCaseInput,
  toolSearchCases,
  toolGetCase,
  toolListCollections,
  toolSuggestCase,
  toolVerifyCase,
  toolListTrustEvents,
  toolGetCapabilities,
  TrustEventsInput,
  CapabilitiesInput,
  VerifyCaseInput,
  QKEY_API_BASE
} from './tools.mjs';

// Prefer platform structured logger; fallback to minimal shim without PII.
let emitStructuredLog;
try {
  // Import from platform util; path is relative to repository root
  const moduleUrl = new URL('../src/util/structuredLog.js', import.meta.url);
  ({ emitStructuredLog } = await import(moduleUrl));
} catch (_) {
  emitStructuredLog = (level, event, payload) => {
    const entry = { ts: new Date().toISOString(), level, event, payload };
  // Using console.error intentionally for fallback logging when structured logger unavailable.
  console.error('[mcp-log]', JSON.stringify(entry));
  };
}

// Tool schemas/handlers are imported from tools.mjs

// Server bootstrap
const PLAN_TOOL_MATRIX = {
  free: ['cases.search', 'cases.get', 'collections.list'],
  professional: ['cases.search', 'cases.get', 'collections.list', 'cases.verify'],
  enterprise: ['cases.search', 'cases.get', 'collections.list', 'cases.verify', 'cases.suggest', 'trust.events.list', 'descriptor.capabilities']
};
const requestedPlan = (process.env.QKEY_MCP_PLAN || 'enterprise').toLowerCase();
const planTools = PLAN_TOOL_MATRIX[requestedPlan] || PLAN_TOOL_MATRIX.enterprise;
const allowedEnv = process.env.QKEY_MCP_ALLOWED_TOOLS;
const allowedTools = allowedEnv
  ? new Set(allowedEnv.split(',').map((t) => t.trim()).filter(Boolean))
  : new Set(planTools);

if (ServerCtor && StdioTransportCtor) {
  // Load adapter version metadata (best effort). Avoid import assertions for parser compatibility.
  let adapterVersion = '0.1.0';
  try {
    const fsProm = await import('node:fs/promises');
    const raw = await fsProm.readFile(new URL('./adapter-version.json', import.meta.url), 'utf8');
    const meta = JSON.parse(raw);
    if (typeof meta.version === 'string') adapterVersion = meta.version;
  } catch (_) {}
  const server = new ServerCtor({ name: 'querykey-mcp-server', version: adapterVersion });
  const registerTool = (name, definition) => {
    if (!allowedTools.has(name)) {
      emitStructuredLog('info', 'mcp_tool_skipped', { tool: name, reason: 'not_allowed', plan: requestedPlan });
      return;
    }
    server.tool(name, definition);
  };
  registerTool('cases.search', { description: 'Search published cases', inputSchema: SearchCasesInput, handler: toolSearchCases });
  registerTool('cases.get', { description: 'Fetch a case by id or slug (includes versions)', inputSchema: GetCaseInput, handler: toolGetCase });
  registerTool('collections.list', { description: 'List or search collections', inputSchema: ListCollectionsInput, handler: toolListCollections });
  registerTool('cases.suggest', { description: 'Submit a suggestion to improve a case', inputSchema: SuggestCaseInput, handler: toolSuggestCase });
  registerTool('cases.verify', { description: 'Verify provenance and integrity of a case (id or slug). Uses /verify endpoint when available, with fallback heuristic.', inputSchema: VerifyCaseInput, handler: toolVerifyCase });
  registerTool('trust.events.list', { description: 'List trust ledger events for the authenticated principal', inputSchema: TrustEventsInput, handler: toolListTrustEvents });
  registerTool('descriptor.capabilities', { description: 'Fetch plan/capability descriptor for adaptive prompting', inputSchema: CapabilitiesInput, handler: toolGetCapabilities });
  const transport = new StdioTransportCtor();
  await server.connect(transport);
  emitStructuredLog('info', 'mcp_server_started', { api_base: QKEY_API_BASE, adapterVersion, tools: Array.from(allowedTools), mode: 'sdk', plan: requestedPlan });
} else {
  // Fallback minimal JSON-RPC loop over stdio supporting the same tool names.
  const TOOL_DEFINITIONS = {
    'cases.search': toolSearchCases,
    'cases.get': toolGetCase,
    'collections.list': toolListCollections,
    'cases.suggest': toolSuggestCase,
    'cases.verify': toolVerifyCase,
    'trust.events.list': toolListTrustEvents,
    'descriptor.capabilities': toolGetCapabilities
  };
  const TOOLS = Object.fromEntries(
    Object.entries(TOOL_DEFINITIONS).filter(([name]) => {
      const allowed = allowedTools.has(name);
      if (!allowed) {
        emitStructuredLog('info', 'mcp_tool_skipped', { tool: name, reason: 'not_allowed', plan: requestedPlan, mode: 'fallback-jsonrpc' });
      }
      return allowed;
    })
  );
  // Attempt to load version in fallback as well
  let adapterVersionFb = '0.1.0';
  try {
    const fsProm = await import('node:fs/promises');
    const filePath = new URL('./adapter-version.json', import.meta.url);
    const raw = await fsProm.readFile(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    if (typeof parsed.version === 'string') adapterVersionFb = parsed.version;
  } catch (_) {
    // ignore
  }
  emitStructuredLog('info', 'mcp_server_started', { api_base: QKEY_API_BASE, adapterVersion: adapterVersionFb, tools: Object.keys(TOOLS), mode: 'fallback-jsonrpc', plan: requestedPlan });
  let buf = '';
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', async (chunk) => {
    buf += chunk.toString();
    let idx;
    while ((idx = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, idx).trim();
      buf = buf.slice(idx + 1);
      if (!line) continue;
      try {
        const msg = JSON.parse(line);
        const id = msg.id;
        const method = msg.method;
        const params = msg.params || {};
        if (!TOOLS[method]) {
          const error = { jsonrpc: '2.0', id, error: { code: -32601, message: `Method not found: ${method}` } };
          process.stdout.write(JSON.stringify(error) + '\n');
          continue;
        }
        try {
          const result = await TOOLS[method](params);
          process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id, result }) + '\n');
        } catch (err) {
          process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id, error: { code: -32000, message: err?.message || 'tool_error' } }) + '\n');
        }
      } catch (_) {
        // ignore non-JSON input
      }
    }
  });
}
