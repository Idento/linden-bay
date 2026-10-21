// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://idento.github.io',
  base: '/linden-bay',
  build: {
    inlineStylesheets: 'always',
  },
});
