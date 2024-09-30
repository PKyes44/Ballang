import { CustomError } from "@/models/Error";
import { AuthData } from "@/types/auth.type";
import axios from "axios";
import { sign } from "crypto";
import { ballangClient } from "./api";

async function signUp(signUpData: AuthData) {
	const response = await ballangClient.post("/auth/sign-up", signUpData, {
		withCredentials: true,
	});
	if (response.data.error)
		throw new CustomError(400, "회원가입에 실패하였습니다");

	const result = response.data.result;
	return result;
}

async function logIn(logInData: AuthData) {
	const response = await ballangClient.post("/auth//log-in", logInData, {
		withCredentials: true,
	});

	if (response.data.error)
		throw new CustomError(500, "로그인에 실패하였습니다");

	const result = response.data.result;
	return result;
}

async function logOut() {
	const response = await ballangClient.delete("/auth//log-out", {
		withCredentials: true,
	});
	if (response.data.error)
		throw new CustomError(400, "로그아웃에 실패하였습니다");

	const result = response.data.result;
	return result;
}

async function refreshToken() {
	const response = await ballangClient.get("/auth//refresh-token", {
		withCredentials: true,
	});

	if (response.data.error)
		throw new CustomError(400, "토큰을 가져오지 못했습니다");

	const token = response.data.result;
	return token;
}

const authAPI = {
	signUp,
	logIn,
	logOut,
	refreshToken,
};
export default authAPI;
