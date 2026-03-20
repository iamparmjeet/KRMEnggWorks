import Link from "next/link";
import { Socials } from "@/constants";

// Base component that accepts color props
interface SocialsBoxProps {
	variant: "yellow" | "blue";
}

const colorSchemes = {
	yellow: {
		bg: "bg-yellow",
		hoverBg: "group-hover:bg-yellow",
		stroke: "stroke-yellow",
		hoverStroke: "group-hover:stroke-blue-950",
		accent: "bg-blue-950",
	},
	blue: {
		bg: "bg-blue-500",
		hoverBg: "group-hover:bg-yellow",
		stroke: "stroke-white",
		hoverStroke: "group-hover:stroke-blue-950",
		accent: "bg-blue-950",
	},
};

export function SocialsBox({ variant }: SocialsBoxProps) {
	const colors = colorSchemes[variant];

	return (
		<div className="flex gap-4">
			<ul className="flex gap-2 text-lg font-semibold">
				{Socials.map((item) => {
					const IconComponent = item.icon;
					return (
						<li
							key={item.id}
							className={`flex items-center justify-center gap-4 cursor-pointer transition-colors group`}
						>
							<Link
								href={item.link}
								target="_blank"
								className={`${colors.hoverBg} ${colors.accent} p-4 transition-colors`}
							>
								<IconComponent
									className={`size-7 rounded-sm p-1.2 ${colors.stroke} ${colors.hoverStroke} transition-colors`}
								/>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
