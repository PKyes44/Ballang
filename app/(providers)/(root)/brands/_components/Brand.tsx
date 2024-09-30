"use client";

import { BrandType } from "@/types/brand.type";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface BrandProps {
	brand: BrandType;
	handleClickBrandFilter: (brandId: number | null) => void;
}

function Brand({ brand, handleClickBrandFilter }: BrandProps) {
	return (
		<button onClick={() => handleClickBrandFilter(brand.id)}>
			{brand.nameKr}
		</button>
	);
}

export default Brand;
