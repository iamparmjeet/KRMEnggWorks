import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import CartClient from "./cart-client";

export const metadata: Metadata = {
	title: "Cart – Your Enquiry",
	description:
		"Review your selected construction machinery and send an enquiry to KRM Engineering Works.",
	alternates: { canonical: "/cart" },
	openGraph: {
		title: "Cart | KRM Engineering Works",
		url: `${siteConfig.url}/cart`,
	},
	robots: { index: false, follow: false },
};

export default function CartPage() {
	return <CartClient />;
}
