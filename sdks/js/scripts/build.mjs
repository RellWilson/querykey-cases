#!/usr/bin/env node
/**
==========================================================================
@fileOverview
Build script for @querykey/cases-sdk. Compiles generated TS clients and
thin ergonomic wrappers into ESM output in dist/ for consumption by the
CLI and external apps.
@author
QueryKey SDK Team – Contact@QueryKey.com
@maintainer
Developer Platform (JS SDK)
@usage
node scripts/build.mjs
@dependencies
esbuild, typescript
@notes
ESM-only output. No console logs in library code.
@timestamp
2025-11-04T00:00:00Z
==========================================================================*/
import { build } from 'esbuild';
import { rmSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const outdir = path.join(root, 'dist');

rmSync(outdir, { recursive: true, force: true });
mkdirSync(outdir, { recursive: true });

/** Build SDK entry (wraps generated clients) */
await build({
  entryPoints: [path.join(root, 'src', 'index.ts')],
  bundle: true,
  format: 'esm',
  platform: 'node',
  target: ['node18'],
  outdir,
  sourcemap: true,
  logLevel: 'info',
  tsconfig: path.join(root, 'tsconfig.json'),
});
