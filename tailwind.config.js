/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      fontFamily: {
        'body': ['sometype-mono', 'sans-serif'],
        'italic': ['sometype-mono-italic', 'sans-serif'],
        'bold': ['sometype-mono-bold', 'sans-serif'],
        'display': ['syne-mono', 'sans-serif'],
        'gothic': ['nanum-gothic', 'sans-serif'],
      },

      colors: {
        'eddie-green': '#254B15',
        'eddie-white': '#FAF5EF',
        'eddie-gray': '#7D7163',
        'eddie-cloudy': '#D2D5C3',
        'eddie-storm': '#182953'
      }

    }
  },
  plugins: []
};