/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        glacial: ['"Glacial Indifference"', 'sans-serif'],
        maharlika: ['"Maharlika"', 'serif'],
      },
    },
  },
  plugins: [],
}
