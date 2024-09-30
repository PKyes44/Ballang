"use client";

import api from "@/api/api";
import Button from "@/components/Button";
import { Cart } from "@/types/cart.type";
import { ProductType } from "@/types/product.type";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

interface CartItemProps {
	cartItem: Cart;
	invalidateQuery: () => void;
}

function CartItem({ cartItem, invalidateQuery }: CartItemProps) {
	const [quantity, setQuentity] = useState(cartItem.quantity);

	const { mutate: addStock } = useMutation({
		mutationFn: () =>
			api.cart.addItemToCartByProductId(cartItem.product.id),
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
		mutationFn: () =>
			api.cart.clearIteminCartByProductId(cartItem.product.id),
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

	return (
		<article className="flex flex-row py-4 gap-x-16 justify-between">
			<img
				src={cartItem.product.imgSrc}
				alt="product image"
				className="w-36 h-44"
			/>
			<div className="flex flex-col gap-y-3">
				<span className="font-extrabold">
					{cartItem.product.brand.nameKr}/
					{cartItem.product.brand.nameEn}
				</span>
				<span className="font-bold">{cartItem.product.name}</span>
				<div className="font-extrabold flex gap-x-4">
					<span className="line-through text-red-500">
						₩{cartItem.product.originalPrice}
					</span>
					<span className="font-extrabold">
						₩{cartItem.product.price}
					</span>
				</div>
				<div className="text-sm">
					<span>{cartItem.product.deliveryType} </span>|
					<span> 잔여재고 {cartItem.product.onlineStock}ea</span>
				</div>
			</div>
			<div className="flex items-center justify-end">
				<div className="ml-10 flex flex-nowrap">
					<Button onClick={handleClickRemoveStock} size="xs">
						-
					</Button>
					<Button size="xs" outline>
						{quantity}
					</Button>
					<Button onClick={handleClickAddStock} size="xs">
						+
					</Button>
				</div>
			</div>
		</article>
	);
}

export default CartItem;
