import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}", // Storybook stories
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary": "#000000",
        "background-light": "#FFFFFF",
        "background-dark": "#000000",
        "neutral-gray": "#F4F4F5",
        "dark-gray": "#18181B",
        "accent-violet": "#000000",
        "border-light": "#EEEEEE",
        "border-dark": "#27272A",
        "success": "#22C55E",
        "success-bg": "#DCFCE7",
        "success-text": "#15803D",
        // Restore Neutral Scale for component compatibility
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        display: ["var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
      }
    },
  },
  plugins: [],
};
export default config;
