import type { Metadata } from "next";
import { Cambo, Epilogue, Figtree } from "next/font/google";
import "./globals.css";

const cambo = Cambo({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-cambo",
});
const epilogue = Epilogue({
	subsets: ["latin"],
	variable: "--font-epilogue",
});

export const metadata: Metadata = {
	title: "KRM Engineering Works – Building Manufacturing Solutions",
	description:
		"KRM Engineering Works – One Stop Solution For All Your Building Manufacturing Needs.",
	icons: {
		icon: [
			{
				url: favicon,
			},
		],
	},
};

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { favicon } from "@/constants/data";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={cn("font-sans", figtree.variable)}>
			<body className={`${cambo.variable} ${epilogue.variable} "antialiased"`}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
