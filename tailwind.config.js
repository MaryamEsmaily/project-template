/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,php,hbs}"],
  theme: {
    container: {
      center: true,
      padding: {},
    },
    extend: {
      fontFamily: {},
      colors: {},
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
