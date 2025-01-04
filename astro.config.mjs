// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: process.env.CF_PAGES 
        ? '@astrojs/cloudflare/image-service' 
        : 'astro/assets/services/sharp'
    },
  },
});
