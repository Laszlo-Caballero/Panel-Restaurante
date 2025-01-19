import type { Config } from "tailwindcss";
import animate from "tailwindcss-animated";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      transitionProperty: {
        height: "max-height",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
