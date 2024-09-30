"use client";

import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Brand from "./Brand";
import { BrandType } from "@/types/brand.type";
import { useRouter } from "next/navigation";

function BrandList() {
	const router = useRouter();

	const { data: brands, isLoading } = useQuery({
		queryKey: ["brands"],
		queryFn: () => api.brands.getBrands(),
	});

	const handleClickBrandFilter = (brandId: number | null) => {
		if (!brandId) return router.push("/brands");
		router.push(`/brands?brandId=${brandId}`);
	};

	if (isLoading) return <span>브랜드 목록을 불러오는 중 ...</span>;
	return (
		<article className="flex flex-col gap-y-7 mb-16">
			<button
				onClick={() => handleClickBrandFilter(null)}
				className="w-full text-center font-bold text-sm"
			>
				ALL
			</button>
			<ul className="m-auto grid lg:grid-cols-6 gap-x-5 gap-y-5 justify-between text-sm md:grid-cols-4 sm:grid-cols-3">
				{brands.map((brand: BrandType) => (
					<li
						className="whitespace-nowrap text-center"
						key={brand.id}
					>
						<Brand
							brand={brand}
							handleClickBrandFilter={handleClickBrandFilter}
						/>
					</li>
				))}
			</ul>
		</article>
	);
}

export default BrandList;
