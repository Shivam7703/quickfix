"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  LuFactory,
  LuRecycle,
  LuFlaskConical,
  LuShieldCheck,
  LuTrendingUp,
  LuCheck,
} from "react-icons/lu";
import { fact3, fact4 } from "@/assets";
import Buttonmain from "../global/button";

/* ---------- Animation variants ---------- */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const viewport = { once: true, amount: 0.2 };

/* ---------- Content (full Tailwind class strings so they aren't purged) ---------- */
const features = [
  {
    icon: LuFactory,
    title: "Efficient Production",
    text: "We follow streamlined manufacturing practices to maintain consistent quality, improve production efficiency, and meet customer requirements with reliable adhesive solutions.",
    card: "hover:border-yellow-400 hover:shadow-yellow-500/10",
    iconBox:
      "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-400 group-hover:text-slate-950",
    heading: "group-hover:text-yellow-600",
  },
  {
    icon: LuRecycle,
    title: "Responsible Resource Use",
    text: "We focus on careful use of raw materials, energy, and production resources to support efficient operations and reduce unnecessary waste wherever possible.",
    card: "hover:border-blue-500 hover:shadow-blue-500/10",
    iconBox:
      "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    heading: "group-hover:text-blue-600",
  },
  {
    icon: LuFlaskConical,
    title: "Innovation & Quality",
    text: "Our focus on research, product development, and quality control helps us create dependable adhesive solutions that meet different application and customer requirements.",
    card: "hover:border-red-500 hover:shadow-red-500/10",
    iconBox:
      "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
    heading: "group-hover:text-red-600",
  },
];

const checklist = ["Custom Adhesive Manufacturing", "Consistent Quality & Production"];

const highlights = [
  {
    icon: LuShieldCheck,
    title: "Quality You Can Rely On",
    text: "Consistent products made for dependable performance.",
  },
  {
    icon: LuTrendingUp,
    title: "Continuous Improvement",
    text: "Better processes for better adhesive solutions.",
  },
];

/* ---------- Component ---------- */
export default function OemManufacturing() {
  return (
    <section className="overflow-hidden bg-white px-4 py-16 text-slate-800 sm:px-8 md:px-16 md:py-28 lg:px-24">
      <div className="mx-auto max-w-7xl space-y-10 md:space-y-20">
        {/* ===== Section 1: Image left, content right ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
        >
          <div className="w-full lg:col-span-6">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-slate-100 p-4 shadow-2xl shadow-yellow-500/10 sm:h-[420px] md:h-[480px]"
            >
              <Image
                src={fact4}
                alt="Quickfix OEM adhesive manufacturing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <div className="space-y-6 lg:col-span-6">
            <span className="inline-block rounded-full border border-yellow-200 bg-yellow-50 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-yellow-700">
              OEM Manufacturing
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Manufacturing Solutions Built Around{" "}
              <span className="text-yellow-500">Your Brand</span>
            </h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              At Quickfix, OEM manufacturing is built around quality, consistency, and
              customer-specific requirements. From formulation and production to quality
              checks and packaging, we deliver adhesive solutions that meet your product
              needs while maintaining reliable manufacturing standards.
            </p>
            <ul className="space-y-3 pt-2 text-sm font-medium text-slate-700 md:text-base">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <LuCheck className="h-4 w-4" aria-hidden />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Buttonmain text="Learn More" href="/contact-us" variant="primary" />
          </div>
        </motion.div>

        {/* ===== Section 2: Feature cards ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, text, card, iconBox, heading }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl border border-slate-200/80 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-xl ${card}`}
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${iconBox}`}
              >
                <Icon className="h-7 w-7" aria-hidden />
              </div>
              <h3 className={`mb-3 text-xl font-bold text-slate-900 transition-colors ${heading}`}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Section 3: Content left, image right ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
        >
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-6">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Moving Forward with{" "}
              <span className="text-yellow-500">Smarter Adhesive</span> Solutions
            </h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              At Quickfix, we focus on responsible manufacturing, consistent quality, and
              continuous improvement. Our approach combines efficient processes with
              product development to deliver reliable adhesive solutions that meet
              customer requirements and support long-term value.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4"
                >
                  <Icon className="mb-2 h-6 w-6 text-blue-600" aria-hidden />
                  <span className="block text-lg font-bold text-blue-600 sm:text-xl">
                    {title}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-slate-500">{text}</p>
                </div>
              ))}
            </div>

            <Buttonmain text="Get Details" href="mailto:info@quickfix.com" variant="primary" />
          </div>

          <div className="order-1 w-full lg:order-2 lg:col-span-6">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-slate-100 p-4 shadow-2xl shadow-red-500/10 sm:h-[420px] md:h-[480px]"
            >
              <Image
                src={fact3}
                alt="Quickfix quality-controlled adhesive production"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}