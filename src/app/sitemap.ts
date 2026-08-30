import type { MetadataRoute } from "next";
import { categories, products } from "@/constants/product-data";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = siteConfig.url;

	const staticRoutes: MetadataRoute.Sitemap = [
		{
			url: base,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${base}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${base}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${base}/shop`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${base}/cart`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		// legal pages
		{
			url: `${base}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${base}/terms`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${base}/shipping-policy`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
		{
			url: `${base}/refund-policy`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];

	const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
		url: `${base}/product-category/${c.id}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.7,
	}));

	const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
		url: `${base}/product/${p.slug}`,
		lastModified: new Date(),
		changeFrequency: "weekly" as const,
		priority: 0.8,
	}));

	return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
