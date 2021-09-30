module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      cobogo: '#4FB9E3',
      youtuber: '#514E7F',
      patron: '#6C63FF',
      white: '#FFFFFF',
      bgprimary: '#121212',
      bgsecundary: '#1C1C1C',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
