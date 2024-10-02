/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import api from "@/api/api";
import Button from "@/components/Button/Button";
import useAuthStore from "@/zustand/auth.store";
import useModalStore from "@/zustand/modal.store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const queryKey = ["cart"];

function AddCartButton({ productId }: { productId: number }) {
  const queryClient = useQueryClient();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isAuthinitialzed = useAuthStore((state) => state.isAuthinitialzed);
  const toggleIsShowLogInForm = useModalStore(
    (state) => state.toggleIsShowLogInForm
  );
  const [isExistInCart, setIsExistInCart] = useState(false);

  const { data: productsInCart } = useQuery({
    queryKey,
    queryFn: () => api.cart.getCartAtClientSide(),
  });

  const { mutate: addCartByProductId } = useMutation({
    mutationFn: (productId: number) =>
      api.cart.addItemToCartByProductIdAtClientSide(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      setIsExistInCart(true);
      alert("장바구니에 추가되었습니다");
    },
  });
  const { mutate: clearCartByProductId } = useMutation({
    mutationFn: (productId: number) =>
      api.cart.clearIteminCartByProductId(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      setIsExistInCart(false);
      alert("장바구니에서 제거되었습니다");
    },
  });

  const handleClickAddCart = () => {
    console.log("handleClickAddCart");
    if (!isAuthinitialzed || !isLoggedIn) return toggleIsShowLogInForm();

    addCartByProductId(productId);
  };

  const handleClickClearCart = () => {
    clearCartByProductId(productId);
  };

  useEffect(() => {
    if (!productsInCart || productsInCart.length === 0)
      return setIsExistInCart(false);
    productsInCart.forEach((cart) => {
      if (cart.product.id === productId) {
        setIsExistInCart(true);
      }
    });
  }, [productsInCart]);

  return (
    <>
      {isExistInCart ? (
        <Button outline onClick={handleClickClearCart} className="mt-10">
          장바구니에 빼기
        </Button>
      ) : (
        <Button onClick={handleClickAddCart} className="mt-10">
          장바구니에 담기
        </Button>
      )}
    </>
  );
}

export default AddCartButton;
