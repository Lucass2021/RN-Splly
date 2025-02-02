import Button from "@/components/button/button";
import TextComponent from "@/components/text/text";
import {useAuthActions} from "@/store/auth";
import {router} from "expo-router";
import {Dimensions, Image, Pressable, View} from "react-native";

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
        <TextComponent
          fontFamily="Obviously"
          fontWeight="SemiBold"
          fontSize="h3"
          color="warningOne"
          customClassName="text-center">
          O seu app{" "}
          <TextComponent
            fontFamily="Obviously"
            fontWeight="Light"
            color="darkOne"
            fontSize="h3">
            de agendamentos
          </TextComponent>
        </TextComponent>
      </View>

      <View className="mb-7.5">
        <TextComponent
          fontFamily="TTInterphases"
          fontWeight="Medium"
          color="grayOne"
          fontSize="subtitleOne"
          customClassName="text-center">
          Lorem ipsum potenti orci suspendisse aliquam nullam ornare dictumst
          id, dictumst risus viverra.
        </TextComponent>
      </View>

      <View>
        <Button text="Vamos Começar" onPress={handleNavigateToSlider} />
        <Pressable onPress={handleNavigateToSignIn}>
          <TextComponent
            fontFamily="TTInterphases"
            fontWeight="Regular"
            color="grayTwo"
            fontSize="caption"
            customClassName="mt-3 text-center">
            Já tem uma conta?{" "}
            <TextComponent
              fontFamily="TTInterphases"
              fontWeight="Regular"
              color="grayThree"
              fontSize="caption"
              customClassName="underline">
              Fazer Login
            </TextComponent>
          </TextComponent>
        </Pressable>
      </View>
    </View>
  );
}
