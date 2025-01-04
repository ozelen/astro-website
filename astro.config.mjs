// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
    imageService: true,
  }),
  image: {
    service: process.env.NODE_ENV === 'production' 
      ? { entrypoint: '@astrojs/cloudflare/image-service' }
      : { entrypoint: 'astro/assets/services/sharp' },
    domains: ['zelenyuk.com'],
    remotePatterns: [{ protocol: "https" }],
  },
});
