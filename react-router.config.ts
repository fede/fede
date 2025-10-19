import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  async prerender() {
    return ["/", "/cv", "/notes/:slug"];
  },
} satisfies Config;
