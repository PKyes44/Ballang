"use client";

import Page from "@/components/Page";
import React from "react";
import BrandList from "./_components/BrandList";
import ProductList from "../_components/ProductList";
import api from "@/api/api";
import { Products } from "@/types/product.type";

async function BrandsPage({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	console.log(searchParams);
	const products = (await api.products.getProducts()) as Products;

	return (
		<Page width="lg" title="Brands">
			<BrandList />
			<ProductList products={products} />
		</Page>
	);
}

export default BrandsPage;
