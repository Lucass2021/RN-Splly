import {FlatList, View} from "react-native";
import Button from "../button/button";
import TextComponent from "../text/text";
import {useState} from "react";

export type FilterOptionsProps = {
  title: string;
  buttonData: {
    title: string;
    onPress: () => void;
  }[];
  defaultSelected: string;
};

export default function FilterOptions({
  title,
  buttonData,
  defaultSelected,
}: FilterOptionsProps) {
  const [selectedButton, setSelectedButton] = useState(defaultSelected);

  return (
    <View>
      <TextComponent
        fontFamily="TTInterphases"
        fontWeight="Medium"
        color="dark"
        fontSize="h5"
        customClassName="mb-5 ps-7.5">
        {title}
      </TextComponent>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={buttonData => String(buttonData.title)}
        data={buttonData}
        contentContainerStyle={{paddingLeft: 30, paddingRight: 15}}
        renderItem={({item}) => {
          const isActive = selectedButton === item.title;

          return (
            <Button
              text={item.title}
              onPress={() => {
                setSelectedButton(item.title);
                item.onPress();
              }}
              customClassName={`px-5 mr-2.5 mb-6`}
              customBackgroundColor={
                isActive ? "secondaryVariantOne" : "graySeven"
              }
              customBackgroundOnPressColor={
                isActive ? "secondaryVariantOne" : "graySeven"
              }
              customTextColor={isActive ? "lightOne" : "grayTwo"}
              customFontWeight={isActive ? "Bold" : "Medium"}
              customDisabledEffect={50}
            />
          );
        }}
      />
    </View>
  );
}
