// app/(app)/layout.tsx
import { View } from "react-native";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
