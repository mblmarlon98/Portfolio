/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': '340px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px', // Ensure this matches your design
      '2xl': '1536px',
    },
  },
  plugins: [],
};

