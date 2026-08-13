"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { 
  FiPhone, FiMail, FiFacebook, FiInstagram, FiTwitter, 
  FiChevronRight, FiChevronDown, FiMenu, FiX, 
  FiLinkedin
} from "react-icons/fi";
import { logo } from "@/assets";
import Buttonmain from "./global/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  // { name: "Services", href: "/services" },
 {
  name: "Products",
  href: "/products",
  subnav: [
    {
      name: "All Purpose Adhesive",
      href: "#",
      subnav: [
        { name: "Quickfix All Purpose Adhesive", href: "/products/quickfix-all-purpose-adhesive" },
      ],
    },
    {
      name: "Cyanoacrylate",
      href: "#",
      subnav: [
        { name: "Superglue", href: "/products/super-glue-cyanoacrylate-adhesive" },
        { name: "Durobond", href: "/products/durobond-cyanoacrylate-adhesive" },
        { name: "Superglue HV", href: "/products/super-glue-hv-700-rapid-hv-glue" },
      ],
    },
    {
      name: "Fragrant Gum",
      href: "#",
      subnav: [
        { name: "Quickgum & Gluepen", href: "/products/quickgum-gluepen-coloured-synthetic-gum" },
      ],
    },
    {
      name: "White Adhesive",
      href: "#",
      subnav: [
        { name: "Quickkraft", href: "/products/quickkraft-white-glue" },
      ],
    },
    {
      name: "Rubber Based Adhesive",
      href: "#",
      subnav: [
        { name: "Durofix", href: "/products/durofix-rubber-base-adhesive" },
        { name: "SR-535", href: "/products/durofix-535-rubber-base-adhesive" },
        { name: "SR-525", href: "/products/sr-525" },
        { name: "SP-500 Sprayable", href: "/products/sp-500-sprayable" },
      ],
    },
    {
      name: "Epoxy Putty",
      href: "#",
      subnav: [
        { name: "Quickseal", href: "/products/quickseal-epoxy-putty" },
        { name: "Quickseal Rapid", href: "/products/quickseal-rapid" },
        { name: "Quickseal Sanitary", href: "/products/quickseal-sanitary-epoxy-putty-white" },
      ],
    },
    {
      name: "Epoxy",
      href: "#",
      subnav: [
        { name: "Quicktite", href: "/products/quicktite-versatile-epoxy-adhesive" },
      ],
    },
    {
      name: "Thread Sealant",
      href: "#",
      subnav: [
        { name: "PTFE Tape", href: "/products/quickfix-ptfe-tape" },
        { name: "Quickplumb", href: "/products/quickplumb-liquid-pipe-sealant" },
      ],
    },
    {
      name: "PVC Electrical Tape",
      href: "#",
      subnav: [
        { name: "PV Shield", href: "/products/pv-shield-electrical-pvc-tape" },
      ],
    },
    {
      name: "Solvent Cements",
      href: "#",
      subnav: [
        { name: "CPVC", href: "/products/quickfix-cpvc-solvent-cement" },
        { name: "PVC", href: "/products/quickfix-pvc-solvent-cement" },
        { name: "PVFix", href: "/products/pv-fix-clear-solvent-cement" },
        { name: "UPVC", href: "/products/quickfix-upvc-solvent-cement-blue" },
        { name: "UPVC Clear", href: "/products/quickfix-upvc-solvent-cement-clear" },
        { name: "Multipurpose", href: "/products/quickfix-multipurpose-solvent-cement" },
        { name: "Quickguard", href: "/products/quickguard-pvc-solvent-cement" },
      ],
    },
    {
      name: "Ball Valve",
      href: "#",
      subnav: [
        { name: "CPVC Ball Valve", href: "/products/quickfix-cpvc-ball-valve-non-threaded" },
        { name: "UPVC Ball Valve", href: "/products/quickfix-upvc-ball-valve-non-threaded" },
      ],
    },
    {
      name: "Drain Cleaner",
      href: "#",
      subnav: [
        { name: "DrainQure", href: "/products/drainqure-instant-drain-cleaner" },
      ],
    },
    {
      name: "Wood Adhesive",
      href: "#",
      subnav: [
        { name: "Quickcol SH", href: "/products/quickcol-wsh-synthetic-resin-adhesive" },
      ],
    },
    {
      name: "Binder",
      href: "#",
      subnav: [
        { name: "Quickcol WDB", href: "/products/quickcol-wdb-synthetic-adhesive-binder" },
      ],
    },
    {
      name: "NC Thinner",
      href: "#",
      subnav: [
        { name: "Wemlac", href: "/products/wemlac-high-gloss-nc-reducer" },
      ],
    },
    {
      name: "Paint Stripper",
      href: "#",
      subnav: [
        { name: "Paint Stripper", href: "/products/wemlac-paint-stripper" },
      ],
    },
    {
      name: "Tile Cleaner",
      href: "#",
      subnav: [
        { name: "TileQure", href: "/products/wemlac-tilequre-the-tile-cleaning-expert" },
      ],
    },
  ],
},
  { name: "Career", href: "/career" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Agar user niche ja raha hai aur scroll threshold 150px se zyaada hai, toh hide karo
    if (latest > previous && latest > 80) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });


  return (
    <header 
      className={`sticky z-50 w-full bg-white shadow-sm transition-all duration-300 ease-in-out ${
        isHidden ? "-top-36" : "top-0"
      }`}
    >
      {/* Top Bar - Contact info (Desktop Only) */}
      <div className="bg-gray-50 py-2 text-xs md:text-sm border-b hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center gap-6 text-zinc-800 font-light">
          <a href="tel:+919805403302" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <FiPhone className="text-blue-600" /> +91-9805403302
          </a>
          <span className="text-gray-300">|</span>
          <a href="mailto:info@wembleysquickfix.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <FiMail className="text-blue-600" /> info@wembleysquickfix.com
          </a>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-3">
            <span className="text-gray-500">Follow</span>
            <a href="https://www.facebook.com/wembleyadhesives" className="hover:text-blue-600 transition-colors"><FiFacebook /></a>
            <a href="https://www.instagram.com/wembleyadhesives?utm_medium=copy_link" className="hover:text-blue-600 transition-colors"><FiInstagram /></a>
            <a href="https://x.com/wembleyadhesive?s=09" className="hover:text-blue-600 transition-colors"><FiTwitter /></a>
            <a href="https://www.linkedin.com/company/wembley-s-quickfix" className="hover:text-blue-600 transition-colors"><FiLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Red Highlight Branding Strip */}
      <div className="bg-red-600 text-white text-center py-1.5 text-[10px] md:text-xs font-medium tracking-wide uppercase shadow-inner">
        India's Trusted Instant Adhesive Brand
      </div>

      {/* Main Nav Wrapper */}
      <div className="border-b bg-white/95 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between gap-4">
          
          {/* Hamburger Menu Icon (Mobile Only) */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FiMenu size={24} />
          </button>

          {/* Logo Brand area */}
          <Link href="/" className="w-max">
          <Image src={logo} alt="logo" className="max-w-44 w-[30vw]"/>
          </Link>
          
          {/* Main Desktop Links */}
          <div className="hidden lg:flex items-center xl:gap-8 gap-5">
            {navLinks.map((item) => (
              <DesktopNavItem key={item.name} item={item} active={pathname === item.href} />
            ))}
          </div>

          {/* Action Call Button */}
          <div>
            <Buttonmain text="Download Brochure" href="mailto:info@quickfix.com" variant="primary"/>
          </div>
        </nav>
      </div>
      {/* ========================================= */}
      {/* MOBILE ACCORDION DRAWER MENU SYSTEM       */}
      {/* ========================================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Dark Overlay Background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />

            {/* Mobile Drawer */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white z-50 p-6  flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between border-b pb-4 mb-4">
                  <Image src={logo} alt="logo" className="max-w-44"/>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 text-gray-500 hover:text-black">
                    <FiX size={20} />
                  </button>
                </div>

                {/* Accordion List Area */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((item) => (
                    <MobileAccordionItem 
                      key={item.name} 
                      item={item} 
                      pathname={pathname} 
                      onClose={() => setIsMobileMenuOpen(false)} 
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="border-t pt-4 bg-gray-50 -mx-6 -mb-6 p-6 space-y-3 mt-8">
                <a href="tel:1800-XXX-XXXX" className="flex items-center gap-2 text-sm text-zinc-800"><FiPhone className="text-blue-600" /> 1800-XXX-XXXX</a>
                <a href="mailto:care@quickfix.com" className="flex items-center gap-2 text-sm text-zinc-800"><FiMail className="text-blue-600" /> care@quickfix.com</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ======================================================= */
/* MOBILE ACCORDION SECTIONS (Niche khulne wala logic)   */
/* ======================================================= */
function MobileAccordionItem({ item, pathname, onClose }: { item: any; pathname: string; onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubnav = item.subnav && item.subnav.length > 0;

  return (
    <div className="border-b border-gray-100 ">
      {hasSubnav ? (
        // Agar subnav h to Collapse Button dikhao
        <div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full py-3 flex items-center justify-between text-gray-800 font-medium text-left"
          >
            <span>{item.name}</span>
            <FiChevronDown className={`text-zinc-800 font-black transition-transform duration-200 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
          </button>

          {/* Step 2: Nested Subnav items inside wrapper */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden pl-4 bg-gray-50 rounded-md"
              >
                {item.subnav.map((sub: any) => {
                  const hasInnerSubnav = sub.subnav && sub.subnav.length > 0;
                  return (
                    <div key={sub.name} className="py-1">
                      {hasInnerSubnav ? (
                        <InnerMobileAccordion sub={sub} onClose={onClose} />
                      ) : (
                        <Link 
                          href={sub.href} 
                          onClick={onClose}
                          className="block py-2.5 text-sm text-gray-700 font-medium"
                        >
                          {sub.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        // Agar single link hai to direct navigate kro
        <Link 
          href={item.href} 
          onClick={onClose}
          className={`block py-3 font-medium ${pathname === item.href ? "text-blue-600" : "text-gray-800"}`}
        >
          {item.name}
        </Link>
      )}
    </div>
  );
}

// Step 3: Inner Accordion level 3 (Jaise Products -> Adhesives -> Instant Glue)
function InnerMobileAccordion({ sub, onClose }: { sub: any; onClose: () => void }) {
  const [isInnerOpen, setIsInnerOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsInnerOpen(!isInnerOpen)}
        className="w-full py-2.5 flex items-center justify-between text-sm text-gray-700 font-medium text-left"
      >
        <span>{sub.name}</span>
        <FiChevronDown className={`text-xs text-gray-400 transition-transform duration-200 ${isInnerOpen ? "rotate-180 text-blue-600" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {isInnerOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            className="overflow-hidden pl-4 flex flex-col border-l border-gray-200"
          >
            {sub.subnav.map((child: any) => (
              <Link 
                key={child.name} 
                href={child.href} 
                onClick={onClose}
                className="py-2 text-xs text-zinc-800 font-medium hover:text-blue-600"
              >
                {child.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


/* ======================================================= */
/* DESKTOP NAV COMPONENT (Hover Right Dropdown Logic)      */
/* ======================================================= */
function DesktopNavItem({ item, active }: { item: any; active: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative py-2" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Link 
        href={item.href} 
        className={`flex items-center gap-1 text-[15px] font-medium tracking-wide transition-colors ${
          active ? "text-blue-600 font-bold" : "text-gray-700 hover:text-blue-600"
        }`}
      >
        {item.name}
        {item.subnav && <FiChevronDown className={`text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />}
      </Link>

      {active && (
        <motion.div 
          layoutId="activeUnderline" 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
        />
      )}

      <AnimatePresence>
        {isOpen && item.subnav && (
          <motion.div 
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
            className="absolute top-full left-0 bg-white shadow-2xl border border-gray-100 rounded-lg py-2 w-52 z-60 mt-1"
          >
            {item.subnav.map((sub: any) => (
              <div key={sub.name} className="relative group px-4 py-2.5 hover:bg-gray-50 flex items-center justify-between text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
                <span>{sub.name}</span>
                {sub.subnav && <FiChevronRight className="text-xs text-gray-400" />}
                
                {sub.subnav && (
                  <div className="absolute left-[98%] top-0 bg-white shadow-2xl border border-gray-100 rounded-lg py-2 w-48 hidden group-hover:block">
                    {sub.subnav.map((child: any) => (
                      <Link key={child.name} href={child.href} className="block px-4 py-2.5 text-sm text-zinc-800 hover:text-blue-600 hover:bg-gray-50">
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}