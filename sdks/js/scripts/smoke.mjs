#!/usr/bin/env node
/**
==========================================================================
@fileOverview
Simple smoke test for @querykey/cases-sdk ESM build. Imports the built
module, constructs a client without network calls, and asserts method presence.
@author
QueryKey SDK Team – Contact@QueryKey.com
@maintainer
Developer Platform (JS SDK)
@usage
node scripts/smoke.mjs
@dependencies
Node >= 18
@notes
No network calls are performed; this only validates import/shape.
@timestamp
2025-11-04T00:00:00Z
==========================================================================*/
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the built ESM artifact
const distPath = path.resolve(__dirname, '..', 'dist', 'index.js');
const mod = await import(distPath);

const client = new mod.QueryKeyClient({ baseUrl: 'http://localhost:8080' });

// Basic shape assertions (no fetch is executed here)
if (!client || typeof client !== 'object') {
  console.error('Client not constructed');
  process.exit(1);
}
if (!client.cases || typeof client.cases.search !== 'function') {
  console.error('Missing cases.search method');
  process.exit(1);
}
if (typeof client.getCapabilities !== 'function') {
  console.error('Missing getCapabilities method');
  process.exit(1);
}

console.log('SMOKE_OK');
