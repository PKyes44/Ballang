import axios from "axios";
const baseURL = "https://api.ballang.yoojinyoung.com";

const brandClient = axios.create({ baseURL });

async function getBrands() {
	const response = await brandClient.get("/brands");
	const result = response.data;
}
async function getBrand(brandId: string) {}

const brandAPI = {
	getBrands,
	getBrand,
};
export default brandAPI;
