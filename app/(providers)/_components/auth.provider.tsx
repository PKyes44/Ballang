"use client";

import api from "@/api/api";
import useAuthStore from "@/zustand/auth.store";
import { useQuery } from "@tanstack/react-query";
import { PropsWithChildren, useEffect } from "react";

function AuthProvider({ children }: PropsWithChildren) {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const isAuthinitialzed = useAuthStore((state) => state.isAuthinitialzed);
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  const { data: token } = useQuery({
    queryKey: ["auth"],
    queryFn: () => api.auth.refreshToken(),
  });

  useEffect(() => {
    if (!isAuthinitialzed) {
      if (token === undefined) return;
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      initializeAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return children;
}

export default AuthProvider;
