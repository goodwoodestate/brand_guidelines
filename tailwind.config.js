/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "grey-minor-numbers": "#13131366",
        "grey-minor": "#131313cc"
      },
      borderWidth: {
        "1": "1px"
      }
    },
  },
  plugins: [],
}
