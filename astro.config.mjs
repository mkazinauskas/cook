// @ts-check
import { defineConfig } from 'astro/config';

// site/base are required so generated links and asset URLs resolve correctly.
export default defineConfig({
  site: 'https://mkazinauskas.github.io',
  base: '/cook/',
});
