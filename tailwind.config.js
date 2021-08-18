module.exports = {
  mode: 'jit',
  purge: [
  './components/**/*.{vue,js}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#FCDED4',
     }),
    fontFamily: {
      'brand': ['Sukhumvit Set'],
      'sans': ['Sukhumvit Set']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
