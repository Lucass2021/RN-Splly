import Button from "@/components/button/button";
import Input from "@/components/input/input";
import {zodResolver} from "@hookform/resolvers/zod";
import Checkbox from "expo-checkbox";
import {router} from "expo-router";
import {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import {z} from "zod";

const signUpFormSchema = z.object({
  name: z.string().min(1, {message: "Informe o seu nome"}),
  email: z
    .string()
    .email("Email inválido")
    .min(1, {message: "Informe o seu Email"}),
  password: z.string().min(1, {message: "Informe sua senha"}),
});

type SignUpForm = z.infer<typeof signUpFormSchema>;

export default function SignUp() {
  const [isChecked, setChecked] = useState(false);
  const checkBoxColor = isChecked ? "#A9E5BB" : "#808080";

  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {handleSubmit} = form;

  const handleSignUp = async (data: SignUpForm) => {
    console.log("data", data);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View className="flex-1 px-7.5 justify-center">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <View className="mb-7.5">
            <Text className="text-center color-warningOne text-3xl font-obviouslyBold mb-5">
              Crie sua conta
            </Text>
            <Text className="text-center color-grayOne text-base font-TTInterphasesRegular">
              Lorem ipsum potenti orci suspendisse aliquam nullam ornare
              dictumst id, dictumst risus viverra.
            </Text>
          </View>

          <FormProvider {...form}>
            <Input name="name" customPlaceholder="Nome" />
            <Input
              name="email"
              customPlaceholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
            />
            <Input
              name="password"
              customPlaceholder="Senha"
              keyboardType="default"
              secureTextEntry
            />
          </FormProvider>

          <View className="flex-row gap-2.5">
            <Pressable onPress={() => setChecked(!isChecked)} hitSlop={20}>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={checkBoxColor}
              />
            </Pressable>

            <View className="flex-row">
              <Text className="font-TTInterphasesLight text-base color-black">
                Concordo com os{" "}
              </Text>
              <Pressable onPress={() => router.push("/terms-and-conditions")}>
                <Text className="font-TTInterphasesRegular underline text-base color-black">
                  Termos & Condições
                </Text>
              </Pressable>
            </View>
          </View>

          <View className="mt-12 w-full">
            <Button
              text="Criar Conta"
              onPress={() => handleSubmit(handleSignUp)()}
              disabled={!isChecked}
            />
            <Pressable onPress={() => router.push("/auth/sign-in")}>
              <Text className="mt-3 text-sm text-center font-TTInterphasesRegular color-grayTwo">
                Já tem uma conta?{" "}
                <Text className="color-grayThree underline">Fazer Login</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
