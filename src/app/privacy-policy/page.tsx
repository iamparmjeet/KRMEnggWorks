import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description:
		"Privacy Policy for KRM Engineering Works – how we collect, use, and protect your personal information.",
	alternates: { canonical: "/privacy-policy" },
	openGraph: {
		title: "Privacy Policy | KRM Engineering Works",
		description:
			"How KRM Engineering Works collects, uses and protects your data.",
		url: `${siteConfig.url}/privacy-policy`,
	},
};

export default function PrivacyPolicyPage() {
	return (
		<div className="w-full bg-white">
			<section className="bg-slate-950 text-white py-12">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
					<p className="text-slate-400 mt-2">Last updated: August 30, 2026</p>
				</div>
			</section>

			<article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-slate max-w-none">
				<div className="space-y-8 text-slate-800 leading-relaxed">
					<p>
						At KRM Engineering Works ("we", "us", "our"), we are committed to
						protecting your privacy. This Privacy Policy explains how we
						collect, use, and safeguard your information when you visit{" "}
						<a href={siteConfig.url} className="text-blue-700 underline">
							krmenggworks.com
						</a>{" "}
						or interact with our services.
					</p>

					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							1. Information We Collect
						</h2>
						<ul className="list-disc pl-6 space-y-1">
							<li>
								<strong>Contact data:</strong> name, email, phone, message
								submitted via our contact form.
							</li>
							<li>
								<strong>Usage data:</strong> pages visited, time on site,
								referrers – collected via Umami Analytics (privacy-friendly, no
								cookies, no cross-site tracking).
							</li>
							<li>
								<strong>Cart data:</strong> stored locally in your browser via
								localStorage – not sent to our servers until you contact us.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							2. How We Use Your Information
						</h2>
						<ul className="list-disc pl-6 space-y-1">
							<li>To respond to enquiries and provide quotations</li>
							<li>To improve our website and product offerings</li>
							<li>To comply with legal obligations</li>
						</ul>
						<p className="mt-2">We do not sell your personal data.</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							3. Analytics
						</h2>
						<p>
							We use{" "}
							<a
								href="https://umami.is"
								target="_blank"
								rel="noopener"
								className="text-blue-700 underline"
							>
								Umami
							</a>{" "}
							self-hosted at umami.parmjeetmishra.com. It does not use cookies
							and does not collect personal identifiers. Data is aggregated and
							anonymised.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							4. Data Retention
						</h2>
						<p>
							Contact enquiries are retained for up to 12 months unless a
							business relationship is established. You may request deletion at{" "}
							<a
								href="mailto:info@krmenggworks.com"
								className="text-blue-700 underline"
							>
								info@krmenggworks.com
							</a>
							.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							5. Your Rights (India – DPDP Act & GDPR where applicable)
						</h2>
						<ul className="list-disc pl-6 space-y-1">
							<li>Access, correct, or delete your data</li>
							<li>Withdraw consent</li>
							<li>Lodge a complaint with the relevant authority</li>
						</ul>
					</section>

					<section>
						<h2 className="text-xl font-bold text-blue-950 mt-8 mb-3">
							6. Contact
						</h2>
						<p>
							KRM Engineering Works, Deosth Deoria, Deoria, Uttar Pradesh –
							Email: info@krmenggworks.com – Phone: +91 86045 07464
						</p>
					</section>
				</div>
			</article>
		</div>
	);
}
