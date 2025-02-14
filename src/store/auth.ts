import AsyncStorage from "@react-native-async-storage/async-storage";
import {LocationObject} from "expo-location";
import {create} from "zustand";
import {combine, createJSONStorage, persist} from "zustand/middleware";

const authStore = create(
  persist(
    combine(
      {
        isLoggedIn: false,
        isFirstAccess: true,
        userName: "",
        userEmail: "",
        hasUserAcceptedTermsAndConditions: false,
        userLocation: undefined as LocationObject | undefined,
      },
      set => ({
        actions: {
          login: () => set({isLoggedIn: true}),
          logout: () =>
            set({isLoggedIn: false, hasUserAcceptedTermsAndConditions: false}),
          setFirstAccess: (firstAccessValue: boolean) =>
            set({isFirstAccess: firstAccessValue}),
          setUserName: (name: string) => set({userName: name}),
          setUserEmail: (email: string) => set({userEmail: email}),
          setUserTermsAndConditions: (userTermsAndConditions: boolean) =>
            set({hasUserAcceptedTermsAndConditions: userTermsAndConditions}),
          setUserLocation: (userLocationValue: LocationObject | undefined) =>
            set({userLocation: userLocationValue}),
        },
      }),
    ),
    {
      name: "user",
      storage: createJSONStorage(() => AsyncStorage),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      partialize: ({actions, ...rest}) => rest,
    },
  ),
);

export const useAuthActions = () => authStore(state => state.actions);

export const useIsLoggedIn = () => authStore(state => state.isLoggedIn);
export const useIsFirstAccess = () => authStore(state => state.isFirstAccess);

export const useUserName = () => authStore(state => state.userName);
export const useUserEmail = () => authStore(state => state.userEmail);
export const useUserTermsAndConditions = () =>
  authStore(state => state.hasUserAcceptedTermsAndConditions);
export const useUserLocation = () => authStore(state => state.userLocation);
