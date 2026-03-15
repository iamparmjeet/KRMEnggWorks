type PTB = { heading: string; subheading: string };

export default function PTB({ heading, subheading }: PTB) {
	return (
		<section className="relative w-full py-12 bg-slate-950 text-white overflow-hidden">
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl md:text-5xl font-bold mb-6">
					{heading}
				</h1>
				<p className="text-yellow-400 font-semibold">{subheading}</p>
			</div>
		</section>
	);
}
