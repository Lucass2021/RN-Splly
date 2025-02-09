import React, {useState} from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  View,
} from "react-native";
import TextComponent from "../text/text";
import IconButton from "../iconButton/iconButton";
import LocationPin from "@/assets/icons/location-pin.svg";

export type HighlightCardsProps = {
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
  }[];
};

export default function HighlightCards({
  title,
  cardsData,
}: HighlightCardsProps) {
  const LocationComponent = LocationPin;
  const [favorites, setFavorites] = useState<Record<string, boolean>>(
    cardsData.reduce(
      (acc, item) => {
        acc[item.title] = item.isFavorite;
        return acc;
      },
      {} as Record<string, boolean>,
    ),
  );

  const handleSetFavorite = (title: string) => {
    setFavorites(prevFavorites => ({
      ...prevFavorites,
      [title]: !prevFavorites[title],
    }));

    // # TODO: Must call api to set favorite
    console.log("Favorite title", title);
  };

  return (
    <>
      <View className="flex-row items-center justify-between mb-5 pr-7.5">
        <TextComponent
          fontFamily="Obviously"
          fontWeight="SemiBold"
          color="dark"
          fontSize="h6">
          {title}
        </TextComponent>

        <Pressable onPress={() => console.log("Ver tudo")}>
          <TextComponent
            fontFamily="TTInterphases"
            fontWeight="Medium"
            color="grayOne"
            fontSize="subtitleOne">
            Ver tudo
          </TextComponent>
        </Pressable>
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={card => String(card.title)}
          data={cardsData}
          renderItem={({item}) => {
            const isFavorite = favorites[item.title];

            return (
              <View className="flex-col">
                <Pressable
                  className="mr-3.5 items-center"
                  onPress={item.onPress}>
                  <View className="w-65 h-50 overflow-hidden rounded-2xl position-relative mb-4">
                    <Image
                      source={item.image}
                      className="w-full h-full rounded-2xl"
                      resizeMode="cover"
                    />
                    <IconButton
                      iconName={isFavorite ? "favoriteFill" : "favorite"}
                      iconColor={isFavorite ? "accent" : "grayTwo"}
                      iconStrokeColor={
                        isFavorite ? "secondaryVariantThree" : "grayTwo"
                      }
                      buttonBackgroundColor="grayFive"
                      iconWidth={18}
                      iconHeight={15}
                      onPress={() => handleSetFavorite(item.title)}
                      customClassName="absolute top-3 right-3 z-10 w-9 h-9 rounded-lg"
                    />
                  </View>
                </Pressable>

                <View className="max-w-72">
                  <TextComponent
                    fontFamily="Obviously"
                    fontWeight="SemiBold"
                    color="dark"
                    fontSize="h6"
                    customClassName="mb-0.5"
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {item.title}
                  </TextComponent>
                  {item.subtitle && (
                    <TextComponent
                      fontFamily="TTInterphases"
                      fontWeight="Medium"
                      color="dark"
                      fontSize="subtitleTwo"
                      customClassName="mb-1.5"
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      {item.subtitle}
                    </TextComponent>
                  )}

                  <View className="flex-row gap-2 items-center mb-2.5">
                    <LocationComponent width={12} height={14} />
                    <TextComponent
                      fontFamily="TTInterphases"
                      fontWeight="Medium"
                      color="grayTwo"
                      fontSize="overlay">
                      {item.locationName}
                    </TextComponent>
                  </View>

                  <View className="flex-row items-end">
                    <TextComponent
                      fontFamily="TTInterphases"
                      fontWeight="Bold"
                      color="dark"
                      fontSize="h6"
                      customClassName="mr-1.5">
                      R$ {item.discountPrice ? item.discountPrice : item.price}
                    </TextComponent>
                    {item.discountPrice && (
                      <TextComponent
                        fontFamily="TTInterphases"
                        fontWeight="Medium"
                        color="grayFour"
                        fontSize="subtitleTwo"
                        customClassName="line-through">
                        R$ {item.price}
                      </TextComponent>
                    )}
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </>
  );
}
