/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      red: "#7C191E",
      "light-red": "#9E2A22",
      black: "#111111",
      "light-black": "#2F2F2F",
      paper: "#F5F5DC",
      "light-paper": "#F7F0E1",
    },

    extend: {},
  },
  plugins: [],
};
