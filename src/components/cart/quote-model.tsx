"use client";

import { IconCheck, IconSend, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type QuoteProduct = {
	id: number;
	name: string;
	image: string;
	slug: string;
};

type QuoteModalProps = {
	product: QuoteProduct | null;
	onClose: () => void;
};

type FormState = {
	name: string;
	mobile: string;
	message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export function QuoteModal({ product, onClose }: QuoteModalProps) {
	const [form, setForm] = useState<FormState>({
		name: "",
		mobile: "",
		message: "",
	});
	const [status, setStatus] = useState<Status>("idle");

	// Keep a stable ref to onClose so effects never need it in their dep array
	const onCloseRef = useRef(onClose);
	useEffect(() => {
		onCloseRef.current = onClose;
	});

	const isOpen = product !== null;

	// Reset form whenever modal opens (product goes from null → something)
	useEffect(() => {
		if (isOpen) {
			setForm({ name: "", mobile: "", message: "" });
			setStatus("idle");
		}
	}, [isOpen]);

	// Body scroll lock + Escape key — dep array is always [isOpen], never changes size
	useEffect(() => {
		if (!isOpen) return;

		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") onCloseRef.current();
		};
		document.addEventListener("keydown", handleEscape);

		return () => {
			document.body.style.overflow = prev;
			document.removeEventListener("keydown", handleEscape);
		};
	}, [isOpen]); // ← always exactly 1 item, never changes size

	const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
		e.stopPropagation();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!product) return;
		setStatus("sending");

		try {
			const subject = encodeURIComponent(`Quote Request: ${product.name}`);
			const body = encodeURIComponent(
				`Product: ${product.name}\nProduct Link: ${window.location.origin}/product/${product.slug}\n\nName: ${form.name}\nMobile: ${form.mobile}\n\nMessage:\n${form.message}`,
			);
			window.location.href = `mailto:info@krmengineering.com?subject=${subject}&body=${body}`;
			setStatus("success");
		} catch {
			setStatus("error");
		}
	};

	if (!isOpen) return null;

	return (
		<>
			{/* Backdrop */}
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: Escape handled via document listener */}
			<div
				className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
				onClick={onClose}
			/>

			<div
				className="fixed inset-0 z-50 flex items-center justify-center p-4"
				role="dialog"
				aria-modal="true"
				aria-label="Get a quote"
			>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: click-outside handled by backdrop */}
				<div
					className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
					onClick={(e) => e.stopPropagation()}
					onKeyDown={handleKeyDown}
				>
					<Button
						type="button"
						onClick={onClose}
						className="absolute top-3 right-3 z-10 p-1.5 bg-white border border-slate-200 hover:bg-slate-100 rounded transition-colors"
						aria-label="Close modal"
					>
						<IconX className="h-4 w-4 text-slate-600" />
					</Button>

					<div className="grid grid-cols-1 sm:grid-cols-2">
						{/* Left: product image */}
						<div className="bg-slate-950 flex flex-col items-center justify-center p-8 gap-4">
							<div className="relative h-48 w-48 bg-white/5 rounded border border-white/10 overflow-hidden">
								{product.image && (
									<Image
										src={product.image}
										alt={product.name}
										width={250}
										height={250}
										className="object-contain p-3"
									/>
								)}
							</div>
							<p className="text-yellow-400 text-sm font-semibold text-center leading-snug">
								{product.name}
							</p>
						</div>

						{/* Right: form */}
						<div className="p-6 sm:p-8">
							{status === "success" ? (
								<div className="flex flex-col items-center justify-center h-full gap-4 py-8 text-center">
									<IconCheck className="h-12 w-12 text-green-500" />
									<h3 className="text-lg font-bold text-[#0d1b2a]">
										Enquiry Sent!
									</h3>
									<p className="text-sm text-slate-500">
										We'll get back to you shortly about{" "}
										<strong>{product.name}</strong>.
									</p>
									<Button
										type="button"
										onClick={onClose}
										className="mt-2 px-6 py-2 bg-yellow-400 text-blue-950 font-bold hover:bg-yellow-500 transition-colors"
									>
										Close
									</Button>
								</div>
							) : (
								<>
									<h2 className="text-xl font-bold text-[#0d1b2a] mb-1">
										Share Your Requirements
									</h2>
									<p className="text-sm text-slate-500 mb-6">
										with KRM Engineering Works
									</p>

									<form onSubmit={handleSubmit} className="space-y-4">
										<div>
											<label
												htmlFor="quote-name"
												className="block text-sm font-semibold text-slate-900 mb-1"
											>
												Name <span className="text-red-500">*</span>
											</label>
											<input
												id="quote-name"
												type="text"
												required
												placeholder="Your name"
												value={form.name}
												onChange={(e) =>
													setForm((f) => ({ ...f, name: e.target.value }))
												}
												className="w-full px-3 py-2.5 border border-slate-300 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-sm transition-colors"
											/>
										</div>

										<div>
											<label
												htmlFor="quote-mobile"
												className="block text-sm font-semibold text-slate-900 mb-1"
											>
												Mobile <span className="text-red-500">*</span>
											</label>
											<input
												id="quote-mobile"
												type="tel"
												required
												placeholder="Your mobile number"
												value={form.mobile}
												onChange={(e) =>
													setForm((f) => ({ ...f, mobile: e.target.value }))
												}
												className="w-full px-3 py-2.5 border border-slate-300 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-sm transition-colors"
											/>
										</div>

										<div>
											<label
												htmlFor="quote-message"
												className="block text-sm font-semibold text-slate-900 mb-1"
											>
												Message
											</label>
											<textarea
												id="quote-message"
												rows={3}
												placeholder="Your requirements, quantity, delivery location..."
												value={form.message}
												onChange={(e) =>
													setForm((f) => ({ ...f, message: e.target.value }))
												}
												className="w-full px-3 py-2.5 border border-slate-300 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none text-sm transition-colors resize-none"
											/>
										</div>

										{status === "error" && (
											<p className="text-sm text-red-500">
												Something went wrong. Please try again.
											</p>
										)}

										<Button
											type="submit"
											disabled={status === "sending"}
											className={cn(
												"w-full flex items-center justify-center gap-2 py-3 font-bold text-sm transition-colors",
												"bg-yellow-400 hover:bg-yellow-500 text-[#0d1b2a]",
												status === "sending" && "opacity-70 cursor-not-allowed",
											)}
										>
											{status === "sending" ? (
												<>
													<span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0d1b2a] border-t-transparent" />
													Sending...
												</>
											) : (
												<>
													<IconSend className="h-4 w-4" />
													Send Enquiry
												</>
											)}
										</Button>
									</form>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
