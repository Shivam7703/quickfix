"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Buttonmain from "../global/button";
import { about } from "@/assets";

export default function AboutSection() {
  const corporateHighlights = [
    "ISO 9001:2015 Certified Manufacturing Tiers",
    "Eco-Friendly & Non-Toxic Matrix Formulations",
    "Custom B2B Bulk Packaging & Private Labeling",
    "Pan-India Robust Logistics & Distribution Network",
  ];

  return (
    <section className="w-full p-6 md:p-16 lg:p-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ======================================================= */}
          {/* LEFT SIDE: PREMIUM IMAGE WITH FLOATING CARD ACCENTS    */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 relative w-full aspect-square md:aspect-4/5 max-h-120">

            {/* Main Picture Wrapper */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full h-full relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <Image
                src={about}
                alt="Wembley's Premium Production Operations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </motion.div>

            {/* B2B Trust Counter floating block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-3 -left-2 bg-white p-5 rounded-xl shadow-xl border border-gray-300 flex items-center gap-4 z-20 max-w-60"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                50+
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900">Years of Legacy</h4>
                <p className="text-xs text-zinc-500">Formulating trust across global industrial supply lines.</p>
              </div>
            </motion.div>
          </div>

          {/* ======================================================= */}
          {/* RIGHT SIDE: LUXURY COPYWRITING & ADVANTAGE TILES        */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Tagline header element */}
            <div className="flex items-center gap-3">
              <span className="w-1 h-6 bg-yellow-500 block rounded-full" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-zinc-700 uppercase">
                Everyday Fixing Solutions
              </span>
            </div>

            {/* Main Segment Header Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight"
            >
              Engineering High-Performance Adhesive Solutions <span className="text-blue-600">Since 1970</span>.
            </motion.h3>

            {/* Detailed Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal"
            >
              Wembley Laboratories has remained at the absolute forefront of manufacturing high-grade consumer, institutional, and custom B2B adhesive arrays. From our hallmark flagship formulation, <strong className="text-zinc-900 font-semibold">Quickfix</strong>, to our comprehensive custom industrial resins, we formulate products engineered for unparalleled tensile strengths, fast setup kinetics, and absolute compound safety.
            </motion.p>

            {/* Feature Check Grid list */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 md:pb-6"
            >
              {corporateHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FiCheckCircle className="text-blue-600 mt-1 shrink-0" size={16} />
                  <span className="text-sm font-medium text-zinc-700">{highlight}</span>
                </div>
              ))}
            </motion.div>

              <Buttonmain href="/about-us" text="Our Heritage Journey" variant="primary" />

          </div>

        </div>
      </div>
    </section>
  );
}