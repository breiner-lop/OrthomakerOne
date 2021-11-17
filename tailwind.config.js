module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      "purple-dark": "#14104F",
      "blue-dark": "#e3342f",
      "blue-medium": "#5C64F4",
      "blue-light": "#5C64F4",
      white: "#ffffff",
      black: "#000000",
      "red-dark": "#D91D26",
      "blue-transparent": "#14104f6b",
      "white-transparent": "#ffffff85",
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "purple-dark": "#14104F",
      "red-dark": "#D91D26",
      "blue-light": "#F0F2FF",
      "blue-extralight": "#F6F5FB",
      "red-light": "#EDCCD7",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      "red-dark": "#D91D26",
      "blue-light": "#DADBE6",
      'purple':"#14134E",
      "purple-light":"#DADBE6",
    }),
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      "blue-light": "#F0F2FF",
      white: "#ffffff",
    }),
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-visible'],
    extend: {},
  },
  plugins: [],
};
