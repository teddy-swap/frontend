/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  important: "#root",
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "Montserrat, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
