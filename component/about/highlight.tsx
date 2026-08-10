import React from 'react';
import { FaTruck, FaLock, FaHeadset } from 'react-icons/fa';

import { FaCogs, FaCheckCircle, FaFlask } from "react-icons/fa";

const services = [
  {
    // FaCogs: Precision manufacturing aur production facilities ko dikhane ke liye gears sabse best hain
    icon: <FaCogs className="text-2xl" />,
    title: "Manufacturing Excellence",
    description: "Advanced production facilities and precision manufacturing ensure consistent quality in every product.",
  },
  {
    // FaCheckCircle: Testing pass hone aur quality assurance (Bharosa/Guarantee) ke liye standard icon
    icon: <FaCheckCircle className="text-2xl" />,
    title: "Quality Assured",
    description: "Every batch undergoes comprehensive testing to deliver dependable strength and reliable performance.",
  },
  {
    // FaFlask: Research, innovation, aur R&D labs ko darshane ke liye perfect visual
    icon: <FaFlask className="text-2xl" />,
    title: "Research & Innovation",
    description: "Dedicated R&D continuously develops advanced adhesive technologies for evolving market requirements.",
  },
];

export default function ServiceHighlights() {
  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="group flex items-center gap-5 px-6 py-4 bg-white border border-blue-400/70 shadow-sm rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-600 cursor-pointer"
          >
            {/* Icon Container with Light Blue Background */}
            <div className="shrink-0 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            {/* Text Details */}
            <div className="flex flex-col pr-3">
              <h3 className="text-base font-bold text-[#243c9b] tracking-tight">
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