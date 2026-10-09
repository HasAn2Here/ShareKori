import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: {
      forest: { 50: "#f0f6f1", 100: "#dbeadf", 200: "#b9d4c0", 500: "#3f7d52", 600: "#2d6a45", 700: "#235539", 800: "#1b4230", 900: "#13301f" },
      cream: { 50: "#fffcf5", 100: "#f9f3e4", 200: "#efe5cb" },
      marigold: { 100: "#fbecc4", 600: "#9a6408", 700: "#7d5006" },
    },
    fontFamily: {
      sans: ["var(--font-body)", "system-ui", "sans-serif"],
      display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
    },
  } },
  plugins: [],
} satisfies Config;
