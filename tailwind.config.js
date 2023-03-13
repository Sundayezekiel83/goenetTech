

/** @type {import('tailwindcss').Config} */
module.exports = {

    content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        appcolor: {
          '500' : '#64A1FF',
          '600' : '#64A1F0'
        }
      }
    },
  },
  plugins: [],
}
