/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-gradient':
          'linear-gradient(180deg, rgba(0,0,0,1) 50%, rgba(0,212,255,0) 100%)',
      },
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
