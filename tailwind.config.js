module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'purple-dark': '#14104F',
      'blue-dark': '#e3342f',
      'blue-medium': '#5C64F4',
      'blue-light': '#5C64F4',
      'white': '#ffffff',
      'black': '#000000',
      'red-dark':'#D91D26',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'purple-dark': '#14104F',
      'red-dark':'#D91D26',
      'blue-light':'#F0F2FF'
     }),
     borderColor: theme => ({
      ...theme('colors'),
      'red-dark': '#D91D26',
     }),
     gradientColorStops: theme => ({
      ...theme('colors'),
      'blue-light': '#F0F2FF',
      'white':"#ffffff",
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
