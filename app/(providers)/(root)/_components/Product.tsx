import { ProductType } from "@/types/product.type";
import React from "react";

interface ProductProps {
	product: ProductType;
}

//     id: number;
// name: string;
// imgSrc: string;
// onlineStock: number;
// price: number;
// originalPrice: number;
// deliveryType: string;
// brandId: number;
// brand: Brand;

function Product({ product }: ProductProps) {
	console.log("product:", product);
	return (
		<article className="w-full h-full flex flex-col text-sm gap-y-3">
			<img
				className="object-contain"
				src={product.imgSrc}
				alt="product Image"
			/>
			<span className="font-semibold">{product.brand.nameEn}</span>
			<span>{product.name}</span>
			<div className="flex gap-x-2 font-semibold text-base">
				<span className="line-through text-red-500">
					₩{product.originalPrice}
				</span>
				<span>₩{product.price}</span>
			</div>
		</article>
	);
}

export default Product;
