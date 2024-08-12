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
        "roboto-mono": ['"Roboto Mono"', "monospace"],
      },
      boxShadow: {
        neon: "0 0 90px 20px rgba(14, 227, 181, 0.2)",
      },
      keyframes: {
        "rubber-band-keyframes": {
          "0%": {
            transform: "scaleX(1)",
          },
          "40%": {
            transform: "scaleX(1.5) scaleY(0.6)",
          },
          "55%": {
            transform: "scaleX(0.85) scaleY(1)",
          },
          "65%": {
            transform: "scaleX(1.2) scaleY(0.85)",
          },
          "75%": {
            transform: "scaleX(0.9)  scaleY(1)",
          },
          "90%": {
            transform: "scaleX(1.06) scaleY(0.95)",
          },
          "100%": {
            transform: "scaleX(1) scaleY(1)",
          },
        },
      },
      animation: {
        "rubber-band": "rubber-band-keyframes 700ms alternate",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("tailwindcss-animated")],
} satisfies Config;
