import Image from "next/image";
import type { ProductListItem } from "@/constants";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function ProductCard({
	product,
}: {
	product: ProductListItem;
}) {
	return (
		<div className="h-full overflow-hidden hover:shadow-sm transition-shadow cursor-pointer border border-accent rounded-none p-2 flex flex-col justify-between items-start">
			<div className="min-h-75 relative overflow-hidden w-full">
				<Image
					src={product.image}
					alt={product.name}
					className="bg-center object-cover"
					width={300}
					height={300}
				/>
				<Separator className="bg-black my-2" />
				<h3 className="font-semibold text-primary text-lg mb-2 line-clamp-2">
					{product.name}
				</h3>
				<span className="text-accent font-medium text-lg">
					₹{product.price.toLocaleString()}
				</span>
			</div>
			<Button
				className="bg-yellow font-cambo text-lg font-semibold hover:bg-black hover:text-white py-2 h-auto w-auto mt-2"
				onClick={(e) => {
					e.preventDefault();
					// Add to cart logic here
				}}
			>
				Add to cart
			</Button>
		</div>
	);
}
