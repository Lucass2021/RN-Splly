import {Pressable, Text} from "react-native";

type ButtonProps = {
  text: string;
  disabled?: boolean;
};

export default function Button({text, disabled, ...props}: ButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      className="bg-secondaryVariantOne h-14 rounded-2xl items-center justify-center"
      {...props}>
      <Text className="text-center font-obviouslyBold text-white">{text}</Text>
    </Pressable>
  );
}
