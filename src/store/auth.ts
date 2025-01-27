import {MMKV} from "react-native-mmkv";
import {create} from "zustand";
import {combine, createJSONStorage, persist} from "zustand/middleware";

const mmkvStorage = new MMKV();

const mmkvAdapter = {
  getItem: (key: string): any => {
    const value = mmkvStorage.getString(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: (key: string, value: any): void => {
    mmkvStorage.set(key, JSON.stringify(value));
  },
  removeItem: (key: string): void => {
    mmkvStorage.delete(key);
  },
};

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
      storage: createJSONStorage(() => mmkvAdapter),
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
