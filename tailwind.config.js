/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modals/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      custom: ['Mulish', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#002859',
        secondary: '#647184',
        lightGrey: '#C0CCDA',
        btnActive: '#035AC5',
        btnInactive: '#C6DFFE',
      },
    },
  },
  plugins: [],
};
