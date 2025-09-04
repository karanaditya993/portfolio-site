module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#282A36',
          normal: '#44475A',
          light: '#6272A4'
        },
        secondary: {
          normal: '#FF5555'
        },
        tertiary: {
          normal: '#8BE9FD'
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
