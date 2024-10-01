"use client";

import Button from "@/components/Button/Button";
import InputGroup from "@/components/Input/InputGroup";
import { inputKeys } from "@/models/Input";
import React from "react";
import useSignUpForm from "./SignUpForm.hooks";

function SignUpForm() {
  const { formRef, isDisabled, errorMsgs, handleSubmitSignUp } =
    useSignUpForm();

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmitSignUp}
      className="flex flex-col gap-y-3"
    >
      <InputGroup
        label="이메일"
        name={inputKeys.email}
        errorText={errorMsgs.email}
        disabled={isDisabled}
      />
      <InputGroup
        label="비밀번호"
        name={inputKeys.password}
        errorText={errorMsgs.password}
        disabled={isDisabled}
        type="password"
      />
      <InputGroup
        label="비밀번호 확인"
        name={inputKeys.rePassword}
        errorText={errorMsgs.rePassword}
        disabled={isDisabled}
        type="password"
      />
      <Button
        className="mt-8"
        size="md"
        errorText={errorMsgs.global}
        disabled={isDisabled}
      >
        회원가입하기
      </Button>
    </form>
  );
}

export default SignUpForm;
