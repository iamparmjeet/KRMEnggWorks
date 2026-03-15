"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { IconSearch } from "tabler-icons";
import PTB from "@/components/ptb";
import ProductCard from "@/components/shop/product-card";
import { Button } from "@/components/ui/button";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { categories, products } from "@/constants/product-data";

export default function Products() {
	const [searchTerm, setSearchTerm] = useState("");
	const [sortBy, setSortBy] = useState("default");
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 9;

	// Filter and sort products
	const filteredProducts = useMemo(() => {
		let result = [...products];

		// Search filter
		if (searchTerm) {
			const lower = searchTerm.toLowerCase();
			result = result.filter(
				(p) =>
					p.name.toLowerCase().includes(lower) ||
					p.category.toLowerCase().includes(lower),
			);
		}

		// Sorting
		switch (sortBy) {
			case "price-low":
				result.sort((a, b) => a.price - b.price);
				break;
			case "price-high":
				result.sort((a, b) => b.price - a.price);
				break;
			case "newest":
				result.sort((a, b) => b.id - a.id);
				break;
			default:
				break;
		}

		return result;
	}, [searchTerm, sortBy]);

	// Pagination
	const totalPages = Math.ceil(
		filteredProducts.length / itemsPerPage,
	);
	const paginatedProducts = filteredProducts.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	);

	return (
		<div className="w-full bg-white">
			{/* Hero Section */}
			<PTB
				heading="Shop"
				subheading="Explore All Our Products Range"
			/>

			{/* Main Content */}
			<section className="py-14 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Search and Sort Bar */}
					<div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
						<div className="flex w-full md:w-auto border border-black">
							<input
								type="text"
								placeholder="Search..."
								value={searchTerm}
								onChange={(e) => {
									setSearchTerm(e.target.value);
									setCurrentPage(1);
								}}
								className="px-4 py-2 h-13 flex-1 md:flex-none text-slate-900 placeholder-slate-500 outline-none"
							/>
							<Button
								type="button"
								variant="link"
								className="hover:bg-blue hover:text-white bg-yellow text-blue w-fit h-full size-14 font-bold px-4 py-2"
							>
								<IconSearch className="size-5" />
							</Button>
						</div>
						<div className="flex flex-row justify-between w-full items-center">
							<div className="flex items-start gap-2 text-black font-cambo text-lg">
								<span>
									Showing{" "}
									{filteredProducts.length > 0
										? (currentPage - 1) * itemsPerPage + 1
										: 0}
									-
									{Math.min(
										currentPage * itemsPerPage,
										filteredProducts.length,
									)}{" "}
									of {filteredProducts.length} results
								</span>
							</div>

							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="px-4 py-2 border border-black text-black bg-white"
							>
								<option value="default">Default sorting</option>
								<option value="price-low">Price: Low to High</option>
								<option value="price-high">Price: High to Low</option>
								<option value="newest">Newest</option>
							</select>
						</div>
					</div>

					{/* Products Grid with Sidebar */}
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
						{/* Sidebar */}
						<div className="lg:col-span-1 bg-white">
							<h3 className="font-medium mb-4 text-2xl">
								Product categories
							</h3>
							<div className="space-y-1 font-cambo">
								{categories.map((category) => (
									<ul key={category.id}>
										<Link
											href={`/products-category/${category.id}`}
											className="text-primary hover:underline block text-lg"
										>
											{category.name} ({category.subcategories.length}
											)
										</Link>

										{category.subcategories.length > 0 && (
											<li className="ml-4 space-y-1 mt-1">
												{category.subcategories.map((sub) => (
													<Link
														key={sub}
														href={`/products?category=${category.id}&sub=${encodeURIComponent(sub)}`}
														className="text-primary hover:underline block py-0.5"
													>
														{sub}
													</Link>
												))}
											</li>
										)}
									</ul>
								))}
							</div>
						</div>

						{/* Products Grid */}
						<div className="lg:col-span-3">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{paginatedProducts.map((product) => (
									<Link
										key={product.id}
										href={`/product/${product.slug}`}
										className="block"
									>
										<ProductCard product={product} />
									</Link>
								))}
							</div>

							{paginatedProducts.length === 0 && (
								<div className="text-center py-12 text-slate-500">
									No products found matching your search.
								</div>
							)}

							{/* Pagination */}
							{totalPages > 1 && (
								<div className="flex justify-center gap-2 mt-8">
									<Pagination>
										<PaginationContent>
											<PaginationItem>
												<PaginationPrevious
													href="#"
													onClick={(e) => {
														e.preventDefault();
														if (currentPage > 1)
															setCurrentPage((p) => p - 1);
													}}
													className={
														currentPage === 1
															? "pointer-events-none opacity-50"
															: ""
													}
												/>
											</PaginationItem>

											{Array.from(
												{ length: totalPages },
												(_, i) => i + 1,
											).map((page) => (
												<PaginationItem key={page}>
													<PaginationLink
														href="#"
														onClick={(e) => {
															e.preventDefault();
															setCurrentPage(page);
														}}
														isActive={currentPage === page}
													>
														{page}
													</PaginationLink>
												</PaginationItem>
											))}

											<PaginationItem>
												<PaginationNext
													href="#"
													onClick={(e) => {
														e.preventDefault();
														if (currentPage < totalPages)
															setCurrentPage((p) => p + 1);
													}}
													className={
														currentPage === totalPages
															? "pointer-events-none opacity-50"
															: ""
													}
												/>
											</PaginationItem>
										</PaginationContent>
									</Pagination>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
