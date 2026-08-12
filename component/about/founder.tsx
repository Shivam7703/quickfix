import React from 'react';
import Image from 'next/image';
import { LuTrendingUp, LuSend, LuLinkedin, LuTwitter, LuMail, LuFacebook } from 'react-icons/lu';
import { ceo } from '@/assets';
import { FaCircleCheck } from 'react-icons/fa6';

export default function AboutCeo() {
  return (
    <section className="bg-zinc-100 py-16 md:py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Left Content Column (7 Columns wide on desktop) */}
        <div className="lg:col-span-7 space-y-8">

          {/* Tag & Heading */}
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              About Our CEO
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>

          {/* CEO Bio / Message */}
          <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            <p className="text-xl font-medium text-slate-800 italic border-l-4 border-blue-600 pl-4 py-1 bg-slate-50/50 rounded-r-lg">
              &ldquo;Guided by Innovation and Quality
&rdquo;
            </p>
            <p>
At Wembley Laboratories, our leadership is driven by a commitment to innovation, quality, and manufacturing excellence. By investing in advanced research, precision production, and continuous improvement, we continue to strengthen the QuickFix legacy while delivering reliable adhesive solutions trusted by customers across industries.
            </p>
          </div>

          {/* Two Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

            {/* Feature 1 */}
            <div className="group p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <LuTrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
Research-Driven Development              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
Focused on continuous product improvement through dedicated research and technical expertise.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <LuSend className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
Customer-Focused Solutions              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
Developing adhesive products that address practical applications across household, commercial, and industrial sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Column with Name Card (5 Columns wide on desktop) */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">

            {/* Background Decorative Element */}
            <div className="absolute -inset-2 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-20 transform -rotate-1"></div>

            {/* Main Image Container */}
            <div className="relative h-112.5 sm:h-140 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
              <Image
                src={ceo}
                alt="Alexander Wright - CEO"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                priority
              />

              {/* Floating Name Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/40 shadow-lg ">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      Amarjit Singh Lamba
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 tracking-wide uppercase">
                      Founder & Chief Executive Officer
                    </p>
                  </div>
                  {/* <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 text-[11px] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Active
                  </div> */}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}