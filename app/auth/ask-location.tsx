import Button from "@/components/button/button";
import IconButton from "@/components/iconButton/iconButton";
import TextComponent from "@/components/text/text";
import {useAskUserLocation} from "@/hooks/useAskUserLocation";
import {useAuthActions} from "@/store/auth";
import {router} from "expo-router";
import {useState} from "react";
import {Linking, View} from "react-native";
import * as Location from "expo-location";

export default function AskLocation() {
  const [openPhonePermissions, setOpenPhonePermissions] = useState(false);
  const {login, logout, setUserLocation} = useAuthActions();
  const {requestLocation} = useAskUserLocation();

  const handleAskPermissionAndLogin = async () => {
    console.log("Ask Permission and Login");
    const userHasLocationPermission = await requestLocation();
    if (userHasLocationPermission) {
      const location = await Location.getCurrentPositionAsync({});
      console.log("location", location);
      //Location must be send to API and API must return user location
      setUserLocation(location);
      login();
      router.replace("/");
    } else {
      setOpenPhonePermissions(true);
    }
  };

  const handlePhonePermissions = () => {
    Linking.openSettings();
    setOpenPhonePermissions(false);
  };

  const handleLogout = () => {
    console.log("Logout");
    logout();
    router.replace("/auth/sign-in");
  };

  return (
    <View className="flex-1 px-7.5 pt-13 bg-light">
      <View className="items-center mb-5">
        <IconButton
          iconName="locationPin"
          iconColor="primaryVariantOne"
          buttonBackgroundColor="grayFive"
          iconWidth={24}
          iconHeight={24}
        />
      </View>

      <View className="flex-1">
        <TextComponent
          fontFamily="Obviously"
          fontWeight="SemiBold"
          color="warningOne"
          fontSize="h5"
          customClassName="text-center mb-5">
          O acesso à sua localização é necessário para a utilização do
          aplicativo
        </TextComponent>

        <TextComponent
          fontFamily="TTInterphases"
          fontWeight="Regular"
          color="dark"
          fontSize="subtitleOne"
          customClassName="text-center mb-1">
          Sem o acesso à sua localização não conseguimos prosseguir com os
          agendamentos.
        </TextComponent>
        <TextComponent
          fontFamily="TTInterphases"
          fontWeight="SemiBold"
          color="dark"
          fontSize="subtitleOne"
          customClassName="text-center mb-5">
          Você permite o acesso à sua localização?
        </TextComponent>
      </View>

      <View className="mb-13">
        <Button
          text={
            openPhonePermissions ? "Abrir configurações" : "Permitir acesso"
          }
          onPress={() =>
            openPhonePermissions
              ? handlePhonePermissions()
              : handleAskPermissionAndLogin()
          }
          customClassName="mb-5"
          customDisabledEffect={0}
        />
        <Button
          text="Sair"
          onPress={() => handleLogout()}
          customBackgroundColor="light"
          customTextColor="secondaryVariantOne"
          customClassName="border border-2 border-secondaryVariantOne"
        />
      </View>
    </View>
  );
}
