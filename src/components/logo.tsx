import Image from "next/image";
import Link from "next/link";
import { logo } from "@/constants/data";

export function Logo() {
	return (
		<Link href="/">
			<Image
				src={logo}
				alt="KRM Logo"
				width="114"
				height="112"
				loading="eager"
			/>
		</Link>
	);
}
