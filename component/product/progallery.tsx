"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaExclamationTriangle, FaHandPointRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Buttonmain from "../global/button";
import type { Product } from "@/lib/types";

// Apne computer par test karte waqt localhost wale URL ke liye optimizer band
const isLocal = (src: string) => src.startsWith("http://localhost");

export default function ProductGallery({ data }: { data?: Product }) {
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Khali ya galat entries hata do
  const imgs = React.useMemo(
    () =>
      (data?.imgs ?? []).filter(
        (s): s is string => typeof s === "string" && s.trim() !== ""
      ),
    [data?.imgs]
  );
  const precautions = React.useMemo(
    () =>
      (data?.precaution ?? []).filter(
        (s): s is string => typeof s === "string" && s.trim() !== ""
      ),
    [data?.precaution]
  );

  if (!data) return null;

  // Selected image list mein na ho (jaise product badal gaya) to pehli image dikhao
  const mainImg = selectedImg && imgs.includes(selectedImg) ? selectedImg : imgs[0];

  const scroll = (direction: "left" | "right") => {
    scrollContainerRef.current?.scrollBy({
      left: direction === "left" ? -200 : 200, // ek click par kitne pixel
      behavior: "smooth",
    });
  };

  return (
    <main className=" bg-white text-zinc-900 sm:p-10 p-4 md:p-14">
      <div className="max-w-8xl mx-auto flex  flex-wrap justify-between gap-y-7">
        {/* --- Left Column: Image Gallery --- */}
        <div className="space-y-6 md:w-[40%] w-full">
          {/* Main Product Image Container */}
          <div className="bg-radial to-zinc-200 group via-zinc-50 from-white p-6 rounded-3xl shadow-inner border border-zinc-200 aspect-square flex items-center overflow-hidden justify-center">
            {mainImg ? (
              <Image
                src={mainImg}
                alt={data.title}
                width={500}
                height={500}
                className="object-contain mix-blend-multiply group-hover:scale-110 duration-300"
                priority
                unoptimized={isLocal(mainImg)}
              />
            ) : (
              <span className="text-zinc-400 text-sm">No image available</span>
            )}
          </div>

          {/* Thumbnails: sirf tab jab 1 se zyada image ho */}
          {imgs.length > 1 && (
            <div className="relative group/thumbnails max-w-full">
              {/* Left Scroll Button */}
              <button
                type="button"
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 bg-white/90 hover:bg-white text-zinc-700 p-2 rounded-full shadow-md border border-zinc-200 transition-all opacity-0 group-hover/thumbnails:opacity-100 disabled:opacity-0"
                aria-label="Scroll left"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>

              {/* Thumbnails Container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-5 overflow-x-auto py-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
              >
                {imgs.map((src, index) => (
                  <button
                    key={src}
                    onClick={() => setSelectedImg(src)}
                    className={`bg-zinc-100 rounded-xl p-2 border-2 transition-all duration-200 hover:border-blue-300 aspect-square flex items-center min-w-16 md:min-w-24 justify-center shrink-0 ${
                      mainImg === src ? "border-blue-300" : "border-zinc-200"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${data.title} view ${index + 1}`}
                      width={100}
                      height={100}
                      className="object-contain opacity-100"
                      unoptimized={isLocal(src)}
                    />
                  </button>
                ))}
              </div>

              {/* Right Scroll Button */}
              <button
                type="button"
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 bg-white/90 hover:bg-white text-zinc-700 p-2 rounded-full shadow-md border border-zinc-200 transition-all opacity-0 group-hover/thumbnails:opacity-100 disabled:opacity-0"
                aria-label="Scroll right"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* --- Right Column: Product Details --- */}
        <div className="flex flex-col space-y-4 md:w-[55%] w-full">
          {/* Category Tagline with Yellow Border Line */}
          {data.category && (
            <div className="flex items-center gap-2 text-zinc-600 text-sm font-medium tracking-wide">
              <div className="w-1 h-5 bg-yellow-400 rounded-full"></div>
              {data.category}
            </div>
          )}

          {/* Product Title */}
          <h1 className="text-4xl md:text-5xl font-bold capitalize text-blue-900 tracking-tight leading-tight">
            {data.title}
          </h1>

          {/* Rating Stars & Review Count */}
          <div className="flex items-center gap-3 text-zinc-600 text-sm">
            <div className="flex items-center gap-1 text-yellow-500">
              <span className="font-semibold text-zinc-800 text-base">4.9</span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-yellow-300" />
            </div>
            <span>{data.id + 306} Reviews</span>
          </div>

          {/* Short Description */}
          {data.description?.trim() && (
            <p className="text-zinc-800 max-w-xl leading-relaxed">{data.description}</p>
          )}

          {/* Storage & Precautions: sirf tab jab kuch likha ho */}
          {precautions.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="font-semibold text-zinc-800 text-lg flex md:text-xl">
                <FaExclamationTriangle className="text-red-500 mt-1 mr-2" />
                Storage & Precautions
              </h3>
              <div className="space-y-3">
                {precautions.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 ">
                    <div className="mt-1 text-yellow-600">
                      <FaHandPointRight size={18} />
                    </div>
                    <p className="text-gray-600 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Download buttons: jis PDF ka link hai wahi button dikhega */}
          {(data.tds || data.msds) && (
            <div className="flex flex-wrap md:gap-8 gap-3 mt-4 mb-6">
              {data.tds && (
                <Buttonmain text="Download TDS" href={data.tds} variant="primary" />
              )}
              {data.msds && (
                <Buttonmain text="Download MSDS" href={data.msds} variant="secondary" />
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}