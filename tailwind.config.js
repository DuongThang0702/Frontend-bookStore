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
        vollkorm: ["Vollkorn", "serif"],
      },
      colors: {
        purple: "#6B0DDE",
        darkPurple: "#59429a",
        link: "#7f48d9",
        red: "#de2454",
        palePurple: "#9F8BC2",
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
        nude: "#fff6ef",
        gray: "#EEEEEE",
        overLay: "rgba(90, 90, 90,0.4)",
      },
      boxShadow: {
        menu: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        boxShadowRight: "rgba(0, 0, 0, 0.7)0px 0px 20px",
      },
      keyframes: {
        slideTop: {
          "0%": {
            "-webkit-transform": "translateY(4px);",
            transform: "translateY(4px);",
          },
          "100%": {
            "-webkit-transform": "translateY(0px);",
            transform: "translateY(0px);",
          },
        },
      },
      animation: {
        slideTop:
          "slideTop 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
      },
    },
  },
  plugins: [],
};
