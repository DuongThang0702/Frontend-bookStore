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
        read: ["Roboto Slab", "serif"],
      },
      colors: {
        purple: "#6B0DDE",
        darkPurple: "#59429a",
        link: "#7f48d9",
        red: "#de2454",
      },
      fontSize: {
        main: "2rem",
      },
      width: {
        main: "102.4rem",
      },
      backgroundColor: {
        purple: "#6B0DDE",
        red: "#de2454",
      },
      boxShadow: {
        menu: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
