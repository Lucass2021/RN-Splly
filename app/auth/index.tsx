import Button from "@/components/button/button";
import {useAuthActions} from "@/store/auth";
import {router} from "expo-router";
import {Dimensions, Image, Pressable, Text, View} from "react-native";

export default function Index() {
  const {setFirstAccess} = useAuthActions();
  const bannerDemoImage = require("../../src/assets/images/auth-demo.jpg");
  const {height} = Dimensions.get("window");
  const imageHeight = height * 0.4;

  const handleNavigateToSignIn = () => {
    setFirstAccess(false);
    router.push("/auth/sign-in");
  };

  const handleNavigateToSlider = () => {
    setFirstAccess(false);
    router.push("/auth/slider");
  };

  return (
    <View className="flex-1 px-7.5 justify-center bg-light">
      <View className="rounded-2xl">
        <Image
          source={bannerDemoImage}
          className="w-full rounded-2xl"
          style={{height: imageHeight}}
          resizeMode="cover"
        />
      </View>

      <View className="mt-10 mb-5">
        <Text className="font-ObviouslyLight text-2.5xl color-darkOne text-center">
          <Text className="font-obviouslySemiBold color-warningOne">
            O seu app
          </Text>{" "}
          de agendamentos
        </Text>
      </View>

      <View className="mb-7.5">
        <Text className="font-TTInterphasesMedium  text-base text-center color-grayOne">
          Lorem ipsum potenti orci suspendisse aliquam nullam ornare dictumst
          id, dictumst risus viverra.
        </Text>
      </View>

      <View>
        <Button text="Vamos Começar" onPress={handleNavigateToSlider} />
        <Pressable onPress={handleNavigateToSignIn}>
          <Text className="mt-3 text-sm text-center font-TTInterphasesRegular color-grayTwo">
            Já tem uma conta?{" "}
            <Text className="color-grayThree underline">Fazer Login</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
