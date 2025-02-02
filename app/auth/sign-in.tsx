import Button from "@/components/button/button";
import Input from "@/components/input/input";
import TextComponent from "@/components/text/text";
import {useAuthActions} from "@/store/auth";
import {zodResolver} from "@hookform/resolvers/zod";
import {router} from "expo-router";
import {FormProvider, useForm} from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
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
            <TextComponent
              fontFamily="Obviously"
              fontWeight="SemiBold"
              color="warningOne"
              // fontSize="h3"
              fontSize="h4"
              customClassName="text-center mb-5">
              Bem vindo de volta!
            </TextComponent>
            <TextComponent
              fontFamily="TTInterphases"
              fontWeight="Regular"
              color="grayOne"
              fontSize="subtitleOne"
              customClassName="text-center">
              Lorem ipsum potenti orci suspendisse aliquam nullam ornare
              dictumst id, dictumst risus viverra.
            </TextComponent>
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
            <TextComponent
              fontFamily="TTInterphases"
              fontWeight="Regular"
              color="dark"
              fontSize="paragraphTwo"
              customClassName="underline">
              Esqueci minha senha
            </TextComponent>
          </Pressable>

          <View className="mt-12 w-full">
            <Button
              text="Entrar"
              onPress={() => handleSubmit(handleSignIn)()}
              disabled={false}
            />
            <Pressable onPress={() => router.push("/auth/sign-up")}>
              <TextComponent
                fontFamily="TTInterphases"
                fontWeight="Regular"
                color="grayTwo"
                fontSize="caption"
                customClassName="mt-3 text-center">
                Ainda não tem uma conta?{" "}
                <TextComponent
                  fontFamily="TTInterphases"
                  fontWeight="Regular"
                  color="grayThree"
                  fontSize="caption"
                  customClassName="underline">
                  Criar uma
                </TextComponent>
              </TextComponent>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
