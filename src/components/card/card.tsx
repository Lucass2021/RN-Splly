import {router} from "expo-router";
import {FlatList, Image, ImageSourcePropType, View} from "react-native";
import BackButtonHeader from "../backButtonHeader/backButtonHeader";
import TextComponent from "../text/text";
import CustomIcon from "../customIcon/customIcon";
import {useState} from "react";
import IconButton from "../iconButton/iconButton";

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
    <View className="flex-1">
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={card => String(card.title)}
        data={cardsData}
        contentContainerStyle={{flexGrow: 1}}
        ListHeaderComponent={
          <View className="px-7.5">
            <BackButtonHeader
              title={title}
              customGoBack={() => router.push("/(app)/explore")}
            />
          </View>
        }
        renderItem={({item}) => {
          const isFavorite = favorites[item.title];

          return (
            <View className="px-7.5 mb-5">
              <View className="position-relative relative">
                <View className="flex-row items-center">
                  <Image
                    source={item.image}
                    className="h-25 w-25 rounded-2xl"
                    resizeMode="cover"
                  />

                  <View className="ml-4 max-w-56">
                    <TextComponent
                      fontFamily="Obviously"
                      fontWeight="SemiBold"
                      color="dark"
                      fontSize="subtitleOne"
                      numberOfLines={2}
                      ellipsizeMode="tail">
                      {item.title}
                    </TextComponent>

                    <View className="flex-row items-center my-1">
                      <View className="flex-row items-center">
                        <CustomIcon
                          iconName="start"
                          iconColor="warningOne"
                          iconWidth={18}
                          iconHeight={18}
                        />
                        <TextComponent
                          fontFamily="Obviously"
                          fontWeight="SemiBold"
                          color="warningOne"
                          fontSize="subtitleThree"
                          customClassName="ml-1.5">
                          {item.rating}
                        </TextComponent>
                      </View>

                      <View className="mx-2">
                        <CustomIcon
                          iconName="line"
                          iconColor="grayFour"
                          iconWidth={12}
                          iconHeight={2}
                        />
                      </View>

                      <TextComponent
                        fontFamily="Obviously"
                        fontWeight="Bold"
                        color="darkOne"
                        fontSize="subtitleThree">
                        R${" "}
                        {item.discountPrice ? item.discountPrice : item.price}
                      </TextComponent>
                    </View>

                    <View className="flex-row gap-2 items-center mb-2.5">
                      <CustomIcon
                        iconName="locationPin"
                        iconColor="grayTwo"
                        iconWidth={12}
                        iconHeight={14}
                      />
                      <TextComponent
                        fontFamily="TTInterphases"
                        fontWeight="Medium"
                        color="grayTwo"
                        fontSize="overlay">
                        {item.locationName}
                      </TextComponent>
                    </View>
                  </View>
                </View>

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
                  customClassName="w-9 h-9 rounded-lg absolute top-0 right-0 z-10"
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
