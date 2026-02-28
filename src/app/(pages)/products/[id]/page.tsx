"use client";

import Link from "next/link";
import { useState } from "react";
import {
	IconBrandFacebook,
	IconBrandTwitter,
	IconBrandYoutube,
	IconMessage,
} from "tabler-icons";
import { Button } from "@/components/ui/button";

const productDetails = {
	1: {
		name: "Bar Cutting Machine Model-GQ 40",
		category: "Bar Cutting Machine",
		price: "₹64,000.00",
		image: "🏗️",
		specifications: {
			Model: "GQ 40",
			"TMF Bar Cutting Range (mm)": "6-32",
			"Plain MS Round Bar Cutting Range (mm)": "6-40",
			"Flat Steel Cutting Range (mm)": "7*13",
			"Solid Square Steel Cutting Range (mm)": "2*32",
			"Rod and Angle Cutting Range (mm)": "6-40",
			"Control Style": "With Clutch",
			"Frequency of Cutting (times/min)": "32",
			"Motor Power (kw)": "3",
			"Voltage & Frequency": "415/3 /50 Hz",
			"Dimensions (mm)": "1200*620*700",
			"Weight (kg)": "380",
		},
	},
	2: {
		name: "Bar Cutting Machine Model-GQ 52",
		category: "Bar Cutting Machine",
		price: "₹64,000.00",
		image: "🏗️",
		specifications: {
			Model: "GQ 52",
			"TMF Bar Cutting Range (mm)": "6-32",
			"Plain MS Round Bar Cutting Range (mm)": "6-52",
			"Flat Steel Cutting Range (mm)": "7*13",
			"Solid Square Steel Cutting Range (mm)": "2*32",
			"Rod and Angle Cutting Range (mm)": "6-52",
			"Control Style": "With Clutch",
			"Frequency of Cutting (times/min)": "32",
			"Motor Power (kw)": "3",
			"Voltage & Frequency": "415/3 /50 Hz",
			"Dimensions (mm)": "1200*620*700",
			"Weight (kg)": "390",
		},
	},
};

const relatedProducts = [
	{
		id: 1,
		name: "Bar Cutting Machine Model-GQ 52",
		price: "₹64,000.00",
		image: "🏗️",
	},
];

export default function ProductDetail({
	params,
}: {
	params: { id: string };
}) {
	const id = Number(params.id);
	const [quantity, setQuantity] = useState(1);
	const [addedToCart, setAddedToCart] = useState(false);
	const product = productDetails[id as keyof typeof productDetails];

	if (!product) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-white">
				<div className="text-center">
					<h1 className="text-2xl font-bold mb-4">
						Product not found
					</h1>
					<Link href="/products">
						<Button>Back to Products</Button>
					</Link>
				</div>
			</div>
		);
	}

	const handleAddToCart = () => {
		setAddedToCart(true);
		setTimeout(() => setAddedToCart(false), 2000);
	};

	return (
		<div className="w-full bg-white">
			{/* Breadcrumb */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-600">
				<Link href="/" className="hover:text-slate-900">
					Home
				</Link>
				<span className="mx-2">/</span>
				<Link href="/products" className="hover:text-slate-900">
					Bar Cutting Machine
				</Link>
				<span className="mx-2">/</span>
				<span className="text-slate-900 font-semibold">
					{product.name}
				</span>
			</div>

			{/* Product Content */}
			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Product Image */}
					<div>
						<div className="bg-white border border-slate-200 rounded-lg p-8 h-96 flex items-center justify-center mb-4 relative">
							<span className="text-7xl">{product.image}</span>
							<button
								type="button"
								className="absolute top-4 right-4 bg-white border border-slate-200 p-2 rounded hover:bg-slate-50"
							>
								🔍
							</button>
						</div>
						<div className="flex gap-4">
							<div className="w-20 h-20 bg-white border border-slate-200 rounded flex items-center justify-center cursor-pointer hover:border-slate-300">
								<span className="text-3xl">{product.image}</span>
							</div>
							<div className="w-20 h-20 bg-white border border-slate-200 rounded flex items-center justify-center cursor-pointer hover:border-slate-300">
								<span className="text-3xl">{product.image}</span>
							</div>
						</div>
					</div>

					{/* Product Info */}
					<div className="space-y-6">
						<div>
							<h1 className="text-3xl font-bold text-slate-900 mb-4">
								{product.name}
							</h1>
							<p className="text-blue-600 font-semibold text-lg mb-4">
								₹64,000.00
							</p>
						</div>

						<div className="pb-4 border-b border-slate-200">
							<p className="text-slate-700 text-sm font-semibold">
								Category:{" "}
								<span className="text-slate-600">
									{product.category}
								</span>
							</p>
						</div>

						{/* Quantity & Add to Cart */}
						<div className="flex gap-4 items-center">
							<div className="flex items-center border border-slate-300 rounded bg-white">
								<button
									type="button"
									onClick={() =>
										setQuantity(Math.max(1, quantity - 1))
									}
									className="px-3 py-2 hover:bg-slate-100 transition-colors text-slate-900"
								>
									−
								</button>
								<span className="px-4 py-2 font-semibold text-slate-900">
									{quantity}
								</span>
								<button
									type="button"
									onClick={() => setQuantity(quantity + 1)}
									className="px-3 py-2 hover:bg-slate-100 transition-colors text-slate-900"
								>
									+
								</button>
							</div>
							<Button
								onClick={handleAddToCart}
								className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold"
							>
								{addedToCart ? "Added!" : "Add to cart"}
							</Button>
						</div>

						{/* Action Buttons */}
						<div className="flex gap-2">
							<Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold">
								📞 Get a Quote
							</Button>
							<Button
								variant="outline"
								className="px-3 border-slate-300"
							>
								<IconBrandFacebook className="w-5 h-5 text-blue-600" />
							</Button>
							<Button
								variant="outline"
								className="px-3 border-slate-300"
							>
								<IconBrandTwitter className="w-5 h-5 text-blue-400" />
							</Button>
							<Button
								variant="outline"
								className="px-3 border-slate-300"
							>
								<IconMessage className="w-5 h-5 text-green-500" />
							</Button>
							<Button
								variant="outline"
								className="px-3 border-slate-300"
							>
								<IconBrandYoutube className="w-5 h-5 text-red-600" />
							</Button>
						</div>
					</div>
				</div>

				{/* Additional Information */}
				<div className="mt-16 bg-white">
					<h2 className="text-2xl font-bold text-blue-600 mb-6">
						Additional Information
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{Object.entries(product.specifications).map(
							([key, value]) => (
								<div
									key={key}
									className="pb-3 border-b border-slate-200"
								>
									<p className="text-slate-700 text-sm">
										<span className="font-semibold">• {key}:</span>{" "}
										<span className="text-slate-600">{value}</span>
									</p>
								</div>
							),
						)}
					</div>
				</div>

				{/* Related Products */}
				<div className="mt-16">
					<h2 className="text-2xl font-bold text-slate-900 mb-8">
						Related Products
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{relatedProducts.map((relProduct) => (
							<Link
								key={relProduct.id}
								href={`/products/${relProduct.id}`}
							>
								<div className="border border-slate-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
									<div className="bg-white h-48 flex items-center justify-center rounded border border-slate-200 mb-4">
										<span className="text-6xl">
											{relProduct.image}
										</span>
									</div>
									<h3 className="font-semibold text-slate-900 mb-2 text-sm">
										{relProduct.name}
									</h3>
									<p className="text-yellow-600 font-bold mb-3">
										{relProduct.price}
									</p>
									<Button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm py-1 h-8">
										Add to cart
									</Button>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
