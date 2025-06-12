import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

export default defineConfig({
  site: "https://kami.wtf",
  integrations: [preact(), sitemap(), sentry(), spotlightjs()],
  output: "server",
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