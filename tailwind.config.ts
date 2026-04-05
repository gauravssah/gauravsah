import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        surface: "rgba(10, 16, 35, 0.72)",
        line: "rgba(118, 132, 255, 0.18)",
        neon: "#6d7cff",
        cyan: "#67e8f9",
        accent: "#8b5cf6",
        text: "#e5ecff",
        muted: "#91a4cf",
      },
      boxShadow: {
        glow: "0 0 40px rgba(103, 232, 249, 0.18)",
        glowStrong: "0 0 80px rgba(109, 124, 255, 0.25)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top, rgba(109,124,255,0.22), transparent 40%), radial-gradient(circle at bottom right, rgba(103,232,249,0.12), transparent 35%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
