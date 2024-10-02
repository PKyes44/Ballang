import { Response } from "@/types/api.types";
import { GetBrand, GetBrands } from "@/types/brand.type";
import { ballangClient } from "./api";

/** Server Side */
async function getBrands() {
  try {
    const response = await ballangClient.get<Response<GetBrands>>("/brands");
    const result = response.data.result;
    return result;
  } catch (e) {
    console.log(e);
  }
}

/** Server Side */
async function getBrand(brandId: string) {
  try {
    const response = await ballangClient.get<Response<GetBrand>>(
      `/brands/${brandId}`
    );
    const result = response.data.result.products;
    return result;
  } catch (e) {
    console.log(e);
  }
}

const brandAPI = {
  getBrands,
  getBrand,
};
export default brandAPI;
