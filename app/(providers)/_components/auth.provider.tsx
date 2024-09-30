"use client";

import api from "@/api/api";
import useAuthStore from "@/zustand/auth.store";
import { useQuery } from "@tanstack/react-query";
import React, { PropsWithChildren, useEffect } from "react";

function AuthProvider({ children }: PropsWithChildren) {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
	const initializeAuth = useAuthStore((state) => state.initializeAuth);

	const { data: token } = useQuery({
		queryKey: ["auth"],
		queryFn: () => api.auth.refreshToken(),
	});

	useEffect(() => {
		if (!token) return;
		if (isLoggedIn || token.result) {
			setIsLoggedIn(true);
		}
		if (isLoggedIn) {
			setIsLoggedIn(false);
		}
		initializeAuth();
	}, [token]);

	return children;
}

export default AuthProvider;
