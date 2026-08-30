import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductGridSkeleton } from "@/components/shop/product-grid";
import { ShopLayout } from "@/components/shop/shop-layout";
import { categories, products } from "@/constants/product-data";
import { siteConfig } from "@/lib/site";

interface Props {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{
		sub?: string;
		sort?: string;
		page?: string;
		search?: string;
	}>;
}

export function generateStaticParams() {
	return categories.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const category = categories.find((c) => c.id === slug);
	if (!category) return {};
	return {
		title: `${category.name} | Construction Machinery`,
		description: `Browse our ${category.name} range at KRM Engineering Works – high-quality building & construction machinery.`,
		alternates: { canonical: `/product-category/${slug}` },
		openGraph: {
			title: `${category.name} | KRM Engineering Works`,
			description: `Browse our ${category.name} range – high-quality machinery from KRM Engineering Works.`,
			url: `${siteConfig.url}/product-category/${slug}`,
		},
	};
}

function toSlug(str: string) {
	return str
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9-]/g, "");
}

export default async function ProductCategoryPage({
	params,
	searchParams,
}: Props) {
	const { slug } = await params;
	const resolvedSearch = await searchParams;

	const category = categories.find((c) => c.id === slug);
	if (!category) notFound();

	// Filter products for this category
	const categoryProducts = products.filter((p) => p.categoryId.includes(slug));

	// Further filter by subcategory if ?sub= is present
	const subSlug = resolvedSearch.sub;
	const finalProducts = subSlug
		? categoryProducts.filter((p) => {
				const matchedSubcategory = category.subcategories.find(
					(s) => toSlug(s) === subSlug
				);

				if (!matchedSubcategory) return false;

				// Extract meaningful words from the subcategory name (skip stop words)
				const stopWords = new Set([
					"a",
					"an",
					"the",
					"and",
					"or",
					"of",
					"in",
					"with",
					"for",
					"to",
					"by",
					"at",
					"on",
					"is",
					"model",
				]);

				const subKeywords = matchedSubcategory
					.toLowerCase()
					.split(/[\s-]+/)
					.filter((w) => w.length > 2 && !stopWords.has(w));

				const productNameSlug = toSlug(p.name);

				// Product matches if its name slug contains ANY of the subcategory keywords
				return subKeywords.some((kw) => productNameSlug.includes(kw));
			})
		: categoryProducts;

	return (
		<Suspense fallback={<ProductGridSkeleton />}>
			<ShopLayout
				initialProducts={finalProducts}
				heading={category.name}
				subheading={`Browse our ${category.name} range`}
			/>
		</Suspense>
	);
}
