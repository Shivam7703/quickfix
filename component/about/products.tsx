import React from 'react';
import { FaLink, FaArrowRight } from 'react-icons/fa';
import Buttonmain from '../global/button';

const products = [
  {
    title: "Instant Super Glue",
    description: "Perfect for quick repairs on plastic, rubber, metal, ceramic, wood, leather, and more. Fast curing with a powerful, long-lasting bond.",
  },
  {
    title: "Epoxy Adhesive",
    description: "A two-part adhesive engineered for heavy-duty repairs, offering exceptional strength and resistance to impact, moisture, and heat.",
  },
  {
    title: "PVC & Pipe Adhesive",
    description: "Specially formulated for PVC pipes and fittings, delivering leak-proof joints with reliable performance for plumbing applications.",
  },
  {
    title: "Wood & Furniture Glue",
    description: "Provides strong, clean, and durable bonds for woodworking, furniture assembly, laminates, and DIY craft projects.",
  },
];

export default function AboutProducts() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

        {/* Left Side: Heading, Subtitle & CTA Button */}
        <div className="lg:col-span-4 space-y-5">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-700 tracking-tight">
              OUR PRODUCTS
            </h2>
            <div className="w-24 h-1 bg-blue-600 mt-3 rounded-full"></div>
          </div>

          <p className="text-zinc-600 text-base md:text-lg font-medium">
            Adhesive Solutions for Every Need
          </p>

          <Buttonmain href="/about-us" text="Our Products" variant="primary" />

        </div>

        {/* Right Side: 2x2 Grid Product Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {products.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-5 bg-[#f1f3f9] border border-transparent rounded-2xl transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:bg-white cursor-pointer"
            >
              {/* Circular Icon Container */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#243c9b] flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
                <FaLink className="text-white text-sm" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-zinc-900 tracking-tight transition-colors duration-300 group-hover:text-blue-600">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}