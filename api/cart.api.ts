import { CustomError } from "@/models/Error";
import { Response } from "@/types/api.types";
import { Carts, GetCart } from "@/types/cart.type";
import { ballangClient } from "./api";

/** Server Side */
async function getCartAtServerSide() {
  try {
    const response = await ballangClient.get<Response<GetCart>>("/cart");
    if (response.data.error)
      throw new CustomError(
        400,
        "장바구니에 상품 데이터를 가져오는 데에 실패하였습니다"
      );
    const result = response.data.result["items"] as Carts;
    return result;
  } catch (e) {
    console.log(e);
  }
}

/** Client Side */
async function getCartAtClientSide() {
  const response = await ballangClient.get<Response<GetCart>>("/cart");
  if (response.data.error)
    throw new CustomError(
      400,
      "장바구니에 상품 데이터를 가져오는 데에 실패하였습니다"
    );
  const result = response.data.result["items"] as Carts;
  return result;
}

/** Server Side */
async function addItemToCartByProductIdAtServerSide(productId: number) {
  try {
    const response = await ballangClient.post(`/cart/products/${productId}`);
    if (response.data.error)
      throw new CustomError(400, "장바구니에 상품을 넣는 데에 실패하였습니다");
    const result = response.data.result;
    return result;
  } catch (e) {
    console.log(e);
  }
}

/** Client Side */
async function addItemToCartByProductIdAtClientSide(productId: number) {
  const response = await ballangClient.post(`/cart/products/${productId}`);
  if (response.data.error)
    throw new CustomError(400, "장바구니에 상품을 넣는 데에 실패하였습니다");
  const result = response.data.result;
  return result;
}

/** Client Side */
async function removeItemFromCartByProductId(productId: number) {
  const response = await ballangClient.delete(`/cart/products/${productId}`);
  if (response.data.error)
    throw new CustomError(
      400,
      "장바구니에 상품을 차감하는 데에 실패하였습니다"
    );
  const result = response.data.result;
  return result;
}

/** Client Side */
async function clearIteminCartByProductId(productId: number) {
  const response = await ballangClient.delete(
    `/cart/products/${productId}/clear`
  );
  if (response.data.error)
    throw new CustomError(
      400,
      "장바구니에 상품을 제거하는 데에 실패하였습니다"
    );
  const result = response.data.result;
  return result;
}

const cartAPI = {
  getCartAtServerSide,
  getCartAtClientSide,
  addItemToCartByProductIdAtServerSide,
  addItemToCartByProductIdAtClientSide,
  removeItemFromCartByProductId,
  clearIteminCartByProductId,
};

export default cartAPI;
