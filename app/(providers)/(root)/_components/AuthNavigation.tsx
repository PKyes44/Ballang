"use client";

import api from "@/api/api";
import useAuthStore from "@/zustand/auth.store";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AuthNavigation() {
  const router = useRouter();
  const isAuthinitialzed = useAuthStore((state) => state.isAuthinitialzed);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const toggleIsShowLogInForm = useAuthStore(
    (state) => state.toggleIsShowLogInForm
  );

  const { mutate: logOut } = useMutation({
    mutationFn: () => api.auth.logOut(),
    onSuccess: () => {
      setIsLoggedIn(false);
    },
  });

  const handleShowLogInForm = () => {
    router.push("/");
    toggleIsShowLogInForm();
  };

  useEffect(() => {
    console.log(isAuthinitialzed, isLoggedIn);
  }, []);
  return (
    <>
      {isAuthinitialzed ? (
        !isLoggedIn ? (
          <>
            <Link href="/sign-up">회원가입</Link>
            <button onClick={handleShowLogInForm}>로그인</button>
          </>
        ) : (
          <>
            <Link href="/cart">장바구니</Link>
            <button onClick={() => logOut()}>로그아웃</button>
          </>
        )
      ) : null}
    </>
  );
}

export default AuthNavigation;
