import PTB from "@/components/ptb";
import { ShopSidebarSkeleton } from "@/components/shop/shop-sidebar";
import { Skeleton } from "@/components/ui/skeleton";

const ITEMS_PER_PAGE = 9;

export default function ProductSkeleton() {
	return (
		<div className="w-full bg-white">
			{/* Hero */}
			<PTB
				heading="Shop"
				subheading="Explore All Our Products Range"
			/>

			<section className="py-14 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Toolbar skeleton */}
					<div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
						<Skeleton className="h-13 w-full md:w-72" />
						<div className="flex flex-row justify-between w-full items-center">
							<Skeleton className="h-6 w-48" />
							<Skeleton className="h-10 w-44" />
						</div>
					</div>

					{/* Grid skeleton */}
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
						<ShopSidebarSkeleton />
						<div className="lg:col-span-3">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{Array.from({ length: ITEMS_PER_PAGE }).map(
									(_, i) => (
										<div key={i} className="space-y-3">
											<Skeleton className="h-48 w-full" />
											<Skeleton className="h-4 w-3/4" />
											<Skeleton className="h-4 w-1/2" />
										</div>
									),
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
