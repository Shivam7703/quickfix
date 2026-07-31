"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiHelpCircle } from "react-icons/fi";

const faqData = [
  {
    id: 1,
    question: "Is Wembley’s Quickfix safe for school projects and crafts?",
    answer: "Yes, Wembley's Quickfix formulations for arts, crafts, and stationery are engineered to be non-toxic, eco-friendly, and perfectly safe for students under standard usage conditions.",
  },
  {
    id: 2,
    question: "How long does it take for the glue to bond and dry completely?",
    answer: "Our advanced instant bonding technology establishes initial tensile surface attachment within 10 to 30 seconds. Complete structural cross-linking and full chemical cure finish inside 2 to 4 hours.",
  },
  {
    id: 3,
    question: "Which surfaces are compatible with Quickfix ultra adhesives?",
    answer: "Quickfix matrix structures are optimized to securely bind multiple substrates including ceramics, acrylic plastics, wood fibers, industrial leather, glass layers, and high-density polymers.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-7 md:p-16 lg:px-24 bg-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">

          {/* ======================================================= */}
          {/* LEFT SIDE: HEADINGS & SUB-TEXT LAYOUTS                  */}
          {/* ======================================================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Clear Doubts Floating Badge Element */}
            <div className="inline-flex items-center gap-2 bg-blue-50/80 border border-blue-100/50 px-4 py-2 rounded-md select-none">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xs">
                <FiHelpCircle size={12} fill="currentColor" className="text-amber-500" />
                <span className="absolute text-[10px] font-black text-white -mt-px">?</span>
              </span>
              <span className="text-xs md:text-sm font-bold text-blue-700 tracking-wide">
                Clear Doubts
              </span>
            </div>

            {/* Main Section Header */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Frequently asked <br /> questions
            </h2>

            {/* Explanatory Context paragraph */}
            <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal max-w-sm">
              Got questions about drying time, surface compatibility, or strength? Here is everything you need to know about getting an unbreakable bond with Wembley’s Quickfix.
            </p>
          </div>

          {/* ======================================================= */}
          {/* CENTER: ABSOLUTE SEPARATOR LINE (Desktop Only)          */}
          {/* ======================================================= */}
          <div className="hidden lg:block lg:col-span-1 h-full min-h-87.5 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-700 rounded-full" />
          </div>

          {/* ======================================================= */}
          {/* RIGHT SIDE: INTERACTIVE ACCORDION ROW MATRIX           */}
          {/* ======================================================= */}
          <div className="lg:col-span-6 space-y-4 w-full">
            {faqData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="w-full bg-blue-50/80 border border-blue-100 shadow-2xs rounded-xl overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Trigger Button Frame */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-5 md:p-6 flex items-center text-left gap-4 md:gap-6 cursor-pointer group select-none"
                  >
                    {/* Prototype Orange Right/Down Facing Arrow Icon Box */}
                    <div className="shrink-0 text-amber-500 transition-transform duration-300">
                      <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                        <FiArrowRight size={22} className="stroke-[3]" />
                      </motion.div>
                    </div>

                    {/* Left Border Small Yellow Notch Block */}
                    <span className="w-[2px] h-8 bg-amber-500 block shrink-0 rounded-full" />

                    {/* Question Content String */}
                    <h3 className="text-sm md:text-base lg:text-[17px] font-bold text-zinc-900 group-hover:text-blue-700 transition-colors tracking-tight leading-snug">
                      {item.question}
                    </h3>
                  </button>

                  {/* Collapsible Answer Reveal Framework */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pl-16 md:pl-20 pr-6 md:pr-10">
                          <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-normal border-t border-blue-100/60 pt-4">
                            {item.answer}
                          </p>
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