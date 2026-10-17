"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { footlogo } from "@/assets";

const WHATSAPP_NUMBER = "+918527499493";
const WHATSAPP_MESSAGE =
  "Hi Quickfix! I'd like to know more about becoming a vendor or product enquiry.";

// Same pages as the header navigation, plus Sustainability
const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Career", href: "/career" },
  { label: "OEM", href: "/oem" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Sustainability", href: "/sustainability" },
];

// Slugs copied from the live product pages
const productLinks = [
  { label: "Quickfix All Purpose", href: "/products/quickfix-all-purpose-adhesive" },
  { label: "Superglue", href: "/products/super-glue-cyanoacrylate-adhesive" },
  { label: "Durobond", href: "/products/durobond-cyanoacrylate-adhesive" },
  { label: "Superglue HV", href: "/products/super-glue-hv-700-rapid-hv-glue" },
  { label: "Quickgum & Gluepen", href: "/products/quickgum-glupen-coloured-synthetic-gum" },
  { label: "Quickkraft", href: "/products/quickkraft-white-glue" },
  { label: "Durofix", href: "/products/durofix-rubber-base-adhesive" },
  { label: "SR-525", href: "/products/durofix-525-rubber-base-adhesive" },
  { label: "SR-535", href: "/products/durofix-535-rubber-base-adhesive" },
  { label: "SP-500 Sprayable", href: "/products/durotack-sp500-sprayable-adhesive" },
];

const moreProductLinks = [
  { label: "Quickseal", href: "/products/quickseal-epoxy-putty" },
  { label: "Quickseal Sanitary", href: "/products/quickseal-sanitary-epoxy-putty-white" },
  { label: "Quicktite", href: "/products/quicktite-standard-epoxy-adhesive" },
  { label: "PTFE Tape", href: "/products/quickfix-ptfe-tape" },
  { label: "Quickplumb", href: "/products/quickplumb-liquid-pipe-sealant" },
  { label: "CPVC Solvent Cement", href: "/products/quickfix-cpvc-solvent-cement" },
  { label: "PVC Solvent Cement", href: "/products/quickfix-pvc-solvent-cement" },
  { label: "UPVC Solvent Cement", href: "/products/quickfix-upvc-solvent-cement-blue" },
  { label: "TileQure", href: "/products/wemlac-tilequre-the-tile-cleaning-expert" },
];

const linkClass = "hover:text-blue-600 transition-colors";
const headingClass = "text-blue-700 text-base md:text-lg font-bold tracking-tight";
const listClass = "space-y-2.5 text-xs md:text-sm font-medium text-zinc-700";

function LinkColumn({ title, links }) {
  return (
    <div className="lg:col-span-2 text-left space-y-4">
      <h3 className={headingClass}>{title}</h3>
      <ul className={listClass}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link href={href} className={linkClass}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <footer className="w-full bg-white text-zinc-600 font-sans border-t border-gray-400">
      {/* WhatsApp floating button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-2 sm:w-12 sm:h-12 w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white flex items-center justify-center shadow-lg hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all z-60"
      >
        <FaWhatsapp size={24} />
      </a>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4 flex flex-col items-start text-left">
            <div className="relative w-44 h-16 select-none">
              <Image
                src={footlogo}
                alt="Wembley's Quickfix Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>

            <div className="space-y-2">
              <h4 className="text-blue-800 text-sm md:text-base font-bold tracking-tight">
                Driven by Expertise &amp; Innovation
              </h4>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-sm">
                Quickfix combines adhesive expertise, product development, manufacturing
                capabilities, and quality-focused processes to deliver reliable solutions for
                diverse applications.
              </p>
            </div>
          </div>

          <LinkColumn title="Company" links={companyLinks} />
          <LinkColumn title="Products" links={productLinks} />
          <LinkColumn title="More Products" links={moreProductLinks} />

          {/* Contacts */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h3 className={headingClass}>Contacts</h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-zinc-800 font-medium text-xs md:text-sm">
                <FiPhone size={18} className="text-blue-700 shrink-0" />
                <span className="whitespace-nowrap">
                  <a href="tel:+919805403302">+91-9805403302</a>
                </span>
              </div>

              <div className="flex items-center gap-3 text-zinc-800 font-medium text-xs md:text-sm break-all">
                <FiMail size={18} className="text-blue-700 shrink-0" />
                <span>
                  <a href="mailto:info@wembleysquickfix.com">info@wembleysquickfix.com</a>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.instagram.com/wembleyadhesives?utm_medium=copy_link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-7 h-7 bg-linear-to-tr from-amber-500 via-red-500 to-purple-600 text-white rounded-md flex items-center justify-center text-sm shadow-xs hover:scale-105 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/wembleyadhesives"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 bg-blue-600 text-white rounded-md flex items-center justify-center text-sm shadow-xs hover:scale-105 transition-transform"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/wembleyadhesive?s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-7 h-7 bg-sky-500 text-white rounded-md flex items-center justify-center text-sm shadow-xs hover:scale-105 transition-transform"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/wembley-s-quickfix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-7 h-7 bg-blue-600 text-white rounded-md flex items-center justify-center text-sm shadow-xs hover:scale-105 transition-transform"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full border-t border-gray-100 py-6 text-center px-4">
        <p className="text-blue-800 text-xs md:text-sm font-bold tracking-wide">
          © 2026 designed and managed by{" "}
          <a href="https://skywarddigitalsolutions.com" target="_blank" rel="noopener noreferrer">
            Skyward Digital Solutions
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}