"use client";

import { IconMessage, IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import { QuoteModal, type QuoteProduct } from "@/components/cart/quote-model";
import type { ProductListItem } from "@/constants/product-data";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

function formatPrice(price: number) {
	if (price === 0) return null;
	return `₹${price.toLocaleString("en-IN")}`;
}

interface ProductCardProps {
	product: ProductListItem;
}

export default function ProductCard({ product }: ProductCardProps) {
	const { addItem, items } = useCartStore();
	const [quoteProduct, setQuoteProduct] = useState<QuoteProduct | null>(null);
	const [justAdded, setJustAdded] = useState(false);

	const isInCart = items.some((i) => i.id === product.id);
	const formattedPrice = formatPrice(product.price);

	const handleAddToCart = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		addItem({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.image,
			slug: product.slug,
		});
		setJustAdded(true);
		setTimeout(() => setJustAdded(false), 2000);
	};

	const handleGetQuote = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setQuoteProduct({
			id: product.id,
			name: product.name,
			image: product.image,
			slug: product.slug,
		});
	};

	return (
		<>
			<div className="group bg-white border border-slate-200 hover:border-yellow-400 hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden h-120">
				{/* Image */}
				<div className="relative min-h-75 overflow-hidden">
					<Image
						src={product.image}
						alt={product.name}
						width={300}
						height={300}
						className="object-cover group-hover:scale-105 transition-transform duration-300"
					/>
				</div>
				<Separator className={""} />
				{/* Info */}
				<div className="flex flex-col flex-1 p-4 gap-3">
					<div>
						<p className="text-xs text-slate-400 tracking-wide mb-1">
							{product.category}
						</p>
						<h3 className="text-lg font-bold text-blue-950 leading-snug line-clamp-2">
							{product.name}
						</h3>
					</div>

					<div className="mt-auto">
						{formattedPrice ? (
							<p className="text-base font-bold text-slate-900">
								{formattedPrice}
							</p>
						) : (
							<p className="text-sm text-slate-500 italic">Price on request</p>
						)}
					</div>

					{/* Actions */}
					<div className="flex gap-2 mt-1">
						<Button
							onClick={handleAddToCart}
							className={cn(
								"flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold transition-all duration-200",
								justAdded
									? "bg-green-500 text-white"
									: isInCart
										? "bg-blue-950 text-yellow-300 hover:bg-blue-900"
										: "bg-yellow-300 text-blue-950 hover:bg-yellow-500"
							)}
						>
							<IconShoppingCart className="h-3.5 w-3.5" />
							{justAdded ? "Added!" : isInCart ? "In Cart" : "Add to Cart"}
						</Button>

						<Button
							onClick={handleGetQuote}
							className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold border border-blue-950 bg-yellow-400 text-blue-950 hover:bg-blue-950 hover:text-white transition-colors"
							title="Get a Quote"
						>
							<IconMessage className="h-3.5 w-3.5" />
							<span className="hidden sm:inline">Quote</span>
						</Button>
					</div>
				</div>
			</div>

			{/* Quote modal — rendered here so it has access to state */}
			<QuoteModal
				product={quoteProduct}
				onClose={() => setQuoteProduct(null)}
			/>
		</>
	);
}
