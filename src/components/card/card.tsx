import {FlatList, ImageSourcePropType, Text, View} from "react-native";
import BackButtonHeader from "../backButtonHeader/backButtonHeader";

export type CardComponentProps = {
  title: string;
  cardsData: {
    title: string;
    subtitle?: string | null;
    locationName: string;
    discountPrice: string | null;
    price: string;
    onPress: () => void;
    image: ImageSourcePropType;
    isFavorite: boolean;
    rating?: string;
  }[];
};

export default function CardComponent({title, cardsData}: CardComponentProps) {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={card => String(card.title)}
        data={cardsData}
        ListHeaderComponent={
          <View className="px-7.5">
            <BackButtonHeader title={title} />
          </View>
        }
        renderItem={({item}) => {
          return (
            <View className="px-7.5">
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
