"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {  img12, img3, img5, img6 } from "@/assets";

// Images imports: Apne real paths ke sath replace karein


export default function GallerySection() {
  return (
    <section className="w-full py-7 md:p-16 lg:px-24 bg-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* ======================================================= */}
        {/* HEADER BRANDING AREA                                    */}
        {/* ======================================================= */}
        <div className="space-y-3 mb-12 text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-1 h-5 bg-yellow-500 block rounded-full" />
            <span className="text-xs md:text-sm font-bold tracking-widest text-zinc-700 uppercase">
              Inside Wembley Labs
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold capitalize text-zinc-900 tracking-tight leading-tight max-w-2xl">
            A glimpse into our heritage & <span className="text-yellow-500">manufacturing</span>
          </h2>
        </div>

        {/* ======================================================= */}
        {/* ASYMMETRIC GRID GALLERY LAYOUT                          */}
        {/* ======================================================= */}
        <div className="flex flex-wrap justify-between md:gap-y-10 gap-y-6">

          {/* TOP LEFT IMAGE: Lab Processing View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:h-96 h-64 relative rounded-xl md:w-[60%] w-full overflow-hidden shadow-xs border border-gray-100 group"
          >
            <Image
              src={img12}
              alt="Wembley Labs R&D Formulation Process"
              fill
              className="object-cover object-center transform group-hover:scale-103 transition-transform duration-500"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </motion.div>

          {/* TOP RIGHT IMAGE: Factory Line with View More Link Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:h-96 h-64 relative rounded-xl md:w-[38%] w-full overflow-hidden shadow-xs border border-gray-100 group"
          >
            <Image
              src={img3}
              alt="Wembley Industrial Manufacturing Plant"
              fill
              className="object-cover object-center"
              sizes="(max-w-768px) 100vw, 50vw"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:h-96 h-64 relative rounded-xl md:w-[38%] w-full overflow-hidden shadow-xs border border-gray-100 group"
          >
            <Image
              src={img5}
              alt="Wembley Industrial Manufacturing Plant"
              fill
              className="object-cover object-center"
              sizes="(max-w-768px) 100vw, 50vw"
            />

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:h-96 h-64 relative rounded-xl md:w-[60%] w-full overflow-hidden shadow-xs border border-gray-100 group"
          >
            <Image
              src={img6}
              alt="Wembley Labs R&D Formulation Process"
              fill
              className="object-cover object-center transform group-hover:scale-103 transition-transform duration-500"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}