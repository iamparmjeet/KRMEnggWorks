import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductGridSkeleton } from "@/components/shop/product-grid";
import { ShopLayout } from "@/components/shop/shop-layout";
import { categories, products } from "@/constants/product-data";

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

export default async function ProductCategoryPage({
	params,
	searchParams,
}: Props) {
	const { slug } = await params;
	const resolvedSearch = await searchParams;

	const category = categories.find((c) => c.id === slug);
	if (!category) notFound();

	// Filter products for this category
	const categoryProducts = products.filter((p) =>
		p.categoryId.includes(slug),
	);

	// Further filter by subcategory if ?sub= is present
	const subSlug = resolvedSearch.sub;
	const finalProducts = subSlug
		? categoryProducts.filter((p) => {
				const subName = category.subcategories.find(
					(s) =>
						s
							.toLowerCase()
							.replace(/\s+/g, "-")
							.replace(/[^a-z0-9-]/g, "") === subSlug,
				);
				return subName ? p.category.includes(subName) : true;
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
