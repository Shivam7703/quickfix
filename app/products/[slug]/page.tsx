import AllBanner from '@/component/global/banner'
import Productdetail from '@/component/product/detail'
import React from 'react';
import {Productdata} from "@/data/productdata";
import { notFound } from 'next/navigation';
import ServiceHighlights from '@/component/about/highlight';
import ProductSection from '@/component/home/product';


interface PageProp {
  params: {
    slug: string;
  }
}

export const createSlug = (title: string): string => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};





export default async function page({params}: PageProp) {

  const slugname = await params;

  const decodedSlug = createSlug(decodeURIComponent(slugname.slug));

  const singleproduct = Productdata.find(
    (product) => createSlug(product.title) === decodedSlug
  );

  if (!singleproduct) {
    notFound();
  }

  return (
    <div>
 <AllBanner title={singleproduct?.title} para={singleproduct?.description} slug={`products/${singleproduct?.title.slice(0,10)}..`}/>
      <Productdetail pro={singleproduct}/>
      <ProductSection isHome={true}/>    
        <ServiceHighlights/>
    </div>
  )
}

