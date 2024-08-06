import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(170, 189, 230)",
        "primary-light": "rgb(170, 189, 230, 0.2)",
        "primary-dark": "rgb(136, 146, 176)",
        secondary: "rgb(10, 25, 47)",
        neon: "rgb(14, 227, 181)",
        "neon-light": "rgba(14, 227, 181, 0.2)",
        "red-neon": "rgb(255, 49, 49)",
      },
      fontFamily: {
        "ubuntu-condensed": ['"Ubuntu Condensed"', "sans-serif"],
        "roboto-mono": ['"Roboto Mono"', "monospace"],
        heebo: ["Heebo", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
} satisfies Config;
