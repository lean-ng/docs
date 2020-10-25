module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [ './src/**/*.html' ],
  theme: {
    extend: {},
    typography: {
      default: {
        css: {
          maxWidth: '80ch'
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
