import Button from "@/components/button/button";
import Input from "@/components/input/input";
import {useAuthActions} from "@/store/auth";
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
  const {setUserName, setUserEmail, login} = useAuthActions();
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

    setUserName(data.name);
    setUserEmail(data.email);

    login();
    router.replace("/");
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

          <Pressable
            className="flex-row gap-2.5"
            onPress={() => setChecked(!isChecked)}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={checkBoxColor}
            />
            <Text className="font-TTInterphasesLight text-base color-black">
              Concordo com os{" "}
              <Text className="font-TTInterphasesRegular underline">
                Termos & Condições
              </Text>
            </Text>
          </Pressable>

          <View className="mt-12 w-full">
            <Button
              text="Criar Conta"
              onPress={() => handleSubmit(handleSignUp)()}
              disabled={!isChecked}
            />
            <Text className="mt-3 text-sm text-center font-TTInterphasesRegular color-grayTwo">
              Já tem uma conta?{" "}
              <Text className="color-grayThree underline">Fazer Login</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
