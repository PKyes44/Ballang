import axios from "axios";
import authAPI from "./auth.api";
import brandAPI from "./brands.api";
import cartAPI from "./cart.api";
import productAPI from "./product.api";

const baseURL = "https://api.ballang.yoojinyoung.com";
export const ballangClient = axios.create({ baseURL });

const api = {
	auth: authAPI,
	brands: brandAPI,
	products: productAPI,
	cart: cartAPI,
};

export default api;
