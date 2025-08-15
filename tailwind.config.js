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
        playfair: ["var(--font-playfair)", "serif"],
        baskervville: ["var(--font-baskervville)", "serif"],
        baskervvilleSC: ["var(--font-baskervvilleSC)", "serif"],
      },
    },
  },
  plugins: [],
};
