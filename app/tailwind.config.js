/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'CookieRunOTF',
        default: 'LINE Seed Sans KR',
      },
      colors: {
        black: '#444',
      },
    },
  },
  plugins: [],
};
