import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://kami.wtf",
  integrations: [preact(), sitemap()],
  output: "hybrid",
  adapter: cloudflare({
    mode: "advanced",
    imageService: "cloudflare",
  }),
  server: {
    port: 4321,
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});
