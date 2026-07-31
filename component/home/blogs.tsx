"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// User explicit asset path directive matching instructions
import { about } from "@/assets";

const blogPosts = [
  {
    id: 1,
    title: "5 Smart Household Fixes You Can Do in Under 60 Seconds",
    href: "/blog/household-fixes",
  },
  {
    id: 2,
    title: "5 Smart Household Fixes You Can Do in Under 60 Seconds",
    href: "/blog/quick-repairs",
  },
  {
    id: 3,
    title: "5 Smart Household Fixes You Can Do in Under 60 Seconds",
    href: "/blog/diy-hacks",
  },

];

export default function BlogSection() {
  return (
    <section className="w-full py-7 md:p-16 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* ======================================================= */}
        {/* SPLIT HEADER SECTION LAYOUT                            */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-3 text-left">
            <div className="flex items-center gap-2.5">
              <span className="w-1 h-5 bg-yellow-500 block rounded-full" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-zinc-700 uppercase">
                Latest Insights
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.15] max-w-xl">
              Ideas & guides from our <span className="text-yellow-500">Fix-it Experts</span>
            </h2>
          </div>

          {/* Right Text Block with Amber Divider Accent */}
          <div className="lg:col-span-5 space-y-4 text-left lg:pl-6">
            <span className="w-12 h-0.75 bg-amber-500 block rounded-full" />
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
              Stay updated with clever DIY hacks, quick home repair tutorials, and creative crafting tips using India&apos;s trusted instant adhesive.
            </p>
          </div>
        </div>

        {/* ======================================================= */}
        {/* HORIZONTAL SCROLL / RESPONSIVE GRID LAYOUT             */}
        {/* ======================================================= */}
        {/* Mobile par side-scroll slider layout aur desktop par standard columns breakdown */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-6 lg:pb-0 no-scrollbar snap-x snap-mandatory px-6 lg:mx-0 lg:px-0">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 w-full flex flex-col snap-start group text-left"
            >
              {/* 1. Rounded Image Card Container Frame */}
              <div className="w-full aspect-[1.53] relative rounded-xl overflow-hidden mb-4 select-none shadow-xs border border-gray-100">
                <Image
                  src={about}
                  alt={post.title}
                  fill
                  className="object-cover object-center transform group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-w-1024px) 80vw, 25vw"
                />

                {/* Absolute Top-Left Floating Badge Stamp */}
                <div className="absolute top-3 left-3 bg-blue-700/90 text-white font-bold text-[10px] md:text-xs px-2.5 py-1 rounded-sm flex items-center justify-center gap-1 shadow-sm backdrop-blur-xs select-none">
                  <span>★</span>
                  <span>Blog</span>
                </div>
              </div>

              {/* 2. Textual Metadata Segment Layout */}
              <div className="space-y-3 grow flex flex-col justify-between items-start px-0.5">
                <h3 className="text-sm md:text-base font-black text-zinc-900 group-hover:text-blue-700 transition-colors tracking-tight leading-snug line-clamp-2">
                  {post.title}
                </h3>

                {/* Read More Custom Trigger Button block */}
                <Link
                  href={post.href}
                  className="bg-blue-700 hover:bg-red-500 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-xs inline-flex items-center gap-1.5 transition-colors group/btn uppercase tracking-wider"
                >
                  <span>Read More</span>
                  <FiArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}