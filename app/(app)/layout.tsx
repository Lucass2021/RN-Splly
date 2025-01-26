// app/(app)/layout.tsx
import {View} from "react-native";
import {Stack} from "expo-router";

export default function AppLayout() {
  return (
    <View className="flex-1">
      <Stack.Screen name="(app)" options={{headerShown: false}} />
    </View>
  );
}
