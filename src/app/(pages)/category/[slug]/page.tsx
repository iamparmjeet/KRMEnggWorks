"use client";

import Link from "next/link";
import { useState } from "react";
import { IconSearch } from "tabler-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categoryData = {
	"bar-cutting-machine": {
		name: "Bar Cutting Machine",
		description: "Explore All Our Products Range",
		products: [
			{
				id: 1,
				name: "Bar Cutting Machine Model-GQ 40",
				price: 64000,
				image: "🏗️",
			},
			{
				id: 2,
				name: "Bar Cutting Machine Model-GQ 52",
				price: 64000,
				image: "🏗️",
			},
			{
				id: 3,
				name: "Bar Cutting Machine Model-GQ 30",
				price: 54000,
				image: "🏗️",
			},
			{
				id: 4,
				name: "Bar Cutting Machine Model-GQ 60",
				price: 74000,
				image: "🏗️",
			},
			{
				id: 5,
				name: "Bar Cutting Machine Model-GQ 75",
				price: 84000,
				image: "🏗️",
			},
			{
				id: 6,
				name: "Bar Cutting Machine Model-GQ 90",
				price: 94000,
				image: "🏗️",
			},
		],
	},
	"concrete-mixers": {
		name: "Concrete Mixers",
		description: "Explore All Our Products Range",
		products: [
			{
				id: 7,
				name: "Concrete Mixer Model 200L",
				price: 45000,
				image: "🏗️",
			},
			{
				id: 8,
				name: "Concrete Mixer Model 300L",
				price: 55000,
				image: "🏗️",
			},
			{
				id: 9,
				name: "Concrete Mixer Model 500L",
				price: 75000,
				image: "🏗️",
			},
		],
	},
};

const allCategories = [
	"Bar Bending Machines",
	"Bar Cutting Machine",
	"Concrete Batching Plant",
	"Concrete Mixture-Mini Batching Plant",
	"Concrete Bucket",
	"Concrete Cutting Machines",
	"Concrete Mixer",
	"Concrete Mixer With Mechanical Hopper",
	"Concrete Mixer Without Mechanical Hopper",
	"Portable Mini Concrete Mixer",
	"Concrete Roller Screed Power",
	"Concrete Truss Screed",
	"Crane",
	"Mini Crane With Clutch Winch",
	"Hand Screeds",
	"Hand Vibrator Equipment",
	"Machine",
	"Monkey Hoist",
	"Power Floater",
	"Power Trowel",
	"Ride on Rollers",
	"Ring Making Machine",
	"Road Screed Model Ramp Cutter",
	"Screed Machine",
	"Sound Vibrator",
	"Stud Cutter",
	"Tandem Vibratory Roller",
	"Testing Rammer",
	"Trunnix Flooring Machine",
	"Uncategorized",
	"Vacuum Dewatering Pump",
	"Vibratory Compactors",
	"Vibratory Roller",
];

export default function CategoryPage({
	params,
}: {
	params: { slug: string };
}) {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortBy, setSortBy] = useState("default");

	const category =
		categoryData[params.slug as keyof typeof categoryData];

	if (!category) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-white">
				<div className="text-center">
					<h1 className="text-2xl font-bold mb-4">
						Category not found
					</h1>
					<Link href="/products">
						<Button>Back to Shop</Button>
					</Link>
				</div>
			</div>
		);
	}

	const filteredProducts = category.products.filter((p) =>
		p.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div className="w-full bg-white">
			{/* Hero Section */}
			<section className="relative w-full py-12 bg-slate-950 text-white overflow-hidden">
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-2">
						{category.name}
					</h1>
					<p className="text-yellow-400 font-semibold">
						{category.description}
					</p>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-8 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Search and Sort Bar */}
					<div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
						<div className="flex gap-2 w-full md:w-auto">
							<input
								type="text"
								placeholder="Search..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="px-4 py-2 border border-slate-300 rounded-lg flex-1 md:flex-none text-slate-900 placeholder-slate-500"
							/>
							<button
								type="button"
								className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-4 py-2 rounded-lg"
							>
								<IconSearch className="w-5 h-5" />
							</button>
						</div>

						<div className="flex items-center gap-2 text-slate-600 text-sm">
							<span>
								Showing {filteredProducts.length} of{" "}
								{category.products.length} results
							</span>
						</div>

						<select
							value={sortBy}
							onChange={(e) => setSortBy(e.target.value)}
							className="px-4 py-2 border border-slate-300 rounded-lg text-slate-900 bg-white"
						>
							<option value="default">Default sorting</option>
							<option value="price-low">Price: Low to High</option>
							<option value="price-high">Price: High to Low</option>
							<option value="newest">Newest</option>
						</select>
					</div>

					{/* Products Grid with Sidebar */}
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
						{/* Sidebar */}
						<div className="lg:col-span-1 bg-white">
							<h3 className="font-bold text-slate-900 mb-4 text-lg">
								Product categories
							</h3>
							<div className="space-y-2 text-sm">
								{allCategories.map((cat, idx) => (
									<Link
										key={idx}
										href="#"
										className="text-blue-600 hover:underline block py-1"
									>
										• {cat}
									</Link>
								))}
							</div>
						</div>

						{/* Products Grid */}
						<div className="lg:col-span-3">
							{filteredProducts.length > 0 ? (
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{filteredProducts.map((product) => (
										<Link
											key={product.id}
											href={`/products/${product.id}`}
										>
											<Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-slate-200">
												<div className="h-48 bg-white flex items-center justify-center border-b border-slate-200">
													<span className="text-6xl">
														{product.image}
													</span>
												</div>
												<CardContent className="p-4">
													<h3 className="font-semibold text-slate-900 text-sm mb-2 line-clamp-2">
														{product.name}
													</h3>
													<div className="mb-3">
														<span className="text-yellow-600 font-bold text-sm">
															₹{product.price}
														</span>
													</div>
													<Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-sm py-1 h-8">
														Add to cart
													</Button>
												</CardContent>
											</Card>
										</Link>
									))}
								</div>
							) : (
								<div className="text-center py-12">
									<p className="text-slate-600 text-lg">
										No products found matching your search.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
