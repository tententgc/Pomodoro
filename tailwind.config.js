/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:['Inter', 'sans-serif'],
      }, 
      color: { 
        'JShine': 'linear - gradient(to right, #f64f59, #c471ed, #12c2e9)',

      }
    },
  },
  plugins: [],
}
