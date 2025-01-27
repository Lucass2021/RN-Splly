import {Pressable, Text} from "react-native";

type ButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function Button({
  text,
  onPress,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`h-14 rounded-2xl items-center justify-center ${
        disabled
          ? "opacity-70 bg-secondaryVariantOne"
          : "bg-secondaryVariantOne"
      }`}
      {...props}>
      <Text className="text-center font-obviouslyBold text-white">{text}</Text>
    </Pressable>
  );
}
