import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "http://localhost:4321",
  integrations: [preact(), sitemap()],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});
