"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error("[KRM Global Error]", error);
	}, [error]);

	return (
		<html lang="en">
			<body className="bg-slate-950 text-white antialiased">
				<div className="min-h-screen flex items-center justify-center px-6">
					<div className="text-center max-w-xl">
						<div className="w-20 h-20 border-4 border-red-500 flex items-center justify-center rotate-45 mx-auto mb-8">
							<span className="text-red-500 font-black text-3xl -rotate-45">
								!
							</span>
						</div>
						<h1 className="text-4xl font-black mb-4">
							Critical <span className="text-red-400">Failure</span>
						</h1>
						<p className="text-slate-400 mb-2">
							A critical error prevented the application from loading.
						</p>
						{error.digest && (
							<p className="text-slate-600 text-xs font-mono mb-8">
								Error ID: {error.digest}
							</p>
						)}
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button
								type="button"
								onClick={reset}
								className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold px-8 py-4 text-sm uppercase"
							>
								Try Again
							</button>
							<Link
								href="/"
								className="border-2 border-white/20 text-white hover:border-yellow-400 hover:text-yellow-400 font-bold px-8 py-4 text-sm uppercase text-center"
							>
								Go Home
							</Link>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
