"use client";

import useModalStore from "@/zustand/modal.store";
import { ComponentProps } from "react";
import Modal from "../Modal/Modal";
import Page from "../Page/Page";
import LogInForm from "./LogInForm";

function LogInModal() {
  const isShowLogInForm = useModalStore((state) => state.isShowLogInForm);
  const toggleIsShowLogInForm = useModalStore(
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
        <Modal handleClickOutRange={handleClickHideLogInForm}>
          <Page
            title="로그인"
            className="bg-white px-5 pb-10 rounded-lg w-full"
          >
            <LogInForm />
          </Page>
        </Modal>
      )}
    </>
  );
}

export default LogInModal;
