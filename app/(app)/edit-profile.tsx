import BackButtonHeader from "@/components/backButtonHeader/backButtonHeader";
import {Image, Platform, ScrollView, View} from "react-native";

export default function EditProfileScreen() {
  const userDemo = require("../../src/assets/images/user.png");

  return (
    <ScrollView
      className="flex-1 pt-13 bg-light"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: Platform.OS === "ios" ? 20 : 100}}>
      <View className="px-7.5">
        <BackButtonHeader title="Seu perfil" customClassName="mb-7" />

        <View>
          <Image
            source={userDemo}
            className="rounded-2xl w-32 h-32"
            resizeMode="cover"
          />
        </View>
      </View>
    </ScrollView>
  );
}
