"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiPlay, FiUsers } from "react-icons/fi";
// Right side product banner image import karein
import { about, gal2, gal4, img4 } from "@/assets";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";

const featuresData = [
  {
    id: 1,
    title: "Fast Bonding Performance",
    description: "Selected QuickFix adhesive formulations provide rapid bonding, helping improve efficiency across repair and production applications",
  },
  {
    id: 2,
    title: "Bonds Multiple Materials",
    description: "Depending on the product, QuickFix adhesives bond materials including wood, metal, ceramics, glass, leather, rubber, paper, fabrics, and many plastics.",
  },
  {
    id: 3,
    title: "Easy Product Application",
    description: "Many QuickFix products feature convenient packaging and application systems designed for accurate and controlled use.",
  },
  {
    id: 4,
    title: "Durable Bond Strength",
    description: "QuickFix formulations are developed to provide strong, long-lasting bonds with resistance to moisture, heat, or demanding working conditions depending on the product category.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full py-7 md:p-16 lg:px-24 bg-zinc-700 overflow-hidden relative">
       <Image
                src={gal4}
                alt="Quickfix Craft and Repair Bonding Showcase"
                fill
                className="absolute w-full h-full -top-2 left-0 z-3 opacity-30 object-cover object-center"
                priority
              />
      <div className="absolute bg-white h-full z-7 w-full lg:w-[60%] left-0 top-0 lg:top-[3%]"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ======================================================= */}
          {/* LEFT CONTENT AREA: HEADINGS & GRID CARDS                 */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 space-y-4">

            {/* Top Border Accent Header */}
            <div className="flex items-center gap-3">
              <span className="w-1 h-6 bg-yellow-500 block rounded-full" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-zinc-700 uppercase">
                Everyday Bonding Solutions
              </span>
            </div>

            {/* Main Headline */}
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight"
            >
              Engineered for Reliable <span className="text-yellow-500">Performance</span>.
            </motion.h3>

            {/* Subtle Gradient Tag */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal"
            >
QuickFix products are developed to provide dependable bonding solutions across homes, workshops, construction, plumbing, manufacturing, and industrial environments. The product range is designed to suit different materials and application requirements.
            </motion.p>

            {/* Feature 2x2 Grid Systems */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6 pt-4">
              {featuresData.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  {/* Top-Left Corner Absolute Icon Button */}
                  

                  {/* Card Main Description Texts */}
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold flex text-blue-900 tracking-tight">
                   <span>                    <BsFillPatchCheckFill className="group-hover:text-red-500 mr-2 text-yellow-500 text-xl"/>
</span>   {feature.title}
                    </h3>
                    <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ======================================================= */}
          {/* RIGHT CONTENT AREA: CURVED OVERLAY IMAGE SHOWCASE        */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 relative w-full aspect-4/3 md:aspect-[1.25] h-full min-h-100 lg:min-h-130">

            {/* Main Picture Wrapper with Prototype Curved Cut Border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-full relative overflow-hidden "
            >
              <Image
                src={img4}
                alt="Quickfix"
                fill
                className="object-cover object-center"
                sizes="(max-w-1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
<motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 left-0 sm:left-4 bg-red-700 text-white p-5 sm:p-6 shadow-xl flex items-center justify-between gap-6 z-20 max-w-[85%] sm:max-w-85"
            >
              <div className="border-r border-red-500/60 pr-4">
                <h4 className="text-xs md:text-sm font-bold leading-tight tracking-wide">
Our team is committed towards continually improving its Quality Management system </h4>
              </div>

              {/* Play Button Icon */}
              <button
                className="w-12 h-12 rounded-full bg-white text-red-700 flex items-center justify-center shrink-0 shadow-md hover:scale-105 active:scale-95 transition-transform duration-300"
              >
                <RiTeamFill 
 size={25} className="fill-current" />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}