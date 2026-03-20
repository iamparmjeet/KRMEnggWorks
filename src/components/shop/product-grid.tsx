"use client";

import Link from "next/link";
import { memo, useMemo } from "react";
import ProductCard from "@/components/shop/product-card";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import type { ProductListItem } from "@/constants/product-data";
import { useShopFilters } from "@/hooks/use-shop-filters";

const ITEMS_PER_PAGE = 9;

// ─── Skeleton ─────────────────────────────────────────────────────────────────

export function ProductGridSkeleton() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			{Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
				<div key={i} className="space-y-3">
					<Skeleton className="h-48 w-full" />
					<Skeleton className="h-4 w-3/4" />
					<Skeleton className="h-4 w-1/2" />
				</div>
			))}
		</div>
	);
}

// ─── Single card wrapper (memoized) ──────────────────────────────────────────

const ProductCardWrapper = memo(function ProductCardWrapper({
	product,
}: {
	product: ProductListItem;
}) {
	return (
		<Link className="block group" href={`/product/${product.slug}`}>
			<ProductCard product={product} />
		</Link>
	);
});

// ─── Main ProductGrid ─────────────────────────────────────────────────────────

interface ProductGridProps {
	/** All products AFTER category filtering (done by the page) */
	products: ProductListItem[];
}

export function ProductGrid({
	products: allProducts,
}: ProductGridProps) {
	const { filters, updateParams } = useShopFilters();
	const { search, sortBy, page: currentPage } = filters;

	// Apply search + sort on top of whatever the page passed in
	const filtered = useMemo(() => {
		let result = [...allProducts];

		if (search) {
			const lower = search.toLowerCase();
			result = result.filter(
				(p) =>
					p.name.toLowerCase().includes(lower) ||
					p.category.toLowerCase().includes(lower),
			);
		}

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
		}

		return result;
	}, [allProducts, search, sortBy]);

	const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
	const safePage = Math.min(
		Math.max(1, currentPage),
		totalPages || 1,
	);

	const paginated = filtered.slice(
		(safePage - 1) * ITEMS_PER_PAGE,
		safePage * ITEMS_PER_PAGE,
	);

	return (
		<div>
			{/* Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{paginated.map((product) => (
					<ProductCardWrapper key={product.id} product={product} />
				))}
			</div>

			{paginated.length === 0 && (
				<div className="text-center py-12 text-black">
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
										if (safePage > 1)
											updateParams({ page: safePage - 1 });
									}}
									className={
										safePage === 1
											? "pointer-events-none opacity-50"
											: ""
									}
								/>
							</PaginationItem>

							{Array.from(
								{ length: totalPages },
								(_, i) => i + 1,
							).map((pageNum) => (
								<PaginationItem key={pageNum}>
									<PaginationLink
										href="#"
										onClick={(e) => {
											e.preventDefault();
											updateParams({ page: pageNum });
										}}
										className="hover:bg-yellow hover:text-black"
										isActive={safePage === pageNum}
									>
										{pageNum}
									</PaginationLink>
								</PaginationItem>
							))}

							<PaginationItem>
								<PaginationNext
									href="#"
									onClick={(e) => {
										e.preventDefault();
										if (safePage < totalPages)
											updateParams({ page: safePage + 1 });
									}}
									className={
										safePage === totalPages
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
	);
}
