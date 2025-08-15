/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baskervvilleSC: ["'Baskervville SC'", "serif"],
        baskervville: ["Baskervville", "serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};
