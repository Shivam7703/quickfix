"use client";

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { LuLeaf, LuRecycle, LuZap, LuArrowRight } from 'react-icons/lu';
import { sus1, sus2 } from "@/assets";
import { FaCheckCircle } from 'react-icons/fa';
import Buttonmain from '../global/button';

// Framer Motion Animation Variants with Explicit Types
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Sustain() {
  return (
    <section className="bg-white text-slate-800 py-16 md:py-28 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-20">
        
        {/* ==================== SECTION 1: Left Image, Right Content ==================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Left Image */}
          <div className="lg:col-span-6 w-full">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative h-[320px] sm:h-[420px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/10 border border-slate-100"
            >
              <Image 
                src={sus1} 
                alt="Eco-friendly innovation" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Corner Badge */}
              <div className="absolute top-4 left-4 bg-yellow-400/90 backdrop-blur-md text-slate-950 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <LuLeaf className="w-4 h-4" /> Eco Vision
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-yellow-700 bg-yellow-50 border border-yellow-200 uppercase">
              Sustainable Tomorrow
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Pioneering <span className="text-yellow-500">Green Energy</span> & Circular Systems
            </h2>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              We are committed to reducing environmental impact through cutting-edge technologies and sustainable operational practices. Our goal is to create long-term ecological balance without compromising performance.
            </p>
            <ul className="space-y-3 pt-2 text-slate-700 font-medium text-sm md:text-base">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
                <span>100% renewable energy integration</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" />
                <span>Zero-waste manufacturing lifecycle</span>
              </li>
            </ul>
                       <Buttonmain text="Explore More" href="mailto:info@quickfix.com" variant="primary"/>

          </div>
        </motion.div>


        {/* ==================== SECTION 2: 3 Colored Accent Boxes ==================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Box 1: Yellow Theme */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-yellow-400 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-yellow-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-slate-950 transition-colors duration-300">
              <LuZap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">Clean Energy</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Transitioning operating frameworks to high-efficiency solar and wind energy grids for continuous clean operation.
            </p>
          </motion.div>

          {/* Box 2: Blue Theme */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <LuRecycle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Circular Economy</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Revisiting product life cycles to ensure materials are recycled, reused, and continuously kept out of landfills.
            </p>
          </motion.div>

          {/* Box 3: Red Theme */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-red-500 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-red-500/10"
          >
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <LuLeaf className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Carbon Reduction</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Targeted initiatives engineered to measure, manage, and eliminate direct carbon emissions across all sectors.
            </p>
          </motion.div>
        </motion.div>


        {/* ==================== SECTION 3: Right Image, Left Content ==================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-widest text-yellow-700 bg-yellow-50 border border-yellow-200 uppercase">
              Sustainable Tomorrow
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Driving <span className="text-yellow-500">Positive Change</span> For Future Generations
            </h2>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              Sustainability isn't just an afterthought—it's at the core of everything we build. Through strategic innovation, we ensure our global operations leave a lasting positive footprint on the planet.
            </p>

            {/* Quick Stats Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-3xl font-black text-blue-600">85%</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Reduction in Emissions</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-3xl font-black text-blue-600">100k+</span>
                <p className="text-xs font-semibold text-slate-500 mt-1">Trees Offset Annually</p>
              </div>
            </div>

                                   <Buttonmain text="Get Details" href="mailto:info@quickfix.com" variant="primary"/>

          </div>

          {/* Right Image */}
          <div className="lg:col-span-6 w-full order-1 lg:order-2">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative h-[320px] sm:h-[420px] md:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-red-500/10 border border-slate-100"
            >
              <Image 
                src={sus2} 
                alt="Sustainable Future" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Corner Badge */}
              <div className="absolute top-4 right-4 bg-green-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <LuRecycle className="w-4 h-4" /> Eco Impact
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}