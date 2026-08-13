"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { about, sus2 } from "@/assets";


const processSteps = [
  {
    stepNumber: "01",
    title: "Quality Raw Materials",
    description: "Raw materials undergo chemical and physical testing before production to maintain product quality and consistency.",
  },
  {
    stepNumber: "02",
    title: "Controlled Manufacturing",
    description: "Advanced production systems and process controls help ensure consistent manufacturing standards across every production batch.",
  },
  {
    stepNumber: "03",
    title: "Comprehensive Quality Testing",
    description: "Products are tested throughout manufacturing and before dispatch to verify quality, reliability, and performance.",
  },
  {
    stepNumber: "04",
    title: "Distribution & Customer Support",
    description: "A strong distribution network and dedicated customer support help deliver QuickFix products efficiently across India.",
  },

];

export default function Process() {
  return (
    <div className="w-full py-7 md:p-16 lg:px-24 bg-white max-sm:overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

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
                Manufacturing Built Around
 <span className="text-yellow-500"> Quality</span>
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
                src={sus2}
                alt="Quickfix"
                fill
                className="object-cover rounded-2xl  object-center"
                sizes="(max-w-1024px) 100vw, 45vw"
              />
              {/* Prototype Signature Blue Border Accent Callout text box */}
              <div className="flex w-[50%] absolute bg-white shadow-xl shadow-black/30 rounded-lg items-stretch gap-4 px-4 py-3 top-2 right-2">
                <span className="w-1 bg-yellow-600 block shrink-0 rounded-full" />
                <p className="text-zinc-800 text-xs leading-[1.25] font-normal">
Every QuickFix product is manufactured through carefully controlled processes supported by research, quality inspection, and technical expertise to deliver consistent adhesive performance.
                </p>
              </div>
            </motion.div>


          </div>

          {/* RIGHT SIDE: SEQUENTIAL TYPOGRAPHY ROW LISTINGS */}
          <div className="lg:col-span-6 space-y-4 md:space-y-7 lg:pt-28">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="shadow-xl rounded-full border group overflow-hidden relative"
              >
                <div className="absolute z-1 bg-yellow-500 h-0 w-full top-0 left-0 group-hover:h-full duration-300"/>
                <div className="flex items-center z-3 relative gap-6 md:gap-8 p-6 md:px-8">
                {/* Large Prototype Blue Identity Digit */}
                <span className="text-4xl md:text-6xl font-black text-blue-800 tracking-tighter leading-none shrink-0 select-none transition-colors duration-300 group-hover:text-white">
                  {step.stepNumber}
                </span>

                {/* Text Blocks */}
                <div className="space-y-2">
                  <h3 className="text-base md:text-xl font-bold text-blue-900 group-hover:text-white transition-colors tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 group-hover:text-white text-xs md:text-sm leading-relaxed font-normal max-w-md">
                    {step.description}
                  </p>
                </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}