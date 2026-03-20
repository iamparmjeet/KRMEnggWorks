"use client";

import { CartDrawer } from "@/components/cart/cart-drawer";

export function CartProvider({ children }: { children: React.ReactNode }) {
	return (
		<>
			{children}
			<CartDrawer />
		</>
	);
}
