import { create } from "zustand";

interface AuthState {
  isAuthinitialzed: boolean;
  isLoggedIn: boolean;
  isShowLogInForm: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  initializeAuth: () => void;
  setIsShowLogInForm: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthinitialzed: false,
  isLoggedIn: false,
  isShowLogInForm: false,
  setIsLoggedIn: (isLoggedIn: boolean) => set(() => ({ isLoggedIn })),
  initializeAuth: () => set({ isAuthinitialzed: true }),
  setIsShowLogInForm: () => set({ isShowLogInForm: true }),
}));

export default useAuthStore;
