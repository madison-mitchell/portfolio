module.exports = {
  content: [
    './js/components/**/*.{html,js}',
    './components/*js',
    './index.html',
    './*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}