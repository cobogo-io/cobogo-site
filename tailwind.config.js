/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima-nova': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        orbitron: ['Orbitron', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#121212',
        'yellow-community': '#EFE750',
        'pink-launchpad': '#F5AEFF',
        pink: '#FFCAFF',
        'blue-social': '#00B9E9',
        blue: '#9FE8FF',
      },
      backgroundImage: {
        'home-carrousel-social-background':
          "url('/images/home-carrousel-social-background.svg')",
        'home-carrousel-community-background':
          "url('/images/home-carrousel-community-background.svg')",
        'home-carrousel-launchpad-background':
          "url('/images/home-carrousel-launchpad-background.svg')",
      },
    },
  },
  plugins: [],
}

