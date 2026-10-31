import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

const focusableTables = {
  name: 'focusable-tables',
  element: { filter: ['table'], visit: node => ({ ...node, properties: { ...node.properties, tabIndex: 0 } }) },
};

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  markdown: { processor: satteri({ hastPlugins: [focusableTables] }) },
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: { prefixDefaultLocale: true },
  },
});
