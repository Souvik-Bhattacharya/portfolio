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
      gridTemplateColumns: {
        'card': 'repeat(auto-fill,minmax(400px,1fr))',
        'card-mini': 'repeat(auto-fill,minmax(280px,1fr))',
        'edu': 'repeat(auto-fill,minmax(500px,1fr))',
        'edu-mini': 'repeat(auto-fill,minmax(280px,1fr))',
      },
      screens: {
        'small': {
          'max': '800px',
        },
        'mini': {
          'max': '500px',
        },
      },
    },
  },
  plugins: [],
}