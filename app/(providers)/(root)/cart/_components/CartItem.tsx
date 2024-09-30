"use client";

import api from "@/api/api";
import Button from "@/components/Button/Button";
import { Cart } from "@/types/cart.type";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useCartItem from "./CartItem.hooks";

interface CartItemProps {
	cartItem: Cart;
	invalidateQuery: () => void;
}

function CartItem({ cartItem, invalidateQuery }: CartItemProps) {
	const { product, quantity, handleClickAddStock, handleClickRemoveStock } =
		useCartItem({ cartItem, invalidateQuery });

	return (
		<article className="flex flex-row py-4 gap-x-16 justify-between">
			<img
				src={product.imgSrc}
				alt="product image"
				className="w-36 h-44"
			/>
			<div className="flex flex-col gap-y-3">
				<span className="font-extrabold">
					{product.brand.nameKr}/{product.brand.nameEn}
				</span>
				<span className="font-bold">{product.name}</span>
				<div className="font-extrabold flex gap-x-4">
					<span className="line-through text-red-500">
						₩{product.originalPrice}
					</span>
					<span className="font-extrabold">₩{product.price}</span>
				</div>
				<div className="text-sm">
					<span>{product.deliveryType} </span>|
					<span> 잔여재고 {product.onlineStock}ea</span>
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
