import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// Do not set `site` to an empty string — leave unset in dev.
// Set to your production URL when deploying, e.g. site: 'https://monportfolio.fr'
export default defineConfig({
  output: "server",
  integrations: [tailwind()],

  adapter: node({
    mode: "standalone",
  }),
});