"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { Button } from "../ui/button";

export function CartButton() {
	const { toggleCart, totalItems } = useCartStore();
	const count = totalItems();

	return (
		<Button
			onClick={toggleCart}
			className="relative p-2 hover:bg-white/10 rounded transition-colors"
			aria-label={`Cart (${count} items)`}
		>
			<ShoppingCart className="h-6 w-6 text-white" />
			{count > 0 && (
				<span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-[#0d1b2a] text-xs font-bold leading-none">
					{count > 99 ? "99+" : count}
				</span>
			)}
		</Button>
	);
}
