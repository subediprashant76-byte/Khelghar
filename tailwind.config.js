/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1B1B1E",
        slate: "#4A4E54",
        crimson: "#E63946",
        "crimson-dark": "#C22A36",
        gold: "#F2A93B",
        cream: "#F7F5F2",
      },
      fontFamily: {
        display: ["Anton", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
