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
        "rubber-scale-keyframes": {
          "0%": {
            opacity: "1",
            color: "#FFFFFF",
            transform: "scaleX(0) scaleY(0)",
          },
          "40%": {
            opacity: "1",
            color: "#D6FCF1",
            transform: "scaleX(1.5) scaleY(1.5)",
          },
          "55%": {
            opacity: "1",
            color: "#AEF7E5",
            transform: "scaleX(0.8) scaleY(0.8)",
          },
          "65%": {
            opacity: "1",
            color: "#86F2D9",
            transform: "scaleX(1.2) scaleY(1.2)",
          },
          "75%": {
            opacity: "1",
            color: "#5EEDCD",
            transform: "scaleX(0.9)  scaleY(0.9)",
          },
          "90%": {
            opacity: "1",
            color: "#36E8C1",
            transform: "scaleX(1.1) scaleY(1.1)",
          },
          "100%": {
            opacity: "1",
            color: "rgb(255, 49, 49)",
            transform: "scaleX(1) scaleY(1)",
          },
        },
      },
      animation: {
        "rubber-band": "rubber-band-keyframes 700ms alternate",
        "rubber-scale": "rubber-scale-keyframes 500ms forwards",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
} satisfies Config;
