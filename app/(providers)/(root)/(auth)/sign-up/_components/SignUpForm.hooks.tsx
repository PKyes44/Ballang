import api from "@/api/api";
import { inputKeys } from "@/models/Input";
import { AuthData } from "@/types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { ComponentProps, useRef, useState } from "react";

type InitialErrorMsgs = {
  email: string | null;
  password: string | null;
  passwordConfirm: string | null;
  global: string | null;
};
const initialErrorMsgs: InitialErrorMsgs = {
  email: null,
  password: null,
  passwordConfirm: null,
  global: null,
};
function useSignUpForm() {
  const formRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMsgs, setErrorMsgs] =
    useState<InitialErrorMsgs>(initialErrorMsgs);

  const { mutate: signUp } = useMutation({
    mutationFn: (signUpData: AuthData) => api.auth.signUp(signUpData),
    onSuccess: (data) => {
      console.log("signUp response data: ", data);
    },
    onError: (data) => {
      throwErrorMsg("global", data.message);
    },
    onMutate: () => {
      setIsDisabled(true);
    },
  });

  const handleSubmitSignUp: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();

    setErrorMsgs(initialErrorMsgs);

    if (!formRef || !formRef.current)
      return throwErrorMsg("global", "필수 요소들을 입력하여 주십시오");

    if (!formRef.current[inputKeys.email])
      return throwErrorMsg(inputKeys.email, "이메일은 필수 요소입니다");
    if (!formRef.current[inputKeys.password])
      return throwErrorMsg(inputKeys.password, "비밀번호는 필수 요소입니다");
    if (!formRef.current[inputKeys.passwordConfirm])
      return throwErrorMsg(
        inputKeys.passwordConfirm,
        "비밀번호를 확인해주십시오"
      );

    const email = formRef.current[inputKeys.email]["value"] as string;
    const password = formRef.current[inputKeys.password]["value"] as string;
    const rePassword = formRef.current[inputKeys.passwordConfirm][
      "value"
    ] as string;

    if (email.length === 0)
      return throwErrorMsg(inputKeys.email, "이메일은 필수 요소입니다");
    if (password.length === 0)
      return throwErrorMsg(inputKeys.password, "비밀번호는 필수 요소입니다");
    if (rePassword.length === 0)
      return throwErrorMsg(
        inputKeys.passwordConfirm,
        "비밀번호를 확인해주십시오"
      );

    if (password !== password)
      return throwErrorMsg(
        inputKeys.passwordConfirm,
        "비밀번호가 맞지 않습니다"
      );

    const signUpData: AuthData = {
      email,
      password,
    };
    signUp(signUpData);
  };

  const throwErrorMsg = (target: string, message: string) => {
    setErrorMsgs((prevErrorMsgs) => {
      return {
        ...prevErrorMsgs,
        [target]: message,
      };
    });
  };

  return {
    formRef,
    isDisabled,
    errorMsgs,
    handleSubmitSignUp,
  };
}

export default useSignUpForm;
