import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// Check real build output: every locale, equivalent page and local link.
const root = resolve('dist');
const slugs = ['', 'dogs', 'humanoids', 'go2', 'models', 'buy', 'edu', 'used', 'method'];
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
    if (!slug) {
      assert(!html.includes('<table'), 'Comparison still in homepage');
      assert.equal((html.match(/<figcaption/g) || []).length, 2, 'Photo credits missing');
      assert(html.includes('RuinDig/Yuki Uchida') && html.includes('Sayanesy'), 'Photo authors missing');
      assert(html.includes('https://creativecommons.org/licenses/by/4.0/') && html.includes('https://creativecommons.org/publicdomain/zero/1.0/'), 'Photo licences missing');
    }
    if (slug === 'go2') assert(html.includes('<table'), 'Go2 table missing');
    pages.set(url, html);
  }
}
for (const file of ['go2-exhibition.webp', 'g1-exhibition.webp']) {
  const image = readFileSync(resolve(root, 'images', file));
  assert.equal(image.toString('ascii', 0, 4), 'RIFF', `Invalid photo: ${file}`);
  assert.equal(image.toString('ascii', 8, 12), 'WEBP', `Invalid WebP: ${file}`);
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
const sitemap = resolve(root, 'sitemap.xml');
if (process.env.SITE && !existsSync(sitemap)) throw new Error('SITE set but sitemap.xml missing');
if (existsSync(sitemap)) {
  const xml = readFileSync(sitemap, 'utf8');
  for (const [url] of pages) assert(xml.includes(`<loc>${process.env.SITE}${url}</loc>`), `Sitemap missing: ${url}`);
}
console.log(`PASS: ${pages.size} Astro pages; locale pairs, links, headings, anchors; no client JS; preview noindex`);
