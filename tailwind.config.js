/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        appcolor: {
          500: "#f94e30",
          600: "#ff6433",
        },
      },
    },
  },
  plugins: [],
};
