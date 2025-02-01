import {textColors} from "@/theme/colors";
import {Texts, Titles} from "@/theme/text";
import {Text} from "react-native";

type TextProps = {
  text: string;
  color: keyof typeof textColors;
  fontFamily: "TTInterphases" | "Obviously";
  fontWeight: "Light" | "Regular" | "Medium" | "SemiBold" | "Bold";
  fontSize: keyof typeof Titles | keyof typeof Texts;
};

export default function TextComponent({
  text,
  color,
  fontFamily,
  fontWeight,
  fontSize,
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

  const customColorName = textColors[color];
  const customFontSizeAndLineHeight =
    Titles[fontSize as keyof typeof Titles] ||
    Texts[fontSize as keyof typeof Texts];
  const fontClass = generateFontFamilyAndWeight(fontFamily, fontWeight);

  return (
    <Text
      className={`${customColorName} ${fontClass} `}
      style={{
        fontSize: customFontSizeAndLineHeight.fontSize,
        lineHeight: customFontSizeAndLineHeight.lineHeight,
      }}>
      {text}
    </Text>
  );
}
