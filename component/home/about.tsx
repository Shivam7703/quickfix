"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FiCheckCircle, FiAward } from "react-icons/fi";
import Buttonmain from "../global/button";
import { about, astm, img3, img1, isi, img9, img2, img4, processimg } from "@/assets";

// Stagger animation container variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] },
  },
};

export default function AboutSection() {
  const corporateHighlights = [
    "Dedicated Research & Development",
    "Stringent Quality Control",
    "Nationwide Distribution Network",
  ];

  return (
    <section className="relative w-full pt-8  py-6 md:p-16 lg:p-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* ======================================================= */}
          {/* LEFT SIDE: PREMIUM IMAGE WITH FLOATING CARD ACCENTS    */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 relative w-full group  aspect-square max-h-130">

            {/* Main Picture Wrapper with Hover Glow & Zoom */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100  transition-all duration-500 hover:shadow-yellow-500/15"
            >
              <Image
                src={processimg}
                alt="Wembley's Premium Production Operations"
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />

              {/* Subtle Overlay gradient on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>

            {/* Dynamic Floating B2B Trust Counter block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              animate={{
                y: [0, -8, 0],
              }}
              // @ts-ignore - framer motion continuous repeat type
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -right-2 -bottom-6 sm:-right-6 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 z-20 max-w-96 group-hover:bottom-2 transition-all duration-300"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-yellow-500/30 shrink-0">
                  70+
                </div>

              </div>

              <div>
                <h4 className="text-base font-bold text-zinc-900 flex items-center gap-1.5">
                  Years of Legacy
                </h4>
                <p className="text-sm text-zinc-700 leading-snug line-clamp-2">
                  Pioneering high-grade solutions & formulations since 1952.
                </p>
              </div>
            </motion.div>

            <Image src={img3} alt="quickfix" className="sm:-top-8 sm:-left-8 border-2 max-sm:hidden   border-white  rounded-2xl   sm:absolute w-32 h-32 sm:h-56 sm:w-56" />
          </div>

          {/* ======================================================= */}
          {/* RIGHT SIDE: COPYWRITING & ADVANTAGE TILES              */}
          {/* ======================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-6 space-y-5"
          >

            {/* Tagline header element with pulsing bar */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 group cursor-default">
              <span className="w-1.5 h-6 bg-yellow-500 block rounded-full group-hover:scale-y-125 transition-all duration-300 origin-center" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-zinc-700 uppercase">
                Precision Adhesive Solutions
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight capitalize leading-tight"
            >
              Reliable Bonding Solutions{" "}
              <span className=" text-yellow-500">
                & Industrial Applications
                {/* Underline Accent */}

              </span>
              .
            </motion.h3>

            {/* Detailed Description Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal"
            >
              Quickfix, the flagship brand of Wembley Laboratories Ltd., offers a comprehensive range of adhesives developed for repair, maintenance, DIY, plumbing, construction, manufacturing, and industrial applications. Every product is manufactured with carefully selected raw materials and stringent quality control to deliver consistent performance and dependable bonding.

            </motion.p>

            {/* Feature Check Grid list (Uncommented & Dynamic Ready) */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-2"
            >

              <motion.div variants={itemVariants}>
                {corporateHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 transition-colors duration-200"
                  >
                    <FiCheckCircle className="text-yellow-500 mt-0.5 shrink-0" size={18} />
                    <span className="text-sm font-medium text-zinc-700">{highlight}</span>
                  </div>
                ))}
                <div className="mt-3">
                  <Buttonmain href="/about-us" text="Explore More" variant="primary" />
                </div>
              </motion.div>
              {/* Certifications Block */}
              <motion.div variants={itemVariants} className=" border-gray-100">
                <h4 className="italic text-red-600 font-bold flex items-center gap-2 text-sm md:text-base">
                  <FiAward className="inline text-red-600" /> We are Certified From:-
                </h4>

                <div className="flex flex-wrap items-center gap-1 mt-3">
                  {/* ASTM Badge Container */}
                  <div className="group relative p-2transition-all duration-300">
                    <Image
                      src={astm}
                      alt="ASTM Certification"
                      className="sm:h-23 h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* ISI Badge Container */}
                  <div className="group relative p-2  transition-all duration-300">
                    <Image
                      src={isi}
                      alt="ISI Certification"
                      className="sm:h-23 h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-zinc-600 text-xs mt-3">Every Quickfix product is developed through continuous innovation and carefully tested to ensure dependable quality and performance.</p>
                </div>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}