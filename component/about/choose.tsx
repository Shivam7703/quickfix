"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiUsers } from "react-icons/fi";
// Right side product banner image import karein
import { about, choose } from "@/assets";
import Buttonmain from "../global/button";



export default function Aboutchoose() {
  return (
    <section className="w-full py-7 md:p-16 lg:px-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ======================================================= */}
          {/* LEFT CONTENT AREA: HEADINGS & GRID CARDS                 */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 space-y-4">

            {/* Top Border Accent Header */}
            <div className="flex items-center gap-3">
              <span className="w-1 h-6 bg-yellow-500 block rounded-full" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-zinc-700 uppercase">
                Everyday Fixing Solutions
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
              Engineering High-Performance <span className="text-yellow-500">Since 1970</span>.
            </motion.h3>

            {/* Subtle Gradient Tag */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal"
            >
              Wembley Laboratories has remained at the absolute forefront of manufacturing high-grade consumer, institutional, and custom B2B adhesive arrays. From our hallmark flagship formulation. <br /><br />
              Wembley Laboratories has remained at the absolute forefront of manufacturing high-grade consumer, institutional, and custom B2B adhesive arrays. From our hallmark flagship formulation.

            </motion.p>

            <Buttonmain href="/about-us" text="Our Heritage Journey" variant="secondary" />

          </div>

          {/* ======================================================= */}
          {/* RIGHT CONTENT AREA: CURVED OVERLAY IMAGE SHOWCASE        */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 relative w-full aspect-square md:aspect-[1.25] h-full min-h-100 lg:min-h-130">

            {/* Main Picture Wrapper with Prototype Curved Cut Border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-full relative rounded-tr-[80px] rounded-bl-[80px] rounded-tl-2xl rounded-br-2xl overflow-hidden "
            >
              <Image
                src={choose}
                alt="Quickfix Craft and Repair Bonding Showcase"
                fill
                className="object-cover object-center"
                sizes="(max-w-1024px) 100vw, 50vw"
                priority
              />

              {/* Bottom Transparent Overlay Gradient Sheet */}
              {/* <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10" /> */}

              {/* Bottom White Dynamic Trust Stamp Floating Element */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-1 -left-1   bg-white py-6 px-8 rounded-lg  flex items-start gap-4 z-20 max-w-[85%] md:max-w-105"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-200 text-amber-600 flex items-center justify-center shrink-0">
                  <FiUsers size={20} />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-zinc-900 leading-tight tracking-tight">
                    Trusted by millions for fast repairs, creative projects, and everyday fixes
                  </h4>
                </div>
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}