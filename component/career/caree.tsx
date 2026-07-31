"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { 
  LuBriefcase, 
  LuSend, 
  LuMail, 
  LuUpload, 
  LuUsers, 
  LuRocket, 
  LuHeartHandshake 
} from 'react-icons/lu';

// Image import path (Apne project path ke acc. adjust kar lein)
import { team } from "@/assets"; 
import { FaCheckCircle } from 'react-icons/fa';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function CareerSection() {
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section className="bg-white text-slate-800 py-16 md:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ==================== 1. WORK WITH US SECTION ==================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-600 border border-blue-100">
              <LuBriefcase className="w-3.5 h-3.5" /> Careers & Culture
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Work With Us & <span className="text-yellow-500">Shape The Future</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We are constantly looking for passionate thinkers, creators, and innovators to join our growing team. Collaborate on impactful projects and elevate your career in an inclusive environment.
            </p>

            {/* Perks / Culture Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <LuRocket className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm">Fast Growth</h3>
                <p className="text-xs text-slate-500 mt-1">Accelerate your career path</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <LuUsers className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm">Great Culture</h3>
                <p className="text-xs text-slate-500 mt-1">Supportive & diverse team</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <LuHeartHandshake className="w-6 h-6 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900 text-sm">Work-Life</h3>
                <p className="text-xs text-slate-500 mt-1">Flexible working hours</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative h-[350px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <Image 
                src={team} // Apni career related image pass karein
                alt="Work With Us"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider bg-blue-600/90 px-3 py-1 rounded-full">
                  Join Our Team
                </span>
                <p className="text-lg font-bold mt-2">Build products that millions of users love.</p>
              </div>
            </div>
          </div>
        </motion.div>


        {/* ==================== 2. APPLICATION FORM & SEND CV BOX ==================== */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left: Application Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Apply Now</h2>
            <p className="text-slate-500 text-sm mb-6">Fill in your details below and we&apos;ll get back to you soon.</p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Applied for</label>
                  <input 
                    type="text" 
                    placeholder="Eg. Machine Operator" 
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              {/* Upload Resume Input */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Upload CV / Resume</label>
                <label className="flex items-center justify-center w-full px-4 py-4 rounded-xl border-2 border-dashed border-slate-300 hover:border-blue-500 bg-white cursor-pointer transition-colors group">
                  <div className="flex items-center gap-3">
                    <LuUpload className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    <span className="text-sm font-medium text-slate-600">
                      {fileName ? fileName : "Click to upload CV (PDF/DOCX)"}
                    </span>
                  </div>
                  <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" />
                </label>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Message (Optional)</label>
                <textarea 
                  rows={3}
                  placeholder="Tell us a little bit about yourself..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <LuSend className="w-4 h-4" /> Submit Application
              </button>
            </form>
          </div>

          {/* Right: Direct Mail / CV Box (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Send CV Box */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none" />
              
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                <LuMail className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold mb-3">Prefer Direct Email?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Don&apos;t want to fill out the form? Send your CV directly to our HR team via email.
              </p>

              {/* Direct Mail Link Button */}
              <a 
                href="mailto:careers@yourcompany.com?subject=Job%20Application%20-%20CV" 
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm transition-all shadow-md group"
              >
                <LuMail className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform" /> 
                Send Your CV (Mail Link)
              </a>

              <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-400 w-4 h-4" />
                  <span>Direct HR Contact: <strong>careers@company.com</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-400 w-4 h-4" />
                  <span>Response Time: <strong>Within 24-48 Hours</strong></span>
                </p>
              </div>
            </div>

            {/* Quick Info Box */}
            <div className="p-6 rounded-3xl bg-yellow-50 border border-red-100">
              <h4 className="font-bold text-slate-900 text-sm mb-1">Open Applications</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We always accept spontaneous applications from talented individuals. If your profile fits, we will get in touch!
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}