import { CustomError } from "@/models/Error";
import { Carts } from "@/types/cart.type";
import axios from "axios";
import { ballangClient } from "./api";

async function getCart() {
	const response = await ballangClient.get("/cart");
	if (response.data.error)
		throw new CustomError(
			400,
			"장바구니에 상품 데이터를 가져오는 데에 실패하였습니다"
		);
	const result = response.data.result["items"] as Carts;
	return result;
}

async function addItemToCartByProductId(productId: number) {
	const response = await ballangClient.post(`/cart/products/${productId}`);
	if (response.data.error)
		throw new CustomError(
			400,
			"장바구니에 상품을 넣는 데에 실패하였습니다"
		);
	const result = response.data.result;
	return result;
}

async function removeItemFromCartByProductId(productId: number) {
	const response = await ballangClient.delete(`/cart/products/${productId}`);
	if (response.data.error)
		throw new CustomError(
			400,
			"장바구니에 상품을 차감하는 데에 실패하였습니다"
		);
	const result = response.data.result;
	return result;
}

async function clearIteminCartByProductId(productId: number) {
	const response = await ballangClient.delete(
		`/cart/products/${productId}/clear`
	);
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
