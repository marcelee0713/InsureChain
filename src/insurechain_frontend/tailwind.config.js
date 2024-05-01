/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        animfadeAbove: "fadeAbove 700ms ease-in-out",
        animfadeBelow: "fadeBelow 700ms ease-in-out",
        animfadeLeftSide: "fadeLeftSide 700ms ease-in-out",
        animfadeRightSide: "fadeRightSide 700ms ease-in-out",
        animFullHeight: "fullHeight 700ms ease-in-out",
      },
      keyframes: {
        fadeAbove: {
          "100%": { transform: "translateY(0px)", opacity: "1" },
          "0%": {
            transform: "translateY(-15px)",
            opacity: "0",
          },
        },
        fadeBelow: {
          "100%": { transform: "translateY(0px)", opacity: "1" },
          "0%": {
            transform: "translateY(15px)",
            opacity: "0",
          },
        },
        fadeLeftSide: {
          "100%": { transform: "translateX(0px)", opacity: "1" },
          "0%": {
            transform: "translateX(-15px)",
            opacity: "0",
          },
        },
        fadeRightSide: {
          "100%": { transform: "translateX(0px)", opacity: "1" },
          "0%": {
            transform: "translateX(15px)",
            opacity: "0",
          },
        },
        fullHeight: {
          "100%": { height: "100%" },
          "0%": {
            height: "0px",
          },
        },
      },
      gridTemplateColumns: {
        myGridTemplate: "repeat(auto-fit, minmax(400px, 1fr))",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#F8F9FA",
        black: "#000000",
        secondary: "#ADB5BD",
        accent: "#6C757D",
        boxColor: "#2869CE",
      },
    },
  },
  plugins: [],
};
