module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#D6A99D',
          normal: '#D6DAC8',
          light: '#FBF3D5'
        },
        secondary: {
          normal: '#9CAFAA'
        },
        tertiary: {
          normal: '#9CAFAA'
        },
      },
      backgroundImage: () => ({
        'hero-img': "url('https://karanaditya.imgix.net/background-hero-img.jpg')",
      }),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
