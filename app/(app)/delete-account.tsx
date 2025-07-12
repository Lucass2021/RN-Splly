import Button from "@/components/button/button";
import TextComponent from "@/components/text/text";
import {router} from "expo-router";
import {FlatList, View} from "react-native";

export default function DeleteAccount() {
  const items = [
    "Sed accumsan luctus faucibus hac ipsum litora sapien volutpat aenean donec dolor senectus, lobortis tellus amet mi arcu himenaeos.",
    "conubia tristique aliquam porttitor neque et felis ornare amet ut quam varius. enim lobortis",
    "felis lacinia sed posuere inceptos donec viverra velit, interdum ac ad sodales conubia ultricies bibendum netus bibendum euismod, ",
    "velit ad justo senectus pretium per nam morbi. ut curabitur nostra habitant malesuada fames volutpat libero himenaeos egestas, semper ligula.",
  ];

  return (
    <View className="flex-1 pt-13 bg-light px-7.5">
      <TextComponent
        fontFamily="Obviously"
        fontWeight="SemiBold"
        color="dark"
        fontSize="h4"
        customClassName="text-center">
        Apagar conta
      </TextComponent>

      <View className="mt-14.5 mb-6">
        <TextComponent
          fontFamily="Obviously"
          fontWeight="SemiBold"
          color="dark"
          fontSize="h6"
          customClassName="text-center">
          Ao apagar sua conta,{" "}
          <TextComponent
            fontFamily="Obviously"
            fontWeight="SemiBold"
            color="accentOne"
            fontSize="h6"
            customClassName="text-center">
            você perde:
          </TextComponent>
        </TextComponent>
      </View>

      <View>
        <FlatList
          data={items}
          renderItem={({item}) => (
            <View className="flex-row">
              <TextComponent
                fontFamily="TTInterphases"
                fontWeight="Regular"
                color="grayTen"
                fontSize="subtitleOne">
                {"\u2022"}
              </TextComponent>
              <TextComponent
                fontFamily="TTInterphases"
                fontWeight="Regular"
                color="grayTen"
                fontSize="subtitleOne"
                customClassName="ml-2">
                {item}
              </TextComponent>
            </View>
          )}
        />

        <View className="gap-y-4 mt-9">
          <Button
            text="Apagar minha conta"
            onPress={() => console.log("Apagar minha conta")}
            customBackgroundColor="transparent"
            customTextColor="grayTwo"
            customClassName="border border-grayTwo"
            customBackgroundOnPressColor="transparent"
          />

          <Button text="Cancelar" onPress={() => router.back()} />
        </View>
      </View>
    </View>
  );
}
