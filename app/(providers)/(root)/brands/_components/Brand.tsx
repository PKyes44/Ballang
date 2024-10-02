"use client";

import { BrandType } from "@/types/brand.type";
import Link from "next/link";

interface BrandProps {
  brand: BrandType;
  isActivated: boolean;
}

function Brand({ brand, isActivated }: BrandProps) {
  return (
    <Link
      href={`/brands?brandId=${brand.id}`}
      className={`hover:text-black font-medium text-gray-600 ${
        isActivated && "!text-black !font-semibold"
      }`}
    >
      {brand.nameKr}
    </Link>
  );
}

export default Brand;
