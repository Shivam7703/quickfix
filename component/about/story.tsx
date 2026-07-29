"use client";
import { motion } from 'framer-motion';
import React from 'react';

const data = [
  {
    heading: "lorem ipsum Wembley Laboratories",
    para: "Wembley Laboratories Ltd was founded in the year 1952, by pioneering entrepreneur S. Amarjit Singh Lamba and his brothers. In their quest for new, innovative products suitable for the people of a newly independent India,",
  },
  {
    heading: "lorem ipsum Wembley Laboratories",
    para: "Wembley Laboratories Ltd was founded in the year 1952, by pioneering entrepreneur S. Amarjit Singh Lamba and his brothers. In their quest for new, innovative products suitable for the people of a newly independent India,",
  },
];

export default function Story() {
  return (
    <div className="grid lg:py-16 md:py-10 py-7 md:grid-cols-3 bg-zinc-100 lg:px-16">
      {/* Header Section */}
      <div className="lg:px-9 px-4 space-y-4 md:border-r border-yellow-400">
        {/* Tagline header element */}
        <div className="flex items-center gap-3">
          <span className="w-1 h-6 bg-yellow-500 block rounded-full" />
          <span className="text-xs md:text-sm font-bold tracking-widest text-zinc-700 uppercase">
            Everyday Fixing Solutions
          </span>
        </div>

        {/* Main Segment Header Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight leading-tight"
        >
          Strong <span className="text-blue-600">Bonds.</span> <br /> <span className="text-blue-600">Smarter</span> Solutions.
        </motion.h3>
      </div>

      {/* Cards Section */}
      {data?.map((cards, index) => (
        <div 
          key={index} 
          className="lg:px-9 px-4 space-y-2 md:space-y-3 md:border-r max-md:border-b border-yellow-400 last:border-none"
        >
          <h3 className="text-base font-bold sm:text-lg text-zinc-900">{cards?.heading}</h3>
          <p className="sm:text-sm text-xs text-zinc-600">{cards?.para}</p>
        </div>
      ))}
    </div>
  );
}