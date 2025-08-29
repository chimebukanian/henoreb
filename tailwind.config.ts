import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0b3b66",
        teal: { DEFAULT: "#0ea5a2", 500: "#0ea5a2", 600: "#0d8e8b" },
        tealblue: "#14b8a6",
        gold: "#eab308",
        henogrey: "#94a3b8",
      },
    },
  },
  plugins: [],
};
export default config;
