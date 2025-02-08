import Button from "@/components/button/button";
import Input from "@/components/input/input";
import TextComponent from "@/components/text/text";
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
import Toast from "react-native-toast-message";
import {z} from "zod";

const forgotPasswordFormSchema = z.object({
  email: z
    .string()
    .email("Email inválido")
    .min(1, {message: "Informe o seu Email"}),
});

type ForgotPasswordForm = z.infer<typeof forgotPasswordFormSchema>;

export default function ForgotPassword() {
  const form = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const {handleSubmit} = form;

  const forgotPasswordToast = () => {
    Toast.show({
      type: "success",
      text1: "Solicitaçao enviada",
      text2: "Por favor verifique seu e-mail e altere sua senha.",
    });
  };

  const handleResetPassword = async (data: ForgotPasswordForm) => {
    console.log("data", data);
    forgotPasswordToast();
    router.replace("/auth/sign-in");
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
              fontWeight="Bold"
              color="warningOne"
              fontSize="h4"
              customClassName="text-center mb-5">
              Esqueci minha senha
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
          </FormProvider>

          <View className="mt-12 w-full">
            <Button
              text="Entrar"
              onPress={() => handleSubmit(handleResetPassword)()}
              disabled={false}
            />
            <Pressable onPress={() => router.push("/auth/sign-in")}>
              <TextComponent
                fontFamily="TTInterphases"
                fontWeight="Regular"
                color="grayThree"
                fontSize="caption"
                customClassName="mt-3 text-center underline">
                Voltar
              </TextComponent>
            </Pressable>
            <Pressable onPress={() => router.push("/auth/reset-password")}>
              <TextComponent
                fontFamily="TTInterphases"
                fontWeight="Regular"
                color="grayThree"
                fontSize="caption"
                customClassName="mt-10 text-center underline">
                Reset password deep link
              </TextComponent>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
