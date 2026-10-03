"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiActivity,
  FiCheckCircle,
  FiCpu,
  FiHeadphones,
  FiLayers,
  FiMapPin,
  FiPackage,
  FiSearch,
  FiTool,
  FiTrendingUp,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import type { IconType } from "react-icons";

/* -------------------------------------------------------------------------- */
/*  Small shared pieces                                                       */
/* -------------------------------------------------------------------------- */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Heading({
  eyebrow,
  before,
  highlight,
  after = ".",
}: {
  eyebrow: string;
  before: string;
  highlight: string;
  after?: string;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="block h-6 w-1 rounded-full bg-yellow-500" />
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-700 md:text-sm">
          {eyebrow}
        </span>
      </div>
      <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-5xl">
        {before}
        <span className="text-yellow-500">{highlight}</span>
        {after}
      </h3>
    </div>
  );
}

type PillItem = { icon: IconType; title: string; description: string };

function PillList({
  items,
  variant,
}: {
  items: PillItem[];
  variant: "yellow" | "blue";
}) {
  const isBlue = variant === "blue";
  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <Reveal key={item.title} delay={i * 0.08}>
            <div
              className={`group flex cursor-pointer items-center gap-5 rounded-full border bg-white p-3 pr-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                isBlue
                  ? "border-blue-400/70 hover:border-blue-600"
                  : "border-zinc-200/85 hover:border-yellow-400"
              }`}
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16 ${
                  isBlue ? "bg-blue-500 text-white" : "bg-yellow-100 text-amber-600"
                }`}
              >
                <Icon size={24} />
              </div>
              <div className="flex flex-col">
                <h4
                  className={`text-base font-bold tracking-tight text-zinc-900 transition-colors duration-300 ${
                    isBlue ? "group-hover:text-[#243c9b]" : "group-hover:text-amber-600"
                  }`}
                >
                  {item.title}
                </h4>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-500 md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Content                                                                   */
/* -------------------------------------------------------------------------- */

const innovationPoints: PillItem[] = [
  {
    icon: FiCpu,
    title: "State-of-the-art R&D Laboratory",
    description: "Fully equipped lab at our manufacturing unit in Baddi.",
  },
  {
    icon: FiActivity,
    title: "Modern Testing Equipment",
    description: "All the modern testing and measuring equipments in-house.",
  },
  {
    icon: FiUsers,
    title: "Strong R&D Team",
    description: "Developing and enhancing products for consumers and industries.",
  },
  {
    icon: FiTrendingUp,
    title: "Always Improving",
    description: "Upgrading existing products and building new capabilities.",
  },
];

const qualitySteps: PillItem[] = [
  {
    icon: FiSearch,
    title: "Raw Material Testing",
    description: "Samples undergo chemical and physical tests on a preventive basis.",
  },
  {
    icon: FiLayers,
    title: "Checks at Every Stage",
    description: "A multitude of tests throughout manufacturing and packing.",
  },
  {
    icon: FiPackage,
    title: "Batch Sampling & Storage",
    description: "Rigorous batch sampling and optimized storage procedures.",
  },
  {
    icon: FiCheckCircle,
    title: "Final Inspection",
    description: "Each unit leaving the factory is tested and inspected.",
  },
];

const supportChips: { icon: IconType; label: string }[] = [
  { icon: FiTool, label: "Technical advisors" },
  { icon: FiHeadphones, label: "Application support" },
  { icon: FiTruck, label: "Fast response" },
];

const distributionStats = [
  { value: "150+", label: "Direct distributors" },
  { value: "15,000", label: "Retailers reached (approx.)" },
  { value: "Pan-India", label: "Across the length and breadth of the country" },
];

/* -------------------------------------------------------------------------- */
/*  Sections                                                                  */
/* -------------------------------------------------------------------------- */

export default function Aboutchoose() {
  return (
    <>
      {/* ============================ 1. INNOVATION ============================ */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-12 md:px-12 md:py-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 lg:col-span-6">
            <Heading
              eyebrow="Innovation"
              before="Innovation that shapes "
              highlight="what's next"
            />
            <Reveal delay={0.1} className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
              <p>
                {
                  "Innovation and diversification are Wembley Laboratories Ltd’s belief for future success. Our researchers constantly strive to develop many ideas, to make breakthroughs in the way people experience technology, resulting in the most effective solutions."
                }
              </p>
              <p>
                {
                  "A fully equipped, state of the art R&D Laboratory occupies the pride of place at our manufacturing unit in Baddi. It has all the modern testing and measuring equipments. With a strong R&D team, we have developed and enhanced our products for consumers and industries. Our R&D team is constantly striving at improving our existing products and building capabilities for new and innovative products in the future."
                }
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <PillList items={innovationPoints} variant="yellow" />
          </div>
        </div>
      </section>

      {/* =========================== 2. QUALITY CONTROL ========================= */}
      <section className="relative w-full overflow-hidden bg-zinc-50 px-4 py-12 md:px-12 md:py-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Steps first on desktop, text second */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <PillList items={qualitySteps} variant="blue" />
          </div>

          <div className="order-1 space-y-5 lg:order-2 lg:col-span-6">
            <Heading
              eyebrow="Quality Control"
              before="Quality is our "
              highlight="cardinal principle"
            />
            <Reveal delay={0.1} className="space-y-4 text-sm leading-relaxed text-zinc-600 md:text-base">
              <p>
                {
                  "We at Wembley Laboratories Ltd. believe that the cardinal principle for achieving success is the adoption of stringent quality measures, ensuring unmatched superiority of products."
                }
              </p>
              <p>
                {
                  "Rigorous testing, batch sampling and optimized storage procedures ensure that all our adhesives and sealants consistently meet your exact requirements. Our team is totally committed towards continually improving the effectiveness of its Quality Management system."
                }
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <figure className="rounded-2xl border-l-4 border-yellow-500 bg-white p-5 shadow-sm md:p-6">
                <blockquote className="text-sm font-medium italic leading-relaxed text-zinc-700 md:text-base">
                  {
                    "“Quality is never an accident but a result of high intentions, sincere efforts, intelligent direction and skillful innovation; it represents the wise choice of many alternatives.”"
                  }
                </blockquote>
                <figcaption className="mt-3 text-sm font-bold text-zinc-900">
                  — William A Forken
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ========================== 3. CUSTOMER SUPPORT ========================= */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-12 md:px-12 md:py-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 lg:col-span-6">
            <Heading
              eyebrow="Customer Support"
              before="Support as strong as our "
              highlight="products"
            />
            <Reveal delay={0.1}>
              <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                {
                  "We understand that the quality of our Customer Support must match the quality of the products manufactured by us. Wembley Laboratories Ltd’s dedicated team of experienced technical and application advisors are always available to offer customers a fast and effective response to application solutions and product support."
                }
              </p>
            </Reveal>

            <Reveal delay={0.2} className="flex flex-wrap gap-3">
              {supportChips.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200/85 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-100 text-amber-600">
                    <Icon size={14} />
                  </span>
                  {label}
                </span>
              ))}
            </Reveal>
          </div>

          {/* Quote block reuses the asymmetric corner shape from the About image */}
          <div className="lg:col-span-6">
            <motion.figure
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-bl-[80px] rounded-br-2xl rounded-tl-2xl rounded-tr-[80px] bg-zinc-900 p-8 text-white md:p-12"
            >
              <span
                aria-hidden="true"
                className="absolute -top-4 left-6 select-none text-[9rem] font-extrabold leading-none text-yellow-500/90 md:left-10"
              >
                “
              </span>
              <blockquote className="relative z-10 mt-10 text-base font-medium leading-relaxed text-zinc-100 md:text-lg">
                {
                  "A Customer is the most important visitor on our premises. He is not dependent on us. We are dependent on him. He is not an interruption in our work. He is the purpose of it. He is not an outsider in our business. He is part of it. We are not doing him a favor by serving him. He is doing us a favor by giving us an opportunity to do so."
                }
              </blockquote>
              <figcaption className="relative z-10 mt-6 flex items-center gap-3 text-sm font-bold text-yellow-500">
                <span className="block h-px w-8 bg-yellow-500" />
                Mahatma Gandhi
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      {/* ============================ 4. DISTRIBUTION =========================== */}
      <section className="relative w-full overflow-hidden bg-zinc-50 px-4 py-12 md:px-12 md:py-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-5 lg:col-span-6">
            <Heading
              eyebrow="Distribution"
              before="Reaching every corner of "
              highlight="India"
            />
            <Reveal delay={0.1}>
              <p className="text-sm leading-relaxed text-zinc-600 md:text-base">
                {
                  "Efficient Distribution and loyal and dedicated distributors have been the cornerstone of our marketing success. Wembley Laboratories Ltd has over 150 Direct distributors reaching out to approximately 15,000 retailers, through the length and breadth of India, who are serviced by our advanced distribution system. This kind of vast networking helps us to reach and serve our customers better."
                }
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-6">
            {distributionStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="group flex items-center gap-5 rounded-2xl border border-zinc-200/85 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-xl md:p-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-yellow-500 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <FiMapPin size={22} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold leading-none tracking-tight text-zinc-900 md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-sm text-zinc-500">{stat.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}