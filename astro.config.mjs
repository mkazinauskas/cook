// @ts-check
import { defineConfig } from 'astro/config';

// Deployed as a GitHub Pages project site at https://mkazinauskas.github.io/cook/
// site/base are required so generated links and asset URLs resolve correctly.
export default defineConfig({
  site: 'https://mkazinauskas.github.io',
  base: '/cook/',
});
