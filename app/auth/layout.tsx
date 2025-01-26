import {View} from "react-native";
import {Stack} from "expo-router";

export default function AuthLayout() {
  return (
    <View className="flex-1">
      <Stack.Screen name="auth" options={{headerShown: false}} />
      <Stack.Screen name="auth/slider" options={{headerShown: false}} />
    </View>
  );
}
