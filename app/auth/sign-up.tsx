import Button from "@/components/button/button";
import {Text, View} from "react-native";

export default function SignUp() {
  return (
    <View className="flex-1 px-7.5 justify-center">
      <View>
        <Text className="text-center color-warningOne text-3xl font-obviouslyBold mb-5">
          Crie sua conta
        </Text>
        <Text className="text-center color-grayOne text-base font-TTInterphasesRegular">
          Lorem ipsum potenti orci suspendisse aliquam nullam ornare dictumst
          id, dictumst risus viverra.
        </Text>
      </View>

      <View></View>

      <View className="mt-12">
        <Button text="Criar Conta" onPress={() => {}} />
        <Text className="mt-3 text-sm text-center font-TTInterphasesRegular color-grayTwo">
          Já tem uma conta?{" "}
          <Text className="color-grayThree underline">Fazer Login</Text>
        </Text>
      </View>
    </View>
  );
}
