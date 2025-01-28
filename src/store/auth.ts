import AsyncStorage from "@react-native-async-storage/async-storage";
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
      },
      set => ({
        actions: {
          login: () => set({isLoggedIn: true}),
          logout: () => set({isLoggedIn: false}),
          setFirstAccess: (firstAccessValue: boolean) =>
            set({isFirstAccess: firstAccessValue}),
          setUserName: (name: string) => set({userName: name}),
          setUserEmail: (email: string) => set({userEmail: email}),
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
