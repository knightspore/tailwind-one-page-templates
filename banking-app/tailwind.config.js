module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '12': '12px',
      '18': '18px',
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
