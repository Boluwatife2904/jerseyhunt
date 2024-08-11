/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                grotesk_light: ["GroteskLight"],
                grotesk: ["Grotesk"],
                grotesk_medium: ["GroteskMedium"],
                grotesk_semibold: ["GroteskSemibold"],
                grotesk_bold: ["GroteskBold"],
            },
            colors: {
                primary: {
                    main: "#06432D",
                    50: "#E6ECEA",
                    75: "#99B2A9",
                    100: "#6F9285",
                    200: "#306351",
                    400: "#042F1F",
                    500: "#04291B",
                },
                secondary: {
                    main: "#A8F37D",
                    50: "#F6FEF2",
                    75: "#DBFACA",
                    100: "#CDF8B4",
                    200: "#B7F593",
                    400: "#76AA58",
                    500: "#66944C",
                },
                white: {
                    DEFAULT: "#ffffff",
                    400: "#B3B3B3",
                    500: "#9C9C9C",
                },
                black: {
                    50: "#E6E6E6",
                    75: "#969696",
                    100: "#6B6B6B",
                    200: "#2B2B2B",
                },
            },
        },
    },
    plugins: [],
};
