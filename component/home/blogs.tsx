"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// User explicit asset path directive matching instructions
import { blg1 } from "@/assets";
import { blogData } from "@/data/blogdata";
import { createSlug } from "@/app/products/[slug]/page";


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
              Knowledge & Product <span className="text-yellow-500">Information</span>
            </h2>
          </div>

          {/* Right Text Block with Amber Divider Accent */}
          <div className="lg:col-span-5 space-y-4 text-left lg:pl-6">
            <span className="w-12 h-0.75 bg-amber-500 block rounded-full" />
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal">
              Stay informed with product information, application guidance, usage recommendations, and updates from the QuickFix range to help you choose the right adhesive solution.

            </p>
          </div>
        </div>

        {/* ======================================================= */}
        {/* HORIZONTAL SCROLL / RESPONSIVE GRID LAYOUT             */}
        {/* ======================================================= */}
        {/* Mobile par side-scroll slider layout aur desktop par standard columns breakdown */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-6 lg:pb-0 no-scrollbar snap-x snap-mandatory px-6 lg:mx-0 lg:px-0">
          {blogData.map((post:any) => (
            <div
              key={post.id}
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 w-full flex flex-col snap-start group text-left"
            >
              {/* 1. Rounded Image Card Container Frame */}
              <div className="w-full aspect-[1.53] relative rounded-xl overflow-hidden mb-4 select-none shadow-xs border border-gray-100">
                <Image
                  src={post.img || blg1}
                  alt={post.title}
                  fill
                  className="object-cover object-center transform group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-w-1024px) 80vw, 25vw"
                />

                {/* Absolute Top-Left Floating Badge Stamp */}
              </div>

              {/* 2. Textual Metadata Segment Layout */}
              <div className="space-y-3 grow flex flex-col justify-between items-start px-0.5">
          <Link                   href={`/blogs/${createSlug(post.title)}`}
>     <h3 className="text-sm md:text-base font-black text-zinc-900 group-hover:text-blue-700 transition-colors tracking-tight leading-snug line-clamp-2">
                  {post.title}
                </h3></Link> 

                {/* Read More Custom Trigger Button block */}
                <Link
                  href={`/blogs/${createSlug(post.title)}`}
                  className="bg-blue-700 hover:bg-red-500 text-white text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-xs inline-flex items-center gap-1.5 transition-colors group/btn uppercase tracking-wider"
                >
                  <span>Read More</span>
                  <FiArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}