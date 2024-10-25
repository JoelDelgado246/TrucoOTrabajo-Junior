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
        'michroma': ['Michroma', 'sans-serif'],
      },
      fontSize: {
        'super': '45px',
        'title1': '34px',
        'title2': '21px',
        'normal': '13px',
        'mini': '8px',
      },
      colors: {
        customOrange: '#F8A03F',
        customPurple: '#413479',
        customDarkOrange: '#E07A15',
        customGreen: '#9AE32A',
        customDarkPurple: '#06031E',
      },
    },
  },
  plugins: [],
}