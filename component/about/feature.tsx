import React from 'react';
import { FaLink, FaBolt, FaCheck } from 'react-icons/fa';

const features = [
  {
    icon: <FaLink className="text-white text-xl transition-transform duration-300 group-hover:scale-110" />,
    iconBg: "bg-[#243c9b]",
    title: "Superior Bond Strength",
    description: "Our advanced adhesive formula creates powerful, long-lasting bonds for a wide variety of materials.",
  },
  {
    icon: <FaBolt className="text-white text-xl transition-transform duration-300 group-hover:scale-110" />,
    iconBg: "bg-[#f4b41a]",
    title: "Fast Drying Formula",
    description: "Quick curing technology helps reduce waiting time while delivering reliable and durable performance",
  },
  {
    icon: <FaCheck className="text-white text-xl transition-transform duration-300 group-hover:scale-110" />,
    iconBg: "bg-[#243c9b]",
    title: "Trusted Quality",
    description: "Manufactured with premium-grade materials and tested for consistent performance in every application.",
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