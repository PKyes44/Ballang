"use client";

import React from "react";
import LogInForm from "./LogInForm";
import Page from "../Page";
import useAuthStore from "@/zustand/auth.store";

function LogInModal() {
	const isShowLogInForm = useAuthStore((state) => state.isShowLogInForm);

	return (
		<>
			{isShowLogInForm && (
				<div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-40 grid place-content-center ">
					<Page
						title="로그인"
						width="sm"
						className="bg-white px-5 pb-10 rounded-lg"
					>
						<LogInForm />
					</Page>
				</div>
			)}
		</>
	);
}

export default LogInModal;
