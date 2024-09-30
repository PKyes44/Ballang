import axios from "axios";
const baseURL = "https://api.ballang.yoojinyoung.com";

const brandClient = axios.create({ baseURL });

async function getBrands() {
	const response = await brandClient.get("/brands");
	const result = response.data.result;
	return result;
}
async function getBrand(brandId: string) {
	const response = await brandClient.get(`/brands/${brandId}`);
	const result = response.data;
	return result;
}

const brandAPI = {
	getBrands,
	getBrand,
};
export default brandAPI;
