import ExploreComponent from "@/assets/icons/explore";
import {Colors} from "@/theme/colors";
import {useRef} from "react";
import {Pressable, TextInput, View} from "react-native";

type SearchBarProps = {
  placeholder: string;
};

export default function SearchBar({placeholder}: SearchBarProps) {
  const inputExploreIconRef = useRef<TextInput | null>(null);

  const handleInputPress = () => {
    if (inputExploreIconRef.current) {
      inputExploreIconRef.current.focus();
    }
  };

  return (
    <View className="flex-row items-center border rounded-2xl border-grayFour bg-lightTwo">
      <Pressable className="pl-5 pr-3" hitSlop={15} onPress={handleInputPress}>
        <ExploreComponent color={Colors.warningOne} width={16} height={16} />
      </Pressable>
      <TextInput
        ref={inputExploreIconRef}
        className="flex-1 placeholder:text-grayNine"
        placeholder={placeholder}
      />
    </View>
  );
}
