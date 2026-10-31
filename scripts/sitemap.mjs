import { readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

// SITE is the approved public base URL; preview HTML remains non-indexable.
const root = resolve('dist');
const output = join(root, 'sitemap.xml');
rmSync(output, { force: true });
const siteInput = process.env.SITE?.trim();
if (!siteInput) {
  console.log('sitemap: SITE not set, skipped (preview build)');
  process.exit(0);
}
const baseUrl = new URL(siteInput);
if (!['http:', 'https:'].includes(baseUrl.protocol) || baseUrl.username || baseUrl.password || baseUrl.search || baseUrl.hash) {
  throw new Error('SITE must be an HTTP(S) URL without credentials, query or fragment');
}
const site = baseUrl.href.replace(/\/+$/, '');
const urls = [];
const walk = (dir, base) => {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, `${base}/${entry}`);
    else if (entry === 'index.html') {
      const html = readFileSync(full, 'utf8');
      const metas = html.match(/<meta\b[^>]*>/gi) ?? [];
      const excluded = metas.some(tag => {
        const attrs = Object.fromEntries([...tag.matchAll(/\b([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g)].map(([, key, double, single, bare]) => [key.toLowerCase(), (double ?? single ?? bare).toLowerCase()]));
        return (attrs.name === 'robots' && /(?:^|[\s,])(noindex|none)(?:$|[\s,])/.test(attrs.content ?? '')) || attrs['http-equiv'] === 'refresh';
      });
      if (!excluded) urls.push(`${site}${base}/`);
    }
  }
};
walk(root, '');
urls.sort();
if (!urls.length) {
  rmSync(output, { force: true });
  console.log('sitemap: no indexable pages, skipped');
  process.exit(0);
}
const escapeXml = value => value.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);
writeFileSync(output, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${escapeXml(u)}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`sitemap: ${urls.length} URLs for ${site}`);
