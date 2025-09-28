/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './constants/**/*.{js,ts,jsx,tsx}',
    './types/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'tealor-blue': '#072AC8',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}