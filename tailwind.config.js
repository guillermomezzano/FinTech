/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        singin: "url('./assets/singin.jpg')",
      },
    },
  },
  plugins: [],
};
