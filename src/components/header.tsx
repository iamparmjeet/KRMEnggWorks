"use client";

import { IconCaretDown, IconMenu, IconShoppingCart, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories } from "@/constants";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";
import { Logo } from "./logo";

type NavItem = {
	label: string;
	href: string;
	hasDropdown?: boolean;
};

type DesktopNavProps = {
	navItems: NavItem[];
};

type MobileNavProps = {
	navItems: NavItem[];
	isOpen: boolean;
	onClose: () => void;
};

export function Header() {
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	const navItems: NavItem[] = [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/about" },
		{ label: "Shop", href: "/shop", hasDropdown: true },
		{ label: "Contact Us", href: "/contact" },
	];

	return (
		<header className="sticky top-0 z-50 w-full bg-slate-950 backdrop-blur min-h-28">
			<div className="flex justify-between items-center max-w-7xl mx-auto py-4">
				<Logo />

				<DesktopNav navItems={navItems} />

				<CartBox />
				<MobileMenuButton
					isOpen={isMobileOpen}
					onToggle={() => setIsMobileOpen(!isMobileOpen)}
				/>
			</div>
			<MobileNav
				navItems={navItems}
				isOpen={isMobileOpen}
				onClose={() => setIsMobileOpen(false)}
			/>
		</header>
	);
}

// Desktop Nav
function DesktopNav({ navItems }: DesktopNavProps) {
	const pathname = usePathname();

	return (
		<nav className="hidden md:flex items-center gap-8">
			{navItems.map((item) => {
				const isActive = pathname === item.href;

				return (
					<div
						key={item.href}
						className="relative min-w-22 group last:after:hidden after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-4 after:w-0.5 after:bg-sky-400"
					>
						<Link
							href={item.href}
							className={cn(
								"text-lg font-semibold font-cambo transition-colors flex items-center gap-2 px-3 py-3",
								isActive
									? "text-yellow border-b-2 border-yellow"
									: "text-white hover:text-yellow"
							)}
						>
							{item.label}
							{item.hasDropdown && (
								<span className="text-xs">
									<IconCaretDown />
								</span>
							)}
						</Link>

						{item.hasDropdown && (
							<div className="absolute left-0 mt-0 text-nowrap bg-white shadow-lg group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all duration-200">
								{categories.map((c) => (
									<Link
										key={c.id}
										href={`/product-category/${c.id}`}
										className="block px-5 py-3.5 text-base font-medium text-blue-950 hover:text-white hover:bg-blue-950"
									>
										{c.name}
									</Link>
								))}
							</div>
						)}
					</div>
				);
			})}
		</nav>
	);
}

// Mobile Navigation Component
function MobileNav({ navItems, isOpen, onClose }: MobileNavProps) {
	const pathname = usePathname();
	if (!isOpen) return null;

	return (
		<nav className="md:hidden bg-white pb-4 space-y-2 border-t border-slate-800">
			{navItems.map((item) => {
				const isActive = pathname === item.href;

				return (
					<div key={item.href}>
						<Link
							href={item.href}
							onClick={onClose}
							className={cn(
								"block px-4 py-2 text-lg font-medium transition-colors",
								isActive
									? "text-white bg-blue-950"
									: "text-blue-950 hover:text-yellow hover:bg-slate-950"
							)}
						>
							{item.label}
						</Link>
					</div>
				);
			})}
		</nav>
	);
}

// Mobile Menu Button Component
type MobileMenuButtonProps = {
	isOpen: boolean;
	onToggle: () => void;
};

function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
	return (
		<Button
			variant="link"
			onClick={onToggle}
			className="md:hidden text-sky-400 hover:text-white transition-colors bg-none"
		>
			{isOpen ? <IconX className="size-8" /> : <IconMenu className="size-8" />}
		</Button>
	);
}

function CartBox() {
	const {totalItems} = useCartStore()
	return (
		<div className="hidden md:flex gap-4">
			<Link href="/cart">
				<Button
					variant="default"
					size="icon"
					className="h-15 w-14 p-4 bg-yellow hover:bg-white border-2 hover:border-yellow cursor-pointer text-blue-950 relative"
				>
					<IconShoppingCart className="size-6" />
					<span className={`absolute -bottom-3 -right-2 size-7 rounded-full ${totalItems() > 0 ? "flex" : "hidden"} items-center justify-center bg-white`}>{totalItems() >= 1 ? totalItems() : ""}</span>
				</Button>
			</Link>

			<Link href="/contact">
				<Button className="h-15 bg-yellow hover:bg-black text-blue-950 hover:text-white border-2 hover:border-yellow text-lg font-semibold py-4 px-6 cursor-pointer">
					Get a Quote
				</Button>
			</Link>
		</div>
	);
}
