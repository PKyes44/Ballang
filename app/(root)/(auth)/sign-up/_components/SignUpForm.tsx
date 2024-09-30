"use client";

import Button from "@/components/Button";
import InputGroup from "@/components/InputGroup";
import React, { ComponentProps, useRef, useState } from "react";

const inputKeys = {
	email: "email",
	password: "password",
	rePassword: "rePassword",
};
type InitialErrorMsgs = {
	email: string | null;
	password: string | null;
	rePassword: string | null;
	global: string | null;
};
const initialErrorMsgs: InitialErrorMsgs = {
	email: null,
	password: null,
	rePassword: null,
	global: null,
};

function SignUpForm() {
	const formRef = useRef(null);
	const [errorMsgs, setErrorMsgs] =
		useState<InitialErrorMsgs>(initialErrorMsgs);

	// const {mutate: signUp} = useMutat

	const handleSubmitSignUp: ComponentProps<"form">["onSubmit"] = (e) => {
		e.preventDefault();

		if (!formRef || !formRef.current)
			return throwErrorMsg("global", "필수 요소들을 입력하여 주십시오");

		if (!formRef.current[inputKeys.email])
			return throwErrorMsg(inputKeys.email, "이메일은 필수 요소입니다");
		if (!formRef.current[inputKeys.password])
			return throwErrorMsg(
				inputKeys.password,
				"비밀번호는 필수 요소입니다"
			);
		if (!formRef.current[inputKeys.rePassword])
			return throwErrorMsg(
				inputKeys.rePassword,
				"비밀번호를 확인해주십시오"
			);

		const email = formRef.current[inputKeys.email]["value"] as string;
		const password = formRef.current[inputKeys.password]["value"] as string;
		const rePassword = formRef.current[inputKeys.rePassword][
			"value"
		] as string;

		if (email.length === 0)
			return throwErrorMsg(inputKeys.email, "이메일은 필수 요소입니다");
		if (password.length === 0)
			return throwErrorMsg(
				inputKeys.password,
				"비밀번호는 필수 요소입니다"
			);
		if (rePassword.length === 0)
			return throwErrorMsg(
				inputKeys.rePassword,
				"비밀번호를 확인해주십시오"
			);

		if (password !== password)
			return throwErrorMsg(
				inputKeys.rePassword,
				"비밀번호가 맞지 않습니다"
			);

		const signUpData = {
			email,
			password,
		};
	};

	const throwErrorMsg = (target: string, message: string) => {
		setErrorMsgs((prevErrorMsgs) => {
			return {
				...prevErrorMsgs,
				[target]: message,
			};
		});
	};

	return (
		<form
			ref={formRef}
			onSubmit={handleSubmitSignUp}
			className="flex flex-col gap-y-3"
		>
			<InputGroup label="이메일" name={inputKeys.email} />
			<InputGroup label="비밀번호" name={inputKeys.password} />
			<InputGroup label="비밀번호 확인" name={inputKeys.rePassword} />
			<Button className="mt-8" size="md">
				회원가입하기
			</Button>
		</form>
	);
}

export default SignUpForm;
