import axios from "axios";
import { ballangClient } from "./api";

async function getBrands() {
	const response = await ballangClient.get("/brands");
	const result = response.data.result;
	return result;
}
async function getBrand(brandId: string) {
	const response = await ballangClient.get(`/brands/${brandId}`);
	const result = response.data.result.products;
	return result;
}

const brandAPI = {
	getBrands,
	getBrand,
};
export default brandAPI;
