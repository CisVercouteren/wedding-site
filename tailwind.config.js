/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend : ["Lexend", "sans-serif"],
        written : ["Brittany Signature", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      }, 
      colors: {
        'sand': '#f1ebe9',
        'cream': '#FAF9F6',
        'gold': '#C5A572',
      },
    },
  },
  plugins: [],
}
