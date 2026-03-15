import { slugify } from "@/lib/slugify";
import { media } from "./data";

// Types
export type ProductDetailsType = {
	id: number;
	name: string;
	category: string;
	categoryId: string;
	price: number;
	images: string[];
	description: string;
	specifications: Record<string, string>;
};

export type ProductListItem = {
	id: number;
	name: string;
	price: number;
	category: string;
	categoryId: string;
	image: string;
	slug: string;
};

export type Category = {
	name: string;
	id: string;
	subcategories: string[];
};

// CATEGORIES
export const categories: Category[] = [
	{
		name: "Bar Bending Machine",
		id: "bar-bending-machines",
		subcategories: [],
	},
	{
		name: "Bar Cutting Machine",
		id: "bar-cutting-machine",
		subcategories: [],
	},
	{
		name: "Concrete Batching Plant",
		id: "concrete-batching-plant",
		subcategories: ["Concrete Mixer-Mini Building Pump Model"],
	},
	{
		name: "Concrete Bucket",
		id: "concrete-bucket",
		subcategories: [],
	},
	{
		name: "Concrete Mixer",
		id: "concrete-mixer",
		subcategories: [
			"Concrete Mixer With Mechanical Hopper",
			"Concrete Mixer Without Mechanical Hopper",
			"Portable Mini Concrete Mixer",
		],
	},
	{
		name: "Concrete Roller Screed Paver",
		id: "concrete-roller-screed-paver",
		subcategories: [],
	},
	{
		name: "Concrete Truss Screed",
		id: "concrete-truss-screed",
		subcategories: [],
	},
	{
		name: "Crane",
		id: "crane",
		subcategories: ["Mini Crane With Clutch Winch"],
	},
	{ name: "Hand Screeds", id: "hand-screeds", subcategories: [] },
	{
		name: "Lab Testing Equipment",
		id: "lab-testing-equipment",
		subcategories: [],
	},
	{ name: "Monkey Hoist", id: "monkey-hoist", subcategories: [] },
	{ name: "Power Floater", id: "power-floater", subcategories: [] },
	{ name: "Power Trowel", id: "power-trowel", subcategories: [] },
	{
		name: "Ride on Rollers",
		id: "ride-on-rollers",
		subcategories: [],
	},
	{
		name: "Ring Making Machine",
		id: "ring-making-machine",
		subcategories: [],
	},
	{
		name: "Screed Board Vibrator",
		id: "screed-board-vibrator",
		subcategories: [],
	},
	{
		name: "Screed Vibrator",
		id: "screed-vibrator",
		subcategories: [],
	},
	{ name: "Tamping Rammer", id: "tamping-rammer", subcategories: [] },
	{
		name: "Trimix Flooring Machine",
		id: "trimix-flooring-machine",
		subcategories: [],
	},
	{
		name: "Vacuum Dewatering Pump",
		id: "vacuum-dewatering-pump",
		subcategories: [],
	},
	{
		name: "Vibratory Compactors",
		id: "vibratory-compactors",
		subcategories: [],
	},
	{
		name: "Vibratory Roller",
		id: "vibratory-roller",
		subcategories: [],
	},
];

export const categoryMap = new Map(
	categories.map((c) => [c.id, c.name]),
);

// Raw Product Data (Single Source of Truth)
export interface RawProduct {
	id: number;
	name: string;
	categoryId: string;
	price: number;
	images: string[];
	description: string;
	specifications: Record<string, string>;
}

const rawProducts: RawProduct[] = [
	{
		id: 1,
		name: "Bar Cutting Machine Model-GQ 40",
		categoryId: "bar-cutting-machine",
		price: 54000,
		images: [
			`${media}/03/Bar-Cutting-Machine.jpg`,
			`${media}/03/Bar-Cutting-Machines-2.jpg`,
		],
		description:
			"Heavy-duty bar cutting machine suitable for construction sites. Features clutch control for safe operation and high cutting capacity up to 40mm diameter bars.",
		specifications: {
			Model: "GQ 40",
			"TMF Bar Cutting Range (mm)": "6-32",
			"Plain MS Round Bar Cutting Range (mm)": "6-40",
			"Flat Steel Cutting Range (mm)": "7*13",
			"Solid Square Steel Cutting Range (mm)": "2*32",
			"Rod and Angle Cutting Range (mm)": "6-40",
			"Control Style": "With Clutch",
			"Frequency of Cutting (times/min)": "32",
			"Motor Power (kw)": "3",
			"Voltage & Frequency": "415/3 /50 Hz",
			"Dimensions (mm)": "1200*620*700",
			"Weight (kg)": "380",
		},
	},
	{
		id: 2,
		name: "Bar Cutting Machine Model-GQ 52",
		categoryId: "bar-cutting-machine",
		price: 64000,
		images: [
			`${media}/03/Bar_Cutting_Machines-GQ52-1.jpg`,
			`${media}/03/Bar_Cutting_Machines-GQ52-2.jpg`,
		],
		description:
			"Advanced bar cutting machine with extended cutting range up to 52mm diameter. Ideal for heavy construction projects requiring high-capacity rebar cutting.",
		specifications: {
			Model: "GQ 52",
			"TMF Bar Cutting Range (mm)": "6-32",
			"Plain MS Round Bar Cutting Range (mm)": "6-52",
			"Flat Steel Cutting Range (mm)": "7*13",
			"Solid Square Steel Cutting Range (mm)": "2*32",
			"Rod and Angle Cutting Range (mm)": "6-52",
			"Control Style": "With Clutch",
			"Frequency of Cutting (times/min)": "32",
			"Motor Power (kw)": "3",
			"Voltage & Frequency": "415/3 /50 Hz",
			"Dimensions (mm)": "1200*620*700",
			"Weight (kg)": "390",
		},
	},
	{
		id: 3,
		name: "Concrete Bucket",
		categoryId: "concrete-bucket",
		price: 3400,
		images: [`${media}/03/Concrete-Bucket.jpg`],
		description:
			"Durable concrete bucket for efficient concrete transportation and pouring at construction sites.",
		specifications: {
			Capacity: "500L / 750L",
			Material: "Heavy-duty steel",
			"Bottom Opening": "Manual/Motorized",
			"Weight Capacity": "1500kg",
			"Dimensions (mm)": "1200*1000*800",
			"Weight (kg)": "85",
		},
	},
	{
		id: 4,
		name: "Concrete Mixers",
		categoryId: "concrete-mixer",
		price: 45000,
		images: [`${media}/04/Concrete-Mixture-without-Hopper-1.jpg`],
		description:
			"Reliable concrete mixer without hopper for consistent concrete mixing in medium-scale construction projects.",
		specifications: {
			Model: "CM-200",
			"Drum Capacity": "200L",
			"Mixing Capacity": "120L",
			"Motor Power": "3 HP",
			"Rotation Speed": "20 RPM",
			"Dimensions (mm)": "1500*1200*1400",
			"Weight (kg)": "280",
		},
	},
	{
		id: 5,
		name: "Concrete Mixers-Mini Building Pump Model DU 50",
		categoryId: "concrete-batching-plant",
		price: 85000,
		images: [
			`${media}/04/Concrete-Mixture-Mini-Batching-Plant-1v1.jpg`,
		],
		description:
			"Compact mini batching plant with integrated pumping system. Perfect for small to medium construction sites requiring mobile concrete production.",
		specifications: {
			Model: "DU 50",
			"Batching Capacity": "0.5 m³/batch",
			"Pumping Capacity": "15 m³/hour",
			"Motor Power": "15 HP",
			"Max Aggregate Size": "40mm",
			"Dimensions (mm)": "3500*2000*2500",
			"Weight (kg)": "1200",
		},
	},
	{
		id: 6,
		name: "Double Beam Screed Board Ultimate",
		categoryId: "screed-board-vibrator",
		price: 28000,
		images: [`${media}/03/Double-Beam-Screed-Board-Vibrator-1.jpg`],
		description:
			"Double beam screed board vibrator for achieving perfectly level concrete surfaces. Ultimate version with enhanced vibration control.",
		specifications: {
			Model: "DBS-Ultimate",
			"Beam Length": "3-6 meters",
			"Vibration Frequency": "2000 RPM",
			"Engine Type": "Petrol/Diesel",
			"Power Output": "5 HP",
			"Dimensions (mm)": "6000*200*150",
			"Weight (kg)": "45/meter",
		},
	},
	{
		id: 7,
		name: "Situs Through Vibratory Roller Model PYJ-1000",
		categoryId: "vibratory-roller",
		price: 125000,
		images: [`${media}/04/Walk-Behind-Vibratory-Roller-FVR1200.jpg`],
		description:
			"Heavy-duty walk-behind vibratory roller with 1000kg compaction force. Ideal for road construction and large surface compaction.",
		specifications: {
			Model: "PYJ-1000",
			"Operating Weight": "1000kg",
			"Centrifugal Force": "20 kN",
			"Drum Width": "700mm",
			"Engine Power": "9 HP",
			"Travel Speed": "0-4 km/h",
			"Dimensions (mm)": "2100*800*1100",
		},
	},
	{
		id: 8,
		name: "Situs Through Vibratory Roller Model PYJ-830",
		categoryId: "vibratory-roller",
		price: 95000,
		images: [`${media}/04/Walk-Behind-Vibratory-Roller-FVR850.jpg`],
		description:
			"Medium-duty vibratory roller with 830kg operating weight. Perfect for medium-scale compaction projects and trench work.",
		specifications: {
			Model: "PYJ-830",
			"Operating Weight": "830kg",
			"Centrifugal Force": "15 kN",
			"Drum Width": "600mm",
			"Engine Power": "7.5 HP",
			"Travel Speed": "0-3.5 km/h",
			"Dimensions (mm)": "1900*750*1050",
		},
	},
	{
		id: 9,
		name: "Hand Trowel Model Ball Float",
		categoryId: "hand-screeds",
		price: 3500,
		images: [`${media}/04/Hand-Screeds-Bull-Float.jpg`],
		description:
			"Professional bull float for smoothing and leveling fresh concrete surfaces. Ergonomic design for reduced operator fatigue.",
		specifications: {
			Model: "BF-1200",
			"Blade Width": "1200mm",
			"Blade Material": "Magnesium alloy",
			"Handle Length": "1800mm",
			"Weight (kg)": "3.5",
		},
	},
	{
		id: 10,
		name: "Hand Trowel Model Check Rod",
		categoryId: "hand-screeds",
		price: 2800,
		images: [`${media}/04/Hand-Screeds-Bump-Cutter.jpg`],
		description:
			"Precision check rod for accurate concrete surface leveling and quality control. Essential tool for finishing work.",
		specifications: {
			Model: "CR-2000",
			Length: "2000mm",
			Material: "Aluminum alloy",
			Accuracy: "±0.5mm",
			"Weight (kg)": "2.8",
		},
	},
	{
		id: 11,
		name: "Delson Power Trowel Model PAJ-100d",
		categoryId: "power-trowel",
		price: 85000,
		images: [`${media}/04/Hand-Screeds-Check-Rod.jpg`],
		description:
			"High-performance power trowel for achieving smooth, dense concrete surfaces. 100cm working diameter for efficient finishing.",
		specifications: {
			Model: "PAJ-100d",
			"Working Diameter": "1000mm",
			"Engine Power": "6.5 HP",
			"Rotation Speed": "70-130 RPM",
			"Number of Blades": "4",
			"Dimensions (mm)": "1100*1100*900",
			"Weight (kg)": "95",
		},
	},
	{
		id: 12,
		name: "Mini Cubic With Check Wrench",
		categoryId: "power-floater",
		price: 4500,
		images: [`${media}/03/Power-Floater.jpg`],
		description:
			"Compact power floater with integrated check wrench for small-area concrete finishing and edge work.",
		specifications: {
			Model: "MC-60",
			"Working Diameter": "600mm",
			"Engine Power": "2.5 HP",
			"Rotation Speed": "90 RPM",
			"Weight (kg)": "35",
		},
	},
	{
		id: 13,
		name: "Monkey Hoist Model ML-300",
		categoryId: "monkey-hoist",
		price: 55000,
		images: [`${media}/03/Indian-Power-Trowel-1.jpg`],
		description:
			"Compact monkey hoist with 300kg lifting capacity. Ideal for material handling on construction sites with limited space.",
		specifications: {
			Model: "ML-300",
			"Lifting Capacity": "300kg",
			"Lifting Height": "30 meters",
			"Motor Power": "2 HP",
			"Rope Diameter": "8mm",
			"Dimensions (mm)": "800*600*400",
			"Weight (kg)": "120",
		},
	},
	{
		id: 14,
		name: "Monkey Hoist Model ML-500",
		categoryId: "crane",
		price: 75000,
		images: [`${media}/04/Mini-Crane-With-Clutch-Winch-1.jpg`],
		description:
			"Heavy-duty monkey hoist with 500kg lifting capacity and clutch winch mechanism for enhanced safety and control.",
		specifications: {
			Model: "ML-500",
			"Lifting Capacity": "500kg",
			"Lifting Height": "50 meters",
			"Motor Power": "3 HP",
			"Rope Diameter": "10mm",
			Control: "Clutch type",
			"Dimensions (mm)": "900*700*450",
			"Weight (kg)": "180",
		},
	},
	{
		id: 15,
		name: "Ring Making Machine Model CYS-30",
		categoryId: "ring-making-machine",
		price: 45000,
		images: [`${media}/04/Monkey-Hoist-1.jpg`],
		description:
			"Efficient ring making machine for producing 30mm diameter rings. Perfect for construction rebar ring production.",
		specifications: {
			Model: "CYS-30",
			"Ring Diameter Range": "20-30mm",
			"Production Speed": "15 rings/min",
			"Motor Power": "1.5 HP",
			"Wire Diameter": "4-8mm",
			"Dimensions (mm)": "600*400*800",
			"Weight (kg)": "150",
		},
	},
	{
		id: 16,
		name: "Ring Making Machine Model CYS-90",
		categoryId: "ring-making-machine",
		price: 65000,
		images: [`${media}/04/Monkey-Hoist-1.jpg`],
		description:
			"Advanced ring making machine capable of producing 90mm diameter rings. High-speed production for large-scale projects.",
		specifications: {
			Model: "CYS-90",
			"Ring Diameter Range": "50-90mm",
			"Production Speed": "12 rings/min",
			"Motor Power": "2.2 HP",
			"Wire Diameter": "6-12mm",
			"Dimensions (mm)": "800*500*900",
			"Weight (kg)": "220",
		},
	},
	{
		id: 17,
		name: "Sound Vibrator Model CVS 60",
		categoryId: "screed-vibrator",
		price: 18000,
		images: [`${media}/04/Ring-Making-Machine-2.jpg`],
		description:
			"Portable concrete vibrator with 60mm diameter head. Ensures proper concrete compaction and air bubble removal.",
		specifications: {
			Model: "CVS 60",
			"Vibrator Head Diameter": "60mm",
			"Vibration Frequency": "12000 RPM",
			Amplitude: "1.2mm",
			"Motor Power": "2 HP",
			"Hose Length": "4 meters",
			"Weight (kg)": "25",
		},
	},
	{
		id: 18,
		name: "Sound Vibrator Model CVS 90",
		categoryId: "screed-vibrator",
		price: 22000,
		images: [`${media}/04/Ring-Making-Machine-3.jpg`],
		description:
			"Heavy-duty concrete vibrator with 90mm diameter head for deep concrete compaction in large structural elements.",
		specifications: {
			Model: "CVS 90",
			"Vibrator Head Diameter": "90mm",
			"Vibration Frequency": "10000 RPM",
			Amplitude: "1.5mm",
			"Motor Power": "3 HP",
			"Hose Length": "6 meters",
			"Weight (kg)": "35",
		},
	},
	{
		id: 19,
		name: "Tamping Rammer Model HCD 800",
		categoryId: "tamping-rammer",
		price: 35000,
		images: [`${media}/04/Taming-Rammer-Model-1.jpg`],
		description:
			"Reliable testing rammer for soil compaction testing and quality control in road construction projects.",
		specifications: {
			Model: "HCD 800",
			"Impact Force": "15 kN",
			"Jumping Stroke": "400-600mm",
			"Impact Rate": "450-650 blows/min",
			"Engine Power": "4 HP",
			"Plate Size": "300*250mm",
			"Weight (kg)": "75",
		},
	},
	{
		id: 20,
		name: "Truss Screed Model FM-400S",
		categoryId: "concrete-truss-screed",
		price: 95000,
		images: [`${media}/04/Truss-Screed-2.jpg`],
		description:
			"Professional truss screed for large-scale concrete leveling. 4-meter span with vibration system for perfect flatness.",
		specifications: {
			Model: "FM-400S",
			"Working Width": "4 meters",
			"Vibration Frequency": "2000 RPM",
			"Engine Power": "9 HP",
			"Frame Type": "Truss structure",
			"Dimensions (mm)": "4000*800*300",
			"Weight (kg)": "180",
		},
	},
	{
		id: 21,
		name: "VST Shakti Group Cutter With Diesel Engine",
		categoryId: "bar-cutting-machine",
		price: 125000,
		images: [
			`${media}/04/VST-Shakti-Group-Cutter-With-Diesel-Engine-3.jpg`,
		],
		description:
			"Heavy-duty group cutter powered by diesel engine. Designed for continuous cutting operations in large construction projects.",
		specifications: {
			Model: "VST-Diesel",
			"Cutting Capacity": "50mm",
			"Engine Type": "Diesel",
			"Engine Power": "10 HP",
			"Blade Diameter": "400mm",
			"Dimensions (mm)": "1500*700*1100",
			"Weight (kg)": "450",
		},
	},
	{
		id: 22,
		name: "Walk Behind Vibratory Roller FVR600",
		categoryId: "vibratory-roller",
		price: 85000,
		images: [`${media}/04/Walk-Behind-Vibratory-Roller-FVR600.jpg`],
		description:
			"Compact walk-behind vibratory roller with 600kg operating weight. Perfect for small to medium compaction jobs.",
		specifications: {
			Model: "FVR600",
			"Operating Weight": "600kg",
			"Centrifugal Force": "12 kN",
			"Drum Width": "600mm",
			"Engine Power": "6.5 HP",
			"Travel Speed": "0-3 km/h",
			"Dimensions (mm)": "1700*700*950",
		},
	},
	{
		id: 23,
		name: "Walk Behind Vibratory Roller FVR600S",
		categoryId: "vibratory-roller",
		price: 92000,
		images: [`${media}/04/Walk-Behind-Vibratory-Roller-FVR600s.jpg`],
		description:
			"Upgraded FVR600S with enhanced vibration system and steering control. Superior compaction performance for professional use.",
		specifications: {
			Model: "FVR600S",
			"Operating Weight": "650kg",
			"Centrifugal Force": "14 kN",
			"Drum Width": "600mm",
			"Engine Power": "7 HP",
			"Travel Speed": "0-3.5 km/h",
			"Special Features": "Steering assist, water sprinkler",
			"Dimensions (mm)": "1750*720*980",
		},
	},
	{
		id: 24,
		name: "Truss Screed Model FM-400S Heavy Duty",
		categoryId: "concrete-truss-screed",
		price: 115000,
		images: [`${media}/04/Truss-Screed-2.jpg`],
		description:
			"Heavy-duty version of FM-400S with reinforced truss frame and dual vibration motors for extreme construction conditions.",
		specifications: {
			Model: "FM-400S-HD",
			"Working Width": "4 meters",
			"Vibration Frequency": "2200 RPM",
			"Engine Power": "11 HP (Dual)",
			"Frame Type": "Reinforced truss",
			"Special Features": "Dual vibration, hydraulic drive",
			"Dimensions (mm)": "4000*850*320",
			"Weight (kg)": "220",
		},
	},
	{
		id: 25,
		name: "Tamping Rammer Model HCD 90",
		categoryId: "tamping-rammer",
		price: 42000,
		images: [`${media}/04/Taming-Rammer-Model-1.jpg`],
		description:
			"High-impact tamping rammer for soil and asphalt compaction. 90kg operating weight for deep compaction in trenches.",
		specifications: {
			Model: "HCD 90",
			"Operating Weight": "90kg",
			"Impact Force": "18 kN",
			"Jumping Stroke": "500mm",
			"Impact Rate": "550 blows/min",
			"Engine Power": "4.5 HP",
			"Plate Size": "350*280mm",
			"Weight (kg)": "90",
		},
	},
	{
		id: 26,
		name: "Screed Vibrator Model CVS 25C",
		categoryId: "screed-vibrator",
		price: 15000,
		images: [`${media}/04/Screed-Vibrator-Model-CVS-25C-1-.jpg`],
		description:
			"Compact screed vibrator for concrete surface finishing. 25mm compact design ideal for edge work and narrow areas.",
		specifications: {
			Model: "CVS 25C",
			"Vibrator Head Diameter": "25mm",
			"Vibration Frequency": "15000 RPM",
			Amplitude: "0.8mm",
			"Motor Power": "1.5 HP",
			"Hose Length": "3 meters",
			"Special Features": "Compact head for edge work",
			"Weight (kg)": "18",
		},
	},
];

// Raw Product Data ends Here

// Derived Product Data
// 1. Product Database (slug -> full details) for product detail pages
export const productDatabase: Record<string, ProductDetailsType> =
	Object.fromEntries(
		rawProducts.map((p) => [
			slugify(p.name),
			{
				id: p.id,
				name: p.name,
				category: categoryMap.get(p.categoryId) || p.categoryId,
				categoryId: p.categoryId,
				price: p.price,
				images: p.images,
				description: p.description,
				specifications: p.specifications,
			},
		]),
	);

// 2. Products List (for shop page) - lightweight version
export const products: ProductListItem[] = rawProducts.map((p) => ({
	id: p.id,
	name: p.name,
	price: p.price,
	category: categoryMap.get(p.categoryId) || p.categoryId,
	categoryId: p.categoryId,
	image: p.images[0],
	slug: slugify(p.name),
}));
