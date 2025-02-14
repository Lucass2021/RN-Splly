import {backgroundColors, Colors} from "@/theme/colors";
import {IconName, iconRegistry} from "@/theme/icons";
import {TouchableOpacity, TouchableOpacityProps} from "react-native";

export interface IconButtonProps extends TouchableOpacityProps {
  iconName: IconName;
  iconColor: keyof typeof Colors;
  iconStrokeColor?: keyof typeof Colors;
  buttonBackgroundColor: keyof typeof backgroundColors;
  iconWidth: number;
  iconHeight: number;
  disabled?: boolean;
  onPress?: () => void;
  customClassName?: string;
}

export default function IconButton({
  iconName,
  iconColor,
  iconStrokeColor = "dark",
  buttonBackgroundColor,
  iconWidth,
  iconHeight,
  disabled = false,
  onPress,
  customClassName,
  ...props
}: IconButtonProps) {
  const IconComponent = iconRegistry[iconName];
  const color = Colors[iconColor];
  const backgroundColor = Colors[buttonBackgroundColor];
  const strokeColor = Colors[iconStrokeColor];

  return (
    <TouchableOpacity
      style={{backgroundColor: backgroundColor}}
      className={`h-16 w-16 rounded-2xl items-center justify-center ${customClassName}`}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      <IconComponent
        color={color}
        width={iconWidth}
        height={iconHeight}
        stroke={strokeColor}
      />
    </TouchableOpacity>
  );
}
