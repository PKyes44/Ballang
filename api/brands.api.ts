import { Response } from "@/types/api.types";
import { GetBrand, GetBrands } from "@/types/brand.type";
import { ballangClient } from "./api";

async function getBrands() {
  const response = await ballangClient.get<Response<GetBrands>>("/brands");
  const result = response.data.result;
  console.log(result);
  return result;
}
async function getBrand(brandId: string) {
  const response = await ballangClient.get<Response<GetBrand>>(
    `/brands/${brandId}`
  );
  const result = response.data.result.products;
  console.log(result);
  return result;
}

const brandAPI = {
  getBrands,
  getBrand,
};
export default brandAPI;
