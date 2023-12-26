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
        "dark-blue": "#1c3761",
        "aqua-green": "#1fb4b0",
        "light-gray": "#94a3b8",
        "dark-gray": "#8d9fb5",
        "light-orange": "#eb5e4f",
        "light-gray-card": "#f1f5f9",
      },
      boxShadow: {
        "3xl": "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
      },
      filter: {
        "icon-hover":
          "invert(53%) sepia(57%) saturate(3041%) hue-rotate(329deg) brightness(95%) contrast(94%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
