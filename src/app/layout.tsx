import type { Metadata } from "next";
import {
	Cambo,
	Epilogue,
	Inter,
	JetBrains_Mono,
	Roboto_Slab,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { favicon } from "@/constants/data";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const cambo = Cambo({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-cambo",
});
const epilogue = Epilogue({
	subsets: ["latin"],
	variable: "--font-epilogue",
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: "KRM Engineering Works – Building Manufacturing Solutions",
		template: "%s | KRM Engineering Works",
	},
	description: siteConfig.description,
	keywords: [...siteConfig.keywords],
	authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
	creator: siteConfig.creator,
	publisher: siteConfig.name,
	category: "Construction Machinery",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: siteConfig.locale,
		url: siteConfig.url,
		siteName: siteConfig.name,
		title: "KRM Engineering Works – Building Manufacturing Solutions",
		description: siteConfig.description,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: "KRM Engineering Works – Construction Machinery Manufacturer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "KRM Engineering Works – Building Manufacturing Solutions",
		description: siteConfig.description,
		images: [siteConfig.ogImage],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: [
			{
				url: favicon,
			},
		],
		apple: [{ url: favicon }],
	},
	manifest: "/manifest.webmanifest",
};

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

const robotoSlabHeading = Roboto_Slab({
	subsets: ["latin"],
	variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"",
				inter.variable,
				robotoSlabHeading.variable,
				"font-mono",
				jetbrainsMono.variable
			)}
		>
			<body className={`${cambo.variable} ${epilogue.variable} "antialiased"`}>
				<Header />
				<main>{children}</main>
				<Footer />
				{/* Umami Analytics */}
				<Script
					defer
					src="https://umami.parmjeetmishra.com/script.js"
					data-website-id="a68dc3ff-0045-4326-b08b-ca5cfc9ad14e"
					strategy="afterInteractive"
				/>
				{/* Organization JSON-LD */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: siteConfig.name,
							url: siteConfig.url,
							logo: siteConfig.ogImage,
							description: siteConfig.description,
							email: siteConfig.contact.email,
							telephone: siteConfig.contact.phone,
							address: {
								"@type": "PostalAddress",
								streetAddress: siteConfig.contact.address,
								addressLocality: "Deoria",
								addressRegion: "Uttar Pradesh",
								addressCountry: "IN",
							},
							sameAs: Object.values(siteConfig.socials),
						}),
					}}
				/>
			</body>
		</html>
	);
}
