import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    preflight: true,
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./src/pages/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx"],
    exclude: [],
    theme: {
      extend: {}
    },
    outdir: "styled-system",
    globalCss: {
      html: {
        h: 'full',
      },
      body: {
        bg: { base: 'zinc.900' },
        color: { base: 'zinc.200' },
      },
    },
})