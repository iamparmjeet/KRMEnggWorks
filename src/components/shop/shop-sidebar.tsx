"use client";

import { ChevronDown, ChevronRight, Filter } from "lucide-react";
import Link from "next/link";
import { memo, useCallback, useMemo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Category,
	CategoryDefinitions,
	type CategoryId,
	type CategoryKey,
} from "@/constants/product-data";
import { useShopFilters } from "@/hooks/use-shop-filters";
import { getCategoryStats } from "@/lib/product-utils";
import { cn } from "@/lib/utils";

interface CategoryWithMeta {
	key: CategoryKey;
	id: CategoryId;
	name: string;
	slug: string;
	subcategories: string[];
	productCount: number;
}

// ─── Build category metadata once at module level ─────────────────────────────

const buildCategoryMeta = (): CategoryWithMeta[] => {
	const stats = getCategoryStats();
	return (
		Object.entries(CategoryDefinitions) as [
			CategoryKey,
			(typeof CategoryDefinitions)[CategoryKey],
		][]
	)
		.map(([key, { name, subcategories }]) => {
			const slug = Category[key];
			return {
				key,
				id: slug as CategoryId,
				name,
				slug,
				subcategories: subcategories as unknown as string[],
				productCount: stats[slug] || 0,
			};
		})
		.sort((a, b) => b.productCount - a.productCount);
};

const categoriesMeta = buildCategoryMeta();

// ─── SubcategoryItem ──────────────────────────────────────────────────────────

const SubcategoryItem = memo(function SubcategoryItem({
	categorySlug,
	subcategory,
	isActive,
	onNavigate,
}: {
	categorySlug: string;
	subcategory: string;
	isActive: boolean;
	onNavigate?: () => void;
}) {
	const subSlug = useMemo(
		() =>
			subcategory
				.toLowerCase()
				.replace(/\s+/g, "-")
				.replace(/[^a-z0-9-]/g, ""),
		[subcategory]
	);

	return (
		<li>
			<Link
				href={`/product-category/${categorySlug}?sub=${subSlug}`}
				onClick={onNavigate}
				className={cn(
					"flex items-center py-1.5 px-3 text-sm transition-colors rounded-md",
					"hover:bg-yellow hover:text-accent-foreground",
					isActive && "bg-yellow text-accent-foreground font-medium"
				)}
				aria-current={isActive ? "page" : undefined}
			>
				<ChevronRight className="mr-2 h-3 w-3 opacity-50 shrink-0" />
				<span className="truncate">{subcategory}</span>
			</Link>
		</li>
	);
});

// ─── CategorySection ──────────────────────────────────────────────────────────

const CategorySection = memo(function CategorySection({
	category,
	isActive,
	activeSubcategory,
	isExpanded,
	onToggle,
	onNavigate,
}: {
	category: CategoryWithMeta;
	isActive: boolean;
	activeSubcategory: string | null;
	isExpanded: boolean;
	onToggle: () => void;
	onNavigate?: () => void;
}) {
	const hasSubcategories = category.subcategories.length > 0;
	const hasProducts = category.productCount > 0;

	return (
		<li className="space-y-1">
			{hasSubcategories ? (
				<button
					type="button"
					onClick={onToggle}
					className={cn(
						"w-full flex items-center justify-between py-2.5 px-3 text-sm font-medium transition-colors text-left",
						"hover:bg-yellow cursor-pointer hover:text-accent-foreground",
						isActive && "bg-yellow text-accent-foreground",
						!hasProducts && "opacity-60"
					)}
					aria-expanded={isExpanded}
				>
					<span className="flex items-center gap-2">
						<ChevronDown
							className={cn(
								"h-4 w-4 transition-transform duration-200 shrink-0",
								!isExpanded && "-rotate-90"
							)}
						/>
						<span className="truncate">{category.name}</span>
					</span>
					{hasProducts && (
						<span className="text-xs px-2 py-0.5 rounded-full shrink-0  text-muted-foreground">
							{category.productCount}
						</span>
					)}
				</button>
			) : (
				<Link
					href={`/product-category/${category.slug}`}
					onClick={onNavigate}
					className={cn(
						"w-full flex items-center justify-between py-2.5 px-3 text-sm font-medium transition-colors",
						"hover:bg-yellow cursor-pointer hover:text-accent-foreground",
						isActive && "bg-yellow text-accent",
						!hasProducts && "opacity-60 pointer-events-none"
					)}
					aria-current={isActive ? "page" : undefined}
				>
					<span className="truncate">{category.name}</span>
					{hasProducts && (
						<span
							className={cn(
								"text-xs px-2 py-0.5 rounded-full shrink-0",
								isActive ? "bg-yellow" : " text-accent"
							)}
						>
							{category.productCount}
						</span>
					)}
				</Link>
			)}

			{hasSubcategories && isExpanded && (
				<ul className="ml-4 space-y-0.5 border-l border-border pl-2">
					{category.subcategories.map((sub) => {
						const subSlug = sub
							.toLowerCase()
							.replace(/\s+/g, "-")
							.replace(/[^a-z0-9-]/g, "");
						return (
							<SubcategoryItem
								key={`${category.slug}-${sub}`}
								categorySlug={category.slug}
								subcategory={sub}
								isActive={activeSubcategory === subSlug}
								onNavigate={onNavigate}
							/>
						);
					})}
				</ul>
			)}
		</li>
	);
});

// ─── Loading Skeleton ─────────────────────────────────────────────────────────

export function ShopSidebarSkeleton() {
	return (
		<div className="space-y-4">
			<div className="flex items-center gap-2 px-3">
				<Filter className="h-5 w-5" />
				<Skeleton className="h-6 w-32" />
			</div>
			<div className="space-y-3">
				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} className="space-y-2">
						<Skeleton className="h-8 w-full" />
						{i % 2 === 0 && (
							<div className="ml-4 space-y-1 pl-2 border-l">
								<Skeleton className="h-5 w-3/4" />
								<Skeleton className="h-5 w-1/2" />
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

// ─── Main ShopSidebar ─────────────────────────────────────────────────────────

export const ShopSidebar = memo(function ShopSidebar({
	className,
	onNavigate,
}: {
	className?: string;
	/** Called after a link click — use to close a mobile Sheet */
	onNavigate?: () => void;
}) {
	const { filters, clearFilters } = useShopFilters();
	const { category: activeCategory, subcategory: activeSubcategory } = filters;

	const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
		() => {
			const initial = new Set<string>();
			categoriesMeta.forEach((cat) => {
				if (
					cat.productCount > 0 &&
					(activeCategory === cat.slug || cat.subcategories.length > 0)
				) {
					initial.add(cat.slug);
				}
			});
			return initial;
		}
	);

	const toggleCategory = useCallback((slug: string) => {
		setExpandedCategories((prev) => {
			const next = new Set(prev);
			if (next.has(slug)) next.delete(slug);
			else next.add(slug);
			return next;
		});
	}, []);

	const isExpanded = useCallback(
		(slug: string) => expandedCategories.has(slug) || activeCategory === slug,
		[expandedCategories, activeCategory]
	);

	const handleClear = useCallback(() => {
		clearFilters();
		onNavigate?.();
	}, [clearFilters, onNavigate]);

	return (
		<aside
			className={cn("w-full", className)}
			aria-label="Product categories filter"
		>
			<div className="sticky top-20 space-y-4">
				{/* Header — only shown on desktop (Sheet has its own header on mobile) */}
				{!onNavigate && (
					<div className="flex items-center gap-2 px-3 pb-2 border-b">
						<Filter className="h-5 w-5 text-muted-foreground" />
						<h2 className="text-lg font-semibold tracking-tight">
							Filter by Category
						</h2>
					</div>
				)}

				<nav aria-label="Categories">
					<ul className="space-y-1">
						<li>
							<Link
								href="/shop"
								onClick={onNavigate}
								className={cn(
									"flex items-center py-2.5 px-3 text-sm font-medium transition-colors",
									"hover:bg-yellow hover:text-accent-foreground",
									!activeCategory && "bg-yellow text-accent-foreground"
								)}
							>
								All Products
							</Link>
						</li>

						{categoriesMeta.map((category) => (
							<CategorySection
								key={category.key}
								category={category}
								isActive={activeCategory === category.slug}
								activeSubcategory={activeSubcategory}
								isExpanded={isExpanded(category.slug)}
								onToggle={() => toggleCategory(category.slug)}
								onNavigate={onNavigate}
							/>
						))}
					</ul>
				</nav>

				{(activeCategory || activeSubcategory) && (
					<div className="pt-4 border-t px-3">
						<button
							type="button"
							onClick={handleClear}
							className="text-sm text-muted-foreground hover:text-foreground underline"
						>
							Clear all filters
						</button>
					</div>
				)}
			</div>
		</aside>
	);
});

export default ShopSidebar;
