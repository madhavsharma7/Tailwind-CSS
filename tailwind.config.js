/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/**/*.html", "./pages/*.html"],

  theme: {
    extend: {
      spacing: {
        200: "20px",
      },
    },
  },

  plugins: [],
};
