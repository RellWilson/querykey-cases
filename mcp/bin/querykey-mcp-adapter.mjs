/**
==========================================================================
@fileOverview
CLI entrypoint for the QueryKey MCP adapter; launches the stdio server.
@author
Platform Integrations
@maintainer
Platform Integrations
@usage
querykey-mcp-adapter [env vars]
@dependencies
Node.js >= 18
@notes
Falls back to JSON-RPC loop if @modelcontextprotocol/sdk is unavailable.
@timestamp
2026-02-03 00:00:00 UTC
==========================================================================*/
#!/usr/bin/env node

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const serverPath = resolve(__dirname, '..', 'server.mjs');

// Start the adapter; server.mjs performs the bootstrapping side effects.
await import(serverPath);
