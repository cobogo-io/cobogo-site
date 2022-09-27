/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          100: '#FFFFFF',
        },
        black: {
          900: '#000000',
        },
        blue: {
          100: '#00B9E9',
          200: '#16212E',
        },
        green: {
          100: '#67A747',
        },
        pink: {
          200: '#BA68C8',
        },
        gray: {
          200: '#5C8295',
        },
      },
    },
  },
  plugins: [],
}
