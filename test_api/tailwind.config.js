module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    opacity: [
      "disabled"
    ],
    pointerEvents: ['disabled'],
  },
  plugins: [],
}
