"use client";

import Link from "next/link";
import {
	IconArrowLeft,
	IconShoppingCart,
	IconTrash,
} from "tabler-icons";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Cart() {
	const cartItems = [
		{
			id: 1,
			name: "Industrial Drill Press",
			price: 4299,
			quantity: 1,
			image: "bg-gradient-to-br from-slate-700 to-slate-900",
		},
		{
			id: 2,
			name: "Metal Fabrication Tools",
			price: 2499,
			quantity: 2,
			image: "bg-gradient-to-br from-blue-600 to-blue-800",
		},
	];

	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);
	const tax = Math.round(subtotal * 0.08);
	const shipping = subtotal > 5000 ? 0 : 150;
	const total = subtotal + tax + shipping;

	return (
		<div className="w-full min-h-screen bg-background">
			{/* Header */}
			<section className="bg-muted border-b border-border">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
					<p className="text-foreground/70">
						{cartItems.length} items in cart
					</p>
				</div>
			</section>

			{/* Cart Content */}
			<section className="py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{cartItems.length > 0 ? (
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							{/* Cart Items */}
							<div className="lg:col-span-2 space-y-4">
								{cartItems.map((item) => (
									<Card key={item.id}>
										<CardContent className="p-6">
											<div className="flex gap-6">
												<div
													className={`${item.image} w-32 h-32 rounded-lg flex-shrink-0 flex items-center justify-center text-white/20`}
												>
													Image
												</div>
												<div className="flex-1">
													<Link href={`/products/${item.id}`}>
														<h3 className="text-lg font-bold hover:text-primary transition-colors cursor-pointer">
															{item.name}
														</h3>
													</Link>
													<p className="text-foreground/70 mt-2">
														${item.price.toLocaleString()}
													</p>
													<div className="flex items-center gap-4 mt-4">
														<div className="flex items-center border border-border rounded-lg">
															<button
																type="button"
																className="px-3 py-1 hover:bg-muted transition-colors"
															>
																−
															</button>
															<span className="px-4 py-1 font-semibold">
																{item.quantity}
															</span>
															<button
																type="button"
																className="px-3 py-1 hover:bg-muted transition-colors"
															>
																+
															</button>
														</div>
														<span className="font-bold text-primary">
															$
															{(
																item.price * item.quantity
															).toLocaleString()}
														</span>
													</div>
												</div>
												<button
													type="button"
													className="text-destructive hover:text-destructive/80 transition-colors"
												>
													<IconTrash className="w-5 h-5" />
												</button>
											</div>
										</CardContent>
									</Card>
								))}
							</div>

							{/* Order Summary */}
							<div>
								<Card className="sticky top-20">
									<CardHeader>
										<CardTitle>Order Summary</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="space-y-3 border-b border-border pb-4">
											<div className="flex justify-between">
												<span className="text-foreground/70">
													Subtotal
												</span>
												<span className="font-semibold">
													${subtotal.toLocaleString()}
												</span>
											</div>
											<div className="flex justify-between">
												<span className="text-foreground/70">
													Tax (8%)
												</span>
												<span className="font-semibold">
													${tax.toLocaleString()}
												</span>
											</div>
											<div className="flex justify-between">
												<span className="text-foreground/70">
													Shipping{" "}
													{shipping === 0 && (
														<span className="text-green-600 text-xs">
															(Free)
														</span>
													)}
												</span>
												<span className="font-semibold">
													${shipping.toLocaleString()}
												</span>
											</div>
										</div>

										<div className="flex justify-between text-lg">
											<span className="font-bold">Total</span>
											<span className="font-bold text-primary">
												${total.toLocaleString()}
											</span>
										</div>

										<Button className="w-full" size="lg">
											Proceed to Checkout
										</Button>

										<Link href="/products">
											<Button variant="outline" className="w-full">
												<IconArrowLeft className="mr-2 w-4 h-4" />
												Continue Shopping
											</Button>
										</Link>
									</CardContent>
								</Card>

								{shipping > 0 && (
									<Card className="mt-4 bg-blue-50 border-blue-200">
										<CardContent className="p-4">
											<p className="text-sm text-blue-900">
												Free shipping on orders over $5,000! Add $
												{(5000 - subtotal).toLocaleString()} more to
												qualify.
											</p>
										</CardContent>
									</Card>
								)}
							</div>
						</div>
					) : (
						<div className="text-center py-16">
							<IconShoppingCart className="w-16 h-16 mx-auto text-foreground/20 mb-4" />
							<h2 className="text-2xl font-bold mb-2">
								Your cart is empty
							</h2>
							<p className="text-foreground/70 mb-8">
								Add some products to get started
							</p>
							<Link href="/products">
								<Button size="lg">Browse Products</Button>
							</Link>
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
