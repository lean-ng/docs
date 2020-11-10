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
          maxWidth: '80ch',
          h2: {
            fontWeight: '600'
          },
          h3: {
            fontWeight: '500'
          }
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
