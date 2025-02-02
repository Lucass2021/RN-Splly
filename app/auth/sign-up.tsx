import Button from "@/components/button/button";
import Input from "@/components/input/input";
import TextComponent from "@/components/text/text";
import {useAuthActions, useUserTermsAndConditions} from "@/store/auth";
import {Colors} from "@/theme/colors";
import {zodResolver} from "@hookform/resolvers/zod";
import Checkbox from "expo-checkbox";
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
  const userTermsAndConditions = useUserTermsAndConditions();
  const {setUserTermsAndConditions} = useAuthActions();
  const checkBoxColor = userTermsAndConditions
    ? Colors.confirm
    : Colors.graySix;

  const form = useForm<SignUpForm>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {handleSubmit} = form;

  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Usuario criado com sucesso",
    });
  };

  const handleSignUp = async (data: SignUpForm) => {
    console.log("data", data);
    showToast();
  };

  const handleAcceptTermsAndConditions = () => {
    setUserTermsAndConditions(!userTermsAndConditions);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View className="flex-1 px-7.5 pt-13 bg-light">
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
              Crie sua conta
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
            <Pressable onPress={handleAcceptTermsAndConditions} hitSlop={20}>
              <Checkbox
                value={userTermsAndConditions}
                onValueChange={handleAcceptTermsAndConditions}
                color={checkBoxColor}
              />
            </Pressable>

            <View className="flex-row">
              <TextComponent
                fontFamily="TTInterphases"
                fontWeight="Light"
                color="dark"
                fontSize="paragraphTwo">
                Concordo com os{" "}
              </TextComponent>

              <Pressable onPress={() => router.push("/terms-and-conditions")}>
                <TextComponent
                  fontFamily="TTInterphases"
                  fontWeight="Regular"
                  color="dark"
                  fontSize="paragraphTwo"
                  customClassName="underline">
                  Termos & Condições
                </TextComponent>
              </Pressable>
            </View>
          </View>

          <View className="mt-12 w-full">
            <Button
              text="Criar Conta"
              onPress={() => handleSubmit(handleSignUp)()}
              disabled={!userTermsAndConditions}
            />
            <Pressable onPress={() => router.push("/auth/sign-in")}>
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
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
