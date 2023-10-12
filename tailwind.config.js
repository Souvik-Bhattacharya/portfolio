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
        'edu': 'repeat(auto-fill,minmax(600px,1fr))',
      },
    },
  },
  plugins: [],
}