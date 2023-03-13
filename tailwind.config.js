/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGold: "#AD974F",
        darkGold: "#8E793E",
        lightBackground: "#F8F8F8",
        darkBackground: "#22262D",
        darkBlack: "#000000",
        grayColor: "#231F20",
        yellowColor: "FFE033",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
