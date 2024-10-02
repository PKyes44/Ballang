"use client";

import api from "@/api/api";
import { Cart } from "@/types/cart.type";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

interface CartItemProps {
  cartItem: Cart;
  invalidateQuery: () => void;
}

function useCartItem({ cartItem, invalidateQuery }: CartItemProps) {
  const [quantity, setQuentity] = useState(cartItem.quantity);

  const { mutate: addStock } = useMutation({
    mutationFn: () => api.cart.addItemToCartByProductId(cartItem.product.id),
    onSuccess: (data) => {
      invalidateQuery();
      setQuentity(data.quantity);
    },
  });
  const { mutate: removeStock } = useMutation({
    mutationFn: () =>
      api.cart.removeItemFromCartByProductId(cartItem.product.id),
    onSuccess: (data) => {
      invalidateQuery();
      setQuentity(data.quantity);
    },
  });
  const { mutate: clearProduct } = useMutation({
    mutationFn: () => api.cart.clearIteminCartByProductId(cartItem.product.id),
    onSuccess: (data) => {
      setQuentity(data.quantity);
      invalidateQuery();
    },
  });

  const handleClickRemoveStock = () => {
    if (quantity === 1) return clearProduct();

    removeStock();
  };
  const handleClickAddStock = () => {
    addStock();
  };

  return {
    product: cartItem.product,
    quantity,
    handleClickRemoveStock,
    handleClickAddStock,
  };
}

export default useCartItem;
