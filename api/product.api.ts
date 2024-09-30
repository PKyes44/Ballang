import { CustomError } from "@/models/Error";
import axios from "axios";
const baseURL = "https://api.ballang.yoojinyoung.com/products";

const productClient = axios.create({ baseURL });

async function getProducts() {
	const response = await productClient.get("");

	if (response.data.error)
		throw new CustomError(
			500,
			"서버에서 상품 데이터를 가져오던 중 오류가 발생했습니다"
		);
	const result = response.data.result;
	return result;
}
async function getProductByProductId(productId: string) {
	const response = await productClient.get(`/${productId}`);

	if (response.data.error)
		throw new CustomError(
			500,
			"서버에서 상품 데이터를 가져오던 중 오류가 발생했습니다"
		);

	const result = response.data.result;
	return result;
}

const productAPI = {
	getProducts,
	getProductByProductId,
};
export default productAPI;
