import { BrandType } from "./brand.type";

export type ProductType = {
	id: number;
	name: string;
	imgSrc: string;
	onlineStock: number;
	price: number;
	originalPrice: number;
	deliveryType: string;
	brandId: number;
	brand: BrandType;
};
export type Products = ProductType[];
