"use client";

import { IconSearch } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { type SortOption, useShopFilters } from "@/hooks/use-shop-filters";

interface ShopToolbarProps {
	totalResults: number;
	currentPage: number;
	itemsPerPage: number;
	/** Slot for the mobile filter button, rendered left of search */
	mobileFilterSlot?: React.ReactNode;
}

export function ShopToolbar({
	totalResults,
	currentPage,
	itemsPerPage,
	mobileFilterSlot,
}: ShopToolbarProps) {
	const { filters, updateParams } = useShopFilters();

	const start = totalResults > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
	const end = Math.min(currentPage * itemsPerPage, totalResults);

	return (
		<div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
			{/* Left: optional mobile filter btn + search input */}
			<div className="flex w-full md:w-auto items-center gap-2">
				{mobileFilterSlot}
				<div className="flex flex-1 md:flex-none border border-black">
					<input
						type="text"
						placeholder="Search..."
						value={filters.search}
						onChange={(e) => updateParams({ search: e.target.value, page: 1 })}
						className="px-4 py-2 h-13 flex-1 md:flex-none text-slate-900 placeholder-slate-500 outline-none"
					/>
					<Button
						type="button"
						variant="link"
						className="hover:bg-blue hover:text-white bg-yellow text-blue-950 w-fit h-full size-14 font-bold px-4 py-2"
					>
						<IconSearch className="size-5" />
					</Button>
				</div>
			</div>

			{/* Right: results count + sort */}
			<div className="flex flex-row justify-between w-full items-center gap-4">
				<span className="text-black font-cambo text-lg">
					Showing {start}–{end} of {totalResults} results
				</span>
				<select
					value={filters.sortBy}
					onChange={(e) =>
						updateParams({ sortBy: e.target.value as SortOption })
					}
					className="px-4 py-2 border border-black text-black bg-white"
				>
					<option value="default">Default sorting</option>
					<option value="price-low">Price: Low to High</option>
					<option value="price-high">Price: High to Low</option>
					<option value="newest">Newest</option>
				</select>
			</div>
		</div>
	);
}
