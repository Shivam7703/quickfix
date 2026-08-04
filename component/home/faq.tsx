"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiHelpCircle,
  FiSmile,
  FiShield,
  FiMessageSquare,
} from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "Is Wembley’s Quickfix safe for school projects and crafts?",
    answer:
      "Yes, Wembley's Quickfix formulations for arts, crafts, and stationery are engineered to be non-toxic, eco-friendly, and perfectly safe for students under standard usage conditions.",
  },
  {
    id: 2,
    question: "How long does it take for the glue to bond and dry completely?",
    answer:
      "Our advanced instant bonding technology establishes initial tensile surface attachment within 10 to 30 seconds. Complete structural cross-linking and full chemical cure finish inside 2 to 4 hours.",
  },
  {
    id: 3,
    question: "Which surfaces are compatible with Quickfix ultra adhesives?",
    answer:
      "Quickfix matrix structures are optimized to securely bind multiple substrates including ceramics, acrylic plastics, wood fibers, industrial leather, glass layers, and high-density polymers.",
  },
  {
    id: 4,
    question: "What is the shelf life of Quickfix products?",
    answer:
      "When stored in a cool, dry place away from direct sunlight with the cap tightly sealed, Quickfix adhesives maintain maximum potency for up to 24 months.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [visitedIds, setVisitedIds] = useState<number[]>([1]);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
    if (!visitedIds.includes(id)) {
      setVisitedIds((prev) => [...prev, id]);
    }
  };

  const explorationProgress = Math.round(
    (visitedIds.length / faqData.length) * 100
  );

  return (
    <section className="relative w-full py-16 md:py-24 bg-zinc-50 text-zinc-900 overflow-hidden select-none">
      
      {/* ======================================================= */}
      {/* ABSOLUTE BACKGROUND FLOATING ICONS (PREMIUM LOOK)       */}
      {/* ======================================================= */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-8 text-blue-500/10 pointer-events-none hidden md:block"
      >
        <FiHelpCircle size={180} />
      </motion.div>

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ======================================================= */}
          {/* LEFT SIDE: HEADINGS & 3 SOLID METRIC PROGRESS BARS     */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-10">
            
            {/* Header Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full">
              <FiHelpCircle className="text-amber-500" size={16} />
              <span className="text-xs md:text-sm font-bold text-blue-700 tracking-wide">
                Clear Doubts
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.15]">
              Frequently Asked <br className="hidden sm:inline" />
              <span className="text-yellow-500">Questions</span>
            </h2>

            {/* Subtext */}
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal max-w-md">
              Got questions about drying time, surface compatibility, or strength? Here is everything you need to know about getting an unbreakable bond with Wembley’s Quickfix.
            </p>

            {/* ======================================================= */}
            {/* 3 SOLID METRIC PROGRESS BARS CARD (NO GRADIENTS)        */}
            {/* ======================================================= */}
            <div className=" max-w-md">
              

              <hr className="border-zinc-100 my-2" />

              {/* 3 Metric Bars */}
              <div className="space-y-3.5">
                
                {/* 1. Success Rate (BLUE) */}
                <div className="space-y-1">
                  <div className="flex justify-between sm:text-lg text-sm  text-zinc-800">
                    <span className="flex items-center gap-1.5">
                      Success Rate
                    </span>
                    <span className="text-blue-700 font-bold">98%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="w-[98%] h-full bg-blue-600 rounded-full" />
                  </div>
                </div>
 {/* 1. Success Rate (BLUE) */}
                <div className="space-y-1">
                  <div className="flex justify-between sm:text-lg text-sm  text-zinc-800">
                    <span className="flex items-center gap-1.5">
                      Success Rate
                    </span>
                    <span className="text-blue-700 font-bold">88%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="w-[88%] h-full bg-blue-600 rounded-full" />
                  </div>
                </div> {/* 1. Success Rate (BLUE) */}
                <div className="space-y-1">
                  <div className="flex justify-between sm:text-lg text-sm  text-zinc-800">
                    <span className="flex items-center gap-1.5">
                      Success Rate
                    </span>
                    <span className="text-blue-700 font-bold">60%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-blue-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Support Footer */}
            <div className="pt-1 flex items-center gap-2 text-xs text-zinc-500 font-medium">
              <FiMessageSquare className="text-blue-600" size={14} />
              <span>
                Still have questions?{" "}
                <a href="/contact" className="text-blue-700 font-bold hover:underline">
                  Contact support &rarr;
                </a>
              </span>
            </div>

          </div>

          {/* ======================================================= */}
          {/* RIGHT SIDE: INTERACTIVE ACCORDION LIST                 */}
          {/* ======================================================= */}
          <div className="lg:col-span-7 space-y-4 w-full">
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                    isOpen
                      ? "border-blue-600 shadow-md shadow-blue-500/5 ring-1 ring-blue-600/10"
                      : "border-zinc-200/90 hover:border-zinc-300 hover:shadow-xs"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`w-1.5 h-6 rounded-full transition-colors duration-300 ${
                          isOpen ? "bg-amber-500" : "bg-zinc-200 group-hover:bg-blue-500"
                        }`}
                      />
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-blue-700 transition-colors tracking-tight">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-amber-500 text-white rotate-180"
                          : "bg-zinc-100 text-zinc-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                      }`}
                    >
                      <FiChevronDown size={20} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 pb-6 pt-0 pl-11 sm:pl-12 pr-6 sm:pr-12">
                          <div className="border-t border-zinc-100 pt-4">
                            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}