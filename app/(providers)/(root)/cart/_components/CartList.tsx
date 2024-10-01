"use client";

import React from "react";
import CartItem from "./CartItem";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/api/api";
function CartList() {
  const queryClient = useQueryClient();

  const { data: cartList, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => api.cart.getCart(),
  });
  const invalidateQuery = () => {
    queryClient.invalidateQueries({ queryKey: ["cart"] });
  };

  if (isLoading) return <span>장바구니 로딩 중 ...</span>;

  return (
    <ul>
      {cartList!.map((cartItem) => {
        return (
          <li key={cartItem.product.id}>
            <CartItem cartItem={cartItem} invalidateQuery={invalidateQuery} />
            <hr />
          </li>
        );
      })}
    </ul>
  );
}

export default CartList;
