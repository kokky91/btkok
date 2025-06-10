/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Als je ook Pages Router gebruikt
    "./components/**/*.{js,ts,jsx,tsx}", // Voor herbruikbare componenten
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
