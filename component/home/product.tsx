"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { Productdata } from "@/data/productdata";
import { createSlug } from "@/app/products/[slug]/page";



// Interface for full product data matching your schema
export interface ProductItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imgs: (string | StaticImageData)[];
  // rating?: number;
  // sizes?: {
  //   heading: string[];
  //   rows: string[][];
  // };
  // usage?: string[];
  // benefits?: string[];
  // precaution?: string[];
  // price?: {
  //   heading: string[];
  //   rows: string[][];
  // };
}

// 1. Category list extracted directly from navigation subnav
export const CATEGORIES = [
  "All",
  "All Purpose Adhesive",
  "Cyanoacrylate",
  "Fragrant Gum",
  "White Adhesive",
  "Rubber Based Adhesive",
  "Epoxy Putty",
  "Epoxy",
  "Thread Sealant",
  "PVC Electrical Tape",
  "Solvent Cements",
  "Ball Valve",
  "Drain Cleaner",
  "Wood Adhesive",
  "Binder",
  "NC Thinner",
  "Paint Stripper",
  "Tile Cleaner",
] as const;


export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Filter products by selected category
  const filteredProducts =
    activeCategory === "All"
      ? Productdata
      : Productdata.filter((item) => item.category === activeCategory);

  return (
    <section className="w-full md:p-16 lg:px-24 px-4 py-7 bg-white text-center overflow-hidden">
      <div className="max-w-7xl mx-auto md:px-6">
        {/* TOP BRAND HEADER TITLE */}
        <div className="flex flex-col items-center space-y-4 mb-8 sm:mb-12">
          <div className="bg-blue-50/70 border border-blue-100 px-6 py-1 rounded-full">
            <span className="text-xs md:text-sm font-semibold text-blue-700 tracking-wide">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight max-w-2xl leading-tight">
            Instant Bonding Solutions For <span className="text-blue-600">Every Repair Need</span>
          </h2>
        </div>

        {/* CATEGORY TABS PILLS SYSTEM */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 sm:mb-14 mb-8 no-scrollbar max-w-full px-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-white border-zinc-200 text-zinc-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* RESPONSIVE DYNAMIC CARDS GRID LAYOUT */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const productSlug = createSlug(product.title);
              const rating = 5.0;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.id}
                  className="flex flex-col text-left group"
                >
                  {/* Card Image Container */}
                  <Link
                    href={`/products/${productSlug}`}
                    className="w-full aspect-square bg-[#eaeaea] rounded-2xl p-6 flex items-center justify-center relative overflow-hidden mb-4 select-none block"
                  >
                    <Image
                      src={product.imgs[0]}
                      alt={product.title}
                      className="object-contain max-h-[85%] transform group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      priority={product.id <= 4}
                    />
                  </Link>

                  {/* Product Information Details */}
                  <div className="space-y-1 px-1 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-blue-600">
                        {product.category}
                      </span>
                      <h3 className="text-sm md:text-base font-bold text-blue-900 group-hover:text-blue-600 transition-colors tracking-tight line-clamp-1 capitalize">
                        {product.title}
                      </h3>
                      <p className="text-zinc-500 text-xs md:text-sm font-normal line-clamp-2 mt-0.5">
                        {product.description}
                      </p>
                    </div>

                    {/* Action Trigger Footer Segment */}
                    <div className="flex items-center flex-wrap-reverse justify-between gap-2 pt-3">
                      {/* Learn More Link bound to product.title slug */}
                      <Link
                        href={`/products/${productSlug}`}
                        className="bg-blue-700 hover:bg-blue-800 text-white text-[11px] md:text-xs font-semibold px-3.5 py-1.5 rounded-lg inline-flex items-center gap-1.5 transition-colors group/btn"
                      >
                        <span>Learn More</span>
                        <FiArrowRight
                          size={12}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </Link>

                      {/* Ratings Block */}
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-zinc-900">
                          {rating.toFixed(1)}
                        </span>
                        <div className="flex items-center text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} size={11} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}