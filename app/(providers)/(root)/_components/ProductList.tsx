import { Products } from "@/types/product.type";
import Link from "next/link";
import React from "react";
import Product from "./Product";
import api from "@/api/api";

interface ProductListProps {
	products: Products;
}

async function ProductList({ products }: ProductListProps) {
	return (
		<ul className="w-full grid grid-cols-6 gap-x-8 gap-y-8">
			{products.map((product) => {
				return (
					<li key={product.id}>
						<Link href={`/products/${product.id}`}>
							<Product product={product} />
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default ProductList;
