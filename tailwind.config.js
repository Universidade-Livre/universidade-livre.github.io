/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: { fontFamily: {
      Montserrat: ['Montserrat', "sans-serif"],
     }},
  },
  plugins: [    require('tailwindcss'),
  require('autoprefixer')],
}
