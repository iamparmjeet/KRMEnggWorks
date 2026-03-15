"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {
	IconBox,
	IconChartLine,
	IconMinus,
	IconPhone,
	IconPlus,
	IconShieldCheck,
} from "tabler-icons";
import ProductCard from "@/components/shop/product-card";
import { SocialsBox } from "@/components/socials";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { ProductListItem } from "@/constants";
import {
	getProductBySlug,
	getRelatedProducts,
} from "@/lib/product-utils";

// Helper function to format price
const formatPrice = (price: number): string => {
	return `₹${price.toLocaleString("en-IN")}.00`;
};

interface ProductDetailProps {
	params: Promise<{ slug: string }>;
}

export default function ProductDetail({
	params,
}: ProductDetailProps) {
	const { slug } = React.use(params);
	const [quantity, setQuantity] = useState(1);
	const [addedToCart, setAddedToCart] = useState(false);
	const [selectedImage, setSelectedImage] = useState(0);
	// Zoom state
	const [isZoomed, setIsZoomed] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const imageRef = useRef<HTMLDivElement>(null);

	const product = getProductBySlug(slug);

	if (!product) return <NotFound />;

	const relatedProducts = getRelatedProducts(
		slug,
		product.categoryId,
	);

	const primaryCategoryId = product.categoryId[0] ?? "";
	const primaryCategoryName =
		product.category.split(",")[0]?.trim() ?? product.category;

	const hasMultipleImages = product.images.length > 1;

	const handleAddToCart = () => {
		setAddedToCart(true);
		setTimeout(() => setAddedToCart(false), 2000);
	};

	const handleQuantityChange = (delta: number) => {
		setQuantity((prev) => Math.max(1, prev + delta));
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!imageRef.current) return;

		const rect = imageRef.current.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;

		setMousePosition({ x, y });
	};

	return (
		<div className="w-full bg-white min-h-screen">
			{/* Breadcrumb */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8">
				<nav className="flex items-center text-xs text-balance text-slate-700 overflow-x-auto whitespace-nowrap scrollbar-hide">
					<Link
						href="/"
						className="hover:text-black transition-colors shrink-0"
					>
						Home
					</Link>
					<span className="mx-2 text-slate-700 shrink-0">/</span>
					<Link
						href={`/product-category/${primaryCategoryId}`}
						className="hover:text-black transition-colors shrink-0"
					>
						{primaryCategoryName}
					</Link>
					<span className="mx-2 text-slate-700 shrink-0">/</span>
					<span className="text-black font-semibold truncate max-w-37.5 sm:max-w-xs shrink-0">
						{product.name}
					</span>
				</nav>
			</div>

			{/* Product Content */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 lg:pt-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Product Images */}
					<div className="space-y-4">
						<div
							role="img"
							ref={imageRef}
							aria-label="Zoom Product image"
							className="relative bg-white border border-gray-400 rounded-none overflow-hidden aspect-square cursor-crosshair"
							onMouseEnter={() => setIsZoomed(true)}
							onMouseLeave={() => setIsZoomed(false)}
							onMouseMove={handleMouseMove}
						>
							<Image
								src={product.images[selectedImage]}
								alt={product.name}
								fill
								className={`object-contain p-4 transition-transform duration-200 ease-out ${
									isZoomed ? "scale-150" : "scale-100"
								}`}
								style={{
									transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
								}}
								priority
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>

						{/* Thumbnail Gallery */}
						{hasMultipleImages && (
							<div className="flex gap-3">
								{product.images.map((img, idx) => (
									<button
										key={img}
										type="button"
										onClick={() => setSelectedImage(idx)}
										className={`relative size-30 rounded-none border overflow-hidden transition-all cursor-pointer ${
											selectedImage === idx
												? "border-gray-400"
												: "border-slate-200 hover:border-slate-300"
										}`}
									>
										<Image
											src={img}
											alt={`${product.name} view ${idx + 1}`}
											fill
											className="object-contain p-1"
											sizes="80px"
										/>
									</button>
								))}
							</div>
						)}
					</div>

					{/* Product Info */}
					<div className="space-y-6">
						{/* Info Box */}
						<div className="flex flex-col gap-4 items-start">
							{product.categoryId.map((catId, idx) => (
								<span
									key={catId}
									className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-full"
								>
									{product.category.split(",")[idx]?.trim() || catId}
								</span>
							))}
							<h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
								{product.name}
							</h1>
							<p className="text-2xl font-bold text-primary">
								{formatPrice(product.price)}
							</p>
							<p className="text-accent leading-relaxed">
								{product.description}
							</p>
						</div>

						<div className="h-px bg-slate-200" />

						{/* Quantity & Add to Cart */}
						<div className="flex flex-col sm:flex-row gap-4">
							<div className="flex items-center border-2 border-slate-200 bg-white w-fit">
								<button
									type="button"
									onClick={() => handleQuantityChange(-1)}
									className="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 disabled:opacity-50 cursor-pointer"
									disabled={quantity <= 1}
									aria-label="Decrease quantity"
								>
									<IconMinus className="w-4 h-4" />
								</button>
								<span className="px-4 py-3 font-bold text-primary min-w-12 text-center">
									{quantity}
								</span>
								<button
									type="button"
									onClick={() => handleQuantityChange(1)}
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
										: "bg-yellow hover:bg-primary hover:text-yellow text-slate-900"
								}`}
							>
								{addedToCart ? "✓ Added to Cart" : "Add to Cart"}
							</Button>
						</div>

						{/* Action Buttons */}
						<ProductActionButtonWithSocials />
						{/* Trust Badges */}
						<TrustBadge />
					</div>
				</div>

				{/* Specifications */}
				<div className="mt-16">
					<h2 className="text-3xl font-bold text-primary mb-10 pb-2 border-b-2 border-yellow w-fit">
						Technical Specifications
					</h2>
					<div className="bg-slate-50 p-6 md:p-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
							{Object.entries(product.specifications).map(
								([key, value], idx, arr) => (
									<div
										key={key}
										className={`flex justify-between py-3 ${
											idx !== arr.length - 1
												? "border-b border-slate-200"
												: ""
										}`}
									>
										<span className="font-semibold text-primary">
											{key}
										</span>
										<span className="text-accent text-right">
											{value}
										</span>
									</div>
								),
							)}
						</div>
					</div>
				</div>
				<Separator className="bg-accent my-8 md:my-16" />

				{/* Related Products */}
				{relatedProducts.length > 0 && (
					<div className="mb-18">
						<h2 className="text-3xl font-bold text-primary mb-8">
							Related Products
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{relatedProducts.map((relProduct: ProductListItem) => (
								<ProductCard
									key={relProduct.id}
									product={relProduct}
								/>
							))}
						</div>
					</div>
				)}
			</section>
		</div>
	);
}

function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-white">
			<div className="text-center">
				<h1 className="text-2xl font-bold mb-4 text-slate-900">
					Product not found
				</h1>
				<p className="text-slate-600 mb-6">
					The product you&apos;re looking for doesn&apos;t exist.
				</p>
				<Link href="/shop">
					<Button className="bg-yellow hover:bg-primary hover:text-yellow text-slate-900 font-bold">
						Back to Products
					</Button>
				</Link>
			</div>
		</div>
	);
}

function ProductActionButtonWithSocials() {
	return (
		<div className="flex flex-col sm:flex-row gap-3">
			<Button className="flex-1 bg-primary hover:bg-yellow text-white hover:text-primary font-bold py-7.5 gap-2 text-base">
				<IconPhone className="size-7" />
				Get a Quote
			</Button>
			<SocialsBox variant="blue" />
			<div className="flex gap-2"></div>
		</div>
	);
}

function TrustBadge() {
	return (
		<div className="flex flex-col flex-wrap gap-4 text-primary text-sm font-medium pt-4">
			<span className="flex items-center gap-1">
				<IconChartLine /> In Stock
			</span>
			<span className="flex items-center gap-1">
				<IconBox /> Free Shipping
			</span>
			<span className="flex items-center gap-1">
				<IconShieldCheck />1 Year Warranty
			</span>
		</div>
	);
}
