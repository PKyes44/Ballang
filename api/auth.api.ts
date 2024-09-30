import { CustomError } from "@/models/Error";
import { AuthData } from "@/types/auth.type";
import axios from "axios";
import { sign } from "crypto";

const baseURL = "https://api.ballang.yoojinyoung.com/auth";
const authClient = axios.create({ baseURL });

async function signUp(signUpData: AuthData) {
	const response = await authClient.post("/sign-up", signUpData, {
		withCredentials: true,
	});
	const result = response.data;
	return result;
}

async function logIn(logInData: AuthData) {
	const response = await authClient.post("/log-in", logInData, {
		withCredentials: true,
	});
	const result = response.data;

	if (!result.success)
		throw new CustomError(500, "회원가입에 실패하였습니다");

	return result;
}

async function logOut() {
	const response = await authClient.delete("/log-out", {
		withCredentials: true,
	});
	const result = response.data;
	return result;
}

async function refreshToken() {
	const response = await authClient.get("/refresh-token", {
		withCredentials: true,
	});
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
