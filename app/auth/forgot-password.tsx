import Button from "@/components/button/button";
import Input from "@/components/input/input";
import TextComponent from "@/components/text/text";
import {zodResolver} from "@hookform/resolvers/zod";
import {router} from "expo-router";
import {FormProvider, useForm} from "react-hook-form";
import {KeyboardAvoidingView, Platform, ScrollView, View} from "react-native";
import {z} from "zod";

const forgotPasswordFormSchema = z.object({
  email: z
    .string()
    .email("Email inválido")
    .min(1, {message: "Informe o seu Email"}),
  password: z.string().min(1, {message: "Informe sua senha"}),
  newPassword: z.string().min(1, {message: "Informe sua nova senha"}),
});

type ForgotPasswordForm = z.infer<typeof forgotPasswordFormSchema>;

export default function ForgotPassword() {
  const form = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
      password: "",
      newPassword: "",
    },
  });

  const {handleSubmit} = form;

  const handleResetPassword = async (data: ForgotPasswordForm) => {
    console.log("data", data);

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
              Redefina sua senha
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
            <Input
              name="newPassword"
              customPlaceholder="Nova senha"
              keyboardType="default"
              secureTextEntry
            />
          </FormProvider>

          <View className="mt-12 w-full">
            <Button
              text="Entrar"
              onPress={() => handleSubmit(handleResetPassword)()}
              disabled={false}
            />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
