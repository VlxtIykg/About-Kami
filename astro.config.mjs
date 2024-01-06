import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://kami-x.tk",
  integrations: [preact(), sitemap()],
  output: "hybrid",
  adapter: cloudflare({
    mode: "directory",
    imageService: "cloudflare",
  }),
  server: {
    port: 0,
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});
