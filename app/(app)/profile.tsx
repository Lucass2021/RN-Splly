import ArrowDownComponent from "@/assets/icons/arrowDown";
import TextComponent from "@/components/text/text";
import {useAuthActions} from "@/store/auth";
import {Colors} from "@/theme/colors";
import {router} from "expo-router";
import {Image, Platform, Pressable, ScrollView, View} from "react-native";

export default function ProfileScreen() {
  const {logout} = useAuthActions();
  const userDemo = require("../../src/assets/images/user.png");

  const handleUserLogout = () => {
    logout();
    router.replace("/auth/sign-in");
  };

  return (
    <ScrollView
      className="flex-1 pt-13 bg-light"
      contentContainerStyle={{paddingBottom: Platform.OS === "ios" ? 50 : 100}}>
      <View className="px-7.5">
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

        <View className="mt-5 bg-secondaryVariantThree rounded-2xl p-3 flex-row items-center gap-3.5">
          <Image source={userDemo} className="rounded-2xl" resizeMode="cover" />

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
      </View>
    </ScrollView>
  );
}
