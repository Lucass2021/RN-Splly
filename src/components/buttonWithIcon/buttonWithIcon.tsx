import {useState} from "react";
import {Pressable, View} from "react-native";
import TextComponent from "../text/text";
import {backgroundColors, Colors, textColors} from "@/theme/colors";
import {IconName} from "@/theme/icons";
import CustomIcon from "../customIcon/customIcon";

type ButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  customClassName?: string;
  customTextColor?: keyof typeof textColors;
  customFontWeight?: "Light" | "Regular" | "Medium" | "SemiBold" | "Bold";
  customBackgroundColor?: keyof typeof backgroundColors;
  customBackgroundOnPressColor?: keyof typeof backgroundColors;
  customDisabledEffect?: number;
  iconName: IconName;
  iconColor: keyof typeof Colors;
  iconWidth: number;
  iconHeight: number;
};

export default function ButtonWithIcon({
  text,
  onPress,
  disabled,
  customClassName,
  customTextColor = "light",
  customFontWeight = "SemiBold",
  customBackgroundColor = "secondaryVariantOne",
  customBackgroundOnPressColor = "secondaryVariantOne",
  customDisabledEffect = 2000,
  iconName,
  iconColor,
  iconWidth,
  iconHeight,
  ...props
}: ButtonProps) {
  const [buttonWasPressed, setButtonWasPressed] = useState(false);

  const backgroundColor = disabled
    ? Colors[customBackgroundColor]
    : buttonWasPressed
      ? Colors[customBackgroundOnPressColor]
      : Colors[customBackgroundColor];

  const handleOnPress = () => {
    setButtonWasPressed(true);
    onPress();

    setTimeout(() => {
      setButtonWasPressed(false);
    }, customDisabledEffect);
  };

  return (
    <Pressable
      onPress={handleOnPress}
      disabled={disabled || buttonWasPressed}
      style={{
        opacity: disabled || buttonWasPressed ? 0.7 : 1,
        backgroundColor,
      }}
      className={`h-14 rounded-2xl items-center justify-start flex-row ${customClassName}`}
      {...props}>
      <View className="mx-4">
        <CustomIcon
          iconName={iconName}
          iconColor={iconColor}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
        />
      </View>
      <TextComponent
        fontFamily="Obviously"
        fontWeight={customFontWeight}
        color={customTextColor}
        fontSize="buttonMd">
        {text}
      </TextComponent>
    </Pressable>
  );
}
