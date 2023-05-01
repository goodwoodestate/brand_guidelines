/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "grey-minor-numbers": "#13131366",
        "grey-minor": "#131313cc",
        "grey-cta": "#ffffff99"
      },
      borderWidth: {
        "1": "1px"
      },
      gap: {
        "8": "30px"
      },
      padding: {
        "13": "50px",
        "15": "60px",
        "17": "70px"
      },
      margin: {
        "15": "60px",
        "8.5": "30px",
        "5.5": "22px",
      },
    },
  },
  plugins: [],
}
