import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { img4 } from '@/assets';

export default function ContactSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Image Container */}
        <div className="relative w-full h-100 md:h-125 rounded-3xl overflow-hidden shadow-md border border-zinc-100">
          <Image
            src={img4}
            alt="About us and contact"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right Column: Contact Details & Info Cards */}
        <div className="space-y-8">
          <div className='space-y-4'>
            <div className="flex items-center gap-3">
              <span className="w-1 h-6 bg-yellow-500 block rounded-full" />
              <span className="text-xs md:text-sm font-bold tracking-widest text-zinc-700 uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-800 tracking-tight">
              Contact Us Today!
            </h2>
            <p className="text-zinc-600 mt-2 text-sm md:text-base leading-relaxed">
              Have questions about our high-performance adhesive solutions or need bulk assistance? Reach out to our team today.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Phone Card */}
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 transition-all hover:shadow-md hover:border-blue-200">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 text-base">Call Us</h3>
                <p className="text-zinc-500 text-sm mt-1"><a href="tel:+918527499493">+91-8527499493</a></p>
                <p className="text-zinc-500 text-sm mt-1"><a href="tel:+919805403302">+91-9805403302</a></p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 transition-all hover:shadow-md hover:border-blue-200">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 text-base">Email Us</h3>
                <p className="text-zinc-500 text-sm"><a href="mailto:
info@wembleysquickfix.com">
                  info@wembleysquickfix.com</a></p>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 transition-all hover:shadow-md hover:border-blue-200">
              <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 text-base">Our Location</h3>
                <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                  Wembley House, 527, Pace City II, Sector 37, Gurgaon – 122001 (INDIA)
                </p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="flex items-start gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 transition-all hover:shadow-md hover:border-blue-200">
              <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <FaClock size={18} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 text-base">Working Hours</h3>
                <p className="text-zinc-500 text-sm mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}