/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'primary': "#F8F9FA ",
        'black': "#000000",
        'secondary': "#ADB5BD",
        'accent': '#6C757D',
        'boxColor': "#E9ECEF"
      },
    },
  },
  plugins: [],
}

