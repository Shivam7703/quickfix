import React from 'react';
import { FaLink, FaBolt, FaCheck } from 'react-icons/fa';

import { FaIndustry, FaFlask, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    // FaIndustry: Manufacturing aur production ko represent karne ke liye best hai
    icon: <FaIndustry className="text-white text-xl transition-transform duration-300 group-hover:scale-110" />,
    iconBg: "bg-[#243c9b]",
    title: "Superior Manufacturing Excellence",
    description: "Built on over seven decades of manufacturing expertise, every Wembley product is developed through precision engineering, rigorous quality control, and advanced production processes to deliver consistent, dependable performance.",
  },
  {
    // FaFlask: Research, development aur innovation ko darshane ke liye standard icon
    icon: <FaFlask className="text-white text-xl transition-transform duration-300 group-hover:scale-110" />,
    iconBg: "bg-[#f4b41a]",
    title: "Innovation Through Research",
    description: "Our dedicated research and development team continuously enhances adhesive technologies, creating innovative formulations that meet evolving industry requirements while ensuring reliable performance across diverse applications.",
  },
  {
    // FaShieldAlt: Trust, reliability, aur quality assurance dikhane ke liye perfect hai
    icon: <FaShieldAlt className="text-white text-xl transition-transform duration-300 group-hover:scale-110" />,
    iconBg: "bg-[#243c9b]",
    title: "Quality You Can Trust",
    description: "Every product undergoes comprehensive testing from raw material selection to final packaging, ensuring consistent quality, superior reliability, and performance customers can depend on every day.",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="group flex items-center gap-5 p-4 bg-white border border-zinc-200/85 shadow-sm rounded-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-400 cursor-pointer"
          >
            {/* Circular Icon Container */}
            <div className={`flex-shrink-0 w-16 h-16 rounded-full ${item.iconBg} flex items-center justify-center shadow-sm transition-transform duration-300`}>
              {item.icon}
            </div>

            {/* Text Details */}
            <div className="flex flex-col pr-3">
              <h3 className="text-base font-bold text-zinc-900 tracking-tight transition-colors duration-300 group-hover:text-blue-600">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}