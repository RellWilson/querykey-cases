/**
==========================================================================
@fileOverview
Builds the MCP adapter bundle via `npm pack` and copies it to the public
SDK downloads directory with a stable filename for offline installs.
@author
Platform Integrations
@maintainer
Platform Integrations
@usage
node scripts/build-bundle.mjs
@dependencies
Node.js >= 18, npm
@notes
Uses process stdout/stderr for status; avoids console.log.
@timestamp
2026-02-03 12:00:00 UTC
==========================================================================*/
import { promisify } from 'node:util';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdir, copyFile, rm, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const execFileAsync = promisify(execFile);

async function sha256(filePath) {
  const hash = createHash('sha256');
  const data = await import('node:fs/promises').then(({ readFile }) => readFile(filePath));
  hash.update(data);
  return hash.digest('hex');
}

function writeJson(stream, payload) {
  stream.write(`${JSON.stringify(payload)}\n`);
}

async function main() {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const pkgDir = resolve(__dirname, '..');
  const outputDir = resolve(__dirname, '..', '..', '..', 'QueryKey-production', 'public', 'downloads', 'sdk');

  await mkdir(outputDir, { recursive: true });

  // Run npm pack to generate the tarball; capture filename from JSON output.
  const { stdout } = await execFileAsync('npm', ['pack', '--json'], { cwd: pkgDir, env: process.env });
  const packInfo = JSON.parse(stdout.trim());
  const filename = Array.isArray(packInfo) && packInfo[0]?.filename ? packInfo[0].filename : null;
  if (!filename) {
    throw new Error('npm pack did not return a filename');
  }
  const sourcePath = resolve(pkgDir, filename);
  const targetPath = resolve(outputDir, 'querykey-mcp-adapter.tgz');

  // Overwrite any existing bundle to keep the public artifact stable.
  await copyFile(sourcePath, targetPath);
  await rm(sourcePath, { force: true });

  const stats = await stat(targetPath);
  const checksum = await sha256(targetPath);
  writeJson(process.stdout, { ok: true, bundle: targetPath, size: stats.size, sha256: checksum });
}

main().catch((err) => {
  writeJson(process.stderr, { ok: false, error: err?.message || String(err) });
  process.exit(1);
});
