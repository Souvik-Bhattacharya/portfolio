/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': '#08fdd8',
        'sec': '#222222',
      },
      keyframes: {
        'slideshow': {
          '0%': { 'left': '0' },
          '100%': { 'left': '-200%' },
        },
      },
      animation: {
        'slideShow': 'slideshow 10s linear infinite',
      },
    },
  },
  plugins: [],
}