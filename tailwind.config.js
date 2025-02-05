/** @type {import('tailwindcss').Config} */
const {Colors} = require("./src/theme/colors.ts");

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      padding: {
        7.5: "30px",
        13: "50px",
        15: "60px",
      },
      margin: {
        7.5: "30px",
        13: "50px",
      },
      height: {
        6.5: "25px",
        13: "50px",
        18: "75px",
      },
      width: {
        13: "50px",
        18: "75px",
      },
      fontFamily: {
        obviouslyLight: ["ObviouslyLight", "sans-serif"],
        obviouslyRegular: ["ObviouslyRegular", "sans-serif"],
        obviouslyMedium: ["ObviouslyMedium", "sans-serif"],
        obviouslySemiBold: ["ObviouslySemiBold", "sans-serif"],
        obviouslyBold: ["ObviouslyBold", "sans-serif"],
        TTInterphasesLight: ["TTInterphasesLight", "sans-serif"],
        TTInterphasesRegular: ["TTInterphasesRegular", "sans-serif"],
        TTInterphasesMedium: ["TTInterphasesMedium", "sans-serif"],
        TTInterphasesSemiBold: ["TTInterphasesSemiBold", "sans-serif"],
        TTInterphasesBold: ["TTInterphasesBold", "sans-serif"],
      },
      fontSize: {
        "2.5xl": ["32px", "40px"],
      },
      colors: Colors,
    },
  },
  plugins: [],
};
