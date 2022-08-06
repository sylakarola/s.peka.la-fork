/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#1B7195",
          100: "#00597E",
        },
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        serif: ["Nunito", ...defaultTheme.fontFamily.serif],
        heading: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
