"use client";

import Link from "next/link";
import { useState } from "react";
import { IconSearch } from "tabler-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Products() {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortBy, setSortBy] = useState("default");

	const products = [
		{
			id: 1,
			name: "Bar Cutting Machine Model DU 50",
			price: 1500,
			oldPrice: 2000,
			category: "bar-cutting",
		},
		{
			id: 2,
			name: "Bar Cutting Machine Model DU 50",
			price: 1500,
			oldPrice: 2000,
			category: "bar-cutting",
		},
		{
			id: 3,
			name: "Concrete Bucket",
			price: 3400,
			oldPrice: 4500,
			category: "concrete",
		},
		{
			id: 4,
			name: "Concrete Mixers",
			price: 1500,
			oldPrice: 2000,
			category: "concrete",
		},
		{
			id: 5,
			name: "Concrete Mixers-Mini Building Pump Model DU 50",
			price: 1500,
			oldPrice: 2500,
			category: "concrete",
		},
		{
			id: 6,
			name: "Double Beam Screed Board Ultimate",
			price: 1500,
			oldPrice: 2000,
			category: "vibratory",
		},
		{
			id: 7,
			name: "Situs Through Vibratory Roller Model PYJ-1000",
			price: 1500,
			oldPrice: 2500,
			category: "vibratory",
		},
		{
			id: 8,
			name: "Situs Through Vibratory Roller Model PYJ-830",
			price: 1500,
			oldPrice: 2500,
			category: "vibratory",
		},
		{
			id: 9,
			name: "Hand Trenails Model Ball Float",
			price: 1500,
			oldPrice: 2000,
			category: "hand-tools",
		},
		{
			id: 10,
			name: "Hand Trenails Model Check Rod",
			price: 1500,
			oldPrice: 2000,
			category: "hand-tools",
		},
		{
			id: 11,
			name: "Delson Power Trowel Model PAJ-100d",
			price: 1500,
			oldPrice: 2500,
			category: "power-trowel",
		},
		{
			id: 12,
			name: "Mini Cubic With Check Wrench",
			price: 1500,
			oldPrice: 2000,
			category: "mini-tools",
		},
		{
			id: 13,
			name: "Monkey Hoist Model ML-300",
			price: 1500,
			oldPrice: 2500,
			category: "hoisting",
		},
		{
			id: 14,
			name: "Monkey Hoist Model ML-500",
			price: 1500,
			oldPrice: 2500,
			category: "hoisting",
		},
		{
			id: 15,
			name: "Ring Making Machine Model CYS-30",
			price: 1500,
			oldPrice: 2000,
			category: "ring-making",
		},
		{
			id: 16,
			name: "Ring Making Machine Model CYS-90",
			price: 1500,
			oldPrice: 2500,
			category: "ring-making",
		},
		{
			id: 17,
			name: "Sound Vibrator Model CVS 60",
			price: 1500,
			oldPrice: 2500,
			category: "vibrator",
		},
		{
			id: 18,
			name: "Sound Vibrator Model CVS 90",
			price: 1500,
			oldPrice: 2500,
			category: "vibrator",
		},
		{
			id: 19,
			name: "Testing Rammer Model HCD 800",
			price: 1500,
			oldPrice: 2000,
			category: "testing",
		},
		{
			id: 20,
			name: "Truss Screed Model FM-400S",
			price: 1500,
			oldPrice: 2500,
			category: "screed",
		},
	];

	const categories = [
		{
			name: "Bar Cutting Machines",
			id: "bar-cutting",
			subcategories: ["Model DU 50", "Model DU 30"],
		},
		{
			name: "Concrete Buckets",
			id: "concrete",
			subcategories: ["Bucket 500", "Bucket 750"],
		},
		{
			name: "Concrete Mixers",
			id: "concrete-mixer",
			subcategories: ["Mixer 200L", "Mixer 300L"],
		},
		{
			name: "Concrete Mixer-Mini Building Pump Model",
			id: "concrete-pump",
			subcategories: [],
		},
		{
			name: "Double Beam Screed Board",
			id: "screed-board",
			subcategories: [],
		},
		{
			name: "Double Beam Screed Machine",
			id: "screed-machine",
			subcategories: [
				"Mechanical Support Oil",
				"Vibratory Block Wireless",
			],
		},
		{
			name: "Delson Power Trowel",
			id: "power-trowel",
			subcategories: [],
		},
		{
			name: "Mechanical Support Oil",
			id: "mechanical",
			subcategories: [],
		},
		{
			name: "Situs Through Vibratory Roller Machine",
			id: "vibratory",
			subcategories: ["Model PYJ-1000", "Model PYJ-830"],
		},
		{
			name: "Vibratory Roller (Hand)",
			id: "hand-vibratory",
			subcategories: [],
		},
		{ name: "Power Floaters", id: "floaters", subcategories: [] },
		{ name: "Hydraulic Pumps", id: "hydraulic", subcategories: [] },
		{
			name: "Hand Trenails",
			id: "hand-tools",
			subcategories: ["Model Ball", "Model Check Rod"],
		},
		{ name: "Lift Testing Equipment", id: "lift", subcategories: [] },
		{
			name: "Manual Batch Mixer",
			id: "batch-mixer",
			subcategories: [],
		},
		{
			name: "Modular Hoist (Hand)",
			id: "modular",
			subcategories: [],
		},
		{ name: "Power Floaters", id: "power-float", subcategories: [] },
		{ name: "Power Trowel", id: "trowel", subcategories: [] },
		{ name: "Ride on Rollers", id: "ride-on", subcategories: [] },
		{ name: "Rigger Machine", id: "rigger", subcategories: [] },
		{
			name: "Ring Making Machine",
			id: "ring-making",
			subcategories: [],
		},
		{
			name: "Road Screed Model Ramp Cutter",
			id: "screed-cutter",
			subcategories: [],
		},
		{ name: "Screed Machine", id: "screed", subcategories: [] },
		{ name: "Sound Vibrator", id: "vibrator", subcategories: [] },
		{ name: "Stud Cutter", id: "stud", subcategories: [] },
		{
			name: "Tandem Vibratory Roller",
			id: "tandem-vibratory",
			subcategories: [],
		},
		{ name: "Testing Rammer", id: "testing", subcategories: [] },
		{
			name: "Truss Screed Model FM-400S",
			id: "truss-screed",
			subcategories: [],
		},
		{
			name: "Vibrator Compactor",
			id: "vibrator-compactor",
			subcategories: [],
		},
		{
			name: "Vibrator Roller",
			id: "vibrator-roller",
			subcategories: [],
		},
	];

	const filteredProducts = products.filter((p) =>
		p.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div className="w-full bg-white">
			{/* Hero Section */}
			<section className="relative w-full py-12 bg-slate-950 text-white overflow-hidden">
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-2">
						Shop
					</h1>
					<p className="text-yellow-400 font-semibold">
						Explore All Our Products Range
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
							<span>Showing 1-5 of 30 results</span>
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
								{categories.map((category) => (
									<div key={category.id}>
										<Link
											href={`/products?category=${category.id}`}
											className="text-blue-600 hover:underline block py-1"
										>
											{category.name}
										</Link>
										{category.subcategories.length > 0 && (
											<div className="ml-4 space-y-1 mt-1">
												{category.subcategories.map((sub) => (
													<Link
														key={sub}
														href={`/products?category=${category.id}&sub=${sub}`}
														className="text-blue-600 hover:underline block py-0.5 text-xs"
													>
														{sub}
													</Link>
												))}
											</div>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Products Grid */}
						<div className="lg:col-span-3">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{filteredProducts.map((product) => (
									<Link
										key={product.id}
										href={`/products/${product.id}`}
									>
										<Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-slate-200">
											<div className="h-40 bg-white flex items-center justify-center border-b border-slate-200">
												<span className="text-5xl">🏗️</span>
											</div>
											<CardContent className="p-4">
												<h3 className="font-semibold text-slate-900 text-sm mb-2 line-clamp-2">
													{product.name}
												</h3>
												<div className="flex gap-2 mb-3">
													<span className="text-slate-400 line-through text-xs">
														₹{product.oldPrice}
													</span>
													<span className="text-yellow-500 font-bold text-sm">
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

							{/* Pagination */}
							<div className="flex justify-center gap-2 mt-8">
								<button className="w-8 h-8 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold rounded">
									1
								</button>
								<button className="w-8 h-8 border border-slate-300 text-slate-900 font-bold rounded hover:bg-slate-100">
									2
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
