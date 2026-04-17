import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F5F0E8",
          deep: "#EDE6D9",
        },
        charcoal: {
          DEFAULT: "#2A2826",
          deep: "#1A1918",
        },
        gold: {
          DEFAULT: "#A8884D",
          light: "#C4A668",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      letterSpacing: {
        eyebrow: "0.3em",
        wide2: "0.18em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drawOn: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        scrollHint: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        drawOn: "drawOn 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        scrollHint: "scrollHint 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
