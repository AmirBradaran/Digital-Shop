import { create } from "zustand";
import { persist } from "zustand/middleware";

// create initial state
const initialState = {
  user: null,
  token: null,
};

export const useUserStore = create(
  persist(
    (set, get) => ({
      ...initialState, //spread  the initial state into the store
      login: ({ user, token }) => set(() => ({ user, token })), //set the user and token into  the store
      logout: () => {
        set(() => ({ user: null, token: null })); // clear  the user and token from the store
        get().clearStorage(); // clear your states from localStorage
      },
      // write function to clear localStorage
      clearStorage: () => {
        get()?.persist?.clearStorage();
      },
    }),
    {
      // here the  persist options
      name: "user", // name key  in localStorage
      getStorage: () => localStorage, // it's maybe you want use session storage or cookie storage
    }
  )
);