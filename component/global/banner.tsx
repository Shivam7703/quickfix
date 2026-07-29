"use client";

// Import required modules
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { about1, banner1 } from "@/assets";

interface AllBannerProps {
  title?: string;
  para?: string;
  img?: any;
  slug?: string;
}

export default function AllBanner({ title, para, slug = "" }: AllBannerProps) {
  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div 
          key={slug} 
          className="w-full h-max relative"
        >
          <Image
            className="w-full h-[28vw] min-h-100 object-cover object-bottom"
            src={ about1}
            alt="sliding image"
          />
          <div className="overlay w-full h-full absolute top-0 left-0 bg-black/50 flex items-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:w-1/2 md:ml-28 flex flex-col max-md:justify-center max-md:items-center my-auto max-md:p-[8%] w-full max-md:text-center"
            >
              <motion.h2 className="lg:text-6xl capitalize font-bold mb-8 text-4xl line-clamp-2">
                {title}
              </motion.h2>
           
              <motion.p className="md:text-lg text-base max-w-2xl line-clamp-2"> 
                {para}
              </motion.p>

              <motion.p className="py-3 w-max mt-7 text-sm ">
                Home &nbsp;/ &nbsp; 
                <span className="text-yellow-500 font-bold">
                  {slug && slug.length > 20 ? `${slug.slice(0, 20)}...` : slug}
                </span>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}