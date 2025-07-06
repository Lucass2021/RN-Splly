import BackButtonHeader from "@/components/backButtonHeader/backButtonHeader";
import CustomIcon from "@/components/customIcon/customIcon";
import {Image, Platform, Pressable, ScrollView, View} from "react-native";
import userDemo from "@/assets/images/user.png";
import Input from "@/components/input/input";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import z from "zod";
import Button from "@/components/button/button";

const EditProfileSchema = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
});

type EditProfile = z.infer<typeof EditProfileSchema>;

export default function EditProfileScreen() {
  const form = useForm<EditProfile>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {handleSubmit} = form;

  const handleUpdateUserData = async (data: EditProfile) => {
    console.log("data", data);
  };

  return (
    <ScrollView
      className="flex-1 pt-13 bg-light"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: Platform.OS === "ios" ? 20 : 100}}>
      <View className="px-7.5 ">
        <BackButtonHeader title="Seu perfil" customClassName="mb-7" />

        <View className="flex-row justify-center">
          <Pressable className="relative">
            <Image
              source={userDemo}
              className="rounded-2xl w-32 h-32"
              resizeMode="cover"
            />

            <View className="absolute bottom-0 right-0 bg-secondaryVariantOne rounded-md p-2">
              <CustomIcon
                iconName="editPencil"
                iconColor="lightOne"
                iconWidth={16}
                iconHeight={16}
              />
            </View>
          </Pressable>
        </View>

        <View>
          <FormProvider {...form}>
            <Input
              name="name"
              customPlaceholder="Nome"
              keyboardType="default"
              autoComplete="off"
              autoCorrect={false}
            />
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

          <Button
            text="Atualizar"
            onPress={() => handleSubmit(handleUpdateUserData)()}
            disabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
}
