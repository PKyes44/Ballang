"use client";

import api from "@/api/api";
import { BrandType } from "@/types/brand.type";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Brand from "./Brand";

interface BrandListProps {
  activatedBrandId: string | null;
}

function BrandList({ activatedBrandId }: BrandListProps) {
  const { data: brands, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: () => api.brands.getBrands(),
  });

  if (isLoading) return <span>브랜드 목록을 불러오는 중 ...</span>;
  console.log("activatedBrandId: ", activatedBrandId);
  return (
    <article className="flex flex-col gap-y-7 mb-16">
      <Link
        href="/brands"
        className={`w-full text-center font-medium text-gray-600 text-sm hover:brightness-75 ${
          !activatedBrandId && "!font-bold !text-black"
        }`}
      >
        ALL
      </Link>
      <ul className="m-auto grid lg:grid-cols-6 gap-x-5 gap-y-5 justify-between text-sm md:grid-cols-4 sm:grid-cols-3">
        {brands.map((brand: BrandType) => {
          return (
            <li className="whitespace-nowrap text-center" key={brand.id}>
              <Brand
                brand={brand}
                isActivated={brand.id === Number(activatedBrandId)}
              />
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default BrandList;
