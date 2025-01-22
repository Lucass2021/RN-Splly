// app/(app)/layout.tsx
import { View } from "react-native";
import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
