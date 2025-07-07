import ArrowDownComponent from "@/assets/icons/arrowDown";
import CustomIcon from "@/components/customIcon/customIcon";
import TextComponent from "@/components/text/text";
import {useAuthActions} from "@/store/auth";
import {Colors} from "@/theme/colors";
import {IconName} from "@/theme/icons";
import {router} from "expo-router";
import {Image, Pressable, ScrollView, View} from "react-native";

type ProfileOptionsListType = {
  name: string;
  iconName: IconName;
  iconColor: keyof typeof Colors;
  iconWidth: number;
  iconHeight: number;
  onPress: () => void;
}[];

export default function ProfileScreen() {
  const {logout} = useAuthActions();
  const userDemo = require("../../src/assets/images/user.png");

  const profileOptionsList: ProfileOptionsListType = [
    {
      name: "Histórico",
      iconName: "history",
      iconColor: "secondaryVariantOne",
      iconWidth: 20,
      iconHeight: 20,
      onPress: () => console.log("Histórico"),
    },
    {
      name: "Pagamento",
      iconName: "payment",
      iconColor: "secondaryVariantOne",
      iconWidth: 20,
      iconHeight: 20,
      onPress: () => console.log("Pagamento"),
    },
    {
      name: "Favoritos",
      iconName: "favorite",
      iconColor: "secondaryVariantOne",
      iconWidth: 20,
      iconHeight: 20,
      onPress: () => console.log("Favoritos"),
    },
    {
      name: "Transações",
      iconName: "transactions",
      iconColor: "secondaryVariantOne",
      iconWidth: 20,
      iconHeight: 20,
      onPress: () => console.log("Transações"),
    },
    {
      name: "Configurações",
      iconName: "settings",
      iconColor: "secondaryVariantOne",
      iconWidth: 20,
      iconHeight: 20,
      onPress: () => console.log("Configurações"),
    },
    {
      name: "Ajuda",
      iconName: "help",
      iconColor: "secondaryVariantOne",
      iconWidth: 20,
      iconHeight: 20,
      onPress: () => console.log("Ajuda"),
    },
    {
      name: "Privacidade",
      iconName: "privacy",
      iconColor: "secondaryVariantOne",
      iconWidth: 20,
      iconHeight: 20,
      onPress: () => console.log("Privacidade"),
    },
    {
      name: "Sair",
      iconName: "logout",
      iconColor: "secondaryVariantOne",
      iconWidth: 20,
      iconHeight: 20,
      onPress: () => console.log("Sair"),
    },
  ];

  const handleUserLogout = () => {
    logout();
    router.replace("/auth/sign-in");
  };

  return (
    <ScrollView
      className="flex-1 pt-13 bg-light"
      contentContainerStyle={{
        // paddingBottom: Platform.OS === "ios" ? 50 : 100,
        flexGrow: 1,
      }}>
      <View className="flex-1 justify-between">
        <View>
          <Pressable onPress={handleUserLogout}>
            <View className="justify-center items-center">
              <TextComponent
                fontFamily="Obviously"
                fontWeight="SemiBold"
                color="dark"
                fontSize="h6">
                Perfil
              </TextComponent>
            </View>
          </Pressable>

          <Pressable
            className="px-7.5"
            onPress={() => router.push("/edit-profile")}>
            <View className="mt-5 bg-secondaryVariantThree rounded-2xl p-3 flex-row items-center gap-3.5">
              <Image
                source={userDemo}
                className="rounded-2xl"
                resizeMode="cover"
              />

              <View>
                <TextComponent
                  fontFamily="TTInterphases"
                  fontWeight="Bold"
                  color="lightOne"
                  fontSize="h6">
                  Gabriel de Mello
                </TextComponent>
                <View className="flex-row items-center gap-x-2">
                  <TextComponent
                    fontFamily="Obviously"
                    fontWeight="Medium"
                    color="grayNine"
                    fontSize="caption">
                    Editar Detalhes
                  </TextComponent>
                  <View className="-rotate-90">
                    <ArrowDownComponent
                      color={Colors.grayNine}
                      width={15}
                      height={20}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Pressable>

          <View className="mt-6">
            {profileOptionsList.map((item, index) => (
              <Pressable
                className="flex-row items-center justify-between px-7.5 py-3"
                style={[
                  index !== profileOptionsList.length - 1 && {
                    borderBottomWidth: 2,
                    borderBottomColor: "#EEEEEE",
                  },
                ]}
                onPress={item.onPress}
                key={index}>
                <View className="flex-row items-center">
                  <CustomIcon
                    iconName={item.iconName}
                    iconColor={item.iconColor}
                    iconWidth={item.iconWidth}
                    iconHeight={item.iconHeight}
                  />

                  <TextComponent
                    fontFamily="TTInterphases"
                    fontWeight="Medium"
                    color="dark"
                    fontSize="h6"
                    customClassName="ml-3">
                    {item.name}
                  </TextComponent>
                </View>

                <View className="-rotate-90">
                  <ArrowDownComponent
                    color={Colors.secondaryVariantOne}
                    width={15}
                    height={20}
                  />
                </View>
              </Pressable>
            ))}
          </View>
        </View>

        <View className="flex justify-center items-center mb-2.5">
          <TextComponent
            fontFamily="TTInterphases"
            fontWeight="Medium"
            color="grayNine"
            fontSize="subtitleTwo">
            Versão {process.env.EXPO_PUBLIC_APP_VERSION}
          </TextComponent>
        </View>
      </View>
    </ScrollView>
  );
}
