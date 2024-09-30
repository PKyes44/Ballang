"use client";

import api from "@/api/api";
import Button from "@/components/Button";
import InputGroup from "@/components/Inputs/InputGroup";
import { AuthData } from "@/types/auth.type";
import useAuthStore from "@/zustand/auth.store";
import { useMutation } from "@tanstack/react-query";
import React, { ComponentProps, useRef, useState } from "react";

const inputKeys = {
	email: "email",
	password: "password",
};
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

function LogInForm() {
	const formRef = useRef(null);
	const [isDisabled, setIsDisabled] = useState(false);
	const [errorMsgs, setErrorMsgs] =
		useState<InitialErrorMsgs>(initialErrorMsgs);

	const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

	const { mutate: logIn } = useMutation({
		mutationFn: (logInData: AuthData) => api.auth.logIn(logInData),
		onSuccess: (data) => {
			console.log("logIn response data: ", data);
			if (data.success) {
				setIsLoggedIn(true);
			}
		},
		onError: (data) => {
			setIsDisabled(false);
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
			return throwErrorMsg(
				inputKeys.password,
				"비밀번호는 필수 요소입니다"
			);

		const email = formRef.current[inputKeys.email]["value"] as string;
		const password = formRef.current[inputKeys.password]["value"] as string;

		if (email.length === 0)
			return throwErrorMsg(inputKeys.email, "이메일은 필수 요소입니다");
		if (password.length === 0)
			return throwErrorMsg(
				inputKeys.password,
				"비밀번호는 필수 요소입니다"
			);

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
			<Button className="mt-8" size="md" errorText={errorMsgs.global}>
				로그인하기
			</Button>
		</form>
	);
}

export default LogInForm;
