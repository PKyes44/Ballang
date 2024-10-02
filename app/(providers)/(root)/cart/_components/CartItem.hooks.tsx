"use client";

import api from "@/api/api";
import { Cart } from "@/types/cart.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface CartItemProps {
  cartItem: Cart;
}
const queryKey = ["cart"];

function useCartItem({ cartItem }: CartItemProps) {
  const queryClient = useQueryClient();
  const [quantity, setQuentity] = useState(cartItem.quantity);

  const { mutate: addStock } = useMutation({
    mutationFn: () =>
      api.cart.addItemToCartByProductIdAtClientSide(cartItem.product.id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey });
      setQuentity(data.quantity);
    },
  });
  const { mutate: removeStock } = useMutation({
    mutationFn: () =>
      api.cart.removeItemFromCartByProductId(cartItem.product.id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey });
      setQuentity(data.quantity);
    },
  });
  const { mutate: clearProduct } = useMutation({
    mutationFn: () => api.cart.clearIteminCartByProductId(cartItem.product.id),
    onSuccess: (data) => {
      setQuentity(data.quantity);
      queryClient.invalidateQueries({ queryKey });
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
