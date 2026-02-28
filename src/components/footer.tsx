import Link from "next/link";
import { ContactInfo, Socials } from "@/constants/data";
import { year } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
	return (
		<footer className="bg-slate-950 text-white border-t border-slate-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
					{/* About */}
					<Aboutsec />

					{/* Contact */}
					<ContactSec />

					{/* Newsletter */}
					<NewsletterSec />
				</div>
				<CopyRightSec />
			</div>
		</footer>
	);
}

function Heading({ text }: { text: string }) {
	return (
		<h3 className="text-3xl font-semibold border-b border-white pb-5">
			{text}
		</h3>
	);
}

function Aboutsec() {
	return (
		<div className="flex flex-col gap-4">
			<Heading text="About" />
			<Logo />
			<p className="text-lg font-medium leading-relaxed">
				Your Trusted and Leading Partner and Top Certified IndiasMart
				Seller in Your Building & Construction Machines Manufacturer.
			</p>
		</div>
	);
}

function ContactSec() {
	return (
		<div className="flex flex-col gap-4">
			<Heading text="Contact" />
			<ul className="flex flex-col gap-4 text-lg font-semibold">
				{ContactInfo.map((item) => {
					const IconComponent = item.icon;
					return (
						<li
							key={item.id}
							className="flex items-center gap-4 group cursor-pointer"
						>
							<IconComponent className="size-5 rounded-sm p-1.2 stroke-yellow group-hover:stroke-sky " />
							<Link
								href={item.link}
								target="_blank"
								className="text-gray-300 transition-colors group-hover:text-sky"
							>
								{item.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

function NewsletterSec() {
	return (
		<div className="flex flex-col gap-4">
			<Heading text="Newsletter" />
			<p className="text-lg font-medium text-white">
				Signup to get the latest news.
			</p>
			<div className="space-y-3">
				<Input
					type="text"
					placeholder="Name"
					className="w-full min-h-12 px-3 py-2 bg-accent rounded-none border border-yellow text-white placeholder-gray-300"
				/>
				<Input
					type="email"
					placeholder="Email"
					className="w-full min-h-12 px-3 py-2 bg-accent rounded-none border border-yellow text-white placeholder-gray-300"
				/>
				<Button className="w-full h-10 font-cambo bg-yellow-400 hover:bg-primary text-slate-900 hover:text-white font-bold py-2 text-xl">
					Subscribe
				</Button>
			</div>
		</div>
	);
}

function CopyRightSec() {
	return (
		<div className="border-t-2 border-accent pt-8">
			<div className="flex flex-col md:flex-row justify-between items-center gap-4">
				<p className="text-center md:text-left text-lg font-medium text-white">
					© {year()} | All rights reserved |{" "}
					<a
						href="https://parmjeetmishra.com"
						target="_blank"
						rel="noopener"
						className="hover:text-yellow"
					>
						Made with ♥ by Farm
					</a>
				</p>
				<div className="flex gap-4">
					<ul className="flex gap-2 text-lg font-semibold">
						{Socials.map((item) => {
							const IconComponent = item.icon;
							return (
								<li
									key={item.id}
									className="flex items-center justify-center gap-4 cursor-pointer  transition-colors group"
								>
									<Link
										href={item.link}
										target="_blank"
										className="group-hover:bg-yellow bg-accent p-4"
									>
										<IconComponent className="size-7 rounded-sm p-1.2 stroke-yellow group-hover:stroke-accent " />
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
