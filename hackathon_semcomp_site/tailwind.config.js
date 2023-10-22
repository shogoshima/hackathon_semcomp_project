const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["noto_sans", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}

