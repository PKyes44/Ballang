"use client";

import useAuthStore from "@/zustand/auth.store";
import { ComponentProps } from "react";
import Page from "../Page/Page";
import LogInForm from "./LogInForm";

function LogInModal() {
  const isShowLogInForm = useAuthStore((state) => state.isShowLogInForm);
  const toggleIsShowLogInForm = useAuthStore(
    (state) => state.toggleIsShowLogInForm
  );
  const handleClickHideLogInForm: ComponentProps<"article">["onClick"] = (
    e
  ) => {
    console.log(e.target === e.currentTarget);
    if (e.target === e.currentTarget) {
      toggleIsShowLogInForm();
    }
  };
  return (
    <>
      {isShowLogInForm && (
        <article
          className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-40 grid place-content-center"
          onClick={handleClickHideLogInForm}
        >
          <Page
            title="로그인"
            className="bg-white px-5 pb-10 rounded-lg w-full"
          >
            <LogInForm />
          </Page>
        </article>
      )}
    </>
  );
}

export default LogInModal;
