import authAPI from "./auth.api";
import brandAPI from "./brands.api";
import productAPI from "./product.api";

const api = {
	auth: authAPI,
	brands: brandAPI,
	products: productAPI,
};

export default api;
