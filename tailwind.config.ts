import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        primary: "#1D44B8",
        background: {
          error: "#D92D20",
        },
        text: {
          primary: "#09090B",
          secondary: "#807F94",
        },
      },
    },
  },
  plugins: [],
} as Config;
