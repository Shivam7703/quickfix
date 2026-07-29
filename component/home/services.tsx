"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Fixed: Added Navigation module import
import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiGlobe, FiCpu, FiLayers, FiTrendingUp } from "react-icons/fi";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

// Swiper fundamental styles import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Fixed: Added Navigation CSS dependency

const servicesData = [
  {
    id: 1,
    icon: <FiGlobe size={28} />,
    title: "Sustainability Matrix",
    description: "We prioritize eco-friendly practices in our operations, from waste reduction to advanced bio-degradable chemical matrix recycling initiatives.",
    href: "/services/sustainability",
  },
  {
    id: 2,
    icon: <FiShield size={28} />,
    title: "Rigorous Quality Assurance",
    description: "Quality is at the absolute heart of everything we do. Our stringent batch control measures ensure regulatory alignment and extreme tensile bonds.",
    href: "/services/quality",
  },
  {
    id: 3,
    icon: <FiCpu size={28} />,
    title: "Advanced Research & Dev",
    description: "Our dedicated R&D labs drive adhesive innovation, constantly developing new high-grade polymers and optimizing long-term shelf resilience.",
    href: "/services/research-development",
  },
  {
    id: 4,
    icon: <FiLayers size={28} />,
    title: "Custom B2B Solutions",
    description: "Tailored chemical viscosities, private labeling pipelines, and custom packaging sizes designed specifically to fulfill diverse institutional needs.",
    href: "/services/custom-solutions",
  },
  {
    id: 5,
    icon: <FiTrendingUp size={28} />,
    title: "Supply Chain Excellence",
    description: "Robust logistics management system delivering uninterrupted bulk supplies globally with real-time route batch optimization matrices.",
    href: "/services/supply-chain",
  },
];

export default function ServicesSection() {
  const uniqueId = "service12376";

  const swiperOptions = {
    autoplay: {
      delay: 4500, // Reduced from 9500 for a better user experience loop
      disableOnInteraction: false,
    },
    loop: true,
    
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, Pagination, Navigation], // Removed EffectFade to allow multi-slide view
    // Responsive Viewports optimization for 5 cards layout
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      640: { slidesPerView: 2, spaceBetween: 24 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  };

  return (
    // Fixed: Added `relative` layout class to anchor custom absolute navigation arrows safely
    <section className="w-full py-6 md:p-16 lg:px-24 bg-zinc-100 text-center overflow-hidden relative services-swiper-section">
      <div className="max-w-7xl mx-auto">
        
        {/* ======================================================= */}
        {/* HEADER AREA                                             */}
        {/* ======================================================= */}
        <div className="max-w-3xl px-6 mx-auto space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight"
          >
            Excellence at <span className="text-blue-600">Every Stage.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-600 text-sm md:text-base leading-relaxed font-light"
          >
            From raw chemical formulation to eco-conscious logistics, Quickfix delivers high-performance B2B adhesive and consumer showcase solutions with unwavering manufacturing excellence.
          </motion.p>
        </div>

        {/* ======================================================= */}
        {/* SWIPER CONTAINER                                        */}
        {/* ======================================================= */}
        <div className="pt-8 px-8">
          <Swiper {...swiperOptions} className="mySwiper w-full h-full pb-14">
            {servicesData.map((item) => (
              <SwiperSlide key={item.id} className="pt-10 pb-4 h-auto">
                <div className="bg-white border border-gray-200 rounded-lg pt-14 pb-8 px-6 md:px-8 relative flex flex-col justify-between items-center h-full shadow-xs hover:shadow-xl transition-all duration-300 group">

                  {/* Center Floating Icon Box with Color Hover State Accent */}
                  <div
                    className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-600 text-white rounded-md flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:bg-red-500 group-hover:shadow-red-500/20 transition-all duration-300"
                  >
                    {item.icon}
                  </div>

                  {/* Card Body Information */}
                  <div className="space-y-4 flex-grow flex flex-col items-center">
                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-normal text-center line-clamp-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Read More Trigger */}
                  <div className="w-full md:mt-8 mt-3 pt-2 border-t border-gray-200">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-zinc-800 hover:text-blue-600 transition-colors group/link"
                    >
                      <span>Read More</span>
                      <FiArrowRight
                        size={14}
                        className="text-blue-600 group-hover/link:translate-x-1.5 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ======================================================= */}
      {/* CUSTOM NAVIGATION NAVIGATION CONTROLS                  */}
      {/* ======================================================= */}
      {/* Next Arrow Trigger Button */}
      <button
        type="button"
        className={`${uniqueId}-next absolute z-40 font-bold text-base sm:text-lg p-2.5 hover:bg-yellow-600 sm:p-3.5 rounded-full text-white right-2 md:right-14 top-[65%]  flex items-center justify-center shadow-md bg-blue-600 hover:scale-105 transition-all cursor-pointer`}
      >
        <FaArrowRightLong />
      </button>

      {/* Prev Arrow Trigger Button */}
      <button
        type="button"
        className={`${uniqueId}-prev absolute z-40 font-bold  text-base sm:text-lg p-2.5 hover:bg-yellow-600 sm:p-3.5 rounded-full text-white left-2 md:left-14 top-[65%]  flex items-center justify-center shadow-md bg-blue-600 hover:scale-105 transition-all cursor-pointer`}
      >
        <FaArrowLeftLong />
      </button>

     
    </section>
  );
}