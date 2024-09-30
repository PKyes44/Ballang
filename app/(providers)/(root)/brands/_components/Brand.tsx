"use client";

import { BrandType } from "@/types/brand.type";
import React from "react";

interface BrandProps {
	brand: BrandType;
}

function Brand({ brand }: BrandProps) {
	const handleClickBrandFilter = () => {};

	return <button onClick={handleClickBrandFilter}>{brand.nameKr}</button>;
}

export default Brand;
