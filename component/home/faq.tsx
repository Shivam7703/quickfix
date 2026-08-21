"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronDown,
  FiHelpCircle,
  FiMessageSquare,
} from "react-icons/fi";

const faqData = [
  {
    id: 1,
    question: "What materials can Quickfix adhesives bond?",
    answer:
      "Different Quickfix products are designed to bond materials such as wood, glass, ceramics, leather, rubber, paper, fabrics, metals, and many plastics. Always select the adhesive recommended for your specific application.",
  },
  {
    id: 2,
    question: "Are Quickfix products suitable for industrial applications?",
    answer:
      "Yes. Quickfix manufactures products for household, DIY, commercial, plumbing, construction, woodworking, automotive, and industrial applications.",
  },
  {
    id: 3,
    question: "How should Quickfix adhesives be stored?",
    answer:
      "Storage instructions vary by product, but most should be stored in unopened containers in a cool, dry location away from excessive heat or freezing conditions.",
  },
  {
    id: 4,
    question: "Does Wembley Laboratories Ltd. have its own R&D and quality control?",
    answer:
      "Yes. Wembley Laboratories Ltd. operates a dedicated R&D laboratory and follows stringent quality control procedures throughout manufacturing and packaging.",
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
              Have questions about our adhesive solutions, product applications, or manufacturing standards? Explore the answers to some of the most common queries and discover why professionals and consumers trust Wembley Laboratories Ltd. for reliable bonding solutions.
            </p>

            {/* ======================================================= */}
            {/* 3 SOLID METRIC PROGRESS BARS CARD (NO GRADIENTS)        */}
            {/* ======================================================= */}
            <div className=" max-w-md">

              <hr className="border-zinc-100 my-2" />

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
                  className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${isOpen
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
                        className={`w-1.5 h-6 rounded-full transition-colors duration-300 ${isOpen ? "bg-amber-500" : "bg-zinc-200 group-hover:bg-blue-500"
                          }`}
                      />
                      <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-blue-700 transition-colors tracking-tight">
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
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