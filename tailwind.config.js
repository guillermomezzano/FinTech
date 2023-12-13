/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1FB4B0",
        secondary: "#EB5E4F",
        accent1: "#1C3761",
        accent2: "#232E3D",
      }
      // backgroundImage: {
      //   singin: "url('./assets/singin.jpg')",
      // },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
