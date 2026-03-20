export type SortOption =
	| "default"
	| "price-low"
	| "price-high"
	| "newest"
	| "price-asc"
	| "price-desc"
	| "name"
	| "relevance";

export type ShopFilters = {
	search: string;
	category: string | null;
	subcategory: string | null;
	sortBy: SortOption;
	page: number;
};

export type PaginationResult<T> = {
	data: T[];
	total: number;
	page: number;
	perPage: number;
	totalPages: number;
	hasNext: boolean;
	hasPrev: boolean;
};
