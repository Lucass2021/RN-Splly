import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useFonts} from "expo-font";
import {Stack, useRouter} from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {useEffect} from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";

import {StatusBar} from "expo-status-bar";

import {useIsLoggedIn} from "@/store/auth";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import "../src/global.css";
import {toastConfig} from "@/theme/toastConfig";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ObviouslyLight: require("../assets/fonts/fonnts.com-Obviously_Lght.otf"),
    ObviouslyMedium: require("../assets/fonts/fonnts.com-Obviously_Medi.otf"),
    ObviouslyRegular: require("../assets/fonts/Obviously-Regular.otf"),
    ObviouslySemiBold: require("../assets/fonts/fonnts.com-Obviously_Semi.otf"),
    ObviouslyBold: require("../assets/fonts/fonnts.com-Obviously_Bold.otf"),
    TTInterphasesLight: require("../assets/fonts/TT-Interphases-Pro-Trial-Light.ttf"),
    TTInterphasesRegular: require("../assets/fonts/TT-Interphases-Pro-Trial-Regular.ttf"),
    TTInterphasesMedium: require("../assets/fonts/TT-Interphases-Pro-Trial-Medium.ttf"),
    TTInterphasesSemiBold: require("../assets/fonts/TT-Interphases-Pro-Trial-DemiBold.ttf"),
    TTInterphasesBold: require("../assets/fonts/TT-Interphases-Pro-Trial-Bold.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <RootLayoutNav />
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="(app)"
          redirect={!isLoggedIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="auth"
          redirect={isLoggedIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="terms-and-conditions"
          options={{headerShown: false}}
        />
      </Stack>
    </SafeAreaView>
  );
}
