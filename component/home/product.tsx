"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper CSS Imports
import "swiper/css";
import "swiper/css/navigation";

import { Productdata } from "@/data/productdata";
import { createSlug } from "@/app/products/[slug]/page";

// Interface for full product data
export interface ProductItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imgs: (string | StaticImageData)[];
}

// Category list extracted directly from navigation subnav
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

// =======================================================
// 1. SEPARATE PRODUCT CARD FUNCTION COMPONENT
// =======================================================
interface ProductCardProps {
  product: ProductItem;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const productSlug = createSlug(product.title);
  const rating = 5.0;

  return (
    <div className="w-full flex flex-col text-left group bg-white rounded-2xl p-3 border border-zinc-300 hover:shadow-xl transition-all duration-300 select-none h-full my-2">
      {/* Card Image Container */}
      <Link
        href={`/products/${productSlug}`}
        className="w-full aspect-square bg-[#eaeaea] rounded-xl p-6 flex items-center justify-center relative overflow-hidden mb-4 "
      >
        <Image
          src={product.imgs[0]}
          alt={product.title}
          width={280}
          height={280}
          className="object-contain max-h-[85%] transform group-hover:scale-108 transition-transform duration-500"
          sizes="(max-width: 768px) 260px, 300px"
          priority={priority}
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
        <div className="flex items-center flex-wrap-reverse justify-between gap-2 pt-3 border-t border-zinc-100/80 mt-2">
          {/* Learn More Link */}
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
    </div>
  );
}

// =======================================================
// 2. MAIN PRODUCT SECTION WITH SWIPER
// =======================================================
export default function ProductSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const uniqueId = "product-section-slider";

  // Filter products by selected category
  const filteredProducts =
    activeCategory === "All"
      ? Productdata
      : Productdata.filter((item) => item.category === activeCategory);

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  navigation: {
    nextEl: `.${uniqueId}-next`,
    prevEl: `.${uniqueId}-prev`,
  },
  breakpoints: {
    468: {
      slidesPerView: 2,
    },
    824: {
      slidesPerView: 3,
    },
    1080: {
      slidesPerView: 4,
    },
  },
  modules: [Autoplay, Navigation],
};

  return (
    <section className="w-full md:p-16 lg:px-20 py-7 bg-white text-center overflow-hidden">
      <div className="max-w-7xl relative mx-auto px-6">

        {/* TOP BRAND HEADER TITLE */}
        <div className="flex flex-col items-center space-y-4 mb-8 sm:mb-10">
          <div className="bg-blue-50/70 border border-blue-100 px-6 py-1 rounded-full">
            <span className="text-xs md:text-sm font-semibold text-blue-700 tracking-wide">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight max-w-2xl leading-tight">
            Instant Bonding Solutions For <span className="text-yellow-500">Every Repair Need</span>
          </h2>
        </div>

        {/* CATEGORY TABS SYSTEM */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-6 sm:mb-8 w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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

        {/* PRODUCTS SWIPER CONTAINER */}
        <div className=" max-sm:px-8">

          {/* DESKTOP LEFT ARROW (Card Section Ke Left Floating Side) */}
          <button
            className={`${uniqueId}-prev hidden md:flex absolute -left-3 lg:-left-6 top-2/3 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-zinc-200 bg-white/95 backdrop-blur-md text-zinc-700 shadow-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed`}
            aria-label="Previous slide"
          >
            <FiChevronLeft size={22} />
          </button>

          {/* SWIPER CAROUSEL */}
          <Swiper
            key={activeCategory} // Reset Swiper state when category changes
            {...swiperOptions}
            className="w-full py-2"
          >
            {filteredProducts.map((product, index) => (
              <SwiperSlide key={index} className=" py-1">
                <ProductCard product={product} priority={index < 4} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* DESKTOP RIGHT ARROW (Card Section Ke Right Floating Side) */}
          <button
            className={`${uniqueId}-next hidden md:flex absolute -right-3 lg:-right-6 top-2/3 -translate-y-1/2 z-30 w-11 h-11 rounded-full border border-zinc-200 bg-white/95 backdrop-blur-md text-zinc-700 shadow-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed`}
            aria-label="Next slide"
          >
            <FiChevronRight size={22} />
          </button>

        </div>

        {/* MOBILE NAVIGATION CONTROLS (Neeche Center Me) */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            className={`${uniqueId}-prev w-11 h-11 rounded-full border border-zinc-200 bg-white shadow-md text-zinc-700 active:scale-95 active:bg-blue-600 active:text-white flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-30`}
            aria-label="Previous slide mobile"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            className={`${uniqueId}-next w-11 h-11 rounded-full border border-zinc-200 bg-white shadow-md text-zinc-700 active:scale-95 active:bg-blue-600 active:text-white flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-30`}
            aria-label="Next slide mobile"
          >
            <FiChevronRight size={22} />
          </button>
        </div>

      </div>
    </section>
  );
}