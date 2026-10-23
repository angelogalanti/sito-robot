import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// Check real build output: every locale, equivalent page and local link.
const root = resolve('dist');
const slugs = ['', 'dogs', 'humanoids', 'go2', 'models', 'buy', 'method'];
const pages = new Map();
for (const lang of ['it', 'en']) {
  for (const slug of slugs) {
    const url = `/${lang}/${slug ? `${slug}/` : ''}`;
    const path = resolve(root, `.${url}`, 'index.html');
    assert(existsSync(path), `Missing built page: ${url}`);
    const html = readFileSync(path, 'utf8');
    assert.match(html, /<title>[^<]* \| Robot Unpacked<\/title>/, `Missing shared brand: ${url}`);
    assert.match(html, new RegExp(`<html[^>]*lang="${lang}"`));
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, url);
    assert(!/<script(?:\s|>)/.test(html), `Unexpected client JavaScript: ${url}`);
    assert.match(html, /noindex/, `Preview must remain non-indexable: ${url}`);
    const other = lang === 'it' ? 'en' : 'it';
    assert(html.includes(`href="/${other}/${slug ? `${slug}/` : ''}"`), `Missing translation: ${url}`);
    if (!slug) assert(!html.includes('<table'), 'Comparison still in homepage');
    if (slug === 'go2') assert(html.includes('<table'), 'Go2 table missing');
    pages.set(url, html);
  }
}
for (const file of ['dog.svg', 'human.svg']) {
  const svg = readFileSync(resolve(root, 'illustrations', file), 'utf8');
  assert(svg.includes('xmlns="http://www.w3.org/2000/svg"'), `Invalid external SVG: ${file}`);
}
for (const [url, html] of pages) {
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(ids.length, new Set(ids).size, `Duplicate ID: ${url}`);
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const target = new URL(href, `https://preview.invalid${url}`);
    if (target.origin !== 'https://preview.invalid') continue;
    assert(pages.has(target.pathname), `Broken page link: ${url} -> ${href}`);
    if (target.hash) assert(pages.get(target.pathname).includes(`id="${target.hash.slice(1)}"`), `Broken anchor: ${href}`);
  }
}
console.log(`PASS: ${pages.size} Astro pages; locale pairs, links, headings, anchors; no client JS; preview noindex`);
