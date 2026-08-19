/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/**/*.html", "./pages/*.html"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Bebas Neue", "sans-serif"],
      },
      spacing: {
        200: "20px",
      },
    },
  },

  plugins: [],
};
