"use client";

import { IconMinus, IconPhone, IconPlus } from "@tabler/icons-react";
import {  useCallback, useState } from "react";
import { QuoteModal } from "@/components/cart/quote-model";
import { SocialsBox } from "@/components/socials";
import { Button } from "@/components/ui/button";
import type { ProductDetailsType } from "@/constants";
import { useCartStore } from "@/store/cart-store";

interface Props {
	product: ProductDetailsType;
}

export function ProductInteractions({ product }: Props) {
	const { addItem } = useCartStore();

	const [quantity, setQuantity] = useState(1);
	const [addedToCart, setAddedToCart] = useState(false);
	const [quoteOpen, setQuoteOpen] = useState(false);
	const closeQuote = useCallback(() => setQuoteOpen(false), []);

	const handleAddToCart = () => {
		addItem({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.images[0],
			slug: product.name
				.toLowerCase()
				.replace(/\s+/g, "-")
				.replace(/[^a-z0-9-]/g, ""),
		});
		setAddedToCart(true);
		setTimeout(() => setAddedToCart(false), 2000);
	};

	const changeQty = (delta: number) =>
		setQuantity((prev) => Math.max(1, prev + delta));

	return (
		<>
			<div className="space-y-4">
				{/* Quantity + Add to Cart */}
				<div className="flex flex-col sm:flex-row gap-4 pt-2">
					<div className="flex items-center border-2 border-slate-200 bg-white w-fit">
						<button
							type="button"
							onClick={() => changeQty(-1)}
							disabled={quantity <= 1}
							className="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 disabled:opacity-50 cursor-pointer"
							aria-label="Decrease quantity"
						>
							<IconMinus className="w-4 h-4" />
						</button>
						<span className="px-4 py-3 font-bold text-primary min-w-12 text-center">
							{quantity}
						</span>
						<button
							type="button"
							onClick={() => changeQty(1)}
							className="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 cursor-pointer"
							aria-label="Increase quantity"
						>
							<IconPlus className="w-4 h-4" />
						</button>
					</div>

					<Button
						onClick={handleAddToCart}
						className={`flex-1 sm:flex-none px-8 py-6 font-bold text-base transition-all ${
							addedToCart
								? "bg-green-500 hover:bg-green-600 text-white"
								: "bg-yellow hover:bg-blue-950 hover:text-yellow text-slate-900"
						}`}
					>
						{addedToCart ? "✓ Added to Cart" : "Add to Cart"}
					</Button>
				</div>

				{/* Get a Quote + Socials */}
				<div className="flex flex-col sm:flex-row gap-3">
					<Button
						onClick={() => setQuoteOpen(true)}
						className="flex-1 min-w-50 bg-blue-950 hover:bg-yellow text-white hover:text-blue-950 font-bold py-7.5 gap-2 text-base"
					>
						<IconPhone className="size-5" />
						Get a Quote
					</Button>
					<SocialsBox variant="blue" />
				</div>
			</div>

			{/* Quote Modal */}
			<QuoteModal
				product={
					quoteOpen
						? {
								id: product.id,
								name: product.name,
								image: product.images[0],
								slug: product.name
									.toLowerCase()
									.replace(/\s+/g, "-")
									.replace(/[^a-z0-9-]/g, ""),
							}
						: null
				}
				onClose={closeQuote}
			/>
		</>
	);
}
