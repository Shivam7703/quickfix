"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Swiper core styles import
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Buttonmain from "../global/button";
import { banner1, banner2, banner3 } from "@/assets";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const slideimg = [
 banner1, banner2, banner3
];
 
export default function HomeBanner() {
      const uniqueId = "banner12376";
const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: `.${uniqueId}-next`,
      prevEl: `.${uniqueId}-prev`,
    },
    modules: [Autoplay, EffectFade, Navigation],
    effect: "fade",
  };
  return (
    <section className="w-full h-full bg-white relative group">
      <Swiper
       {...swiperOptions}  className="mySwiper w-full h-full"
      >
        {slideimg.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full bg-zinc-50 overflow-hidden">
          <Image src={slide} alt="quickfix" className="w-full object-contain"/>
          </SwiperSlide>
        ))}
      </Swiper>

 <div
        className={`${uniqueId}-next absolute z-40 font-bold text-2xl hover:scale-110 bg-yellow-500 p-3 rounded-full text-white right-3 top-[51%] max-md:hidden!`}
      >
        <FaArrowRightLong />

      </div>
      <div
        className={`${uniqueId}-prev absolute z-40 font-bold text-2xl hover:scale-110 bg-yellow-500 p-3 rounded-full text-white  left-3 md:top-[51%] max-md:hidden!`}
      >
<FaArrowLeftLong />
      </div>     
    </section>
  );
}