import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        urgent: "#DC2626",
        amber: {
          accent: "#F59E0B",
        },
        surface: {
          void: "#fafaf9",
          darkest: "#f5f5f4",
          dark: "#e7e5e4",
          slate: "#fafaf9",
          navy: "#f5f5f4",
          deep: "#e7e5e4",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        measure: "28rem",
      },
      boxShadow: {
        "cta-glow":
          "0 0 60px -15px rgba(220, 38, 38, 0.45), 0 4px 24px rgba(0,0,0,0.4)",
        "cta-glow-sm": "0 0 32px -8px rgba(220, 38, 38, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
