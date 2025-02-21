import {Colors, textColors} from "@/theme/colors";
import {ButonsText, Texts, Titles} from "@/theme/text";
import React from "react";
import {Text, TextProps as RNTextProps} from "react-native";

interface TextProps extends RNTextProps {
  children: React.ReactNode;
  color: keyof typeof textColors;
  fontFamily: "TTInterphases" | "Obviously";
  fontWeight: "Light" | "Regular" | "Medium" | "SemiBold" | "Bold";
  fontSize: keyof typeof Titles | keyof typeof Texts | keyof typeof ButonsText;
  customClassName?: string;
}

export default function TextComponent({
  children,
  color,
  fontFamily,
  fontWeight,
  fontSize,
  customClassName,
  ...props
}: TextProps) {
  const generateFontFamilyAndWeight = (
    fontFamily: string,
    fontWeight: string,
  ) => {
    const fontMap = {
      TTInterphases: {
        Light: "font-TTInterphasesLight",
        Regular: "font-TTInterphasesRegular",
        Medium: "font-TTInterphasesMedium",
        SemiBold: "font-TTInterphasesSemiBold",
        Bold: "font-TTInterphasesBold",
      },
      Obviously: {
        Light: "font-obviouslyLight",
        Regular: "font-obviouslyRegular",
        Medium: "font-obviouslyMedium",
        SemiBold: "font-obviouslySemiBold",
        Bold: "font-obviouslyBold",
      },
    };

    return (
      fontMap[fontFamily as keyof typeof fontMap]?.[
        fontWeight as keyof typeof fontMap.TTInterphases
      ] || ""
    );
  };

  const customColorName = Colors[color];

  const customFontSizeAndLineHeight =
    Titles[fontSize as keyof typeof Titles] ||
    Texts[fontSize as keyof typeof Texts] ||
    ButonsText[fontSize as keyof typeof ButonsText];
  const fontClass = generateFontFamilyAndWeight(fontFamily, fontWeight);
  return (
    <Text
      className={`${fontClass} ${customClassName} pb-1`}
      style={{
        color: customColorName,
        fontSize: customFontSizeAndLineHeight.fontSize,
        lineHeight: customFontSizeAndLineHeight.lineHeight,
      }}
      {...props}>
      {children}
    </Text>
  );
}
