import { CustomError } from "@/models/Error";
import { AuthData } from "@/types/auth.type";
import axios from "axios";
import { sign } from "crypto";

const baseURL = "https://api.ballang.yoojinyoung.com";
const authClient = axios.create({ baseURL });

async function signUp(signUpData: AuthData) {
	const response = await authClient.post("/auth/sign-up", signUpData);
	const result = response.data;
	return result;
}

async function logIn(logInData: AuthData) {
	const response = await authClient.post("/auth/log-in", logInData);
	const result = response.data;

	if (!result.success)
		throw new CustomError(500, "회원가입에 실패하였습니다");
	return result.result;
}

async function logOut() {
	const response = await authClient.delete("auth/log-out");
	const result = response.data;
	return result;
}

async function refreshToken() {
	const response = await authClient.get("/auth/refresh-token");
	const token = response.data;
	return token;
}

const authAPI = {
	signUp,
	logIn,
	logOut,
	refreshToken,
};
export default authAPI;
