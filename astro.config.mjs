import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import node from "@astrojs/node";

export default defineConfig({
  site: "http://localhost:4321",
  integrations: [preact()],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});
