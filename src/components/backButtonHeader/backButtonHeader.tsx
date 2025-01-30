import ArrowLeftComponent from "@/assets/icons/arrowLeft";
import {router} from "expo-router";
import {Text, TouchableOpacity, View} from "react-native";

type BackButtonHeaderProps = {
  title: string;
};

export default function BackButtonHeader({title}: BackButtonHeaderProps) {
  const iconColor = "#2D1E2F";

  return (
    <View className=" flex-row items-center justify-between mb-10">
      <TouchableOpacity
        className="h-16 w-16 rounded-2xl items-center justify-center pt-2 bg-grayFive"
        activeOpacity={0.7}
        onPress={() => router.back()}>
        <ArrowLeftComponent color={iconColor} width={50} height={25} />
      </TouchableOpacity>
      <Text className="font-obviouslyBold text-lg color-black">{title}</Text>
      <View className="w-16" />
    </View>
  );
}
