"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMessage,
  IconMinus,
  IconPhone,
  IconPlus,
} from "tabler-icons";
import { Button } from "@/components/ui/button";
import { media } from "@/constants/data";

// Product type definition
type ProductDetails = {
  id: number;
  name: string;
  category: string;
  price: number;
  images: string[];
  description: string;
  specifications: Record<string, string>;
};

// Products database with slug as key
const productDatabase: Record<string, ProductDetails> = {
  "bar-cutting-machine-model-gq-40": {
    id: 1,
    name: "Bar Cutting Machine Model-GQ 40",
    category: "Bar Cutting Machine",
    price: 54000,
    images: [
      `${media}/03/Bar-Cutting-Machine.jpg`,
      `${media}/03/Bar-Cutting-Machine-2.jpg`,
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
  "bar-cutting-machine-model-gq-52": {
    id: 2,
    name: "Bar Cutting Machine Model-GQ 52",
    category: "Bar Cutting Machine",
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
  "concrete-bucket": {
    id: 3,
    name: "Concrete Bucket",
    category: "Concrete Equipment",
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
  "concrete-mixers": {
    id: 4,
    name: "Concrete Mixers",
    category: "Concrete Mixer",
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
  "concrete-mixers-mini-building-pump-model-du-50": {
    id: 5,
    name: "Concrete Mixers-Mini Building Pump Model DU 50",
    category: "Concrete Pump",
    price: 85000,
    images: [`${media}/04/Concrete-Mixture-Mini-Batching-Plant-1v1.jpg`],
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
  "double-beam-screed-board-ultimate": {
    id: 6,
    name: "Double Beam Screed Board Ultimate",
    category: "Screed Board",
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
  "situs-through-vibratory-roller-model-pyj-1000": {
    id: 7,
    name: "Situs Through Vibratory Roller Model PYJ-1000",
    category: "Vibratory Roller",
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
  "situs-through-vibratory-roller-model-pyj-830": {
    id: 8,
    name: "Situs Through Vibratory Roller Model PYJ-830",
    category: "Vibratory Roller",
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
  "hand-trowel-model-ball-float": {
    id: 9,
    name: "Hand Trowel Model Ball Float",
    category: "Hand Tools",
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
  "hand-trowel-model-check-rod": {
    id: 10,
    name: "Hand Trowel Model Check Rod",
    category: "Hand Tools",
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
  "delson-power-trowel-model-paj-100d": {
    id: 11,
    name: "Delson Power Trowel Model PAJ-100d",
    category: "Power Trowel",
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
  "mini-cubic-with-check-wrench": {
    id: 12,
    name: "Mini Cubic With Check Wrench",
    category: "Mini Tools",
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
  "monkey-hoist-model-ml-300": {
    id: 13,
    name: "Monkey Hoist Model ML-300",
    category: "Hoisting Equipment",
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
  "monkey-hoist-model-ml-500": {
    id: 14,
    name: "Monkey Hoist Model ML-500",
    category: "Hoisting Equipment",
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
  "ring-making-machine-model-cys-30": {
    id: 15,
    name: "Ring Making Machine Model CYS-30",
    category: "Ring Making Machine",
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
  "ring-making-machine-model-cys-90": {
    id: 16,
    name: "Ring Making Machine Model CYS-90",
    category: "Ring Making Machine",
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
  "sound-vibrator-model-cvs-60": {
    id: 17,
    name: "Sound Vibrator Model CVS 60",
    category: "Concrete Vibrator",
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
  "sound-vibrator-model-cvs-90": {
    id: 18,
    name: "Sound Vibrator Model CVS 90",
    category: "Concrete Vibrator",
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
  "testing-rammer-model-hcd-800": {
    id: 19,
    name: "Testing Rammer Model HCD 800",
    category: "Testing Equipment",
    price: 35000,
    images: [`${media}/04/Screed-Vibrator-Model-CVS-25C-1-.jpg`],
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
  "truss-screed-model-fm-400s": {
    id: 20,
    name: "Truss Screed Model FM-400S",
    category: "Truss Screed",
    price: 95000,
    images: [`${media}/04/Screed-Vibrator-Model-CVS-25C-1-.jpg`],
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
  "vst-shakti-group-cutter-with-diesel-engine": {
    id: 21,
    name: "VST Shakti Group Cutter With Diesel Engine",
    category: "Cutting Machine",
    price: 125000,
    images: [`${media}/04/VST-Shakti-Group-Cutter-With-Diesel-Engine-3.jpg`],
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
  "walk-behind-vibratory-roller-fvr600": {
    id: 22,
    name: "Walk Behind Vibratory Roller FVR600",
    category: "Vibratory Roller",
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
  "walk-behind-vibratory-roller-fvr600s": {
    id: 23,
    name: "Walk Behind Vibratory Roller FVR600S",
    category: "Vibratory Roller",
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
  "truss-screed-model-fm-400s-heavy-duty": {
    id: 24,
    name: "Truss Screed Model FM-400S Heavy Duty",
    category: "Truss Screed",
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
  "tamping-rammer-model-hcd-90": {
    id: 25,
    name: "Tamping Rammer Model HCD 90",
    category: "Tamping Rammer",
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
  "screed-vibrator-model-cvs-25c": {
    id: 26,
    name: "Screed Vibrator Model CVS 25C",
    category: "Screed Vibrator",
    price: 15000,
    images: [`${media}/04/Taming-Rammer-Model-1.jpg`],
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
};

// Helper function to format price
const formatPrice = (price: number): string => {
  return `₹${price.toLocaleString("en-IN")}.00`;
};

// Helper to find product by slug
function getProductBySlug(slug: string): ProductDetails | undefined {
  return productDatabase[slug];
}

// Helper to get related products
function getRelatedProducts(
  currentSlug: string,
  category: string,
  limit: number = 3,
): Array<{
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
}> {
  return Object.entries(productDatabase)
    .filter(
      ([slug, product]) =>
        product.category === category && slug !== currentSlug,
    )
    .slice(0, limit)
    .map(([slug, product]) => ({
      slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
    }));
}

export default function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-slate-900">
            Product not found
          </h1>
          <p className="text-slate-600 mb-6">
            The product you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/products">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold">
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(slug, product.category);
  const hasMultipleImages = product.images.length > 1;

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-yellow-600 transition-colors">
              Home
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <Link
              href="/products"
              className="hover:text-yellow-600 transition-colors"
            >
              Products
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <Link
              href={`/products?category=${product.category.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-yellow-600 transition-colors"
            >
              {product.category}
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-900 font-semibold truncate max-w-xs">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white border border-slate-200 rounded-lg overflow-hidden aspect-square">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-contain p-4"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <button
                type="button"
                className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-slate-200 p-2 rounded-lg hover:bg-white transition-colors shadow-sm"
                aria-label="Zoom image"
              >
                {/*<IconZoomIn className="w-5 h-5 text-slate-600" />*/}
              </button>
            </div>

            {/* Thumbnail Gallery */}
            {hasMultipleImages && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <Button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${selectedImage === idx
                        ? "border-yellow-400 ring-2 ring-yellow-400/20"
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
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-yellow-600">
                {formatPrice(product.price)}
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed">
              {product.description}
            </p>

            <div className="h-px bg-slate-200" />

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border-2 border-slate-200 rounded-lg bg-white w-fit">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(-1)}
                  className="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600 disabled:opacity-50"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <IconMinus className="w-4 h-4" />
                </button>
                <span className="px-4 py-3 font-bold text-slate-900 min-w-12 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => handleQuantityChange(1)}
                  className="px-4 py-3 hover:bg-slate-50 transition-colors text-slate-600"
                  aria-label="Increase quantity"
                >
                  <IconPlus className="w-4 h-4" />
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                className={`flex-1 sm:flex-none px-8 py-6 font-bold text-base transition-all ${addedToCart
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-yellow-400 hover:bg-yellow-500 text-slate-900"
                  }`}
              >
                {addedToCart ? "✓ Added to Cart" : "Add to Cart"}
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 gap-2">
                <IconPhone className="w-5 h-5" />
                Get a Quote
              </Button>
              <div className="flex gap-2">
                {[
                  {
                    icon: IconBrandFacebook,
                    color: "text-blue-600",
                    label: "Share on Facebook",
                  },
                  {
                    icon: IconBrandTwitter,
                    color: "text-sky-500",
                    label: "Share on Twitter",
                  },
                  {
                    icon: IconMessage,
                    color: "text-green-500",
                    label: "Share on WhatsApp",
                  },
                  {
                    icon: IconBrandYoutube,
                    color: "text-red-600",
                    label: "View on YouTube",
                  },
                ].map(({ icon: Icon, color, label }, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="icon"
                    className="w-12 h-12 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                    aria-label={label}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                  </Button>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 pt-4">
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> In Stock
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> Free Shipping
              </span>
              <span className="flex items-center gap-1">
                <span className="text-green-500">✓</span> 1 Year Warranty
              </span>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-yellow-400 w-fit">
            Technical Specifications
          </h2>
          <div className="bg-slate-50 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {Object.entries(product.specifications).map(
                ([key, value], idx, arr) => (
                  <div
                    key={key}
                    className={`flex justify-between py-3 ${idx !== arr.length - 1 ? "border-b border-slate-200" : ""
                      }`}
                  >
                    <span className="font-semibold text-slate-700">{key}</span>
                    <span className="text-slate-600 text-right">{value}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link
                  key={relProduct.slug}
                  href={`/product/${relProduct.slug}`}
                  className="group"
                >
                  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="relative h-56 bg-slate-100">
                      <Image
                        src={relProduct.image}
                        alt={relProduct.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                        {relProduct.category}
                      </span>
                      <h3 className="font-bold text-slate-900 mt-1 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {relProduct.name}
                      </h3>
                      <p className="text-yellow-600 font-bold text-lg mb-4">
                        {formatPrice(relProduct.price)}
                      </p>
                      <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
