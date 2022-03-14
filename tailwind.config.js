module.exports = {
  content: [
    './js/components/**/*.{html,js}',
    './js/*.{html,js}',
    './index.html',
    './js/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}