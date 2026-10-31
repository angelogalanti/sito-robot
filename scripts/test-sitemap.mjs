import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const dir = mkdtempSync(join(tmpdir(), 'robot-sitemap-test-'));
const script = resolve('scripts/sitemap.mjs');
const dist = join(dir, 'dist');
const page = (name, html) => {
  const path = join(dist, name);
  mkdirSync(path, { recursive: true });
  writeFileSync(join(path, 'index.html'), html);
};
const run = site => spawnSync(process.execPath, [script], { cwd: dir, env: { ...process.env, SITE: site }, encoding: 'utf8' });
try {
  page('', '<meta http-equiv="refresh" content="0;url=/it/">');
  page('it', '<meta name="robots" content="index,follow">');
  page('en', "<meta content='nofollow, noindex' name='ROBOTS'>");
  page('draft', '<meta name=robots content=none>');
  let result = run('https://preview.invalid/');
  assert.equal(result.status, 0, result.stderr);
  let xml = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
  assert.match(xml, /<loc>https:\/\/preview\.invalid\/it\/<\/loc>/);
  assert.equal((xml.match(/<loc>/g) ?? []).length, 1, xml);
  page('it', '<meta name="robots" content="noindex">');
  result = run('https://preview.invalid/');
  assert.equal(result.status, 0, result.stderr);
  assert(!existsSync(join(dist, 'sitemap.xml')), 'No sitemap for noindex/redirect-only output');
  writeFileSync(join(dist, 'sitemap.xml'), 'stale');
  result = run('');
  assert.equal(result.status, 0, result.stderr);
  assert(!existsSync(join(dist, 'sitemap.xml')), 'Preview must remove stale sitemap');
  result = run('javascript:alert(1)');
  assert.notEqual(result.status, 0, 'Invalid SITE must fail');
  console.log('PASS: sitemap includes only indexable pages, removes stale output and validates SITE');
} finally {
  rmSync(dir, { recursive: true, force: true });
}
