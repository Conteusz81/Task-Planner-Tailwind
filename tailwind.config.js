module.exports = {
  purge: {
    // enabled: true,
    // content: ['./src/**/*.tsx'],
  },
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito']
      },
      spacing: {
        per85: '85%',
      },
      gridTemplateRows: {
        'custom': 'repeat(6, minmax(5rem, 1fr))'
      }
    },
  },
  variants: {},
  plugins: [],
}
