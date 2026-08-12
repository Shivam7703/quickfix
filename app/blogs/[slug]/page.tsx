import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/data/blogdata";
import { blg1 } from "@/assets";
import { createSlug } from "@/app/products/[slug]/page";
import AllBanner from "@/component/global/banner";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper function to create consistent URL slugs


export async function generateStaticParams() {
  return blogData.map((blog: any) => ({
    slug: createSlug(blog.title),
  }));
}

export default async function blogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = createSlug(decodeURIComponent(slug));

  const singleblog = blogData.find(
    (item: any) => createSlug(item.title) === decodedSlug
  );

  if (!singleblog) {
    notFound();
  }

  return (
    <>
                  <AllBanner title={singleblog.title} para=' ' slug={`blogs/${singleblog.title.slice(0, 13)}...`}/>
    
    <main className="lg:p-20 md:p-16 sm:p-12 py-8 px-6 max-w-350 mx-auto  min-h-screen">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-14 justify-between">
        
        {/* Main Content Area (60%) */}
        <div className="md:w-[62%] w-full space-y-6">
          {/* Main Hero Image */}
          <div className="relative w-full h-70 sm:h-100 md:h-112.5 rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={singleblog.img || blg1}
              alt={singleblog.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* HTML Description Content Render */}
          <div className="">
            <div
              dangerouslySetInnerHTML={{ __html: singleblog.desc }}
            />
          </div>
        </div>

        {/* Sidebar blog Section (35%) */}
        <aside className="md:w-[35%] w-full space-y-6">
          <div className="sticky top-10 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
              Latest blog
            </h3>

            <div className="space-y-6">
              {blogData.slice(0, 6).map((blog: any) => {
                const blogUrl = `/blogs/${createSlug(blog.title)}`;

                return (
                  <Link
                    key={blog.id}
                    href={blogUrl}
                    className="group block space-y-3 pb-5 border-b border-slate-100 last:border-none"
                  >
                    {/* Sidebar Item Image */}
                    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src={blog.img || blg1}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Sidebar Item Title & Tag */}
                    <div className="space-y-2">
                      <h4 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-600 line-clamp-2 leading-snug transition-colors">
                        {blog.title}
                      </h4>
                      
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          Updates
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>

      </div>
    </main>
    </>
  );
}