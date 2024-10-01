"use client";

import { BrandType } from "@/types/brand.type";
import Link from "next/link";

interface BrandProps {
  brand: BrandType;
}

function Brand({ brand }: BrandProps) {
  return <Link href={`/brands/${brand.id}`}>{brand.nameKr}</Link>;
}

export default Brand;
