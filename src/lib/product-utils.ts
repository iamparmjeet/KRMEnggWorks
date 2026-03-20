import {
	type CategoryId,
	type ProductDetailsType,
	type ProductListItem,
	productDatabase,
	products,
} from "@/constants";
import type { SortOption } from "@/lib/types";

/*************************/
// Types

type RelatedProductsOptions = {
	limit?: number;
	sortBy?: SortOption;
	excludeSlugs?: string[];
};

type SearchOptions = {
	fuzzy?: boolean;
	limit?: number;
	sortBy?: SortOption;
};

/*****************************************************/
const categoryIndex: Map<CategoryId, Set<string>> = (() => {
	const index = new Map<CategoryId, Set<string>>();

	for (const product of products) {
		for (const catId of product.categoryId) {
			if (!index.has(catId as CategoryId)) {
				index.set(catId as CategoryId, new Set());
			}
			index.get(catId as CategoryId)?.add(product.slug);
		}
	}
	return index;
})();

// Search index
const searchIndex: Map<string, Set<string>> = (() => {
	const index = new Map<string, Set<string>>();

	for (const product of products) {
		const nameWords = product.name.toLowerCase().split(/\s+/);
		const categoryWords = product.category.toLowerCase().split(/[,\s]+/);
		const allWords = [...new Set([...nameWords, ...categoryWords])];

		for (const word of allWords) {
			const cleanWord = word.replace(/[^a-z0-9]/g, "");
			if (cleanWord.length < 2) continue;

			if (!index.has(cleanWord)) {
				index.set(cleanWord, new Set());
			}
			index.get(cleanWord)?.add(product.slug);
		}
	}
	return index;
})();

// Product lookup by slug
const productBySlug = new Map(products.map((p) => [p.slug, p]));

/***********************************************************/

export function getProductBySlug(slug: string): ProductDetailsType | undefined {
	if (!slug || typeof slug !== "string") {
		console.warn(`[getProductBySlug] Invalid slug provided: ${slug}`);
		return undefined;
	}
	const normalizedSlug = slug.toLowerCase().trim();
	return productDatabase[normalizedSlug];
}

export function getRelatedProducts(
	currentSlug: string,
	categoryIds: CategoryId[],
	options: RelatedProductsOptions = {}
): ProductListItem[] {
	const { limit = 3, sortBy = "relevance", excludeSlugs = [] } = options;

	if (!currentSlug || !Array.isArray(categoryIds)) {
		console.warn("[getRelatedProducts] Invalid Parameters");
		return [];
	}

	if (categoryIds.length === 0) return [];

	const normalizedCurrent = currentSlug.toLowerCase().trim();
	const normalizedExcludes = new Set([
		normalizedCurrent,
		...excludeSlugs.map((s) => s.toLowerCase().trim()),
	]);

	const relatedSlugs = new Set<string>();

	for (const cateId of categoryIds) {
		const slugsInCategory = categoryIndex.get(cateId);
		if (slugsInCategory) {
			for (const slug of slugsInCategory) {
				if (!normalizedExcludes.has(slug)) {
					relatedSlugs.add(slug);
				}
			}
		}
	}

	let results = Array.from(relatedSlugs)
		.map((slug) => productBySlug.get(slug))
		.filter((p): p is ProductListItem => p !== undefined);

	results = sortProducts(results, sortBy);

	const safeLimit = Math.max(1, Math.min(limit, 100));
	return results.slice(0, safeLimit);
}

export function getProductsByCategory(categoryId: string): ProductListItem[] {
	if (!categoryId) return [];
	const slugs = categoryIndex.get(categoryId);
	if (!slugs) return [];

	return Array.from(slugs)
		.map((slug) => productBySlug.get(slug))
		.filter((p): p is ProductListItem => p !== undefined);
}

export function getProductsByCategories(
	categoryIds: CategoryId[],
	options: RelatedProductsOptions = {}
): ProductListItem[] {
	const { limit = 3, sortBy = "name", excludeSlugs = [] } = options;

	if (!Array.isArray(categoryIds) || categoryIds.length === 0) return [];

	const uniqueSlugs = new Set<string>();

	for (const catId of categoryIds) {
		const slugs = categoryIndex.get(catId);
		if (slugs) {
			for (const slug of slugs) {
				uniqueSlugs.add(slug);
			}
		}
	}

	let results = Array.from(uniqueSlugs)
		.map((slug) => productBySlug.get(slug))
		.filter((p): p is ProductListItem => p !== undefined);

	results = sortProducts(results, sortBy);

	return limit ? results.slice(0, Math.max(1, limit)) : results;
}

export function searchProducts(
	query: string,
	options: SearchOptions = {}
): ProductListItem[] {
	const { fuzzy = false, limit, sortBy = "relevance" } = options;

	if (!query || typeof query !== "string") return [];

	const normalizedQuery = query.toLowerCase().trim();
	if (normalizedQuery.length === 0) return [];

	if (!normalizedQuery.includes(" ") && !fuzzy) {
		const exactMatches = searchIndex.get(normalizedQuery);
		if (exactMatches) {
			let results = Array.from(exactMatches)
				.map((slug) => productBySlug.get(slug))
				.filter((p): p is ProductListItem => p !== undefined);

			results = sortProducts(results, sortBy, normalizedQuery);
			return limit ? results.slice(0, Math.max(1, limit)) : results;
		}
	}

	const lowerQuery = query.toLowerCase();
	return products.filter(
		(p) =>
			p.name.toLowerCase().includes(lowerQuery) ||
			p.category.toLowerCase().includes(lowerQuery)
	);
}

/*************************************/
// Helper: sort products

function sortProducts(
	products: ProductListItem[],
	sortBy: SortOption | undefined,
	query?: string
): ProductListItem[] {
	const sorted = [...products];

	switch (sortBy) {
		case "price-asc":
		case "price-low":
			return sorted.sort((a, b) => a.price - b.price);

		case "price-desc":
		case "price-high":
			return sorted.sort((a, b) => b.price - a.price);

		case "name":
			return sorted.sort((a, b) => a.name.localeCompare(b.name));

		case "newest":
			return sorted.sort((a, b) => b.id - a.id);
		default:
			if (query) {
				const lowerQuery = query.toLowerCase();
				return sorted.sort((a, b) => {
					const aScore = a.name.toLowerCase().includes(lowerQuery) ? 2 : 0;
					const bScore = b.name.toLowerCase().includes(lowerQuery) ? 2 : 0;
					return bScore - aScore;
				});
			}
			return sorted;
	}
}

// Category product counts
export function getCategoryStats(): Record<string, number> {
	const stats: Record<string, number> = {};
	for (const [catId, slugs] of categoryIndex) {
		stats[catId] = slugs.size;
	}
	return stats;
}
