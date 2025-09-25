// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./src/consts";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    expressiveCode({
      themes: ['catppuccin-macchiato', 'catppuccin-latte'],
      
      defaultProps: {
        wrap: true,
        overridesByLang: { 'bash,ps,sh': { frame: 'none' }, },
      },
    }), 
    mdx(), sitemap(), tailwind()
  ],
});