import { IconBox, IconChartLine, IconShieldCheck } from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/shop/product-card";
import { Separator } from "@/components/ui/separator";
import { type ProductListItem, products } from "@/constants";
import { getProductBySlug, getRelatedProducts } from "@/lib/product-utils";
import { siteConfig } from "@/lib/site";
import { ProductImage } from "./product-image";
import { ProductInteractions } from "./product-interactions";

// ─── Static generation ───────────────────────────────────

export function generateStaticParams() {
	return products.map((p) => ({ slug: p.slug }));
}

export const dynamic = "force-static";
export const revalidate = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const product = getProductBySlug(slug);
	if (!product) return {};
	return {
		title: product.name,
		description: product.description,
		alternates: { canonical: `/product/${slug}` },
		openGraph: {
			title: `${product.name} | KRM Engineering Works`,
			description: product.description,
			url: `${siteConfig.url}/product/${slug}`,
			type: "website",
			images: product.images.map((img) => ({
				url: img,
				width: 1200,
				height: 630,
				alt: product.name,
			})),
		},
		twitter: {
			card: "summary_large_image",
			title: product.name,
			description: product.description,
			images: [product.images[0]],
		},
	};
}

// ─── Page (Server Component

interface Props {
	params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
	const { slug } = await params;

	const product = getProductBySlug(slug);
	if (!product) notFound();

	const relatedProducts = getRelatedProducts(
		slug,
		product.categoryId as string[]
	);

	const primaryCategoryId = product.categoryId[0] ?? "";
	const primaryCategoryName =
		product.category.split(",")[0]?.trim() ?? product.category;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: product.name,
		description: product.description,
		image: product.images,
		category: product.category,
		brand: { "@type": "Brand", name: siteConfig.name },
		offers: {
			"@type": "Offer",
			availability: "https://schema.org/InStock",
			priceCurrency: "INR",
			price: product.price > 0 ? product.price : undefined,
			url: `${siteConfig.url}/product/${slug}`,
			seller: { "@type": "Organization", name: siteConfig.name },
		},
	};

	return (
		<div className="w-full bg-white min-h-screen">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			{/* Breadcrumb */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8">
				<nav className="flex items-center text-xs text-slate-700 overflow-x-auto whitespace-nowrap">
					<Link
						href="/"
						className="hover:text-black transition-colors shrink-0"
					>
						Home
					</Link>
					<span className="mx-2 shrink-0">/</span>
					<Link
						href={`/product-category/${primaryCategoryId}`}
						className="hover:text-black transition-colors shrink-0"
					>
						{primaryCategoryName}
					</Link>
					<span className="mx-2 shrink-0">/</span>
					<span className="text-black font-semibold truncate max-w-37.5 sm:max-w-xs">
						{product.name}
					</span>
				</nav>
			</div>

			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 lg:pt-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					<ProductImage product={product} />
					<div className="flex flex-col gap-4 items-start">
						{product.categoryId.map((catId, idx) => (
							<span
								key={catId}
								className="inline-block px-3 py-1 bg-slate-100 text-slate-900 text-xs font-semibold rounded-full"
							>
								{product.category.split(",")[idx]?.trim() || catId}
							</span>
						))}

						<h1 className="text-3xl md:text-4xl font-bold leading-tight text-blue-950">
							{product.name}
						</h1>

						{product.price > 0 ? (
							<p className="text-2xl font-bold text-slate-600">
								₹{product.price.toLocaleString("en-IN")}.00
							</p>
						) : (
							<p className="text-lg text-slate-900 italic">Price on request</p>
						)}

						<p className="text-slate-900 leading-relaxed">
							{product.description}
						</p>
						<ProductInteractions product={product} />
						<Separator />
						<TrustBadge />
					</div>
				</div>

				{/* Specifications table */}
				<div className="mt-16">
					<h2 className="text-3xl font-bold text-blue-950 mb-10 pb-2 border-b-2 w-fit">
						Technical Specifications
					</h2>
					<div className="bg-slate-50 p-6 md:p-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
							{Object.entries(product.specifications).map(
								([key, value], idx, arr) => (
									<div
										key={key}
										className={`flex justify-between py-3 ${
											idx !== arr.length - 1 ? "border-b border-slate-200" : ""
										}`}
									>
										<span className="font-semibold text-blue-950">{key}</span>
										<span className="text-slate-900 text-right">{value}</span>
									</div>
								)
							)}
						</div>
					</div>
				</div>

				<Separator className="bg-blue-950 my-8 md:my-16" />

				{/* Related Products */}
				{relatedProducts.length > 0 && (
					<div className="mb-18">
						<h2 className="text-3xl font-bold text-blue-950 mb-8">
							Related Products
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{relatedProducts.map((p: ProductListItem) => (
								<Link key={p.id} href={`/product/${p.slug}`}>
									<ProductCard key={p.id} product={p} />
								</Link>
							))}
						</div>
					</div>
				)}
			</section>
		</div>
	);
}

// ─── Static sub-components

function TrustBadge() {
	return (
		<div className="flex flex-col gap-4 text-blue-950 text-sm font-medium pt-4">
			<span className="flex items-center gap-1">
				<IconChartLine /> In Stock
			</span>
			<span className="flex items-center gap-1">
				<IconBox /> Free Shipping
			</span>
			<span className="flex items-center gap-1">
				<IconShieldCheck /> 1 Year Warranty
			</span>
		</div>
	);
}
