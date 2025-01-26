/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      padding: {
        7.5: "30px",
      },
      margin: {
        7.5: "30px",
      },
      fontFamily: {
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
      colors: {
        primary: "#3581B8",
        secondary: "#A594F9",
        secondaryVariantOne: "#A663CC",
        accent: "#E54B4B",
        warning: "#DBE147",
        warningOne: "#F7B32B",
        light: "#FFFFFF",
        dark: "#000000",
        darkOne: "#191919",
        grayOne: "#616161",
        grayTwo: "#424242",
        grayThree: "#757575",
      },
    },
  },
  plugins: [],
};
