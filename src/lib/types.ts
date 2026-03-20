export type SortOption =
	| "default"
	| "price-low"
	| "price-high"
	| "newest";

export type ShopFilters = {
	search: string;
	category: string | null;
	subcategory: string | null;
	sortBy: SortOption;
	page: number;
};
