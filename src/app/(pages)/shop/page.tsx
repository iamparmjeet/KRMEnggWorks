"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconSearch } from "tabler-icons";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import { media } from "@/constants/data";
import { slugify } from "@/lib/slugify";

type ProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const products: ProductType[] = [
    {
      id: 1,
      name: "Bar Cutting Machine Model-GQ 40",
      price: 54000,
      category: "bar-cutting-machine",
      image: `${media}/03/Bar-Cutting-Machine.jpg`,
    },
    {
      id: 2,
      name: "Bar Cutting Machine Model-GQ 52",
      price: 1200,
      category: "bar-cutting",
      image: `${media}/03/Bar_Cutting_Machines-GQ52-1.jpg`,
    },
    {
      id: 3,
      name: "Concrete Bucket",
      price: 3400,
      category: "concrete-bucket",
      image: `${media}/03/Concrete-Bucket.jpg`,
    },
    {
      id: 4,
      name: "Concrete Mixers",
      price: 1500,
      category: "concrete",
      image: `${media}/04/Concrete-Mixture-without-Hopper-1.jpg`,
    },
    {
      id: 5,
      name: "Concrete Mixers-Mini Building Pump Model DU 50",
      price: 1500,
      category: "concrete",
      image: `${media}/04/Concrete-Mixture-Mini-Batching-Plant-1v1.jpg`,
    },
    {
      id: 6,
      name: "Double Beam Screed Board Ultimate",
      price: 1500,
      category: "vibratory",
      image: `${media}/03/Double-Beam-Screed-Board-Vibrator-1.jpg`,
    },
    {
      id: 7,
      name: "Situs Through Vibratory Roller Model PYJ-1000",
      price: 1500,
      category: "vibratory",
      image: `${media}/04/Walk-Behind-Vibratory-Roller-FVR1200.jpg`,
    },
    {
      id: 8,
      name: "Situs Through Vibratory Roller Model PYJ-830",
      price: 1500,
      category: "vibratory",
      image: `${media}/04/Walk-Behind-Vibratory-Roller-FVR850.jpg`,
    },
    {
      id: 9,
      name: "Hand Trenails Model Ball Float",
      price: 1500,
      category: "hand-tools",
      image: `${media}/04/Hand-Screeds-Bull-Float.jpg`,
    },
    {
      id: 10,
      name: "Hand Trenails Model Check Rod",
      price: 1500,
      category: "hand-tools",
      image: `${media}/04/Hand-Screeds-Bump-Cutter.jpg`,
    },
    {
      id: 11,
      name: "Delson Power Trowel Model PAJ-100d",
      price: 1500,
      category: "power-trowel",
      image: `${media}/04/Hand-Screeds-Check-Rod.jpg`,
    },
    {
      id: 12,
      name: "Mini Cubic With Check Wrench",
      price: 1500,
      category: "mini-tools",
      image: `${media}/03/Power-Floater.jpg`,
    },
    {
      id: 13,
      name: "Monkey Hoist Model ML-300",
      price: 1500,
      category: "hoisting",
      image: `${media}/03/Indian-Power-Trowel-1.jpg`,
    },
    {
      id: 14,
      name: "Monkey Hoist Model ML-500",
      price: 1500,
      category: "hoisting",
      image: `${media}/04/Mini-Crane-With-Clutch-Winch-1.jpg`,
    },
    {
      id: 15,
      name: "Ring Making Machine Model CYS-30",
      price: 1500,
      category: "ring-making",
      image: `${media}/04/Monkey-Hoist-1.jpg`,
    },
    {
      id: 16,
      name: "Ring Making Machine Model CYS-90",
      price: 1500,
      category: "ring-making",
      image: `${media}/04/Monkey-Hoist-1.jpg`,
    },
    {
      id: 17,
      name: "Sound Vibrator Model CVS 60",
      price: 1500,
      category: "vibrator",
      image: `${media}/04/Ring-Making-Machine-2.jpg`,
    },
    {
      id: 18,
      name: "Sound Vibrator Model CVS 90",
      price: 1500,
      category: "vibrator",
      image: `${media}/04/Ring-Making-Machine-3.jpg`,
    },
    {
      id: 19,
      name: "Testing Rammer Model HCD 800",
      price: 1500,
      category: "testing",
      image: `${media}/04/Screed-Vibrator-Model-CVS-25C-1-.jpg`,
    },
    {
      id: 20,
      name: "Truss Screed Model FM-400S",
      price: 1500,
      category: "screed",
      image: `${media}/04/Screed-Vibrator-Model-CVS-25C-1-.jpg`,
    },
    {
      id: 21,
      name: "Truss Screed Model FM-400S",
      price: 1500,
      category: "screed",
      image: `${media}/04/Taming-Rammer-Model-1.jpg`,
    },
    {
      id: 22,
      name: "Truss Screed Model FM-400S",
      price: 1500,
      category: "screed",
      image: `${media}/04/Taming-Rammer-Model-1.jpg`,
    },
    {
      id: 23,
      name: "Truss Screed Model FM-400S",
      price: 1500,
      category: "screed",
      image: `${media}/04/Truss-Screed-2.jpg`,
    },
    {
      id: 24,
      name: "Truss Screed Model FM-400S",
      price: 1500,
      category: "screed",
      image: `${media}/04/VST-Shakti-Group-Cutter-With-Diesel-Engine-3.jpg`,
    },
    {
      id: 25,
      name: "Truss Screed Model FM-400S",
      price: 1500,
      category: "screed",
      image: `${media}/04/Walk-Behind-Vibratory-Roller-FVR600.jpg`,
    },
    {
      id: 26,
      name: "Truss Screed Model FM-400S",
      price: 1500,
      category: "screed",
      image: `${media}/04/Walk-Behind-Vibratory-Roller-FVR600s.jpg`,
    },
  ];

  const categories = [
    {
      name: "Bar Cutting Machine",
      id: "bar-cutting",
      subcategories: ["Model DU 50", "Model DU 30"],
    },
    {
      name: "Concrete Buckets",
      id: "concrete",
      subcategories: ["Bucket 500", "Bucket 750"],
    },
    {
      name: "Concrete Mixers",
      id: "concrete-mixer",
      subcategories: ["Mixer 200L", "Mixer 300L"],
    },
    {
      name: "Concrete Mixer-Mini Building Pump Model",
      id: "concrete-pump",
      subcategories: [],
    },
    {
      name: "Double Beam Screed Board",
      id: "screed-board",
      subcategories: [],
    },
    {
      name: "Double Beam Screed Machine",
      id: "screed-machine",
      subcategories: ["Mechanical Support Oil", "Vibratory Block Wireless"],
    },
    {
      name: "Delson Power Trowel",
      id: "power-trowel",
      subcategories: [],
    },
    {
      name: "Mechanical Support Oil",
      id: "mechanical",
      subcategories: [],
    },
    {
      name: "Situs Through Vibratory Roller Machine",
      id: "vibratory",
      subcategories: ["Model PYJ-1000", "Model PYJ-830"],
    },
    {
      name: "Vibratory Roller (Hand)",
      id: "hand-vibratory",
      subcategories: [],
    },
    { name: "Power Floaters", id: "floaters", subcategories: [] },
    { name: "Hydraulic Pumps", id: "hydraulic", subcategories: [] },
    {
      name: "Hand Trenails",
      id: "hand-tools",
      subcategories: ["Model Ball", "Model Check Rod"],
    },
    { name: "Lift Testing Equipment", id: "lift", subcategories: [] },
    {
      name: "Manual Batch Mixer",
      id: "batch-mixer",
      subcategories: [],
    },
    {
      name: "Modular Hoist (Hand)",
      id: "modular",
      subcategories: [],
    },
    { name: "Power Floaters", id: "power-float", subcategories: [] },
    { name: "Power Trowel", id: "trowel", subcategories: [] },
    { name: "Ride on Rollers", id: "ride-on", subcategories: [] },
    { name: "Rigger Machine", id: "rigger", subcategories: [] },
    {
      name: "Ring Making Machine",
      id: "ring-making",
      subcategories: [],
    },
    {
      name: "Road Screed Model Ramp Cutter",
      id: "screed-cutter",
      subcategories: [],
    },
    { name: "Screed Machine", id: "screed", subcategories: [] },
    { name: "Sound Vibrator", id: "vibrator", subcategories: [] },
    { name: "Stud Cutter", id: "stud", subcategories: [] },
    {
      name: "Tandem Vibratory Roller",
      id: "tandem-vibratory",
      subcategories: [],
    },
    { name: "Testing Rammer", id: "testing", subcategories: [] },
    {
      name: "Truss Screed Model FM-400S",
      id: "truss-screed",
      subcategories: [],
    },
    {
      name: "Vibrator Compactor",
      id: "vibrator-compactor",
      subcategories: [],
    },
    {
      name: "Vibrator Roller",
      id: "vibrator-roller",
      subcategories: [],
    },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-12 bg-slate-950 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Shop</h1>
          <p className="text-yellow-400 font-semibold">
            Explore All Our Products Range
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Sort Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
            <div className="flex w-full md:w-auto border border-black ">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 h-13 flex-1 md:flex-none text-slate-900 placeholder-slate-500 outline-none cursor-pointer"
              />
              <Button
                type="button"
                variant="link"
                className="hover:bg-blue hover:text-white bg-yellow text-blue w-fit h-full size-14 font-bold px-4 py-2"
              >
                <IconSearch className="size-5" />
              </Button>
            </div>
            <div className="flex flex-row justify-between w-full items-center">
              <div className="flex items-start gap-2 text-black font-cambo text-lg">
                <span>
                  Showing 1-{Math.min(filteredProducts.length, 20)} of{" "}
                  {filteredProducts.length} results
                </span>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-black text-black bg-white"
              >
                <option value="default">Default sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          {/* Products Grid with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 bg-white">
              <h3 className="font-medium mb-4 text-2xl">Product categories</h3>
              <div className="space-y-1 font-cambo">
                {categories.map((category) => (
                  <ul key={category.id}>
                    <Link
                      href={`/products?category=${category.id}`}
                      className="text-primary hover:underline block text-lg"
                    >
                      {category.name} ({category.subcategories.length})
                    </Link>

                    {category.subcategories.length > 0 && (
                      <li className="ml-4 space-y-1 mt-1">
                        {category.subcategories.map((sub) => (
                          <Link
                            key={sub}
                            href={`/products?category=${category.id}&sub=${sub}`}
                            className="text-primary hover:underline block py-0.5"
                          >
                            {sub}
                          </Link>
                        ))}
                      </li>
                    )}
                  </ul>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const slug = slugify(product.name);
                  return (
                    <Link
                      key={product.id}
                      href={`/product/${slug}`}
                      className="block"
                    >
                      <ProductCard product={product} />
                    </Link>
                  );
                })}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-8">
                <Button className="w-8 h-8 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold rounded">
                  1
                </Button>
                <Button className="w-8 h-8 border border-slate-300 text-slate-900 font-bold rounded hover:bg-slate-100">
                  2
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="h-full overflow-hidden hover:shadow-sm transition-shadow cursor-pointer border border-accent rounded-none p-2 flex flex-col justify-between items-start">
      <div className="min-h-75 relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          className="bg-center object-cover"
          width={300}
          height={300}
        />
        <Separator className="bg-black" />
        <h3 className="font-semibold text-primary text-lg mb-2 line-clamp-2">
          {product.name}
        </h3>
        <span className="text-accent font-medium text-lg">
          ₹{product.price.toLocaleString()}
        </span>
      </div>
      <Button
        className="bg-yellow font-cambo text-lg font-semibold hover:bg-black hover:text-white py-2 h-auto w-auto"
        onClick={(e) => {
          e.preventDefault();
          // Add to cart logic here
        }}
      >
        Add to cart
      </Button>
    </div>
  );
}
