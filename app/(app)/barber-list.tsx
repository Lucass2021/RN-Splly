import CardComponent, {CardComponentProps} from "@/components/card/card";
import {useLocalSearchParams} from "expo-router";
import {View} from "react-native";

export default function BarberListScreen() {
  const params = useLocalSearchParams<{data: string}>();
  const {data} = params;
  const {title, cardsData}: CardComponentProps = JSON.parse(data);

  return (
    <View className="flex-1 pt-13 bg-light">
      <CardComponent title={title} cardsData={cardsData} />
    </View>
  );
}
