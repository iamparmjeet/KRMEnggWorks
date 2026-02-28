import Image from "next/image";
import {
	IconChartAreaLine,
	IconFileCertificate,
	IconUsers,
} from "tabler-icons";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { media } from "@/constants/data";

export default function About() {
	return (
		<div className="w-full">
			{/* Hero Section */}
			<section className="relative w-full py-16 md:py-20 bg-slate-950 text-white overflow-hidden">
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						About Us
					</h1>
					<p className="text-yellow font-semibold text-lg">
						Our values and vaulted us to the top of our industry.
					</p>
				</div>
			</section>

			{/* Main Content Section */}
			<ContentSec />
			{/* Stats Section */}
			<StatSec />
		</div>
	);
}

function ContentSec() {
	return (
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<p className="text-base font-semibold text-primary text-center">
					Welcome to Our Company
				</p>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
					{/* Left - Image */}

					<Image
						src={`${media}/03/buildingMachine1.jpg`}
						width={500}
						height={500}
						alt="Hero-Product-1"
						className="bg-center bg-cover w-full"
						preload
					/>
					{/* Right - Content */}
					<div className="order-1 lg:order-2">
						<h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
							KRM Engineering Works Provides a full range of services
						</h2>
						<AboutPoints />
					</div>
				</div>
			</div>
		</section>
	);
}

function AboutPoints() {
	const AboutPoints = [
		{
			id: 1,
			text: "KRM Engineering Works A Leading Manufacturer and Supplier of construction machine manufacturers equipment",
		},
		{
			id: 2,
			text: "Since 2021, KRM has been a trusted name in construction equipment. We are proud of our long-standing history in equipment manufacturing, exporting, and importing a wide range of products including Tandem Vibratory Rollers, Concrete Cutters, Power Floaters, Walk Behind Rollers, and Bar Bending Machines etc",
		},
		{
			id: 3,
			text: "Uncompromising Quality",
		},
		{
			id: 4,
			text: "Meeting Your Needs",
		},
		{
			id: 5,
			text: "Experienced Leadership",
		},
		{
			id: 6,
			text: "Under the guidance of our CEO, KM Ansari, KRM Engineering Works has earned a reputation for excellence in the industry.",
		},
	];
	return (
		<ul className="space-y-3">
			{AboutPoints.map((point) => (
				<li
					key={point.id}
					className="flex flex-row gap-2 items-center"
				>
					<span>
						<svg
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="currentColor"
							className={"icon icon-tabler icon-tabler-circle-dot"}
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 6.66a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" />
						</svg>
					</span>
					<p className="text-base font-medium">{point.text}</p>
				</li>
			))}
		</ul>
	);
}

function StatSec() {
	return (
		<section className="pb-16 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="p-5 border border-accent rounded-none flex flex-col gap-5 justify-center">
						<h2 className="text-primary font-semibold text-xl">
							Total Number of Employees
						</h2>
						<p className="text-lg font-semibold text-black">
							11 to 25 People
						</p>
						<IconUsers />
					</div>

					<div className="p-5 border border-accent rounded-none flex flex-col gap-5 justify-center">
						<h2 className="text-primary font-semibold text-xl">
							Year of Establishment
						</h2>
						<p className="text-lg font-semibold text-black">
							Serving since 2021
						</p>
						<IconChartAreaLine />
					</div>

					<div className="p-5 border border-accent rounded-none flex flex-col gap-5 justify-center">
						<h2 className="text-primary font-semibold text-xl">
							GST No.
						</h2>
						<p className="text-lg font-semibold text-black">
							09CBCPA879G1ZS
						</p>
						<IconFileCertificate />
					</div>
				</div>
			</div>
		</section>
	);
}
