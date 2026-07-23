// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://diamond-dev.co.uk',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/plans'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
