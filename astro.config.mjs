// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Deployed to GitHub Pages as a project site, so everything lives under /evelyneverything/.
  // Setting these here keeps `astro dev` consistent with the production build.
  site: 'https://eggaskin.github.io',
  base: '/evelyneverything',
});
