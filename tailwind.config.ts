import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5B2EFF",
          50: "#F0EBFF",
          100: "#DDD2FF",
          200: "#B9A3FF",
          300: "#9675FF",
          400: "#7851FF",
          500: "#5B2EFF",
          600: "#4A1FE0",
          700: "#3A16B8",
          800: "#2B0E90",
          900: "#1C0768",
        },
        navy: {
          DEFAULT: "#1E1B4B",
          50: "#EEEDF5",
          100: "#D5D3E8",
          200: "#A9A5D1",
          300: "#7E78BA",
          400: "#534CA3",
          500: "#3B3580",
          600: "#2D2966",
          700: "#1E1B4B",
          800: "#141237",
          900: "#0A0923",
        },
        surface: "#FFFFFF",
        background: "#F4F2EE",
        border: "#E5E7EB",
        "text-primary": "#1E1B39",
        "text-secondary": "#6B7280",
        "text-muted": "#9CA3AF",
        success: {
          DEFAULT: "#10B981",
          light: "#D1FAE5",
        },
        warning: {
          DEFAULT: "#F59E0B",
          light: "#FEF3C7",
        },
        danger: {
          DEFAULT: "#EF4444",
          light: "#FEE2E2",
        },
        coral: "#FF6B6B",
        teal: "#2DD4BF",
        chart: {
          blue: "#5B2EFF",
          green: "#10B981",
          red: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.8125rem", { lineHeight: "1.25rem" }],
        base: ["0.875rem", { lineHeight: "1.375rem" }],
        md: ["0.9375rem", { lineHeight: "1.5rem" }],
        lg: ["1rem", { lineHeight: "1.5rem" }],
        xl: ["1.125rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "3xl": ["1.5rem", { lineHeight: "2rem" }],
        "4xl": ["2rem", { lineHeight: "2.5rem" }],
      },
      spacing: {
        4.5: "1.125rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        68: "17rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.03)",
        "card-hover": "0 4px 12px 0 rgba(0, 0, 0, 0.08)",
        navbar: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
      },
      maxWidth: {
        sidebar: "240px",
        "right-panel": "280px",
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
