import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
	title: "Shipping Policy",
	description:
		"Shipping and delivery policy for KRM Engineering Works – timelines, charges, and logistics.",
	alternates: { canonical: "/shipping-policy" },
	openGraph: {
		title: "Shipping Policy | KRM Engineering Works",
		url: `${siteConfig.url}/shipping-policy`,
	},
};

export default function ShippingPolicyPage() {
	return (
		<div className="w-full bg-white">
			<section className="bg-slate-950 text-white py-12">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl md:text-4xl font-bold">Shipping Policy</h1>
					<p className="text-slate-400 mt-2">Last updated: August 30, 2026</p>
				</div>
			</section>
			<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="space-y-8 text-slate-800 leading-relaxed">
					<section>
						<h2 className="text-xl font-bold text-blue-950 mb-3">
							Dispatch & Delivery
						</h2>
						<ul className="list-disc pl-6 space-y-1">
							<li>
								Orders are dispatched within 3–7 working days after payment
								confirmation.
							</li>
							<li>
								Heavy machinery is shipped via road transport (part-load /
								full-load).
							</li>
							<li>
								Delivery timelines: 5–15 days across India depending on
								location.
							</li>
							<li>Tracking / LR number is shared via WhatsApp/email.</li>
						</ul>
					</section>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							Shipping Charges
						</h2>
						<p>
							Shipping is charged at actuals based on weight, dimensions, and
							distance. Quoted prices are ex-works Deoria unless stated
							otherwise. Transport, transit insurance, and unloading at site are
							extra unless included in PI.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							Inspection
						</h2>
						<p>
							Please inspect goods at delivery and note any damage on the LR
							before accepting. Notify us within 48 hours with photos/video at
							info@krmenggworks.com.
						</p>
					</section>
				</div>
			</article>
		</div>
	);
}
