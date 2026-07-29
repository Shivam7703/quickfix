import React from 'react';
import { FaTruck, FaLock, FaHeadset } from 'react-icons/fa';

const services = [
  {
    icon: <FaTruck className="text-2xl" />,
    title: "Fast Delivery",
    description: "Quick shipping across India.",
  },
  {
    icon: <FaLock className=" text-2xl" />,
    title: "Secure Payment",
    description: "100% safe and encrypted checkout.",
  },
  {
    icon: <FaHeadset className="text-2xl" />,
    title: "Customer Support",
    description: "We're here to help with product and order assistance.",
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
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
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