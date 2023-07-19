/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'prim': '#18255b'
      }
    },
  },
  plugins: [require("daisyui")],
}