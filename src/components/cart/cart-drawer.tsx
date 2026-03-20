"use client";

import {
	IconMinus,
	IconPlus,
	IconShoppingCart,
	IconTrash,
	IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { Button } from "../ui/button";

function formatPrice(price: number) {
	if (price === 0) return "Get Quote";
	return `₹${price.toLocaleString("en-IN")}`;
}

export function CartDrawer() {
	const {
		items,
		isOpen,
		closeCart,
		removeItem,
		updateQuantity,
		totalItems,
		totalPrice,
	} = useCartStore();

	return (
		<>
			{/* Backdrop */}
			<div
				className={cn(
					"fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
					isOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				)}
				onClick={closeCart}
			/>

			{/* Drawer */}
			<aside
				className={cn(
					"fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col",
					"shadow-2xl transition-transform duration-300 ease-in-out",
					isOpen ? "translate-x-0" : "translate-x-full"
				)}
				aria-label="Shopping cart"
			>
				{/* Header */}
				<div className="flex items-center justify-between px-5 py-4 bg-[#0d1b2a] text-white">
					<div className="flex items-center gap-3">
						<IconShoppingCart className="h-5 w-5 text-yellow-400" />
						<h2 className="font-bold text-lg tracking-wide">
							Your Cart
							{totalItems() > 0 && (
								<span className="ml-2 text-sm bg-yellow-400 text-[#0d1b2a] rounded-full px-2 py-0.5 font-bold">
									{totalItems()}
								</span>
							)}
						</h2>
					</div>
					<Button
						onClick={closeCart}
						className="p-1.5 hover:bg-white/10 rounded transition-colors"
						aria-label="Close cart"
					>
						<IconX className="h-5 w-5" />
					</Button>
				</div>

				{/* Items */}
				<div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
					{items.length === 0 ? (
						<div className="flex flex-col items-center justify-center h-full gap-4 text-slate-400">
							<IconShoppingCart className="h-16 w-16 opacity-20" />
							<p className="text-lg font-medium">Your cart is empty</p>
							<Button
								onClick={closeCart}
								className="text-sm underline hover:text-slate-600 transition-colors"
							>
								Continue browsing
							</Button>
						</div>
					) : (
						items.map((item) => (
							<div
								key={item.id}
								className="flex gap-3 p-3 border border-slate-100 bg-slate-50 rounded"
							>
								{/* Image */}
								<div className="relative h-20 w-20 shrink-0 bg-white border border-slate-200 rounded overflow-hidden">
									<Image
										src={item.image}
										alt={item.name}
										fill
										className="object-contain p-1"
									/>
								</div>

								{/* Details */}
								<div className="flex-1 min-w-0">
									<Link
										href={`/product/${item.slug}`}
										onClick={closeCart}
										className="text-sm font-semibold text-[#0d1b2a] hover:text-yellow-600 line-clamp-2 leading-tight"
									>
										{item.name}
									</Link>
									<p className="text-sm font-bold text-yellow-600 mt-1">
										{formatPrice(item.price)}
									</p>

									{/* Quantity + Remove */}
									<div className="flex items-center justify-between mt-2">
										<div className="flex items-center border border-slate-300 rounded overflow-hidden">
											<Button
												onClick={() =>
													updateQuantity(item.id, item.quantity - 1)
												}
												className="px-2 py-1 hover:bg-slate-200 transition-colors"
												aria-label="Decrease quantity"
											>
												<IconMinus className="h-3 w-3" />
											</Button>
											<span className="px-3 py-1 text-sm font-medium bg-white border-x border-slate-300">
												{item.quantity}
											</span>
											<Button
												onClick={() =>
													updateQuantity(item.id, item.quantity + 1)
												}
												className="px-2 py-1 hover:bg-slate-200 transition-colors"
												aria-label="Increase quantity"
											>
												<IconPlus className="h-3 w-3" />
											</Button>
										</div>
										<Button
											onClick={() => removeItem(item.id)}
											className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
											aria-label="Remove item"
										>
											<IconTrash className="h-4 w-4" />
										</Button>
									</div>
								</div>
							</div>
						))
					)}
				</div>

				{/* Footer */}
				{items.length > 0 && (
					<div className="border-t border-slate-200 px-5 py-4 space-y-3 bg-white">
						<div className="flex justify-between items-center text-sm text-slate-500">
							<span>Subtotal ({totalItems()} items)</span>
							<span className="font-bold text-[#0d1b2a] text-base">
								{totalPrice() > 0
									? `₹${totalPrice().toLocaleString("en-IN")}`
									: "Price on request"}
							</span>
						</div>
						<Link
							href="/cart"
							onClick={closeCart}
							className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-[#0d1b2a] font-bold py-3 transition-colors"
						>
							View Cart & Send Enquiry
						</Link>
						<Button
							onClick={closeCart}
							className="block w-full text-center border border-[#0d1b2a] text-[#0d1b2a] font-medium py-2.5 hover:bg-slate-50 transition-colors text-sm"
						>
							Continue Shopping
						</Button>
					</div>
				)}
			</aside>
		</>
	);
}
