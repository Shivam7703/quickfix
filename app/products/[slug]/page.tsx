import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AllBanner from '@/component/global/banner';
import Productdetail from '@/component/product/detail';
import ServiceHighlights from '@/component/about/highlight';
import ProductSection from '@/component/home/product';
import { Productdata } from '@/data/productdata';
import { createSlug } from '@/utils/createslug';

// export mode me zaroori: jo slug build me nahi bana, wo 404 dega
export const dynamicParams = false;


export function generateStaticParams() {
  return Productdata.map((product) => ({
    slug: createSlug(product.title),
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const getProduct = (slug: string) =>
  Productdata.find((p) => createSlug(p.title) === createSlug(decodeURIComponent(slug)));

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.title} | Wembley's Quickfix`,
    description: product.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const singleproduct = getProduct(slug);

  if (!singleproduct) notFound();

  return (
    <div>
      <AllBanner
        title={singleproduct.title}
        para={singleproduct.description}
        slug={`products/${singleproduct.title.slice(0, 10)}..`}
      />
      <Productdetail pro={singleproduct} />
      <ProductSection isHome={true} />
      <ServiceHighlights />
    </div>
  );
}