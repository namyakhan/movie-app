/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        navy: "#212432",
        darkblue: "#1D1D29",
        blue: "#5F9DF7",
        grey: "#EDEDED",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
