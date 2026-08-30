import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";
export const alt = "KRM Engineering Works – Building Manufacturing Solutions";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				padding: 60,
				background: "#020617", // slate-950
				color: "white",
				position: "relative",
			}}
		>
			{/* Yellow accent bar */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: 8,
					background: "#facc15",
					display: "flex",
				}}
			/>
			{/* Grid pattern hint */}
			<div
				style={{
					position: "absolute",
					right: 60,
					top: 60,
					width: 200,
					height: 200,
					borderRadius: 9999,
					border: "4px solid #facc15",
					opacity: 0.15,
					display: "flex",
				}}
			/>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 12,
				}}
			>
				<div
					style={{
						fontSize: 20,
						letterSpacing: 6,
						color: "#facc15",
						fontWeight: 700,
						textTransform: "uppercase",
					}}
				>
					KRM Engineering Works
				</div>
				<div
					style={{
						fontSize: 56,
						fontWeight: 900,
						lineHeight: 1.1,
						maxWidth: 800,
						display: "flex",
					}}
				>
					Building Manufacturing Solutions
				</div>
				<div
					style={{
						fontSize: 22,
						color: "#cbd5e1",
						marginTop: 8,
						display: "flex",
					}}
				>
					One Stop Solution For All Your Building & Construction Machinery Needs
				</div>
				<div
					style={{
						display: "flex",
						gap: 16,
						marginTop: 24,
					}}
				>
					<div
						style={{
							background: "#facc15",
							color: "#020617",
							padding: "12px 24px",
							fontWeight: 800,
							fontSize: 16,
							display: "flex",
						}}
					>
						krmenggworks.com
					</div>
					<div
						style={{
							border: "2px solid rgba(255,255,255,0.2)",
							color: "white",
							padding: "12px 24px",
							fontWeight: 700,
							fontSize: 16,
							display: "flex",
						}}
					>
						Trusted Since 2021
					</div>
				</div>
			</div>
		</div>,
		{
			...size,
		}
	);
}
