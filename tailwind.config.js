/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["GT Super Txt Trial", "sans-serif"],
        main: ["Poppins", "sans-serif"],
        header: ["IBM Plex Sans", "sans-serif"],
      },
      colors: {
        purple: "#6B0DDE",
        normal: "#2c293b",
      },
      fontSize: {
        main: "2rem",
      },
      width: {
        main: "102.4rem",
      },
      backgroundColor: {
        purple: "#6B0DDE",
      },
    },
  },
  plugins: [],
};
