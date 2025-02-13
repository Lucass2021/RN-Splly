import {
  getForegroundPermissionsAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";

import Toast from "react-native-toast-message";

export const useAskUserLocation = () => {
  const requestLocation = async () => {
    let locationAccess = await getForegroundPermissionsAsync();

    if (
      locationAccess.status === "undetermined" ||
      locationAccess.status === "denied"
    ) {
      locationAccess = await requestForegroundPermissionsAsync();
    }

    if (!locationAccess.canAskAgain) {
      Toast.show({
        type: "info",
        text1: "Vá até as configurações para conceder a permissão",
      });
      return;
    }

    if (locationAccess.granted) {
      return true;
    }
  };

  return {requestLocation};
};
