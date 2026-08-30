import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
	title: "Terms & Conditions",
	description:
		"Terms and conditions for using KRM Engineering Works website and services.",
	alternates: { canonical: "/terms" },
	openGraph: {
		title: "Terms & Conditions | KRM Engineering Works",
		url: `${siteConfig.url}/terms`,
	},
};

export default function TermsPage() {
	return (
		<div className="w-full bg-white">
			<section className="bg-slate-950 text-white py-12">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
					<p className="text-slate-400 mt-2">Last updated: August 30, 2026</p>
				</div>
			</section>
			<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="space-y-8 text-slate-800 leading-relaxed">
					<p>
						By accessing krmenggworks.com you agree to these Terms & Conditions.
						If you do not agree, please do not use the site.
					</p>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							1. Products & Pricing
						</h2>
						<p>
							All product specifications and prices are subject to change. Price
							on request items require direct quotation. Final pricing, GST,
							transport, and installation charges will be confirmed in the
							proforma invoice.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							2. Orders & Acceptance
						</h2>
						<p>
							Adding to cart does not constitute a confirmed order. Orders are
							confirmed only after advance payment and written confirmation from
							KRM Engineering Works.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							3. Intellectual Property
						</h2>
						<p>
							All content, images, and logos are property of KRM Engineering
							Works or licensors. Reproduction without permission is prohibited.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							4. Limitation of Liability
						</h2>
						<p>
							We are not liable for indirect, incidental, or consequential
							damages arising from use of the site or products. Warranty terms
							are provided with each invoice.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							5. Governing Law
						</h2>
						<p>
							These terms are governed by laws of India. Jurisdiction is Deoria,
							Uttar Pradesh.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							6. Contact
						</h2>
						<p>info@krmenggworks.com – +91 86045 07464</p>
					</section>
				</div>
			</article>
		</div>
	);
}
