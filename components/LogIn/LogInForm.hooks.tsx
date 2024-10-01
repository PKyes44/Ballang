import api from "@/api/api";
import { inputKeys } from "@/models/Input";
import { AuthData } from "@/types/auth.type";
import useAuthStore from "@/zustand/auth.store";
import { useMutation } from "@tanstack/react-query";
import { ComponentProps, useRef, useState } from "react";

type InitialErrorMsgs = {
  email: string | null;
  password: string | null;
  global: string | null;
};
const initialErrorMsgs: InitialErrorMsgs = {
  email: null,
  password: null,
  global: null,
};

function useLogInForm() {
  const formRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMsgs, setErrorMsgs] =
    useState<InitialErrorMsgs>(initialErrorMsgs);

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const { mutate: logIn } = useMutation({
    mutationFn: (logInData: AuthData) => api.auth.logIn(logInData),
    onSuccess: () => {
      setIsLoggedIn(true);
    },
    onError: (data) => {
      setIsDisabled(false);
      throwErrorMsg("global", data.message);
    },
    onMutate: () => {
      setIsDisabled(true);
    },
  });

  const handleSubmitLogIn: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();

    setErrorMsgs(initialErrorMsgs);

    if (!formRef || !formRef.current)
      return throwErrorMsg("global", "필수 요소들을 입력하여 주십시오");

    if (!formRef.current[inputKeys.email])
      return throwErrorMsg(inputKeys.email, "이메일은 필수 요소입니다");
    if (!formRef.current[inputKeys.password])
      return throwErrorMsg(inputKeys.password, "비밀번호는 필수 요소입니다");

    const email = formRef.current[inputKeys.email]["value"] as string;
    const password = formRef.current[inputKeys.password]["value"] as string;

    if (email.length === 0)
      return throwErrorMsg(inputKeys.email, "이메일은 필수 요소입니다");
    if (password.length === 0)
      return throwErrorMsg(inputKeys.password, "비밀번호는 필수 요소입니다");

    const logInData: AuthData = {
      email,
      password,
    };
    logIn(logInData);
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
    handleSubmitLogIn,
  };
}

export default useLogInForm;
