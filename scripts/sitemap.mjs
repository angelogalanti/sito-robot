import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

// Build-time sitemap. Absolute URLs require the launch domain, so this runs
// only when SITE is set (e.g. SITE=https://example.com pnpm build).
// Without SITE it skips silently: no invented domain in preview output.
const site = process.env.SITE?.replace(/\/+$/, '');
if (!site) {
  console.log('sitemap: SITE not set, skipped (preview build)');
  process.exit(0);
}
const root = resolve('dist');
const urls = [];
const walk = (dir, base) => {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, `${base}/${entry}`);
    else if (entry === 'index.html') urls.push(`${site}${base}/`);
  }
};
walk(root, '');
urls.sort();
writeFileSync(
  join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`,
);
console.log(`sitemap: ${urls.length} URLs for ${site}`);
