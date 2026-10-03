import React from 'react';
import Image from 'next/image';
import { LuTrendingUp, LuSend } from 'react-icons/lu';
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              About Our Founder
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>

          {/* CEO Bio / Message */}
          <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed font-normal">
           
            <p>
Wembley Laboratories Ltd. embraces the entrepreneurial spirit of our founder, S. Amarjit Singh Lamba, and his core values of honesty, integrity, respect and responsibility. In 1952, S. Amarjit Singh Lamba, developed India’s first ready-to-use, transparent artificial resin adhesive. It reliably bonded all materials known at the time, even the first plastics such as Bakelit. This breakthrough adhesive was aptly named QUICKFIX, and it soon became the most preferred adhesive countrywide, to the extent that today its name is synonymous with the word adhesive. The next three decades and more saw Wembley Labs Ltd consistently widen its horizons in terms of product range as well as distribution and marketing network. The turning point for the company came in 1994, when the 8th International Award for Quality was conferred on Wembley Laboratories Ltd. by the Editorial Office in Madrid, Spain. Continuing the QUICKFIX tradition and relentlessly pursuing innovation, Wembley Laboratories Ltd has consistently moved on to newer vistas and today is India’s leading adhesive manufacturer.            </p>
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
                alt="Amarjit Singh Lamba - Founder"
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
                      Founder
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