/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-rubik": ["Rubik", "sans-serif"],
      },
      boxShadow: {
        shadow: "0px 11px 30px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        linear:
          "linear-gradient(180deg, #FFF2EA 0%, rgba(251, 228, 212, 0.742669) 25.73%, rgba(249, 249, 249, 0) 100",
      },
      colors: {
        brand: {
          primary: {
            default: "#8BAC3E",
            lighter: "#F0FEEB",
            lightest: "#F9FFF6",
          },
          cyan: {
            default: "#40A2B1",
            lighter: "#E6F3F5",
          },
          indigo: {
            default: "#405EB6",
            lighter: "#EAEEFA",
          },
          magenta: {
            default: "#B23F74",
            lighter: "#F9EEF3",
          },
          lime: {
            default: "#A4B441",
            lighter: "#F3F7D9",
          },
        },
      },
    },
  },
  plugins: [],
};
