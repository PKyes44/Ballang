import { CustomError } from "@/models/Error";
import axios from "axios";
import { get } from "http";

const baseURL = "https://api.ballang.yoojinyoung.com/cart";
const cartClient = axios.create({ baseURL });

async function getCart() {
	const response = await cartClient.get("");
	if (response.data.result)
		throw new CustomError(
			400,
			"장바구니에 상품 데이터를 가져오는 데에 실패하였습니다"
		);
	const result = response.data.result;
	return result;
}

async function addItemToCartByProductId(productId: string) {
	const response = await cartClient.post(`/products/${productId}`);
	if (response.data.error)
		throw new CustomError(
			400,
			"장바구니에 상품을 넣는 데에 실패하였습니다"
		);
	const result = response.data.result;
	return result;
}

async function removeItemFromCartByProductId(productId: string) {
	const response = await cartClient.delete(`/products/${productId}`);
	if (response.data.error)
		throw new CustomError(
			400,
			"장바구니에 상품을 차감하는 데에 실패하였습니다"
		);
	const result = response.data.result;
	return result;
}

async function clearIteminCartByProductId(productId: string) {
	const response = await cartClient.delete(`/products/${productId}/clear`);
	if (response.data.error)
		throw new CustomError(
			400,
			"장바구니에 상품을 제거하는 데에 실패하였습니다"
		);
	const result = response.data.result;
	return result;
}

const cartAPI = {
	getCart,
	addItemToCartByProductId,
	removeItemFromCartByProductId,
	clearIteminCartByProductId,
};

export default cartAPI;
