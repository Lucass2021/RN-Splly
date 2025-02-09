import {FlatList, View} from "react-native";
import Button from "../button/button";
import TextComponent from "../text/text";

export type FilterOptionsProps = {
  title: string;
  buttonData: {
    title: string;
    onPress: () => void;
  }[];
};

export default function FilterOptions({title, buttonData}: FilterOptionsProps) {
  return (
    <View>
      <TextComponent
        fontFamily="TTInterphases"
        fontWeight="Medium"
        color="dark"
        fontSize="h5"
        customClassName="mb-3">
        {title}
      </TextComponent>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={buttonData => String(buttonData.title)}
        data={buttonData}
        // contentContainerStyle={{paddingLeft: 30, paddingRight: 15}}
        renderItem={({item}) => {
          return (
            <Button
              text={item.title}
              onPress={item.onPress}
              customClassName={`px-5 mr-2.5 mb-6`}
            />
          );
        }}
      />
    </View>
  );
}
