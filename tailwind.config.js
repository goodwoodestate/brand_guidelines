/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "grey-minor-numbers": "#13131366",
        "grey-minor": "#131313cc",
        "grey-cta": "#ffffff99"
      },
      borderWidth: {
        "1": "0.063rem"
      },
      gap: {
        "8": "1.875rem"
      },
      padding: {
        "13": "3.125rem",
        "15": "3.75rem",
        "17": "70px"
      },
      margin: {
        "15": "3.75rem",
        "8.5": "1.875rem",
        "5.5": "1.375",
      },
      width: {
        "25": "6.5rem",
        "26": "20rem",
        "78": "18.875rem",
      },
      height: {
        "86": "22.25rem",
      },
    },
  },
  plugins: [],
}
