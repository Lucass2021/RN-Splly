import React, {FC} from "react";
import {FlatList, Pressable, View} from "react-native";
import {SvgProps} from "react-native-svg";
import TextComponent from "../text/text";

export type MenuCircleProps = {
  title: string;
  list: {
    name: string;
    image: FC<SvgProps>;
    onPress: () => void;
  }[];
};

export default function MenuCircle({title, list}: MenuCircleProps) {
  return (
    <>
      <View className="ps-7.5">
        <TextComponent
          fontFamily="Obviously"
          fontWeight="SemiBold"
          color="dark"
          fontSize="h6"
          customClassName="mb-5">
          {title}
        </TextComponent>
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={card => String(card.name)}
          data={list}
          contentContainerStyle={{paddingLeft: 30, paddingRight: 15}}
          renderItem={({item}) => {
            const ImageComponent = item.image;
            return (
              <Pressable className="mr-5 items-center" onPress={item.onPress}>
                <View className="bg-confirm w-18 h-18 rounded-2xl">
                  <View className="flex-1 justify-center items-center">
                    <ImageComponent width={35} height={35} />
                  </View>
                </View>
                <View className="mt-2">
                  <TextComponent
                    fontFamily="TTInterphases"
                    fontWeight="Regular"
                    color="dark"
                    fontSize="subtitleOne">
                    {item.name}
                  </TextComponent>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </>
  );
}
