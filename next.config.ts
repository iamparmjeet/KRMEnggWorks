import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	turbopack: {
		root: __dirname,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.krmenggworks.com",
				port: "",
				search: "",
			},
		],
	},
};

export default nextConfig;
