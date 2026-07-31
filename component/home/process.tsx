"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/assets";


const processSteps = [
  {
    stepNumber: "01",
    title: "Surface Prep & Analysis",
    description: "Great bonds start with clean surfaces. We design our adhesives to work optimally once dust, oil, and moisture are cleared for maximum surface contact.",
  },
  {
    stepNumber: "02",
    title: "Precision Application",
    description: "Our pinpoint dispensing tech allows for an exact, controlled application. No mess, no runoff—just the perfect amount of high-strength formula exactly where you need it.",
  },
  {
    stepNumber: "03",
    title: "Instant Molecular Cure",
    description: "Formulated with rapid-setting polymers, our glue cross-links instantly under light pressure to create a rock-solid, permanent hold in seconds.",
  },
  {
    stepNumber: "04",
    title: "Instant Molecular Cure",
    description: "Formulated with rapid-setting polymers, our glue cross-links instantly under light pressure to create a rock-solid, permanent hold in seconds.",
  },

];

export default function Process() {
  return (
    <div className="w-full py-7 md:p-16 lg:px-24 bg-white ">
      <div className="max-w-7xl mx-auto px-4">

        {/* ======================================================= */}
        {/* HEADER BRANDING STRIP                                    */}
        {/* ======================================================= */}


        {/* ======================================================= */}
        {/* MAIN RESPONSIVE CONTENT SPLIT GRID                      */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 relative lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE: VISUAL IMAGE WITH BOTTOM TEXT CALLOUT BAND */}
          <div className="lg:col-span-6 lg:sticky lg:top-12 space-y-6 w-full">
            <div className="space-y-3 mb-12 text-left">
              <div className="flex items-center gap-2.5">
                <span className="w-1 h-5 bg-yellow-500 block rounded-full" />
                <span className="text-xs md:text-sm font-bold tracking-widest text-zinc-700 uppercase">
                  Our Process
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.15] max-w-xl">
                Formulated for unbreakable target <span className="text-yellow-500">bond</span>
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full aspect-4/3 relative  shadow-md border rounded-2xl  border-gray-100"
            >
              <Image
                src={about}
                alt="Quickfix"
                fill
                className="object-cover rounded-2xl  object-center"
                sizes="(max-w-1024px) 100vw, 45vw"
              />
              {/* Prototype Signature Blue Border Accent Callout text box */}
              <div className="flex w-[70%] absolute bg-white shadow-xl shadow-black/30 rounded-lg items-stretch gap-4 px-4 py-3 bottom-2 -right-3">
                <span className="w-1 bg-yellow-600 block shrink-0 rounded-full" />
                <p className="text-zinc-800 text-xs md:text-sm leading-relaxed font-normal">
                  Our process is engineered to maximize adhesive performance and reliability for every type of repair. By combining advanced chemical engineering with user-friendly application design, we ensure seamless, permanent fixes every single time.
                </p>
              </div>
            </motion.div>


          </div>

          {/* RIGHT SIDE: SEQUENTIAL TYPOGRAPHY ROW LISTINGS */}
          <div className="lg:col-span-6 space-y-10 md:space-y-12 lg:pt-28">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-start gap-6 md:gap-8 group"
              >
                {/* Large Prototype Blue Identity Digit */}
                <span className="text-4xl md:text-6xl font-black text-blue-800 tracking-tighter leading-none shrink-0 select-none transition-colors duration-300 group-hover:text-amber-500">
                  {step.stepNumber}
                </span>

                {/* Text Blocks */}
                <div className="space-y-2">
                  <h3 className="text-base md:text-xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-normal max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}