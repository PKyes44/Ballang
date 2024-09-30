import Page from "@/components/Page/Page";
import React from "react";
import BrandList from "./_components/BrandList";
import ProductList from "../_components/ProductList";
import api from "@/api/api";
import { Products } from "@/types/product.type";

async function BrandsPage({
	searchParams,
}: {
	searchParams?: { [key: string]: string };
}) {
	console.log("searchParams: ", searchParams);
	let products;
	if (Object.keys(searchParams!).length === 0)
		products = (await api.products.getProducts()) as Products;
	else {
		console.log("brandId is ", searchParams!.brandId);
		products = await api.brands.getBrand(searchParams!.brandId);
	}

	console.log(products);

	return (
		<Page width="lg" title="Brands">
			<BrandList />
			<ProductList products={products} />
		</Page>
	);
}

export default BrandsPage;
