/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        1536: { max: "1536px", min: "1441px" },
        1440: { max: "1440px", min: "1367px" },
        1366: { min: "1366px", max: "1439px" },
        md: {max:"850px"},
      },
      fontFamily: {
        main: ["Poppins"],
      },
    },
  },
  plugins: [],
};
