import {router} from "expo-router";
import {View} from "react-native";
import IconButton from "../iconButton/iconButton";
import TextComponent from "../text/text";

type BackButtonHeaderProps = {
  title: string;
  customClassName?: string;
};

export default function BackButtonHeader({
  title,
  customClassName,
}: BackButtonHeaderProps) {
  return (
    <View
      className={`flex-row items-center justify-between mb-10 ${customClassName}`}>
      <IconButton
        iconName="arrowLeft"
        iconColor="secondaryVariantThree"
        buttonBackgroundColor="grayFive"
        iconWidth={50}
        iconHeight={25}
        onPress={() => router.back()}
        customClassName="pt-2"
      />
      <TextComponent
        fontFamily="Obviously"
        fontWeight="SemiBold"
        color="dark"
        fontSize="h6">
        {title}
      </TextComponent>
      <View className="w-16" />
    </View>
  );
}
