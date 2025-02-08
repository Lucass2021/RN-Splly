import {useState} from "react";
import {Pressable} from "react-native";
import TextComponent from "../text/text";

type ButtonProps = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  customClassName?: string;
};

export default function Button({
  text,
  onPress,
  disabled,
  customClassName,
  ...props
}: ButtonProps) {
  const [buttonWasPressed, setButtonWasPressed] = useState(false);

  const handleOnPress = () => {
    setButtonWasPressed(true);
    onPress();

    setTimeout(() => {
      setButtonWasPressed(false);
    }, 2000);
  };

  return (
    <Pressable
      onPress={handleOnPress}
      disabled={disabled || buttonWasPressed}
      className={`h-14 rounded-2xl items-center justify-center 
        ${disabled ? "opacity-70 bg-secondaryVariantOne" : "bg-secondaryVariantOne"} 
        ${buttonWasPressed ? "opacity-70" : "opacity-100"}
        ${customClassName}
        `}
      {...props}>
      <TextComponent
        fontFamily="Obviously"
        fontWeight="SemiBold"
        color="light"
        fontSize="buttonMd"
        customClassName="text-center">
        {text}
      </TextComponent>
    </Pressable>
  );
}
