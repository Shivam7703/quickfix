"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiEye,
  FiCompass,
  FiAward,
  FiCheckCircle,
  FiZap,
  FiGlobe,
  FiLink,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { FaFlask, FaLightbulb } from "react-icons/fa";

const missionPillars = [
  { icon: FaLightbulb, text: "Continuous Product Innovation" }, 
  
  { icon: FiShield, text: "Reliable Quality Standards" },
  
  { icon: FiUsers, text: "Customer-Focused Solutions" }, 
];

const visionPillars = [
  { icon: FiAward, text: "Consistent Product Quality" },
  
  { icon: FiLink, text: "Reliable Bonding Performance" },
  
  { icon: FaFlask, text: "Continuous Research & Development" }, 
];

export default function MissionVisionSection() {
  return (
    <section className="relative w-full py-8  sm:p-12 md:p-16 lg:px-24 bg-zinc-100 text-zinc-900 overflow-hidden select-none">
      
      {/* ======================================================= */}
      {/* ABSOLUTE BACKGROUND FLOATING ICONS (PREMIUM DEPTH)      */}
      {/* ======================================================= */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-10 text-blue-600/10 pointer-events-none hidden md:block"
      >
        <FiTarget size={200} />
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 text-amber-500/10 pointer-events-none hidden md:block"
      >
        <FiEye size={220} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* ======================================================= */}
        {/* SECTION HEADER                                          */}
        {/* ======================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 md:mb-14">
          

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
            Our Mission & Our <span className="text-yellow-500"> Vision</span>
          </h2>

          <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
Driven by continuous innovation and uncompromising quality, we are committed to developing reliable adhesive solutions that meet the evolving needs of consumers and industries alike.
          </p>
        </div>

        {/* ======================================================= */}
        {/* CARDS GRID: MISSION & VISION                            */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* 1. MISSION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Accent Pill */}
            <div className="absolute top-0 left-10 transform -translate-y-1/2 bg-blue-700 text-white text-xs font-black tracking-wider uppercase px-4 py-1 rounded-full shadow-md">
              Our Mission
            </div>

            <div className="space-y-6 pt-2">
              {/* Header Icon + Title */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                  <FiTarget size={28} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
Delivering Quality in Every Product
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
Our mission is to develop high-quality adhesive solutions through advanced research, carefully controlled manufacturing, and consistent quality standards, ensuring dependable performance for every application.
              </p>

              {/* Key Metric / Highlights */}
              <div className="border-t border-zinc-100 pt-6 space-y-3">
                {missionPillars.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                        <IconComponent size={14} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-zinc-800">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-500">
              <span>Engineered for Reliability</span>
              <span className="text-blue-700 font-bold">Built on Trust</span>
            </div>
          </motion.div>

          {/* 2. VISION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Accent Pill */}
            <div className="absolute top-0 left-10 transform -translate-y-1/2 bg-amber-500 text-white text-xs font-black tracking-wider uppercase px-4 py-1 rounded-full shadow-md">
              Our Vision
            </div>

            <div className="space-y-6 pt-2">
              {/* Header Icon + Title */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  <FiEye size={28} />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                    Advancing Reliable Adhesive Solutions
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
Our vision is to strengthen our position as a trusted adhesive manufacturer by continuously improving our products, embracing innovation, and delivering dependable bonding solutions that customers can rely on across diverse applications.
              </p>

              {/* Key Metric / Highlights */}
              <div className="border-t border-zinc-100 pt-6 space-y-3">
                {visionPillars.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                        <IconComponent size={14} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-zinc-800">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-500">
              <span>Inspired by Innovation</span>
              <span className="text-amber-600 font-bold">Driven by Quality</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}