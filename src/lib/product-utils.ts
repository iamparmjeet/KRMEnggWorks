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

export function getRelatedProducts(
	currentSlug: string,
	categoryId: string,
	limit: number = 3,
): ProductListItem[] {
	return products
		.filter(
			(p) => p.categoryId === categoryId && p.slug !== currentSlug,
		)
		.slice(0, limit);
}

export function getProductsByCategory(
	categoryId: string,
): ProductListItem[] {
	return products.filter((p) => p.categoryId === categoryId);
}

export function searchProducts(query: string): ProductListItem[] {
	const lowerQuery = query.toLowerCase();
	return products.filter(
		(p) =>
			p.name.toLowerCase().includes(lowerQuery) ||
			p.category.toLowerCase().includes(lowerQuery),
	);
}
