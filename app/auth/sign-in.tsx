import Button from "@/components/button/button";
import Input from "@/components/input/input";
import {useAuthActions} from "@/store/auth";
import {zodResolver} from "@hookform/resolvers/zod";
import {router} from "expo-router";
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

const signInFormSchema = z.object({
  email: z
    .string()
    .email("Email inválido")
    .min(1, {message: "Informe o seu Email"}),
  password: z.string().min(1, {message: "Informe sua senha"}),
});

type SignInForm = z.infer<typeof signInFormSchema>;

export default function SignIn() {
  const {setUserEmail, login} = useAuthActions();

  const form = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {handleSubmit} = form;

  const handleSignIn = async (data: SignInForm) => {
    console.log("data", data);
    setUserEmail(data.email);

    login();
    router.replace("/");
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View className="flex-1 px-7.5 pt-13 justify-center bg-light">
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
          }}>
          <View className="mb-7.5">
            <Text className="text-center color-warningOne text-3xl font-obviouslyBold mb-5">
              Bem vindo de volta!
            </Text>
            <Text className="text-center color-grayOne text-base font-TTInterphasesRegular">
              Lorem ipsum potenti orci suspendisse aliquam nullam ornare
              dictumst id, dictumst risus viverra.
            </Text>
          </View>

          <FormProvider {...form}>
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
            className="w-full"
            onPress={() => router.push("/auth/forgot-password")}>
            <Text className="font-TTInterphasesRegular text-base color-black underline">
              Esqueci minha senha
            </Text>
          </Pressable>

          <View className="mt-12 w-full">
            <Button
              text="Entrar"
              onPress={() => handleSubmit(handleSignIn)()}
              disabled={false}
            />
            <Pressable onPress={() => router.push("/auth/sign-up")}>
              <Text className="mt-3 text-sm text-center font-TTInterphasesRegular color-grayTwo">
                Ainda não tem uma conta?{" "}
                <Text className="color-grayThree underline">Criar uma</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
