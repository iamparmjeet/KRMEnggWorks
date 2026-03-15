import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconChevronsRight,
} from "tabler-icons";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { media, productCardBg } from "@/constants/data";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSec />
      {/* Why We Are Different Section */}
      <DifferentSection />
      {/* What We Provide Section */}
      <ProvideSection />
      {/* Best Selling Products Section */}
      <BestSellingSec />
      {/* Contact CTA Section */}
      <CTASec />
    </div>
  );
}

function HeroSec() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={`${media}/03/pattren-4-min.png`}
          width={1200}
          height={700}
          alt="Hero-bg"
          className="bg-center bg-cover w-full"
          preload
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-white tracking-wide">
              KRM Engineering Works
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
              One-Stop Shop for Building & Construction Machine Manufacturer and
              Engineering Excellence
            </h1>
            <p className="text-lg text-white">
              Trusted solution for all your machinery needs
            </p>
            <Link href="/contact">
              <Button className="bg-yellow hover:bg-transparent text-blue font-bold px-6 py-3 min-h-14 text-xl font-cambo border border-yellow hover:text-white">
                Go To Shop
                <IconChevronsRight />
              </Button>
            </Link>
          </div>

          {/* Right Column - Product Grid */}
          <div className="grid grid-cols-2 gap-8 h-full">
            <Image
              src={`${media}/06/Hero-Images-1.jpg`}
              width={500}
              height={500}
              alt="Hero-Product-1"
              className="bg-center bg-cover w-full shadow-md"
              preload
            />
            <Image
              src={`${media}/06/Hero-Images-2.jpg`}
              width={500}
              height={500}
              alt="Hero-Product-2"
              className="bg-center bg-cover w-full shadow-md"
              preload
            />
            <Image
              src={`${media}/06/Hero-Images-3.jpg`}
              width={500}
              height={500}
              alt="Hero-Product-3"
              className="bg-center bg-cover w-full shadow-md"
              preload
            />
            <Image
              src={`${media}/06/Hero-Images-4.jpg`}
              width={500}
              height={500}
              alt="Hero-Product-4"
              className="bg-center bg-cover w-full shadow-md"
              preload
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Second Second
function DifferentSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*Heading*/}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image
              src={`${media}/03/wheel.png`}
              width={72}
              height={50}
              alt="Wheel"
            />
          </div>
          <h3 className="text-xl font-semibold text-accent mb-2">
            Focused And Future Ready
          </h3>
          <h2 className="text-3xl md:w-3xl  mx-auto md:text-4xl font-bold text-center text-primary mb-2">
            Right People to Deliver Unique Construction Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-start">
          {/* Left Column - Text */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Bringing Decades of Expertise to Your Building & Engineering
              Projects
            </h3>
            <p className="text-base font-medium text-black mb-4 leading-relaxed">
              KRM Engineering Works, established in 2010, is a trusted industry
              leader in providing innovative and cost-effective machinery
              solutions for various construction and manufacturing sectors. We
              have a wide array of products in our portfolio, making us the
              go-to choice for construction, demolition, and infrastructure
              projects.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Crafting the Future of Manufacturing, Building, Engineering, and
              Innovation Together
            </h3>
            <p className="text-base font-medium text-black mb-4 leading-relaxed">
              We strive to be at the forefront of machinery innovation. Our team
              of skilled engineers works with the newest technology to create
              solutions that are not only reliable but also
              environment-friendly. We take pride in our commitment to quality
              and continuous improvement, ensuring that our products meet the
              highest industry standards.
            </p>

            <Link href="/about">
              <Button className="bg-yellow hover:bg-primary text-blue font-bold px-6 py-3 min-h-14 text-xl font-cambo border-2 border-primary hover:text-white">
                Read more
                <IconChevronsRight />
              </Button>
            </Link>
          </div>

          {/* Right Column - Image */}
          <Image
            src={`${media}/03/buildingMachine1.jpg`}
            width={654}
            height={436}
            alt="Hero-Product-1"
            className="bg-center bg-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}

//third
function ProvideSection() {
  const allProducts = [
    {
      id: 1,
      name: "Bar Cutting Machines",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Bar-Cutting-Machine.jpg`,
      link: "/product-category/bar-cutting-machine/",
    },
    {
      id: 2,
      name: "Concrete Bucket",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Concrete-Bucket.jpg`,
      link: "/product-category/concrete-bucket/",
    },
    {
      id: 3,
      name: "Lab Testing Equipment Machine",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Cube-Testing-Machine-manual.jpg`,
      link: "/product-category/lab-testing-equipment-machine/",
    },
    {
      id: 4,
      name: "Power Floatter",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Power-Floater.jpg`,
      link: "/product-category/power-floater/",
    },
    {
      id: 5,
      name: "Power Trowel",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Power-Trowel.jpg`,
      link: "/product-category/power-trowel/",
    },
    {
      id: 6,
      name: "Ride on Rollers",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Ride-on-Rollers.jpg`,
      link: "/product-category/ride-on-rollers/",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*Heading*/}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Image
              src={`${media}/03/wheel.png`}
              width={72}
              height={50}
              alt="Wheel"
            />
          </div>
          <h3 className="text-2xl font-semibold text-accent mb-2">
            What We Provide
          </h3>
          <h2 className="text-3xl md:w-3xl  mx-auto md:text-4xl font-bold text-center text-primary mb-2">
            Exclusive Products Range
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {allProducts.map((product) => (
            <Link key={product.id} href={product.link}>
              <div className="relative group border border-black rounded-none overflow-hidden h-full px-8 py-10  hover:bg-yellow transition-colors">
                <Image
                  src={productCardBg}
                  width={80}
                  height={160}
                  alt="bg-image"
                  className="hidden absolute group-hover:flex right-0 top-40 z-0 pointer-events-none transition-all"
                />
                <h4 className="text-2xl font-semibold text-primary mb-4">
                  {product.name}
                </h4>
                <Image
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.name}
                  className="z-10 overflow-hidden relative"
                />
                <p className="text-accent text-lg font-medium my-5">
                  {product.description}
                </p>
                <IconArrowUpRight className="bg-accent size-11 text-white rounded-md" />
              </div>
            </Link>
          ))}
        </div>

        <Link href="/products">
          <button
            type="button"
            className="flex items-center text-primary font-cambo text-2xl font-semibold no-underline mx-auto cursor-pointer"
          >
            View All Products{" "}
            <span className="flex items-center justify-center ml-2">
              <IconChevronsRight className="bg-yellow rounded-full size-9" />
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
}

// Fourth
function BestSellingSec() {
  const sellingProducts = [
    {
      id: 1,
      name: "Bar Cutting Machines",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Bar-Cutting-Machine.jpg`,
      link: "/product-category/bar-cutting-machine/",
    },
    {
      id: 2,
      name: "Concrete Bucket",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Concrete-Bucket.jpg`,
      link: "/product-category/concrete-bucket/",
    },
    {
      id: 3,
      name: "Lab Testing Equipment Machine",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Cube-Testing-Machine-manual.jpg`,
      link: "/product-category/lab-testing-equipment-machine/",
    },
    {
      id: 4,
      name: "Power Floatter",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Power-Floater.jpg`,
      link: "/product-category/power-floater/",
    },
    {
      id: 5,
      name: "Power Trowel",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Power-Trowel.jpg`,
      link: "/product-category/power-trowel/",
    },
    {
      id: 6,
      name: "Ride on Rollers",
      description: "Designing and Building The Most useful Machines.",
      image: `${media}/03/Ride-on-Rollers.jpg`,
      link: "/product-category/ride-on-rollers/",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Best Selling Products
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {sellingProducts.map((product) => (
              <CarouselItem key={product.id} className="basis-1/2 lg:basis-1/3">
                <div className="bg-white text-primary">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={215}
                    height={215}
                  />
                  <hr />
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <Link href={product.link}>
                      <Button className="bg-yellow hover:bg-primary hover:text-white">
                        Read more
                        <IconChevronsRight />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="text-center mt-14">
        <Link href="/products">
          <Button className="bg-yellow text-primary text-lg font-bold py-7 px-8">
            View more <IconArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

// Fifth
function CTASec() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Get In Touch With Us.
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            We are Happy To Help.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/*left*/}
          <Image
            src={`${media}/03/map.png`}
            width={600}
            height={400}
            alt="map"
            className="bg-center w-full"
            preload
          />
          {/*right*/}
          <div className="max-w-md mx-auto border border-primary rounded-none p-8 space-y-6">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Customer Satisfaction
            </h3>
            <p className="text-accent text-base font-medium leading-relaxed">
              Happy customers are a valuable asset for us and we understand the
              importance of timely delivery and quality of equipment.
            </p>
            <div className="space-y-4">
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold">
                Call Us +91 8604D 07664
              </Button>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
