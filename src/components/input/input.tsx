import {useRef, useState} from "react";
import {useController, useFormContext} from "react-hook-form";
import {
  TextInputProps as RnTextInputProps,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {Ionicons} from "@expo/vector-icons";

type InputProps = {
  name: string;
  customPlaceholder: string;
} & RnTextInputProps;

export default function Input({
  name,
  customPlaceholder,
  secureTextEntry,
  className,
  ...props
}: InputProps) {
  const [isSecure, setIsSecure] = useState(secureTextEntry ?? false);
  const textInputRef = useRef<TextInput>(null);

  const {control} = useFormContext();

  const {
    field: {onChange, onBlur, value},
    fieldState: {error},
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <View className="w-full mb-5">
      <Text className="font-TTInterphasesMedium color-black text-base mb-2">
        {customPlaceholder}
      </Text>
      <View className="flex-row items-center border rounded-2xl border-grayFour">
        <TextInput
          ref={textInputRef}
          className={`flex-1 font-TTInterphasesLight color-black text-base px-5 h-12 ${className}`}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
          secureTextEntry={isSecure}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsSecure(!isSecure)}
            className="px-3"
            hitSlop={15}>
            <Ionicons
              name={isSecure ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text className="font-semibold text-center text-red-500 text-sm mt-3">
          {error.message}
        </Text>
      )}
    </View>
  );
}
