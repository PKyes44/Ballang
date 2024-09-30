import authAPI from "./auth.api";
import brandAPI from "./brands.api";
import cartAPI from "./cart.api";
import productAPI from "./product.api";



const api = {
	auth: authAPI,
	brands: brandAPI,
	products: productAPI,
	cart: cartAPI,
};

export default api;
