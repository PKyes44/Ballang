import { Products } from "./product.type";

export type BrandType = {
  id: number;
  nameKr: string;
  nameEn: string;
};
export type GetBrand = BrandType & { products: Products };
export type GetBrands = BrandType[];
