"use client";

import {
	ArrowLeft,
	CheckCircle,
	Minus,
	Plus,
	Send,
	ShoppingCart,
	Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PTB from "@/components/ptb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

type EnquiryForm = {
	name: string;
	mobile: string;
	email: string;
	message: string;
};

type Status = "idle" | "sending" | "success" | "error";

function formatPrice(price: number) {
	if (price === 0) return "Price on Request";
	return `₹${price.toLocaleString("en-IN")}`;
}

export default function CartPage() {
	const {
		items,
		removeItem,
		updateQuantity,
		clearCart,
		totalItems,
		totalPrice,
	} = useCartStore();

	const [form, setForm] = useState<EnquiryForm>({
		name: "",
		mobile: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<Status>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (items.length === 0) return;
		setStatus("sending");

		try {
			// Build a formatted product list for the email body
			const productList = items
				.map(
					(item) =>
						`- ${item.name} (Qty: ${item.quantity})${
							item.price > 0
								? ` — ₹${(item.price * item.quantity).toLocaleString("en-IN")}`
								: " — Price on Request"
						}`
				)
				.join("\n");

			const totalLine =
				totalPrice() > 0
					? `\nTotal: ₹${totalPrice().toLocaleString("en-IN")}`
					: "";

			const subject = encodeURIComponent(
				`Product Enquiry from ${form.name} — KRM Engineering Works`
			);
			const body = encodeURIComponent(
				`PRODUCT ENQUIRY\n${"=".repeat(40)}\n\n` +
					`Customer Details:\nName: ${form.name}\nMobile: ${form.mobile}\nEmail: ${form.email}\n\n` +
					`Products Requested:\n${productList}${totalLine}\n\n` +
					`Message:\n${form.message || "No additional message."}\n\n` +
					`Sent from KRM Engineering Works website.`
			);

			window.location.href = `mailto:info@krmengineering.com?subject=${subject}&body=${body}`;
			setStatus("success");
		} catch {
			setStatus("error");
		}
	};

	if (items.length === 0 && status !== "success") {
		return (
			<div className="w-full bg-white min-h-screen">
				<PTB heading="Your Cart" subheading="Review your selected products" />
				<div className="max-w-2xl mx-auto px-4 py-20 text-center">
					<ShoppingCart className="h-20 w-20 text-slate-200 mx-auto mb-6" />
					<h2 className="text-2xl font-bold text-[#0d1b2a] mb-2">
						Your cart is empty
					</h2>
					<p className="text-slate-500 mb-8">
						Add products from our shop to send an enquiry.
					</p>
					<Link
						href="/shop"
						className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-[#0d1b2a] font-bold px-8 py-3 transition-colors"
					>
						<ArrowLeft className="h-4 w-4" />
						Browse Products
					</Link>
				</div>
			</div>
		);
	}

	if (status === "success") {
		return (
			<div className="w-full bg-white min-h-screen">
				<PTB heading="Enquiry Sent!" subheading="We'll be in touch shortly" />
				<div className="max-w-2xl mx-auto px-4 py-20 text-center">
					<CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
					<h2 className="text-2xl font-bold text-[#0d1b2a] mb-2">
						Thank you, {form.name}!
					</h2>
					<p className="text-slate-500 mb-2">
						Your enquiry has been sent to KRM Engineering Works.
					</p>
					<p className="text-slate-400 text-sm mb-8">
						We'll contact you on <strong>{form.mobile}</strong> shortly.
					</p>
					<div className="flex gap-3 justify-center">
						<Button
							onClick={() => {
								clearCart();
								setStatus("idle");
							}}
							className="border border-[#0d1b2a] text-[#0d1b2a] font-medium px-6 py-2.5 hover:bg-slate-50 transition-colors text-sm"
						>
							Clear Cart
						</Button>
						<Link
							href="/shop"
							className="bg-yellow-400 hover:bg-yellow-500 text-[#0d1b2a] font-bold px-6 py-2.5 transition-colors"
						>
							Continue Shopping
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full bg-white">
			<PTB
				heading="Your Cart"
				subheading="Review and send your product enquiry"
			/>

			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
						{/* ── Cart Items ── */}
						<div className="lg:col-span-2 space-y-4">
							<div className="flex items-center justify-between mb-2">
								<h2 className="text-lg font-bold text-[#0d1b2a]">
									{totalItems()} {totalItems() === 1 ? "Product" : "Products"}{" "}
									Selected
								</h2>
								<Button
									onClick={clearCart}
									className="text-xs text-slate-400 hover:text-red-500 underline transition-colors"
								>
									Clear all
								</Button>
							</div>

							{items.map((item) => (
								<div
									key={item.id}
									className="flex gap-4 p-4 border border-slate-200 hover:border-yellow-300 transition-colors bg-slate-50/50"
								>
									{/* Image */}
									<div className="relative h-24 w-24 shrink-0 bg-white border border-slate-200 overflow-hidden">
										<Image
											src={item.image}
											alt={item.name}
											fill
											className="object-contain p-2"
										/>
									</div>

									{/* Details */}
									<div className="flex-1 min-w-0">
										<Link
											href={`/product/${item.slug}`}
											className="text-sm font-bold text-[#0d1b2a] hover:text-yellow-600 transition-colors line-clamp-2"
										>
											{item.name}
										</Link>
										<p className="text-sm text-yellow-600 font-semibold mt-1">
											{formatPrice(item.price)}
										</p>

										<div className="flex items-center justify-between mt-3">
											{/* Quantity */}
											<div className="flex items-center border border-slate-300 rounded overflow-hidden">
												<Button
													onClick={() =>
														updateQuantity(item.id, item.quantity - 1)
													}
													className="px-3 py-1.5 hover:bg-slate-200 transition-colors"
												>
													<Minus className="h-3 w-3" />
												</Button>
												<span className="px-4 py-1.5 text-sm font-medium bg-white border-x border-slate-300">
													{item.quantity}
												</span>
												<Button
													onClick={() =>
														updateQuantity(item.id, item.quantity + 1)
													}
													className="px-3 py-1.5 hover:bg-slate-200 transition-colors"
												>
													<Plus className="h-3 w-3" />
												</Button>
											</div>

											{/* Line total */}
											<div className="flex items-center gap-3">
												{item.price > 0 && (
													<span className="text-sm font-bold text-[#0d1b2a]">
														₹
														{(item.price * item.quantity).toLocaleString(
															"en-IN"
														)}
													</span>
												)}
												<Button
													onClick={() => removeItem(item.id)}
													className="p-1.5 text-slate-300 hover:text-red-500 transition-colors"
												>
													<Trash2 className="h-4 w-4" />
												</Button>
											</div>
										</div>
									</div>
								</div>
							))}

							{/* Back to shop */}
							<Link
								href="/shop"
								className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#0d1b2a] transition-colors mt-2"
							>
								<ArrowLeft className="h-4 w-4" />
								Continue Shopping
							</Link>
						</div>

						{/* ── Enquiry Form ── */}
						<div className="lg:col-span-1">
							<div className="sticky top-24 border border-slate-200 bg-slate-50/50 p-6">
								<h3 className="text-lg font-bold text-[#0d1b2a] mb-1">
									Send Enquiry
								</h3>
								<p className="text-xs text-slate-500 mb-5">
									Share your details and we'll get back to you with pricing and
									availability.
								</p>

								{/* Order summary */}
								<div className="bg-white border border-slate-200 p-3 mb-5 space-y-1.5">
									{items.map((item) => (
										<div
											key={item.id}
											className="flex justify-between text-xs text-slate-600"
										>
											<span className="truncate max-w-40">
												{item.name} ×{item.quantity}
											</span>
											<span className="font-medium shrink-0 ml-2">
												{item.price > 0
													? `₹${(item.price * item.quantity).toLocaleString("en-IN")}`
													: "On Request"}
											</span>
										</div>
									))}
									<div className="border-t border-slate-200 pt-1.5 mt-1.5 flex justify-between text-sm font-bold text-[#0d1b2a]">
										<span>Total</span>
										<span>
											{totalPrice() > 0
												? `₹${totalPrice().toLocaleString("en-IN")}`
												: "Price on Request"}
										</span>
									</div>
								</div>

								<form onSubmit={handleSubmit} className="space-y-3">
									<div>
										<label
											htmlFor="name"
											className="block text-xs font-semibold text-slate-700 mb-1"
										>
											Name <span className="text-red-500">*</span>
										</label>
										<input
											type="text"
											required
											placeholder="Your full name"
											value={form.name}
											onChange={(e) =>
												setForm((f) => ({
													...f,
													name: e.target.value,
												}))
											}
											className="w-full px-3 py-2 text-sm border border-slate-300 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors bg-white"
										/>
									</div>

									<div>
										<label
											htmlFor="tel"
											className="block text-xs font-semibold text-slate-700 mb-1"
										>
											Mobile <span className="text-red-500">*</span>
										</label>
										<input
											type="tel"
											required
											placeholder="10-digit mobile number"
											value={form.mobile}
											onChange={(e) =>
												setForm((f) => ({
													...f,
													mobile: e.target.value,
												}))
											}
											className="w-full px-3 py-2 text-sm border border-slate-300 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors bg-white"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-xs font-semibold text-slate-700 mb-1"
										>
											Email
										</label>
										<input
											type="email"
											placeholder="your@email.com"
											value={form.email}
											onChange={(e) =>
												setForm((f) => ({
													...f,
													email: e.target.value,
												}))
											}
											className="w-full px-3 py-2 text-sm border border-slate-300 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors bg-white"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="block text-xs font-semibold text-slate-700 mb-1"
										>
											Message
										</label>
										<textarea
											rows={3}
											placeholder="Quantity needed, delivery location, timeline..."
											value={form.message}
											onChange={(e) =>
												setForm((f) => ({
													...f,
													message: e.target.value,
												}))
											}
											className="w-full px-3 py-2 text-sm border border-slate-300 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-colors resize-none bg-white"
										/>
									</div>

									{status === "error" && (
										<p className="text-xs text-red-500">
											Something went wrong. Please try again.
										</p>
									)}

									<button
										type="submit"
										disabled={status === "sending"}
										className={cn(
											"w-full flex items-center justify-center gap-2 py-3 font-bold text-sm transition-colors",
											"bg-yellow-400 hover:bg-yellow-500 text-[#0d1b2a]",
											status === "sending" && "opacity-70 cursor-not-allowed"
										)}
									>
										{status === "sending" ? (
											<>
												<span className="animate-spin h-4 w-4 border-2 border-[#0d1b2a] border-t-transparent rounded-full" />
												Sending...
											</>
										) : (
											<>
												<Send className="h-4 w-4" />
												Send Enquiry to KRM
											</>
										)}
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
