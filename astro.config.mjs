import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

export default defineConfig({
  site: "https://kami.wtf",
  integrations: [
    preact({ compat: true }),
    sitemap(),
    sentry({
      autoInstrumentation: {
        requestHandler: false,
      },
      sourceMapsUploadOptions: {
        enabled: false, // Disable automatic source map uploads
      },
    }),
    spotlightjs(),
  ],
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    port: 4321,
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  vite: {
    ssr: {
      noExternal: ["open-props"],
    },
  },
});
