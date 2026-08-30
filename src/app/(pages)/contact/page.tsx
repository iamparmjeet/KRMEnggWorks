import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import ContactClient from "./contact-form";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Contact KRM Engineering Works – Head of Sales Mustafa Ansari. Call +91 86045 07464 or visit us in Deoria, Uttar Pradesh.",
	alternates: { canonical: "/contact" },
	openGraph: {
		title: "Contact Us | KRM Engineering Works",
		description:
			"Get in touch with KRM Engineering Works – we're happy to help.",
		url: `${siteConfig.url}/contact`,
	},
};

export default function ContactPage() {
	return <ContactClient />;
}
