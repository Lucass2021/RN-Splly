import {useState} from "react";
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
        ${buttonWasPressed ? "opacity-70" : "opacity-100"}`}
      {...props}>
      <Text className="text-center font-obviouslySemiBold text-white">
        {text}
      </Text>
    </Pressable>
  );
}
