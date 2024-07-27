/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
          fontFamily: {
              grotesk: ["Grotesk"],
              grotesk_medium: ["GroteskMedium"],
              grotesk_semibold: ["GroteskSemibold"],
              grotesk_bold: ["GroteskBold"],
          },
          colors: {
              primary: {
                  green: "#6BC192",
                  black: "#0C0C08",
                  gray: "#8C8C8C",
                  blue: "#006aff",
              },
          },
      },
  },
  plugins: [],
};
