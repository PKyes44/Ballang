import { ProductType } from "./product.type";

export type Cart = {
  cartId: number;
  createdAt: string;
  id: number;
  product: ProductType;
  productId: number;
  quantity: number;
  updatedAt: string;
};
export type Carts = Cart[];
export type GetCart = { id: number; items: Carts };
