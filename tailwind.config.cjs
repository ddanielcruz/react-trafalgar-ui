/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#458FF6'
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif']
      }
    }
  },
  plugins: []
}
