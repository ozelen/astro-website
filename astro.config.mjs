// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: '@astrojs/cloudflare/image-service',
    },
    domains: ['zelenyuk.com'],
    remotePatterns: [{ protocol: "https" }],
  },
});
