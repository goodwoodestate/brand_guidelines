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
      },
      gap: {
        "8": "30px"
      },
      padding: {
        "13": "50px"
      },
      margin: {
        "15": "60px",
        "8.5": "30px"
      },
    },
  },
  plugins: [],
}
