import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grey: "#F3F3F3",
        dark: "#191A23",
        pulserit_color: "#c8fd7c",
      },
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
        "aptos": ['Aptos', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
