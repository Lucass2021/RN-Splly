import ExploreComponent from "@/assets/icons/explore";
import {useRef} from "react";
import {Pressable, TextInput, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import IconButton from "../iconButton/iconButton";

type HomeHeaderProps = {
  onPress: () => void;
};

export default function HomeHeader({onPress}: HomeHeaderProps) {
  const inputExploreIconRef = useRef<TextInput | null>(null);

  const handleInputPress = () => {
    if (inputExploreIconRef.current) {
      inputExploreIconRef.current.focus();
    }
  };

  return (
    <View className="flex-row items-center border rounded-2xl">
      <Pressable className="pl-5 pr-3" hitSlop={15} onPress={handleInputPress}>
        <ExploreComponent color={Colors.grayOne} width={16} height={16} />
      </Pressable>
      <TextInput
        ref={inputExploreIconRef}
        className="flex-1 placeholder:text-grayFour"
        placeholder="Pesquisar uma Barbearia, Serviço..."
      />
      <IconButton
        iconName="filterSearch"
        iconColor="lightOne"
        buttonBackgroundColor="warningOne"
        iconWidth={18}
        iconHeight={16}
        onPress={onPress}
        customClassName="rounded-l-none"
        hitSlop={15}
      />
    </View>
  );
}
