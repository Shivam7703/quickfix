"use client"; 

import React from "react";
import Image from "next/image";

import { FaStar,  FaExclamationTriangle, FaHandPointRight } from "react-icons/fa";
import Buttonmain from "../global/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


export default function ProductGallery({ data }: any) {

  const [mainImageSrc, setMainImageSrc] = React.useState(data?.imgs[0]);
  
  const thumbnails = data?.imgs
 // Inside your component:
const scrollContainerRef = React.useRef<HTMLDivElement>(null);

const scroll = (direction: "left" | "right") => {
  if (scrollContainerRef.current) {
    const scrollAmount = 200; // Adjust pixel scroll distance per click
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }
};

  return (
    <main className=" bg-white text-zinc-900 sm:p-10 p-4 md:p-14">
      <div className="max-w-8xl mx-auto flex  flex-wrap justify-between gap-y-7">

        {/* --- Left Column: Image Gallery --- */}
        <div className="space-y-6 md:w-[40%] w-full">
          {/* Main Product Image Container */}
          <div className="bg-radial to-zinc-200 group via-zinc-50 from-white p-6 rounded-3xl shadow-inner border border-zinc-200 aspect-square flex items-center overflow-hidden justify-center">
            <Image
              src={mainImageSrc}
              alt="Quick Kraft Glue Adhesive"
              width={500}
              height={500}
              className="object-contain mix-blend-multiply group-hover:scale-110 duration-300" // Ensures white background blends with product
              priority
            />
          </div>

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

    {/* Thumbnails Grid Container */}
    <div
      ref={scrollContainerRef}
      className="flex gap-5 overflow-x-auto py-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
    >
      {thumbnails.map((src: any, index: number) => (
        <button
          key={index}
          onClick={() => setMainImageSrc(src)} // Updates main image state
          className={`bg-zinc-100 rounded-xl p-2 border-2 transition-all duration-200 hover:border-blue-300 aspect-square flex items-center min-w-16 md:min-w-24 justify-center shrink-0 ${
            mainImageSrc === src ? "border-blue-300" : "border-zinc-200"
          }`}
        >
          <Image
            src={src}
            alt={`Product view ${index + 1}`}
            width={100}
            height={100}
            className="object-contain opacity-100"
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
        </div>

        {/* --- Right Column: Product Details --- */}
        <div className="flex flex-col space-y-4 md:w-[55%] w-full">

          {/* Category Tagline with Yellow Border Line */}
          <div className="flex items-center gap-2 text-zinc-600 text-sm font-medium tracking-wide">
            <div className="w-1 h-5 bg-yellow-400 rounded-full"></div>
            {data?.category}          </div>

          {/* Product Title & Stock Status */}
          <h1 className="text-4xl md:text-5xl font-bold capitalize text-blue-900 tracking-tight leading-tight">
            {data?.title}            </h1>

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
            <span>{data?.id + 306} Reviews</span>
          </div>


          {/* Short Description */}
          <p className="text-zinc-800 max-w-xl leading-relaxed">
            {data?.description}          </p>

{data.precaution  &&   <div className="space-y-3 pt-2">
            <h3 className="font-semibold text-zinc-800 text-lg flex md:text-xl"> <FaExclamationTriangle className="text-red-500 mt-1 mr-2" />
 Storage & Precautions
</h3>
  <div className="space-y-3">
          {data?.precaution.map((item:string, index:number) => (
            <div
              key={index}
              className="flex items-start gap-4 "
            >
              <div className="mt-1 text-yellow-600">
                <FaHandPointRight
 size={18} />
              </div>

              <p className="text-gray-600 font-medium">{item}</p>
            </div>
          ))}
        </div>


            <div className="flex flex-wrap md:gap-8 gap-3 mt-4 mb-6">   
                                  <Buttonmain text="Download TDS" href={data?.tds} variant="primary"/>
                       <Buttonmain text="Download MSDS" href={data?.msds} variant="secondary"/>
</div>
          </div>        }


        </div>
      </div>
    </main>
  );
}