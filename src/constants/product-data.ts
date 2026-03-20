import { slugify } from "@/lib/slugify";
import { media } from "./data";

/**********************************/
// Category Definition
export const CategoryDefinitions = {
	barBendingMachines: {
		name: "Bar Bending Machine",
		subcategories: [],
	},
	barCuttingMachine: {
		name: "Bar Cutting Machine",
		subcategories: [],
	},
	concreteBatchingPlant: {
		name: "Concrete Batching Plant",
		subcategories: ["Concrete Mixer-Mini Building Pump Model"],
	},
	concreteBucket: { name: "Concrete Bucket", subcategories: [] },
	concreteMixer: {
		name: "Concrete Mixer",
		subcategories: [
			"Concrete Mixer With Mechanical Hopper",
			"Concrete Mixer Without Mechanical Hopper",
			"Portable Mini Concrete Mixer",
		],
	},
	concreteRollerScreedPaver: {
		name: "Concrete Roller Screed Paver",
		subcategories: [],
	},
	concreteTrussScreed: {
		name: "Concrete Truss Screed",
		subcategories: [],
	},
	crane: {
		name: "Crane",
		subcategories: ["Mini Crane With Clutch Winch"],
	},
	handScreeds: { name: "Hand Screeds", subcategories: [] },
	labTestingEquipment: {
		name: "Lab Testing Equipment",
		subcategories: [],
	},
	monkeyHoist: { name: "Monkey Hoist", subcategories: [] },
	powerFloater: { name: "Power Floater", subcategories: [] },
	powerTrowel: { name: "Power Trowel", subcategories: [] },
	rideOnRollers: { name: "Ride on Rollers", subcategories: [] },
	ringMakingMachine: {
		name: "Ring Making Machine",
		subcategories: [],
	},
	screedBoardVibrator: {
		name: "Screed Board Vibrator",
		subcategories: [],
	},
	screedVibrator: { name: "Screed Vibrator", subcategories: [] },
	tampingRammer: { name: "Tamping Rammer", subcategories: [] },
	trimixFlooringMachine: {
		name: "Trimix Flooring Machine",
		subcategories: [],
	},
	vacuumDewateringPump: {
		name: "Vacuum Dewatering Pump",
		subcategories: [],
	},
	vibratoryCompactors: {
		name: "Vibratory Compactors",
		subcategories: [],
	},
	vibratoryRoller: { name: "Vibratory Roller", subcategories: [] },
	concreteCuttingMachine: {
		name: "Concrete Cutting Machines",
		subcategories: [],
	},
} as const satisfies Record<string, { name: string; subcategories: string[] }>;

export const Category = Object.fromEntries(
	Object.entries(CategoryDefinitions).map(([key, { name }]) => [
		key,
		slugify(name),
	])
) as { [K in keyof typeof CategoryDefinitions]: string };

export type CategoryId = (typeof Category)[keyof typeof Category];
export type CategoryKey = keyof typeof CategoryDefinitions;

export type CategoryType = {
	name: string;
	id: string;
	subcategories: string[];
};

export const categories: CategoryType[] = Object.entries(
	CategoryDefinitions
).map(([_key, { name, subcategories }]) => ({
	name,
	id: slugify(name),
	subcategories,
}));

export const categoryMap = new Map(categories.map((c) => [c.id, c.name]));

/*******************************************************/
// Raw Product Data (Single Source of Truth)
export interface RawProduct {
	id: number;
	name: string;
	categoryId: [string];
	price: number;
	images: string[];
	description: string;
	specifications: Record<string, string>;
}

const rawProducts: RawProduct[] = [
	{
		id: 1,
		name: "Bar Cutting Machine Model-GQ 40",
		categoryId: [Category.barCuttingMachine],
		price: 54000,
		images: [
			`${media}/03/Bar-Cutting-Machine.jpg`,
			`${media}/03/Bar-Cutting-Machines-2.jpg`,
		],
		description:
			"Clutch-controlled bar cutting machine with 3kW motor, cutting capacity up to 40mm plain MS bars and 32mm TMT bars. Operates at 32 cuts per minute with 415V/50Hz power supply.",
		specifications: {
			Model: "GQ 40",
			"TMT Bar Cutting Range (mm)": "6-32",
			"Plain MS Round Bar Cutting Range (mm)": "6-40",
			"Flat Steel Cutting Range (mm)": "< 70*15",
			"Solid Square Steel Cutting Range (mm)": "< 32*32",
			"Rod and Angle Cutting Range (mm)": "50*50",
			"Control Style": "With Clutch",
			"Frequency of Cutting (times/min)": "32",
			"Motor Power (kw)": "3",
			"Voltage & Frequency": "415V/50 Hz",
			"Dimensions (mm)": "1200*450*700",
			"Weight (kg)": "390",
		},
	},
	{
		id: 2,
		name: "Bar Cutting Machine Model-GQ 52",
		categoryId: [Category.barCuttingMachine],
		price: 64000,
		images: [
			`${media}/03/Bar_Cutting_Machines-GQ52-1.jpg`,
			`${media}/03/Bar-Cutting-Machines-2.jpg`,
			`${media}/03/Bar-Cutting-Machine.jpg`,
		],
		description:
			"Clutch-controlled bar cutting machine with 4kW motor, cutting capacity up to 50mm plain MS bars and 42mm TMT bars. Operates at 28 cuts per minute with 415V/50Hz power supply.",
		specifications: {
			Model: "GQ 52",
			"TMT Bar Cutting Range (mm)": "6-42",
			"Plain MS Round Bar Cutting Range (mm)": "6-50",
			"Flat Steel Cutting Range (mm)": "< 80*18",
			"Solid Square Steel Cutting Range (mm)": "< 40*40",
			"Rod and Angle Cutting Range (mm)": "< 63*63",
			"Control Style": "With Clutch",
			"Frequency of Cutting (times/min)": "28",
			"Motor Power (kw)": "4",
			"Voltage & Frequency": "415V/50 Hz",
			"Dimensions (mm)": "1560*500*800",
			"Weight (kg)": "530",
		},
	},
	{
		id: 3,
		name: "Concrete Bucket",
		categoryId: [Category.concreteBucket],
		price: 23600,
		images: [`${media}/03/Concrete-Bucket.jpg`],
		description:
			"Manual concrete bucket with 0.33 to 10 Cu.m capacity, constructed from 3-5mm CR sheets. Available in Banana, Cow Nose, and Nova types for tower crane and Hydra mobile crane operations.",
		specifications: {
			Capacity: "0.33 to 10 Cu.m",
			Material: "CR Sheets",
			"Model/Type": "Banana Type,Cow Nose Type,Nova type",
			Usage: "Shifting of Concrete in tower cranes,Hydra Mobile Crane",
			"Automation Grade": "Manual",
			"Sheet Thickness": "3 mm to 5 mm",
		},
	},
	{
		id: 4,
		name: "Concrete Mixers",
		categoryId: [Category.concreteMixer],
		price: 100000,
		images: [`${media}/04/Concrete-Mixture-without-Hopper-1.jpg`],
		description:
			"10/7 CFT concrete mixer without hopper, featuring 280L unmixed and 200L mixed capacity. Powered by 6 HP engine or 5 HP motor with 30-32 RPM rotation speed.",
		specifications: {
			Model: "10/7 CFT",
			Type: "Without Hopper",
			"Unmixed Capacity": "280 Ltr (10 cu.ft.)",
			"Mixed Capacity": "200L(7 cu.ft.)",
			"Motor Power": "6 HP Engine / 5 HP Motor",
			"Rotation Speed": "30-32 RPM",
			"Drum Specifications (mm)": "10(Bottom)/6(Middle)/3(Top)",
			"Drum Gear": "96T (Single Ring)",
			"Machine Weight (kg)": "650",
		},
	},
	{
		id: 5,
		name: "Concrete Mixers-Mini Batching Plant Model-RM 1050",
		categoryId: [Category.concreteBatchingPlant],
		price: 350000,
		images: [`${media}/04/Concrete-Mixture-Mini-Batching-Plant-1v1.jpg`],
		description:
			"Semi-automatic mini batching plant with 1050L hopper and 750L batch capacity. Produces 12-15 Cu.m/hour with 12.5 HP main motor, three-bin hopper with load cells, and integrated printer control panel.",
		specifications: {
			Model: "RM 1050",
			"Hopper Capacity": "1050 Litres",
			"Batch Capacity": "750 Litres",
			"Mixer Capacity/Hour": "12-15 Cu.m/Hr",
			"Main Driver Motor": "12.5 HP, 3 Phase Branded",
			"Water Tank Capacity": "300 Litres",
			Wheels: "4 nos, 6-16 with bearing 63011",
			"Control Panel with Printer": "Semi Automatic",
			"Water Pump Motor": "0.5 HP for feeding & 1 HP for Discharge",
			"Hopper Type / Load Cell": "Three Bin Type Hopper with 3 Load Cell",
			"Drum Length / Drum Diameter": "2000 mm / 1400 mm",
			"Drum Blade / Discharge Blade": "10 mm / 8 mm",
			"Jack Levelling": "Pin Type / Screw Type (4 Nos)",
			"Hydraulic Jack Rod": "50 mm",
			"Dimension (Feet)": "L 17.5 * W 8 * H 8.5",
			Weight: "Approx 3500 KGs",
		},
	},
	{
		id: 6,
		name: "Double Beam Screed Board Vibrator",
		categoryId: [Category.screedBoardVibrator],
		price: 360000,
		images: [
			`${media}/03/Double-Beam-Screed-Board-Vibrator-1.jpg`,
			`${media}/03/Double_Beam_Screed_Board_Vibrator_2.jpg`,
			`${media}/03/Double_Beam_Screed_Board_Vibrator_4.jpg`,
		],
		description:
			"Double beam screed board vibrator with 4.2m span and 1 HP Rotomotive vibratory motor. Features 2 steel bars and 10m electric cable for concrete surface leveling.",
		specifications: {
			Model: "PM/SBV-4",
			"Motor Make": "Rotomotive",
			Length: "4.2 Mtr",
			"No of Bars": "2 Steel",
			Power: "1 HP",
			"Motor Type": "Vibratory",
			"Electric Cable": "10 Meter",
		},
	},
	{
		id: 7,
		name: "Drive Through Vibratory Roller Model-FVR 1200",
		categoryId: [Category.vibratoryRoller],
		price: 520000,
		images: [`${media}/04/Walk-Behind-Vibratory-Roller-FVR1200.jpg`],
		description:
			"1200kg walk-behind vibratory roller with 50 KN centrifugal force and 13 HP Changfa diesel engine. Features electric start, 60L water tank, and 540x800mm wheel size for heavy compaction.",
		specifications: {
			Model: "FVR 1200",
			"Centrifugal Force": "50 KN",
			Engine: "Changfa Diesel",
			Output: "13 HP",
			"Fuel Tank": "5 Ltr",
			"Depth Effect": "300 mm",
			"Starting Way": "Electric",
			"Water Tank": "60 Ltr",
			"Wheel Size (mm)": "540*800",
			"Grade Ability": "30%",
			"Vibration Frequency": "70 Hz",
			"Vibrating Clutch Method": "Electum",
			Speed: "0-5 Km/hr",
			"Packing Size (mm)": "2100*1000*1650",
			"Weight (Kg)": "1200",
		},
	},
	{
		id: 8,
		name: "Drive Through Vibratory Roller Model-FVR 850",
		categoryId: [Category.vibratoryRoller],
		price: 520000,
		images: [`${media}/04/Walk-Behind-Vibratory-Roller-FVR850.jpg`],
		description:
			"750kg walk-behind vibratory roller with 30 KN centrifugal force and 9 HP Greaves/Honda engine. Features electric start, 35L water tank, and 580x700mm wheel size for medium compaction.",
		specifications: {
			Model: "FVR 850",
			"Centrifugal Force": "30 KN",
			Engine: "Greaves / Honda",
			Output: "9 HP",
			"Fuel Tank": "3.6 Ltr",
			"Depth Effect": "300 mm",
			"Starting Way": "Electric",
			"Water Tank": "35 Ltr",
			"Wheel Size (mm)": "580*700",
			"Grade Ability": "30%",
			"Vibration Frequency": "70 Hz",
			"Vibrating Clutch Method": "Electum",
			Speed: "0-5 Km/hr",
			"Packing Size (mm)": "2100*1000*1400",
			"Weight (Kg)": "750",
		},
	},
	{
		id: 9,
		name: "Hand Screeds Model-Bull Float",
		categoryId: [Category.handScreeds],
		price: 0,
		images: [
			`${media}/04/Hand-Screeds-Bull-Float.jpg`,
			`${media}/04/Texture-Brush.jpg`,
		],
		description:
			"Professional bull float with 3000x100x50mm aluminium alloy blade and 3 stainless steel handles (1800mm each). Ergonomic design for smoothing fresh concrete surfaces.",
		specifications: {
			Modal: "Bull Float",
			"Blade Size (mm)": "3000*100*50",
			"Handle Length": "1800 mm/pc",
			"No of Handles": "3 PCs",
			"Material of Blade": "Aluminium Alloy",
			"Material of Handle": "Stainless Steel",
		},
	},
	{
		id: 10,
		name: "Hand Screeds Model-Bump Cutter",
		categoryId: [Category.handScreeds],
		price: 0,
		images: [
			`${media}/04/Hand-Screeds-Bump-Cutter.jpg`,
			`${media}/04/Texture-Brush.jpg`,
		],
		description:
			"Precision bump cutter with 3000x50x100mm aluminium alloy blade and 3 stainless steel handles (1800mm each). Essential tool for accurate concrete surface leveling.",
		specifications: {
			Modal: "Bump Cutter",
			"Blade Size (mm)": "3000*50*100",
			"Handle Length": "1800 mm/pc",
			"No of Handles": "3 PCs",
			"Material of Blade": "Aluminium Alloy",
			"Material of Handle": "Stainless Steel",
		},
	},
	{
		id: 11,
		name: "Hand Screeds Model-Check Rod",
		categoryId: [Category.powerTrowel],
		price: 0,
		images: [
			`${media}/04/Hand-Screeds-Check-Rod.jpg`,
			`${media}/04/Texture-Brush.jpg`,
		],
		description:
			"Check rod with L*200*2.8mm magnesium/aluminium alloy blade and 3 stainless steel handles (1800mm each). Used for concrete surface quality control and leveling verification.",
		specifications: {
			Modal: "Check Rod",
			"Blade Size (mm)": "L*200*2.8",
			"Handle Length": "1800 mm/pc",
			"No of Handles": "3 PCs",
			"Material of Blade": "Magnesium / Aluminium Alloy",
			"Material of Handle": "Stainless Steel",
		},
	},
	{
		id: 12,
		name: "Indian Power Trowel Model-PM/PF040",
		categoryId: [Category.trimixFlooringMachine],
		price: 30000,
		images: [
			`${media}/03/Power-Floater.jpg`,
			`${media}/03/Indian-Power-Trowel-1.jpg`,
		],
		description:
			"36-inch power floater with 5 HP Crompton motor and 15m electric cable. Disc-only configuration for RCC floor finishing in small areas.",
		specifications: {
			"Model Name": "PM/PF040",
			Usage: "RCC Floor Finishing",
			"Electric Cable Length": "15 meter",
			With: "Disc Only",
			"Disc Thickness": "-",
			"Working Diameter": "36 inch",
			"Motor Make": "Crompton",
			Power: "5 HP",
		},
	},
	{
		id: 13,
		name: "Indian Power Trowel Model-PM/PT040",
		categoryId: [Category.trimixFlooringMachine],
		price: 45000,
		images: [
			`${media}/03/Indian-Power-Trowel-1.jpg`,
			`${media}/03/Power-Floater.jpg`,
		],
		description:
			"39-inch power trowel with 5 HP Crompton motor, 5mm blade thickness, and 15m electric cable. Blade-only configuration for RCC floor finishing.",
		specifications: {
			"Model Name": "PM/PT040",
			Usage: "RCC Floor Finishing",
			"Electric Cable Length": "15 meter",
			With: "Blade Only",
			"Disc Thickness": "5 mm",
			"Working Diameter": "39 inch",
			"Motor Make": "Crompton",
			Power: "5 HP",
		},
	},
	{
		id: 14,
		name: "Mini Crane With Clutch Winch",
		categoryId: [Category.crane],
		price: 0,
		images: [`${media}/04/Mini-Crane-With-Clutch-Winch-1.jpg`],
		description:
			"Mini crane with clutch winch, 200-250kg capacity, and 30m lifting height. Features 360-degree rotation, 2500W motor, adjustable boom (5.3-6.3 ft), and 30m/min hoisting speed.",
		specifications: {
			Model: "MC - 200",
			"Lifting Height": "30 Mtr",
			Capacity: "200-250 KGs",
			Rotation: "360 Degree",
			"Adjustable Boom": "5.3 Ft to 6.3 Ft",
			"Motor Power": "2500 Watt",
			"Rated Voltage": "220V / 50 Hz",
			"Wire Rope Length": "30 Mtr",
			"Hoisting Speed": "30 Mtr/Min",
			"Thickness Wire Rope": "7 mm",
			Includes: "Wire Rope Guiding, Voltage Meter, Big Hook, Metal Body Fan",
			"Frame Weight": "65 KGs",
		},
	},
	{
		id: 15,
		name: "Monkey Hoist Model-ML 300",
		categoryId: [Category.monkeyHoist],
		price: 40000,
		images: [`${media}/04/Monkey-Hoist-1.jpg`],
		description:
			"Monkey hoist with 300kg capacity, 35m lifting height, and 1900mm boom length. Features 3 HP Crompton motor (3-phase/1-phase with brake), 10mm wire rope, 100mm gearbox, and remote control operation.",
		specifications: {
			Model: "ML-300",
			"Lifting Height": "35 Mtr",
			Capacity: "300 KGs",
			"Base Space": "n/a",
			"Boom Length": "1900 mm",
			"Boom Height / Boom Pipe": "2100 mm",
			"Stand Height / Pillar Pipe": "900 mm",
			Angle: "n/a",
			Channel: "n/a",
			"Thickness Wire Rope": "10 mm",
			Power: "Crompton 3 HP, 3 Phase / 1 Phase with Brake",
			"Wheel Borrow": "2 Nos",
			"Gear Box": "100 mm",
			"Remote Control Operated": "Yes",
			"Weight (KG)": "Approx 450 KGs",
		},
	},
	{
		id: 16,
		name: "Monkey Hoist Model-ML 500",
		categoryId: [Category.monkeyHoist],
		price: 70000,
		images: [`${media}/04/Monkey-Hoist-1.jpg`],
		description:
			"Heavy-duty monkey hoist with 500kg capacity, 70m lifting height, and 8ft boom length. Features 7.5 HP Crompton 3-phase motor with brake, 10mm wire rope, 120mm gearbox, and remote control operation.",
		specifications: {
			Model: "ML-500",
			"Lifting Height": "70 Mtr",
			Capacity: "500 KGs",
			"Base Space": "10 x 5 Feet Approx",
			"Boom Length": "8 Feet",
			"Boom Height / Boom Pipe": "50 x 5 mm",
			"Stand Height / Pillar Pipe": "160 x 8 mm",
			Angle: "40 x 40 x 5 mm",
			Channel: "100 x 50 x 6 m",
			"Thickness Wire Rope": "10 mm",
			Power: "Crompton 7.5 HP, 3 Phase with Brake",
			"Wheel Borrow": "2 Nos",
			"Gear Box": "120 mm",
			"Remote Control Operated": "Yes",
			"Weight (KG)": "Approx 600 KGs",
		},
	},
	{
		id: 17,
		name: "Ring Making Machine Model-GW 20",
		categoryId: [Category.ringMakingMachine],
		price: 30300,
		images: [
			`${media}/04/Ring-Making-Machine-2.jpg`,
			`${media}/04/Ring-Making-Machine-3.jpg`,
			`${media}/04/Ring-Making-Machine-1.jpg`,
		],
		description:
			"Auto angle feed ring making machine with 2.2kW (3 HP) 3-phase motor. Bends 4-16mm TMT bars and 4-20mm plain MS bars at 90°/135° angles with 25-30 bends per minute.",
		specifications: {
			Model: "GW 20",
			"TMT Bar Bending Range (mm)": "4-16",
			"Plain MS Round Bar Bending Range (mm)": "4-20",
			"Present Angle": "90°/135°",
			"Bending Speed (Times/min)": "25-30",
			"Angle Feed": "Auto",
			"Motor Power (kw)": "2.2 ( 3 Phase)",
			"Voltage & Frequency": "415V / 50Hz",
			"Dimension (mm)": "850*550*850",
			"Weight (kg)": "105",
		},
	},
	{
		id: 18,
		name: "Ring Making Machine Model-GW 20S",
		categoryId: [Category.ringMakingMachine],
		price: 30300,
		images: [
			`${media}/04/Ring-Making-Machine-3.jpg`,
			`${media}/04/Ring-Making-Machine-2.jpg`,
			`${media}/04/Ring-Making-Machine-1.jpg`,
		],
		description:
			"Manual angle feed ring making machine with 2.2kW (3 HP) 1/3-phase motor. Bends 4-16mm TMT bars and 4-20mm plain MS bars at 90°/135° angles with 25-30 bends per minute.",
		specifications: {
			Model: "GW 20S",
			"TMT Bar Bending Range (mm)": "4-16",
			"Plain MS Round Bar Bending Range (mm)": "4-20",
			"Present Angle": "90°/135°",
			"Bending Speed (Times/min)": "25-30",
			"Angle Feed": "Manual",
			"Motor Power (kw)": "2.2 ( 1/3 Phase)",
			"Voltage & Frequency": "415V / 50Hz",
			"Dimension (mm)": "850*550*850",
			"Weight (kg)": "95",
		},
	},
	{
		id: 19,
		name: "Screed Vibrator Model-CVS 25C",
		categoryId: [Category.screedVibrator],
		price: 28000,
		images: [`${media}/04/Screed-Vibrator-Model-CVS-25C-1-.jpg`],
		description:
			"25kg flexible shaft screed vibrator powered by Honda GX 35 air-cooled engine (1.2 HP). Features 0.65 gallon fuel tank and 2000x200x960mm dimensions.",
		specifications: {
			Model: "CVS 25C",
			Drive: "Flexible Shaft",
			Power: "Air Cooled, Honda Engine GX 35",
			"Max Output": "1.2 HP",
			"Fuel Tank (gal)": "0.65 (0.17)",
			Weight: "25 Kg",
			"Dimension (mm)": "2000*200*960",
		},
	},
	{
		id: 20,
		name: "Screed Vibrator Model-CVS 25E",
		categoryId: [Category.screedVibrator],
		price: 28000,
		images: [`${media}/04/Screed-Vibrator-Model-CVS-25C-1-.jpg`],
		description:
			"20kg shutter shaft screed vibrator with three-phase electric power (0.2 HP). Lightweight design with 2000x200x960mm dimensions for concrete surface vibration.",
		specifications: {
			Model: "CVS 25E",
			Drive: "Shutter Shaft",
			Power: "Three Phase Electrical",
			"Max Output": "0.2 HP",
			"Fuel Tank (gal)": "n/a",
			Weight: "20 Kg",
			"Dimension (mm)": "2000*200*960",
		},
	},
	{
		id: 21,
		name: "Taming Rammer Model HCD 100",
		categoryId: [Category.tampingRammer],
		price: 42000,
		images: [`${media}/04/Taming-Rammer-Model-1.jpg`],
		description:
			"80kg electric tamping rammer with 3kW (5 HP) motor drive. Features 20 KN impact force, 300mm depth effect, 460-650 jumps per minute, and 40-65mm jumping height.",
		specifications: {
			Model: "HCD 100",
			"Drive Through": "Electric Motor",
			"Fuel Tank": "n/a",
			Power: "3 Kw (5 HP)",
			"Depth Effect": "300 mm",
			"Impact Force": "20 kn",
			"Bottom Plate Size (mm)": "300*280",
			"Jumping Times": "460-650 Times/min",
			"Jumping Height": "40-65 mm",
			"Packing Size (mm)": "600*600*1000",
			"Weight (kg)": "80",
		},
	},
	{
		id: 22,
		name: "Taming Rammer Model-HCR 100/RM 80",
		categoryId: [Category.tampingRammer],
		price: 53000,
		images: [`${media}/04/Taming-Rammer-Model-1.jpg`],
		description:
			"90kg petrol tamping rammer powered by 5 HP Honda engine with 3L fuel tank. Features 20 KN impact force, 300mm depth effect, 460-650 jumps per minute, and 40-65mm jumping height.",
		specifications: {
			Model: "HCD 100/RM 80",
			"Drive Through": "Honda Petrol Engine",
			"Fuel Tank": "3 Ltr",
			Power: "5 HP",
			"Depth Effect": "300 mm",
			"Impact Force": "20 kn",
			"Bottom Plate Size (mm)": "300*280",
			"Jumping Times": "460-650 Times/min",
			"Jumping Height": "40-65 mm",
			"Packing Size (mm)": "600*600*1000",
			"Weight (kg)": "90",
		},
	},
	{
		id: 23,
		name: "Truss Screed Model PM-600S",
		categoryId: [Category.concreteTrussScreed],
		price: 65000,
		images: [`${media}/04/Truss-Screed-2.jpg`],
		description:
			"Professional truss screed with 4-18m adjustable length and 5 HP Honda GX 160 air-cooled engine. Features 260mm max paving thickness, 8-10 m/min travel speed, and mild steel/aluminium construction.",
		specifications: {
			Model: "PM 600B",
			Length: "4-18 Mtr",
			"Engine/Motor": "Air Cooled Honda GX 160",
			"Maximum Output": "5 HP",
			"Maximum Paving Thickness": "260 mm",
			"Travel Speed": "8-10 Mtr/min",
			"Maximum Rotate Speed": "360 RPM",
			"Material of Body": "Mild Steel + Aluminium",
			Weight: "95 Kg",
			"Packing Size (mm)": "2470*1365*1250 (2 units)",
			"Dimension (mm)": "L*400*960",
		},
	},
	{
		id: 24,
		name: "VST Shakti Group Cutter With Diesel Engine",
		categoryId: [Category.concreteCuttingMachine],
		price: 70000,
		images: [`${media}/04/VST-Shakti-Group-Cutter-With-Diesel-Engine-3.jpg`],
		description:
			"95kg diesel-powered concrete cutter with 5-9 HP engine and 12-20 inch blade size. Features 160mm max cutting depth, 25L water tank, manual push drive, and handle rotation depth adjustment.",
		specifications: {
			"Model Name": "VST Shakti",
			Weight: "95 Kg",
			"Maximum Cutting Depth": "160 mm",
			"Engine Power": "5/7.5/9 HP",
			"Blade Size": "12-20 Inches",
			"Engine Type": "Diesel",
			"Water Tank": "25 Ltr",
			"Depth Adjustment": "Handle Rotation",
			"Drive Method": "Manual Push",
		},
	},
	{
		id: 25,
		name: "Walk Behind Vibratory Roller FVR600",
		categoryId: [Category.vibratoryRoller],
		price: 260000,
		images: [`${media}/04/Walk-Behind-Vibratory-Roller-FVR600.jpg`],
		description:
			"600kg walk-behind vibratory roller with 30 KN centrifugal force and 9 HP Greaves/Honda engine. Features electric start, automatic vibrating clutch, 35L water tank, and 430x600mm wheel size.",
		specifications: {
			Model: "FVR 600",
			"Centrifugal Force": "30 KN",
			Engine: "Greaves / Honda",
			Output: "9 HP",
			"Fuel Tank": "3.6 Ltr",
			"Depth Effect": "300 mm",
			"Starting Way": "Electric",
			"Water Tank": "35 Ltr",
			"Wheel Size (mm)": "430*600",
			"Grade Ability": "30%",
			"Vibration Frequency": "70 Hz",
			"Vibrating Clutch Method": "Automatic",
			Speed: "0-4 Km/hr",
			"Packing Size (mm)": "1070*980*1200",
			"Weight (Kg)": "600",
		},
	},
	{
		id: 26,
		name: "Walk Behind Vibratory Roller FVR600s",
		categoryId: [Category.vibratoryRoller],
		price: 260000,
		images: [`${media}/04/Walk-Behind-Vibratory-Roller-FVR600s.jpg`],
		description:
			"280kg walk-behind vibratory roller with 15 KN centrifugal force and 5 HP Greaves/Honda engine. Features manual start, automatic vibrating clutch, 30L water tank, and 430x600mm wheel size.",
		specifications: {
			Model: "FVR 600S",
			"Centrifugal Force": "15 KN",
			Engine: "Greaves / Honda",
			Output: "5 HP",
			"Fuel Tank": "2.5 Ltr",
			"Depth Effect": "300 mm",
			"Starting Way": "Manual",
			"Water Tank": "30 Ltr",
			"Wheel Size (mm)": "430*600",
			"Grade Ability": "25%",
			"Vibration Frequency": "70 Hz",
			"Vibrating Clutch Method": "Automatic",
			Speed: "0-4 Km/hr",
			"Packing Size (mm)": "1070*980*1200",
			"Weight (Kg)": "280",
		},
	},
];

// Raw Product Data ends Here
/************************************************************/

// Derived Product Data
export type ProductDetailsType = {
	id: number;
	name: string;
	category: string;
	categoryId: string[];
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
	categoryId: string[];
	image: string;
	slug: string;
};

// 1. Product Database (slug -> full details) for product detail pages
export const productDatabase: Record<string, ProductDetailsType> =
	Object.fromEntries(
		rawProducts.map((p) => [
			slugify(p.name),
			{
				id: p.id,
				name: p.name,
				category: p.categoryId
					.map((id) => categoryMap.get(id) || id)
					.join(", "),
				categoryId: p.categoryId,
				price: p.price,
				images: p.images,
				description: p.description,
				specifications: p.specifications,
			},
		])
	);

// 2. Products List (for shop page) - lightweight version
export const products: ProductListItem[] = rawProducts.map((p) => ({
	id: p.id,
	name: p.name,
	price: p.price,
	category: p.categoryId.map((id) => categoryMap.get(id) || id).join(", "),
	categoryId: p.categoryId,
	image: p.images[0],
	slug: slugify(p.name),
}));
