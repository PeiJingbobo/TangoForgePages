// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://tangoforge.pei.cool';
const base = process.env.SITE_BASE ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [react(), mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
