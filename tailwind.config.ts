const defaultTheme = require("tailwindcss/defaultTheme")

const settingsScreens = require("./tailwind.settings.screens")
const settingsFontSizes = require("./tailwind.settings.fontSizes")

import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    extend: {
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        filling: "filling 5s linear forwards",
        dash: "dash 5s linear forwards, filling 5s linear forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        title: {
          "0%": {
            height: "0",
            opacity: "0",
          },
          "25%": {
            height: "0",
            opacity: "0%",
          },
          "80%": {
            height: "140",
            opacity: "100%",
          },

          "100%": {
            height: "140",
            opacity: "100%",
          },
        },
        dash: {
          to: {
            strokeDashoffset: "0",
          },
        },
        filling: {
          "0%": {
            fill: "#fff",
            fillOpacity: "0",
          },
          "90%": {
            fill: "#fff",
            fillOpacity: "0",
          },
          "100%": {
            fill: "#fff",
            fillOpacity: "1",
          },
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
}
export default config
