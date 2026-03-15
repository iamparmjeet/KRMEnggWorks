import {
	type ProductDetailsType,
	type ProductListItem,
	productDatabase,
	products,
} from "@/constants";

export function getProductBySlug(
	slug: string,
): ProductDetailsType | undefined {
	return productDatabase[slug];
}

/**
 * Get related products that share ANY category with the current product
 * @param currentSlug - Slug of current product (to exclude)
 * @param categoryIds - Array of category IDs from current product
 * @param limit - Maximum number of products to return
 */
export function getRelatedProducts(
	currentSlug: string,
	categoryIds: string[],
	limit: number = 3,
): ProductListItem[] {
	return products
		.filter((p) => {
			// Skip current product
			if (p.slug === currentSlug) return false;
			// Check if any category overlaps
			return p.categoryId.some((id) => categoryIds.includes(id));
		})
		.slice(0, limit);
}

/**
 * Get products by a specific category ID
 * @param categoryId - The category ID to filter by
 */
export function getProductsByCategory(
	categoryId: string,
): ProductListItem[] {
	return products.filter((p) => p.categoryId.includes(categoryId));
}

/**
 * Get products that match ANY of the provided category IDs
 * @param categoryIds - Array of category IDs
 */
export function getProductsByCategories(
	categoryIds: string[],
): ProductListItem[] {
	return products.filter((p) =>
		p.categoryId.some((id) => categoryIds.includes(id)),
	);
}

export function searchProducts(query: string): ProductListItem[] {
	const lowerQuery = query.toLowerCase();
	return products.filter(
		(p) =>
			p.name.toLowerCase().includes(lowerQuery) ||
			p.category.toLowerCase().includes(lowerQuery),
	);
}
