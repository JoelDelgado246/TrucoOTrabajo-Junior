/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'creepster': ['Creepster', 'cursive'],
      },
      fontSize: {
        'super': '45px',
        'title1': '34px',
        'title2': '21px',
        'normal': '13px',
        'mini': '8px',
      },
    },
  },
  plugins: [],
}