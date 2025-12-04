/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      colors: {
        copper: {
          300: "#ffcca8",
          400: "#dfa882", // Custom color for the logo and script
          500: "#c88d65",
          600: "#a3835e",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
