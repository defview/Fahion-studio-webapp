/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Custom1: ['Kaushan Script', 'cursive'],
        custom2: ['Sirin Stencil', 'cursive'],
      },
    },
  },
  plugins: [],
}
