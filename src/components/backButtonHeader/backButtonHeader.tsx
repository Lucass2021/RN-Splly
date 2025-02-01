import {router} from "expo-router";
import {Text, View} from "react-native";
import IconButton from "../iconButton/iconButton";

type BackButtonHeaderProps = {
  title: string;
};

export default function BackButtonHeader({title}: BackButtonHeaderProps) {
  return (
    <View className="flex-row items-center justify-between mb-10">
      <IconButton
        iconName="arrowLeft"
        iconColor="secondaryVariantThree"
        buttonBackgroundColor="grayFive"
        iconWidth={50}
        iconHeight={25}
        onPress={() => router.back()}
      />
      <Text className="font-obviouslySemiBold text-lg color-black">
        {title}
      </Text>
      <View className="w-16" />
    </View>
  );
}
