import { CustomError } from "@/models/Error";
import { Products, ProductType } from "@/types/product.type";
import { Response } from "../types/api.types";
import { ballangClient } from "./api";

/** Server Side */
async function getProducts() {
  try {
    const response = await ballangClient.get<Response<Products>>("/products");

    if (response.data.error)
      throw new CustomError(
        500,
        "서버에서 상품 데이터를 가져오던 중 오류가 발생했습니다"
      );
    const result = response.data.result;
    return result;
  } catch (e) {
    console.log(e);
  }
}

/** Server Side */
async function getProductByProductId(productId: number) {
  try {
    const response = await ballangClient.get<Response<ProductType>>(
      `/products/${productId}`
    );

    if (response.data.error)
      throw new CustomError(
        500,
        "서버에서 상품 데이터를 가져오던 중 오류가 발생했습니다"
      );

    const result = response.data.result;
    return result;
  } catch (e) {
    console.log(e);
  }
}

const productAPI = {
  getProducts,
  getProductByProductId,
};
export default productAPI;
