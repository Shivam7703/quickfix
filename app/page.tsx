import AboutSection from "@/component/home/about";
import HomeBanner from "@/component/home/banner";
import BlogSection from "@/component/home/blogs";
import Boxes from "@/component/home/boxes";
import FaqSection from "@/component/home/faq";
import GallerySection from "@/component/home/gallery";
import Process from "@/component/home/process";
import ProductSection from "@/component/home/product";
import ServicesSection from "@/component/home/services";
import WhyChooseSection from "@/component/home/whychoose";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
     <HomeBanner/>
     <Boxes/>
     <AboutSection/>
     {/* <ServicesSection/> */}
     <ProductSection isHome={true}/>
     <WhyChooseSection/>
     <Process/>
     <FaqSection/>
          <GallerySection/>
     <BlogSection/>
    </main>
  );
}
