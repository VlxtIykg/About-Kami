import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare"
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [preact()],
  output: "hybrid",
  adapter: cloudflare()
});
