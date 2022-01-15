module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    borderRadius: {
      'none': '0',
     'sm': '0.125rem',
     "DEFAULT": '0.25rem',
     'md': '0.375rem',
     'lg': '0.5rem',
     'full': '9999px',
     'large': '12px',
     "xl":"0.75rem",
     '2xl':'1rem',
     '3xl':'1.5rem',
     "136":"136px",
    },

    textColor: (theme) => ({
      ...theme("colors"),
      "purple-dark": "#14104F",
      "blue-dark": "#e3342f",
      "blue-medium": "#5C64F4",
      "blue-light": "#5C64F4",
      "white": "#ffffff",
      "black": "#000000",
      "red-dark": "#D91D26",
      "blue-transparent": "#14104f6b",
      "white-transparent": "#ffffff85",
      'blue-semigray':"#545871"
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "purple-dark": "#14104F",
      "red-dark": "#D91D26",
      "blue-light": "#F0F2FF",
      "blue-mini-light":"#F0F1F7",
      "blue-extralight": "#F6F5FB",
      "red-light": "#EDCCD7",
      'purple-light':'#292D4E',
      'blu-light':'#F3F7F8',
      'orange':"#ff6309"
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
      "white": "#ffffff",
    }),
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-visible'],
    extend: {},
  },
  plugins: [],
};
