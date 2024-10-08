"use client";

import InputGroup from "@/components/Input/InputGroup";
import { inputKeys } from "@/models/Input";
import Button from "../Button/Button";
import useLogInForm from "./LogInForm.hooks";

function LogInForm() {
  const { formRef, errorMsgs, isDisabled, handleSubmitLogIn } = useLogInForm();

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmitLogIn}
      className="flex flex-col gap-y-3"
    >
      <InputGroup
        label="이메일"
        wrapperClassName="w-96"
        name={inputKeys.email}
        errorText={errorMsgs.email}
        disabled={isDisabled}
      />
      <InputGroup
        label="비밀번호"
        wrapperClassName="w-96"
        name={inputKeys.password}
        errorText={errorMsgs.password}
        disabled={isDisabled}
        type="password"
      />
      <Button className="mt-8 w-96" size="md" errorText={errorMsgs.global}>
        로그인하기
      </Button>
    </form>
  );
}

export default LogInForm;
