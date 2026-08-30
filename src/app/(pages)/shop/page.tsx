import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductGridSkeleton } from "@/components/shop/product-grid";
import { ShopLayout } from "@/components/shop/shop-layout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
	title: "Shop – All Construction Machinery",
	description:
		"Shop all construction & building machinery at KRM Engineering Works. Bar benders, concrete mixers, rollers, cranes & more with best prices.",
	alternates: { canonical: "/shop" },
	openGraph: {
		title: "Shop | KRM Engineering Works",
		description: "Shop all construction & building machinery.",
		url: `${siteConfig.url}/shop`,
	},
};

export default function ShopPage() {
	return (
		<Suspense fallback={<ProductGridSkeleton />}>
			<ShopLayout />
		</Suspense>
	);
}
