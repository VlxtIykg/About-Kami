import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://kami-x.tk",
  integrations: [preact(), sitemap()],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});