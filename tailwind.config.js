module.exports = {
  content: [
    './js/components/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}