import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
	title: "Refund & Cancellation Policy",
	description:
		"Refund, return, and cancellation policy for KRM Engineering Works.",
	alternates: { canonical: "/refund-policy" },
	openGraph: {
		title: "Refund Policy | KRM Engineering Works",
		url: `${siteConfig.url}/refund-policy`,
	},
};

export default function RefundPolicyPage() {
	return (
		<div className="w-full bg-white">
			<section className="bg-slate-950 text-white py-12">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl md:text-4xl font-bold">
						Refund & Cancellation Policy
					</h1>
					<p className="text-slate-400 mt-2">Last updated: August 30, 2026</p>
				</div>
			</section>
			<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="space-y-8 text-slate-800 leading-relaxed">
					<section>
						<h2 className="text-xl font-bold text-blue-950 mb-3">
							Cancellation
						</h2>
						<p>
							Orders can be cancelled before dispatch with a full refund minus
							payment gateway charges (if any). Custom-built / made-to-order
							machines cannot be cancelled once manufacturing has started.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							Returns
						</h2>
						<ul className="list-disc pl-6 space-y-1">
							<li>Manufacturing defects: report within 7 days of delivery.</li>
							<li>Requires unboxing video and photos for verification.</li>
							<li>Approved returns are replaced or repaired under warranty.</li>
							<li>Buyer bears return freight unless defect is confirmed.</li>
						</ul>
					</section>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							Refunds
						</h2>
						<p>
							Refunds are processed within 7–10 working days to the original
							payment method. For COD/NEFT orders, refund via bank transfer.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							Warranty
						</h2>
						<p>
							Standard 1-year manufacturing warranty (motor/engine as per OEM).
							Warranty does not cover misuse, wear-and-tear, or voltage
							fluctuations.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							Contact
						</h2>
						<p>info@krmenggworks.com – +91 86045 07464</p>
					</section>
				</div>
			</article>
		</div>
	);
}
