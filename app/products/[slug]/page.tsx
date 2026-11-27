import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import AllBanner from '@/component/global/banner';
import Productdetail from '@/component/product/detail';
import ServiceHighlights from '@/component/about/highlight';
import ProductSection from '@/component/home/product';
import { getProductBySlug } from '@/lib/catalog';

// Page request aane par banta hai aur 60 second cache rehta hai.
// Dashboard mein naya product jodne ya badalne par rebuild nahi chahiye.
export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.title} | Wembley's Quickfix`,
    description: product.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const singleproduct = await getProductBySlug(slug);

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