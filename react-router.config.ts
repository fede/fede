import type { Config } from "@react-router/dev/config";
import path from "path";
import fs from "fs";

const notesDir = path.join(process.cwd(), "content/notes");
const files = fs
  .readdirSync(notesDir)
  .map((file) => file.replace(/\.mdx$/, ""));

export default {
  ssr: true,
  async prerender() {
    return ["/", "/cv", ...files.map((slug) => `/note/${slug}`)];
  },
} satisfies Config;
