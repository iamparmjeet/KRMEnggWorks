"use client";

import { IconFilter } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import PTB from "@/components/ptb";
import { ProductGrid } from "@/components/shop/product-grid";
import { ShopSidebar } from "@/components/shop/shop-sidebar";
import { ShopToolbar } from "@/components/shop/shop-toolbar";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	products as allProducts,
	type ProductListItem,
} from "@/constants/product-data";
import { useShopFilters } from "@/hooks/use-shop-filters";

const ITEMS_PER_PAGE = 9;

interface ShopLayoutProps {
	initialProducts?: ProductListItem[];
	heading?: string;
	subheading?: string;
}

export function ShopLayout({
	initialProducts,
	heading = "Shop",
	subheading = "Explore All Our Products Range",
}: ShopLayoutProps) {
	const { filters } = useShopFilters();
	const { search, page } = filters;
	const [mobileOpen, setMobileOpen] = useState(false);

	const baseProducts = initialProducts ?? allProducts;

	// Count for toolbar (search-filtered only, sorting doesn't change count)
	const filteredCount = useMemo(() => {
		if (!search) return baseProducts.length;
		const lower = search.toLowerCase();
		return baseProducts.filter(
			(p) =>
				p.name.toLowerCase().includes(lower) ||
				p.category.toLowerCase().includes(lower)
		).length;
	}, [baseProducts, search]);

	const activeFiltersCount = [filters.category, filters.subcategory].filter(
		Boolean
	).length;

	// Mobile filter button passed as a slot into the toolbar
	const mobileFilterButton = (
		<Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
			<SheetTrigger
				render={
					<Button
						variant="outline"
						className="lg:hidden flex items-center gap-2 border-black h-13 px:3 shrink-0"
					>
						<IconFilter className="h-4 w-4" />
						<span className="hidden sm:inline">Filters</span>
						{activeFiltersCount > 0 && (
							<span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow text-blue-950 text-xs font-bold">
								{activeFiltersCount}
							</span>
						)}
					</Button>
				}
			/>
			<SheetContent side="left" className="w-80 p-0 overflow-y-auto">
				<SheetHeader className="px-4 py-3 border-b">
					<SheetTitle className="flex items-center gap-2 text-base">
						<IconFilter className="h-4 w-4 text-blue-950" />
						Filter by Category
					</SheetTitle>
				</SheetHeader>
				<div className="px-2 py-4 bg-white">
					{/* Render sidebar content inside the sheet */}
					<ShopSidebar onNavigate={() => setMobileOpen(false)} />
				</div>
			</SheetContent>
		</Sheet>
	);

	return (
		<div className="w-full bg-white">
			<PTB heading={heading} subheading={subheading} />

			<section className="py-14 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<ShopToolbar
						totalResults={filteredCount}
						currentPage={page}
						itemsPerPage={ITEMS_PER_PAGE}
						mobileFilterSlot={mobileFilterButton}
					/>

					<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
						{/* Desktop sidebar — hidden on mobile */}
						<ShopSidebar className="hidden lg:block" />

						<div className="lg:col-span-3">
							<ProductGrid products={baseProducts} />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
