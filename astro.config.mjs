// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: process.env.NODE_ENV === 'production' ? 'server' : 'static',
  adapter: process.env.NODE_ENV === 'production' ? cloudflare() : undefined,
});
