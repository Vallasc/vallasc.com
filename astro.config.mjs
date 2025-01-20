// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://vallasc.com',
  integrations: [sitemap(), tailwind()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  output: "static"
});