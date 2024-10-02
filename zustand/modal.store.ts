import { create } from "zustand";

interface AuthState {
  isShowLogInForm: boolean;
  toggleIsShowLogInForm: () => void;
}

const useModalStore = create<AuthState>((set) => ({
  isShowLogInForm: false,
  toggleIsShowLogInForm: () =>
    set((state) => {
      return { isShowLogInForm: !state.isShowLogInForm };
    }),
}));

export default useModalStore;
