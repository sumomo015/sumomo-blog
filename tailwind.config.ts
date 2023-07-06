import colors from 'tailwindcss/colors';

export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.emerald[500],
      },
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
    './app.config.{js,ts}',
  ],
};
