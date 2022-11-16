/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { fontFamily: {
      Montserrat: ['Montserrat', "sans-serif"],
     }},
  },
  plugins: [    require('tailwindcss'),
  require('autoprefixer')],
}
