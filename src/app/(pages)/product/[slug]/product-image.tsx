"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ProductDetailsType } from "@/constants";

interface Props {
	product: ProductDetailsType;
}

export function ProductImage({ product }: Props) {
	const [selectedImage, setSelectedImage] = useState(0);
	const [isZoomed, setIsZoomed] = useState(false);
	const [mousePosition, setMousePosition] = useState({
		x: 50,
		y: 50,
	});

	const imageRef = useRef<HTMLDivElement>(null);

	const hasMultipleImages = product.images.length > 1;

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!imageRef.current) return;
		const rect = imageRef.current.getBoundingClientRect();
		const x = ((e.clientX - rect.left) / rect.width) * 100;
		const y = ((e.clientY - rect.top) / rect.height) * 100;
		setMousePosition({ x, y });
	};

	return (

			<div className="space-y-4">
				{/* Main image with zoom */}
				<div
					ref={imageRef}
					role="img"
					aria-label="Product image (zoom on hover)"
					className="relative bg-white border border-gray-400 overflow-hidden aspect-square cursor-crosshair"
					onMouseEnter={() => setIsZoomed(true)}
					onMouseLeave={() => setIsZoomed(false)}
					onMouseMove={handleMouseMove}
				>
					<Image
						src={product.images[selectedImage]}
						alt={product.name}
						fill
						className={`object-contain p-4 transition-transform duration-200 ease-out ${
							isZoomed ? "scale-150" : "scale-100"
						}`}
						style={{
							transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
						}}
						priority
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</div>

				{/* Thumbnails */}
				{hasMultipleImages && (
					<div className="flex gap-3">
						{product.images.map((img, idx) => (
							<button
								key={img}
								type="button"
								onClick={() => setSelectedImage(idx)}
								className={`relative size-20 border overflow-hidden transition-all cursor-pointer ${
									selectedImage === idx
										? "border-gray-400"
										: "border-slate-200 hover:border-slate-300"
								}`}
							>
								<Image
									src={img}
									alt={`${product.name} view ${idx + 1}`}
									fill
									className="object-contain p-1"
									sizes="80px"
								/>
							</button>
						))}
					</div>
				)}
			</div>

	);
}
