module.exports = {
  content: [
    './js/components/**/*.{html,js}',
    './components/*js',
    './index.html',
    './*.{css,js}',
    './assets/*.{css,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}