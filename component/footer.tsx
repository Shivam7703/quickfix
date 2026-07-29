"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

// Brand logo asset import (Apna real path use karein)
import logo from "@/assets/logo.png"; 

export default function Footer() {
  return (
    <footer className="w-full bg-white text-zinc-600 font-sans border-t border-gray-100">
      
      {/* ======================================================= */}
      {/* TOP STRIP: TRUSTED ADHESIVE BRAND BANNER                 */}
      {/* ======================================================= */}
      <div className="w-full bg-blue-700 py-1 text-center px-4">
        <span className="text-white uppercase md:text-base text-sm tracking-wide">
          India&apos;s Trusted Instant Adhesive Brand
        </span>
      </div>

      {/* ======================================================= */}
      {/* MAIN FOOTER CONTENT CONTENT LINKS SYSTEMS              */}
      {/* ======================================================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* COLUMN 1: BRAND LOGO & CORE TAGLINE MATRICES */}
          <div className="lg:col-span-4 space-y-4 flex flex-col items-start text-left">
            <div className="relative w-44 h-16 select-none">
              <Image
                src={logo}
                alt="Wembley's Quickfix Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            
            <div className="space-y-2">
              <h4 className="text-blue-800 text-sm md:text-base font-bold tracking-tight">
                Bonding Strength <br /> Through Innovation
              </h4>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-sm">
                Quickfix is a trusted adhesive brand dedicated to delivering instant, durable, and reliable bonding solutions for everyday repairs and professional applications.
              </p>
            </div>
          </div>

          {/* COLUMN 2: COMPANY INTERNAL LINKS */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h3 className="text-blue-700 text-base md:text-lg font-bold tracking-tight">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs md:text-sm font-medium text-zinc-700">
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/story" className="hover:text-blue-600 transition-colors">Our Story</Link></li>
              <li><Link href="/community" className="hover:text-blue-600 transition-colors">Community</Link></li>
              <li><Link href="/manufacturing" className="hover:text-blue-600 transition-colors">Manufacturing</Link></li>
              <li><Link href="/sustainability" className="hover:text-blue-600 transition-colors">sustainability</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 transition-colors">T&C</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: PRODUCTS CATEGORY 1 LINKS */}
         <div className="lg:col-span-2 text-left space-y-4">
  <h3 className="text-blue-700 text-base md:text-lg font-bold tracking-tight">
    Products
  </h3>

  <ul className="space-y-2.5 text-xs md:text-sm font-medium text-zinc-700">
    <li><Link href="/products/quickfix-all-purpose-adhesive" className="hover:text-blue-600 transition-colors">Quickfix All Purpose Adhesive</Link></li>
    <li><Link href="/products/super-glue-cyanoacrylate-adhesive" className="hover:text-blue-600 transition-colors">Super Glue</Link></li>
    <li><Link href="/products/durobond-cyanoacrylate-adhesive" className="hover:text-blue-600 transition-colors">Durobond</Link></li>
    <li><Link href="/products/super-glue-hv-700-rapid-hv-glue" className="hover:text-blue-600 transition-colors">Super Glue HV</Link></li>
    <li><Link href="/products/quickgum-gluepen-coloured-synthetic-gum" className="hover:text-blue-600 transition-colors">Quickgum & Gluepen</Link></li>
    <li><Link href="/products/quickkraft-white-glue" className="hover:text-blue-600 transition-colors">Quickkraft White Glue</Link></li>
    <li><Link href="/products/durofix-rubber-base-adhesive" className="hover:text-blue-600 transition-colors">Durofix</Link></li>
    <li><Link href="/products/durofix-535-rubber-base-adhesive" className="hover:text-blue-600 transition-colors">SR-535</Link></li>
    <li><Link href="/products/sr-525" className="hover:text-blue-600 transition-colors">SR-525</Link></li>
    <li><Link href="/products/sp-500-sprayable" className="hover:text-blue-600 transition-colors">SP-500 Sprayable</Link></li>
  </ul>
</div>

          {/* COLUMN 4: PRODUCTS CATEGORY 2 LINKS */}
        <div className="lg:col-span-2 text-left space-y-4">
  <h3 className="text-blue-700 text-base md:text-lg font-bold tracking-tight">
    More Products
  </h3>

  <ul className="space-y-2.5 text-xs md:text-sm font-medium text-zinc-700">
    <li><Link href="/products/quickseal-epoxy-putty" className="hover:text-blue-600 transition-colors">Quickseal</Link></li>
    <li><Link href="/products/quickseal-rapid" className="hover:text-blue-600 transition-colors">Quickseal Rapid</Link></li>
    <li><Link href="/products/quickseal-sanitary-epoxy-putty-white" className="hover:text-blue-600 transition-colors">Quickseal Sanitary</Link></li>
    <li><Link href="/products/quicktite-versatile-epoxy-adhesive" className="hover:text-blue-600 transition-colors">Quicktite</Link></li>
    <li><Link href="/products/quickfix-ptfe-tape" className="hover:text-blue-600 transition-colors">PTFE Tape</Link></li>
    <li><Link href="/products/quickplumb" className="hover:text-blue-600 transition-colors">Quickplumb</Link></li>
    <li><Link href="/products/quickfix-cpvc-solvent-cement" className="hover:text-blue-600 transition-colors">CPVC Solvent Cement</Link></li>
    <li><Link href="/products/quickfix-pvc-solvent-cement" className="hover:text-blue-600 transition-colors">PVC Solvent Cement</Link></li>
    <li><Link href="/products/quickfix-upvc-solvent-cement-blue" className="hover:text-blue-600 transition-colors">UPVC Solvent Cement</Link></li>
    <li><Link href="/products/wemlac-tilequre-the-tile-cleaning-expert" className="hover:text-blue-600 transition-colors">TileQure</Link></li>
  </ul>
</div>

          {/* COLUMN 5: CONTACT MEDIA & CHANNELS */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h3 className="text-blue-700 text-base md:text-lg font-bold tracking-tight">
              Contacts
            </h3>
            
            <div className="space-y-3">
              {/* Telephone Matrix Callout */}
              <div className="flex items-center gap-3 text-zinc-800 font-medium text-xs md:text-sm">
                <FiPhone size={18} className="text-blue-700 shrink-0" />
                <span className="whitespace-nowrap">1800-XXX-XXXX</span>
              </div>

              {/* Email Communications Node */}
              <div className="flex items-center gap-3 text-zinc-800 font-medium text-xs md:text-sm break-all">
                <FiMail size={18} className="text-blue-700 shrink-0" />
                <span>Officialquickfix@gmail.com</span>
              </div>
            </div>

            {/* Social Communications Links Icon Badges */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="#" aria-label="Instagram" className="w-7 h-7 bg-gradient-to-tr from-amber-500 via-red-500 to-purple-600 text-white rounded-md flex items-center justify-center text-sm shadow-xs hover:scale-105 transition-transform">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="w-7 h-7 bg-blue-600 text-white rounded-md flex items-center justify-center text-sm shadow-xs hover:scale-105 transition-transform">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="w-7 h-7 bg-sky-500 text-white rounded-md flex items-center justify-center text-sm shadow-xs hover:scale-105 transition-transform">
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ======================================================= */}
      {/* BOTTOM FOOTER FRAME: COPYRIGHT STAMP CREDITS             */}
      {/* ======================================================= */}
      <div className="w-full border-t border-gray-100 py-6 text-center px-4">
        <p className="text-blue-800 text-xs md:text-sm font-bold tracking-wide">
          © 2026 designed and managed by <a href="https://skywarddigitalsolutions.com">Skyward Digital Solutions</a> . All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}