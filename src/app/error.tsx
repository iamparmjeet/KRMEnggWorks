"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
	useEffect(() => {
		// Log to your error tracking service here (e.g. Sentry)
		console.error("[KRM Error]", error);
	}, [error]);

	return (
		<div className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
			{/* Diagonal stripe background — industrial warning tape aesthetic */}
			<div
				className="absolute inset-0 opacity-[0.04]"
				style={{
					backgroundImage: `repeating-linear-gradient(
						-45deg,
						#facc15,
						#facc15 20px,
						transparent 20px,
						transparent 60px
					)`,
				}}
			/>

			{/* Red glow top-left — signals something went wrong */}
			<div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

			{/* Giant ERROR watermark */}
			<span
				className="absolute select-none font-black text-red-500/5 pointer-events-none whitespace-nowrap"
				style={{ fontSize: "clamp(80px, 15vw, 180px)", lineHeight: 1 }}
				aria-hidden="true"
			>
				ERROR
			</span>

			{/* Content */}
			<div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
				{/* Warning icon */}
				<div className="flex justify-center mb-8">
					<div className="w-20 h-20 border-4 border-red-500 flex items-center justify-center rotate-45">
						<span className="text-red-500 font-black text-3xl -rotate-45">
							!
						</span>
					</div>
				</div>

				{/* Status */}
				<div className="flex items-center justify-center gap-4 mb-4">
					<div className="h-px w-12 bg-red-500" />
					<span className="text-red-500 text-sm font-bold tracking-[0.3em] uppercase">
						System Error
					</span>
					<div className="h-px w-12 bg-red-500" />
				</div>

				<h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
					Something
					<br />
					<span className="text-red-400">Broke Down</span>
				</h1>

				<p className="text-slate-400 text-lg mb-3 leading-relaxed">
					An unexpected error occurred. Our team has been notified and we're
					working to fix it.
				</p>

				{/* Error digest for debugging */}
				{error.digest && (
					<p className="text-slate-600 text-xs font-mono mb-8">
						Error ID: <span className="text-slate-500">{error.digest}</span>
					</p>
				)}

				{!error.digest && <div className="mb-8" />}

				{/* Actions */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button
						type="button"
						onClick={reset}
						className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold px-8 py-4 transition-colors text-sm tracking-wide uppercase"
					>
						↺ Try Again
					</button>
					<Link
						href="/"
						className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400 font-bold px-8 py-4 transition-colors text-sm tracking-wide uppercase"
					>
						← Go Home
					</Link>
				</div>

				{/* Contact note */}
				<p className="mt-10 text-slate-600 text-sm">
					Issue persisting?{" "}
					<Link href="/contact" className="text-yellow-400 hover:underline">
						Contact us
					</Link>{" "}
					and we'll sort it out.
				</p>
			</div>
		</div>
	);
}
