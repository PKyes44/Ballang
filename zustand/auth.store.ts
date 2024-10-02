import { create } from "zustand";

interface AuthState {
  isAuthinitialzed: boolean;
  isLoggedIn: boolean;
  isShowLogInForm: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  initializeAuth: () => void;
  toggleIsShowLogInForm: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthinitialzed: false,
  isLoggedIn: false,
  isShowLogInForm: false,
  setIsLoggedIn: (isLoggedIn: boolean) => set(() => ({ isLoggedIn })),
  initializeAuth: () => set({ isAuthinitialzed: true }),
  toggleIsShowLogInForm: () =>
    set((state) => {
      return { isShowLogInForm: !state.isShowLogInForm };
    }),
}));

export default useAuthStore;
