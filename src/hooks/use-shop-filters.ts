"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

export type SortOption = "default" | "price-low" | "price-high" | "newest";

export type ShopFilters = {
	search: string;
	category: string | null;
	subcategory: string | null;
	sortBy: SortOption;
	page: number;
};

export function useShopFilters() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const filters: ShopFilters = useMemo(() => {
		// Derive category from URL path (e.g. /product-category/concrete-mixer)
		const pathMatch = pathname.match(/\/product-category\/([^&/]+)/);
		const categoryFromPath = pathMatch?.[1] ?? null;

		return {
			search: searchParams.get("search") ?? "",
			category: categoryFromPath ?? searchParams.get("category") ?? null,
			subcategory: searchParams.get("sub") ?? null,
			sortBy: (searchParams.get("sort") as SortOption) ?? "default",
			page: Number(searchParams.get("page") ?? 1),
		};
	}, [pathname, searchParams]);

	const updateParams = useCallback(
		(updates: Partial<ShopFilters>) => {
			const params = new URLSearchParams(searchParams.toString());

			if ("search" in updates) {
				if (updates.search) params.set("search", updates.search);
				else params.delete("search");
			}
			if ("category" in updates) {
				if (updates.category) {
					// Navigate to category page if setting a category
					const sub = updates.subcategory ?? params.get("sub") ?? "";
					const subPart = sub ? `&sub=${sub}` : "";
					router.push(`/product-category/${updates.category}${subPart}`);
					return;
				} else {
					// Clear category → go back to shop
					router.push("/shop");
					return;
				}
			}
			if ("subcategory" in updates) {
				if (updates.subcategory) params.set("sub", updates.subcategory);
				else params.delete("sub");
			}
			if ("sortBy" in updates) {
				if (updates.sortBy && updates.sortBy !== "default")
					params.set("sort", updates.sortBy);
				else params.delete("sort");
			}
			if ("page" in updates) {
				if (updates.page && updates.page > 1)
					params.set("page", String(updates.page));
				else params.delete("page");
			}

			// Reset page on filter changes (but not when explicitly setting page)
			if (!("page" in updates)) params.delete("page");

			router.push(`${pathname}?${params.toString()}`);
		},
		[router, pathname, searchParams]
	);

	const clearFilters = useCallback(() => {
		router.push("/shop");
	}, [router]);

	return { filters, updateParams, clearFilters };
}
