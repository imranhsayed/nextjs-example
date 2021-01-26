module.exports = {
  purge: [
    './src/components/**/*.js',
    './pages/**/*.js'],
  darkMode: false,
  theme: {
    minHeight: {
      '60vh': '60vh'
    }
  },
  variants: {},
  plugins: [
    require( 'tailwindcss' ),
    require( 'precss' ),
    require( 'autoprefixer' )
  ]
}
