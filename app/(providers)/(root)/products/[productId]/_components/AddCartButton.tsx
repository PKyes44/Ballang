"use client";

import api from "@/api/api";
import Button from "@/components/Button/Button";
import useAuthStore from "@/zustand/auth.store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

function AddCartButton({ productId }: { productId: number }) {
	const queryClient = useQueryClient();
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
	const setIsShowLogInForm = useAuthStore(
		(state) => state.setIsShowLogInForm
	);
	const isAuthinitialzed = useAuthStore((state) => state.isAuthinitialzed);
	const [isExistInCart, setIsExistInCart] = useState(false);

	const { data: productsInCart } = useQuery({
		queryKey: ["cart"],
		queryFn: () => api.cart.getCart(),
	});

	const { mutate: addCartByProductId } = useMutation({
		mutationFn: (productId: number) =>
			api.cart.addItemToCartByProductId(productId),
		onSuccess: (data) => {
			console.log(data);
			queryClient.invalidateQueries({ queryKey: ["cart"] });
		},
	});
	const { mutate: clearCartByProductId } = useMutation({
		mutationFn: (productId: number) =>
			api.cart.clearIteminCartByProductId(productId),
		onSuccess: (data) => {
			console.log(data);
			queryClient.invalidateQueries({ queryKey: ["cart"] });
		},
	});

	const handleClickAddCart = () => {
		if (!isAuthinitialzed || !isLoggedIn) return setIsShowLogInForm();

		addCartByProductId(productId);
		setIsExistInCart(true);
	};

	const handleClickClearCart = () => {
		clearCartByProductId(productId);
		setIsExistInCart(false);
	};

	useEffect(() => {
		console.log(productsInCart);
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
				<Button
					outline
					onClick={handleClickClearCart}
					className="mt-10"
				>
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
