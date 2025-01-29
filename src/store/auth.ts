import AsyncStorage from "@react-native-async-storage/async-storage";
import {create} from "zustand";
import {combine, createJSONStorage, persist} from "zustand/middleware";

const authStore = create(
  persist(
    combine(
      {
        isLoggedIn: false,
        userName: "",
        userEmail: "",
        hasUserAcceptedTermsAndConditions: false,
      },
      set => ({
        actions: {
          login: () => set({isLoggedIn: true}),
          logout: () => set({isLoggedIn: false}),
          setUserName: (name: string) => set({userName: name}),
          setUserEmail: (email: string) => set({userEmail: email}),
          setUserTermsAndConditions: (userTermsAndConditions: boolean) =>
            set({hasUserAcceptedTermsAndConditions: userTermsAndConditions}),
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

export const useUserName = () => authStore(state => state.userName);
export const useUserEmail = () => authStore(state => state.userEmail);
export const useUserTermsAndConditions = () =>
  authStore(state => state.hasUserAcceptedTermsAndConditions);
