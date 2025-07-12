export const Colors = {
  primary: "#3581B8",
  primaryVariantOne: "#141B34",
  secondary: "#A594F9",
  secondaryVariantOne: "#A663CC",
  secondaryVariantThree: "#2D1E2F",
  accent: "#E54B4B",
  accentOne: "#D3201C",
  warning: "#DBE147",
  warningOne: "#F7B32B",
  warningTwo: "#FCF6B1",
  light: "#FFFFFF",
  lightOne: "#FFFAFA",
  lightTwo: "#FAFAFA",
  lightThree: "##F5F5F5",
  dark: "#000000",
  darkOne: "#191919",
  grayOne: "#616161",
  grayTwo: "#424242",
  grayThree: "#757575",
  grayFour: "#9E9E9E",
  grayFive: "#EEEEEE",
  graySix: "#808080",
  graySeven: "#E0E0E0",
  grayEight: "#D9D9D9",
  grayNine: "#BDBDBD",
  grayTen: "#212121",
  confirm: "#A9E5BB",
  transparent: "transparent",
} as const;

export const generateColorClasses = (prefix: string) =>
  Object.keys(Colors).reduce(
    (acc, key) => {
      const typedKey = key as keyof typeof Colors;
      acc[typedKey] = `${prefix}-${key}`;
      return acc;
    },
    {} as Record<keyof typeof Colors, string>,
  );

export const backgroundColors = generateColorClasses("bg");
export const textColors = generateColorClasses("text");
