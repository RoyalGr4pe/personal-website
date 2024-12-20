import type { Config } from "tailwindcss";

export default {
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
		darkBlue: "#090a25",
		deepBlue: "#000011",
		neonGreen: "#00ffa5"
      },
      fontFamily: {
        sans: ['sans-serif', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
} satisfies Config;
