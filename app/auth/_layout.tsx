import {useIsFirstAccess} from "@/store/auth";
import {Stack} from "expo-router";

export default function AuthLayout() {
  const isFirstAccess = useIsFirstAccess();

  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="index"
        redirect={!isFirstAccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="sign-in"
        redirect={isFirstAccess}
        options={{headerShown: false}}
      />
      <Stack.Screen name="sign-up" options={{headerShown: false}} />
      <Stack.Screen name="slider" options={{headerShown: false}} />
      <Stack.Screen name="forgot-password" options={{headerShown: false}} />
    </Stack>
  );
}
