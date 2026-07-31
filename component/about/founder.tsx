import React from 'react';
import Image from 'next/image';
import { LuTrendingUp, LuSend, LuLinkedin, LuTwitter, LuMail, LuFacebook } from 'react-icons/lu';
import { ceo } from '@/assets';
import { FaCircleCheck } from 'react-icons/fa6';

export default function AboutCeo() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 md:py-24 px-6 md:px-16 lg:px-24 border-y border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Content Column (7 Columns wide on desktop) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Tag & Heading */}
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-600 border border-blue-100">
              <FaCircleCheck 
 className="w-3.5 h-3.5" /> Leadership & Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              About Our CEO
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>

          {/* CEO Bio / Message */}
          <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            <p className="text-xl font-medium text-slate-800 italic border-l-4 border-blue-600 pl-4 py-1 bg-slate-50/50 rounded-r-lg">
              &ldquo;Driving innovation and building technological ecosystems that empower businesses globally.&rdquo;
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
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
                Our Software
              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <LuSend className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Email Servers
              </h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo.
              </p>
            </div>

          </div>

          {/* CEO Social Links & Contact */}
          <div className="pt-4 flex items-center gap-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Connect:</span>
            <div className="flex gap-2">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <LuLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <LuFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-800 hover:text-white transition-colors duration-200" aria-label="Email">
                <LuMail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Image Column with Name Card (5 Columns wide on desktop) */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            
            {/* Background Decorative Element */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-20 transform -rotate-1"></div>

            {/* Main Image Container */}
            <div className="relative h-[450px] sm:h-[520px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
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
                      Tejas Lamba
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