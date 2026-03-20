import { Suspense } from "react";
import { ProductGridSkeleton } from "@/components/shop/product-grid";
import { ShopLayout } from "@/components/shop/shop-layout";

export default function ShopPage() {
	return (
		<Suspense fallback={<ProductGridSkeleton />}>
			<ShopLayout />
		</Suspense>
	);
}
