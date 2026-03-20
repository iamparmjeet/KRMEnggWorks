import Link from "next/link";

export default function NotFound() {
	return (
		<div className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
			{/* Background grid pattern */}
			<div
				className="absolute inset-0 opacity-10"
				style={{
					backgroundImage: `
						linear-gradient(rgba(250,204,21,0.4) 1px, transparent 1px),
						linear-gradient(90deg, rgba(250,204,21,0.4) 1px, transparent 1px)
					`,
					backgroundSize: "60px 60px",
				}}
			/>

			{/* Giant 404 watermark */}
			<span
				className="absolute select-none font-black text-yellow-400/5 pointer-events-none"
				style={{ fontSize: "clamp(200px, 35vw, 420px)", lineHeight: 1 }}
				aria-hidden="true"
			>
				404
			</span>

			{/* Content */}
			<div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
				{/* Gear icon made from CSS */}
				<div className="flex justify-center mb-8">
					<div className="relative">
						<div className="w-20 h-20 border-4 border-yellow-400 rounded-full flex items-center justify-center">
							<div className="w-8 h-8 bg-yellow-400 rounded-full" />
						</div>
						{/* Gear teeth */}
						{[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
							<div
								key={deg}
								className="absolute w-3 h-5 bg-yellow-400 rounded-sm"
								style={{
									top: "50%",
									left: "50%",
									transformOrigin: "50% 50%",
									transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-38px)`,
								}}
							/>
						))}
					</div>
				</div>

				{/* Status code */}
				<div className="flex items-center justify-center gap-4 mb-4">
					<div className="h-px w-16 bg-yellow-400" />
					<span className="text-yellow-400 text-sm font-bold tracking-[0.3em] uppercase">
						Page Not Found
					</span>
					<div className="h-px w-16 bg-yellow-400" />
				</div>

				<h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
					Wrong Part of
					<br />
					<span className="text-yellow-400">The Site</span>
				</h1>

				<p className="text-slate-400 text-lg mb-10 leading-relaxed">
					The page you're looking for has been moved, removed, or never existed.
					Let's get you back to the equipment you need.
				</p>

				{/* Actions */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/"
						className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold px-8 py-4 transition-colors text-sm tracking-wide uppercase"
					>
						← Back to Home
					</Link>
					<Link
						href="/shop"
						className="inline-flex items-center justify-center gap-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-950 font-bold px-8 py-4 transition-colors text-sm tracking-wide uppercase"
					>
						Browse Products
					</Link>
				</div>

				{/* Quick links */}
				<div className="mt-12 pt-8 border-t border-white/10">
					<p className="text-slate-300 text-xs uppercase tracking-widest mb-4">
						Quick Links
					</p>
					<div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
						{[
							{ label: "About Us", href: "/about" },
							{ label: "Shop", href: "/shop" },
							{ label: "Contact", href: "/contact" },
							{ label: "Cart", href: "/cart" },
						].map(({ label, href }) => (
							<Link
								key={href}
								href={href}
								className="text-slate-200 hover:text-yellow-400 text-sm transition-colors"
							>
								{label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
