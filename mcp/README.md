# QueryKey MCP Server

A Model Context Protocol server that exposes QueryKey Cases search, fetch, collections, suggestions, and verification tools to MCP-compatible clients.

## Features

- cases.search — query published cases with paging
- cases.get — fetch case by id or slug (with versions)
- collections.list — list/search collections
- cases.suggest — submit improvement feedback (requires auth)
- cases.verify — provenance/integrity verification via /verify endpoint (if available) or a safe fallback heuristic

## Configuration

Environment variables:

- QKEY_API_BASE: Base URL for QueryKey API (default: <http://127.0.0.1:8080>)
- QKEY_API_KEY: API key for authenticated routes (optional for public read)
- QKEY_MCP_PLAN: Optional plan hint (`free`, `professional`, `enterprise`). Defaults to `enterprise` and controls which tools auto-register.
- QKEY_MCP_ALLOWED_TOOLS: Optional comma-separated override (for example, `cases.search,cases.get`). When set, only the listed tools are registered regardless of plan.

## Run

From repo root:

```bash
npm run mcp:run
```

Or within this folder:

```bash
cd mcp
npm install
npm start
```

## MCP Client Setup

Point your MCP-compatible client to spawn `node mcp/server.mjs` with the same environment variables. The server uses stdio transport. If the official MCP SDK is not available, the server falls back to a compatible JSON-RPC loop over stdio.

## Notes

- Friendly, user-facing errors are returned by the underlying API. The server adds minimal context without exposing stack traces.
- Logging uses the platform structured logger when available; otherwise, it emits minimal JSON to stderr with PII avoided.
