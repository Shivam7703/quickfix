"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper core styles import
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Buttonmain from "../global/button";
import { banner1, banner2, banner3 } from "@/assets";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const slidesData = [
  {
    id: 1,
    image: banner2,
    tag: "Premium B2B Adhesives & Showcase",
    title: "India's Trusted Bond, Reimagined.",
    description: "Delivering industrial-grade strength with global standards. Explore our elite range of household and strategic adhesive solutions.",
    primaryBtnText: "Explore Products",
    primaryBtnHref: "/products",
    secondaryBtnText: "Become a Vendor",
    secondaryBtnHref: "/vendor-registration",
  },
  {
    id: 2,
    image: banner3,
    tag: "Next-Gen Stationery Solutions",
    title: "Pure Creative Power for Labs & Office",
    description: "From lightweight craft gums to heavy multi-purpose liquid matrices. Engineering premium tackiness without compromised toxic materials.",
    primaryBtnText: "View Catalog",
    primaryBtnHref: "/products/stationery",
    secondaryBtnText: "Get Quotes",
    secondaryBtnHref: "/contact",
  },
  {
    id: 3,
    image: banner2,
    tag: "Bulk Global B2B Supply Chain",
    title: "A Strategic Partner to Your Business",
    description: "Streamlined bulk procurement tiers with customized packing profiles for instant distribution channels across premium retailers.",
    primaryBtnText: "Partner With Us",
    primaryBtnHref: "/vendor-registration",
    secondaryBtnText: "About Wembley's",
    secondaryBtnHref: "/about-us",
  },
];
 
export default function HomeBanner() {
      const uniqueId = "banner12376";
const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, EffectFade, Navigation],
    effect: "fade",
  };
  return (
    <section className="w-full h-[50vh] md:h-[75vh] max-h-[700px] bg-white relative group">
      <Swiper
       {...swiperOptions}  className="mySwiper w-full h-full"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full bg-zinc-50 overflow-hidden">
            {/* Background Image Setup */}
            <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                className="object-cover object-center transform scale-105"
                sizes="100vw"
              />
              {/* Premium Soft White Gradient Layer for Luxury Text Contrast */}
              <div className="absolute inset-0 bg-linear-to-r from-white/70 via-white/70 to-transparent w-full h-full" />
            </div>

            {/* Slide Content Layout Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center relative z-10">
              <div className="max-w-2xl text-left">
                {/* 1. Tagline Animated Banner */}
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-block text-xs  font-bold tracking-widest text-blue-600 uppercase mb-3 bg-blue-50/80 backdrop-blur-xs px-4 py-1 rounded-full border border-blue-100"
                >
                  {slide.tag}
                </motion.span>

                {/* 2. Main Premium Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-4"
                >
                  {slide.title.split(" ").map((word, index) => 
                    word.toLowerCase().includes("trusted") || word.toLowerCase().includes("power")
                      ? <span key={index} className="text-yellow-500">{word} </span>
                      : word + " "
                  )}
                </motion.h2>

                {/* 3. Sub description body layout */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-sm md:text-lg text-zinc-600 font-normal leading-relaxed mb-8 max-w-xl"
                >
                  {slide.description}
                </motion.p>

                {/* 4. Connected CTA Buttons Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="flex flex-wrap flex-row sm:gap-4 gap-2 w-full"
                >
                  <Buttonmain href={slide.primaryBtnHref} text={slide.primaryBtnText} variant="primary" />
                  <Buttonmain href={slide.secondaryBtnHref} text={slide.secondaryBtnText} variant="secondary" />
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

 <div
        className={`${uniqueId}-next absolute z-40 font-bold text-2xl hover:scale-110 bg-yellow-500 p-3 rounded-full text-white right-3 top-[51%] max-md:hidden!`}
      >
        <FaArrowRightLong />

      </div>
      <div
        className={`${uniqueId}-prev absolute z-40 font-bold text-2xl hover:scale-110 bg-yellow-500 p-3 rounded-full text-white  left-3 md:top-[51%] max-md:hidden!`}
      >
<FaArrowLeftLong />
      </div>     
    </section>
  );
}