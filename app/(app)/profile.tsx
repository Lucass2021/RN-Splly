import Button from "@/components/button/button";
import {useAuthActions} from "@/store/auth";
import {router} from "expo-router";
import {Text, View} from "react-native";

export default function ProfileScreen() {
  const {logout} = useAuthActions();

  const handleUserLogout = () => {
    logout();
    router.replace("/auth/sign-in");
  };

  return (
    <View className="flex-1 justify-center items-center px-7.5">
      <View className="w-full">
        <Text className="text-center mb-5 font-obviouslyBold">
          Profile App Route
        </Text>
        <Button text="Logout" onPress={handleUserLogout} />
      </View>
    </View>
  );
}
