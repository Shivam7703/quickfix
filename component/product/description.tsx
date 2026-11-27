"use client";

import React, { useState, useMemo } from "react";
import { FiPackage, FiList, FiCheckCircle, FiCheck } from "react-icons/fi";
import { TbFlask } from "react-icons/tb";

type TableShape = {
  heading?: string[];
  rows?: string[][];
};

interface ProductTabsProps {
  data?: {
    id?: number;
    title?: string;
    category?: string;
    description?: string;
    imgs?: string[];
    sizes?: TableShape | null;
    usage?: string[] | null;
    benefits?: string[] | null;
    precaution?: string[] | null;
    price?: TableShape | null;
  };
}

const TABS = [
  { id: "description", label: "Packaging Details", icon: FiPackage },
  { id: "additional", label: "Usage & Benefits", icon: FiList },
  // { id: "prices", label: "Price List", icon: FiTag },
] as const;

type TabId = (typeof TABS)[number]["id"];

// Khali ya sirf spaces wali values hata deta hai
const cleanList = (list?: string[] | null): string[] =>
  (list ?? []).filter((s): s is string => typeof s === "string" && s.trim() !== "");

// Table tabhi valid hai jab heading ho aur kam se kam ek row mein koi value ho.
// Poori khali rows hata di jaati hain.
function cleanTable(t?: TableShape | null): { heading: string[]; rows: string[][] } | null {
  const heading = t?.heading ?? [];
  const rows = (t?.rows ?? []).filter(
    (r) => Array.isArray(r) && r.some((c) => typeof c === "string" && c.trim() !== "")
  );
  return heading.length > 0 && rows.length > 0 ? { heading, rows } : null;
}

export default function ProductTabs({ data }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("description");

  const sizes = useMemo(() => cleanTable(data?.sizes), [data?.sizes]);
  const usage = useMemo(() => cleanList(data?.usage), [data?.usage]);
  const benefits = useMemo(() => cleanList(data?.benefits), [data?.benefits]);

  // Separate regular benefits from chemical composition
  const { regularBenefits, compositionDetail } = useMemo(() => {
    let composition = "";
    const list = benefits.filter((item) => {
      if (item.toLowerCase().includes("composition:")) {
        composition = item.replace(/composition:\s*/i, "").trim();
        return false;
      }
      return true;
    });
    return { regularBenefits: list, compositionDetail: composition };
  }, [benefits]);

  // Jis tab mein dikhane ko kuch nahi, wo tab bhi nahi dikhega
  const hasContent: Record<TabId, boolean> = {
    description: !!sizes,
    additional: usage.length > 0 || regularBenefits.length > 0 || !!compositionDetail,
  };
  const visibleTabs = TABS.filter((t) => hasContent[t.id]);

  // Kisi tab ka data nahi hai to poora section hi nahi dikhega
  if (visibleTabs.length === 0) return null;

  // Selected tab chhup gaya ho to pehla available tab khulega
  const currentTab: TabId = visibleTabs.some((t) => t.id === activeTab)
    ? activeTab
    : visibleTabs[0].id;

  return (
    <section className=" max-w-6xl mx-auto p-3 ">
      {/* Tabs Navigation Header */}
      <div className="border-b border-zinc-300 relative">
        <nav
          className="flex gap-2 sm:gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
          aria-label="Product Tabs"
        >
          {visibleTabs.map((tab) => {
            const isActive = currentTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 py-3.5 font-semibold text-sm md:text-base transition-all relative whitespace-nowrap ${
                  isActive
                    ? "text-blue-600 bg-zinc-100 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]"
                    : "text-zinc-700 hover:text-blue-500 hover:bg-zinc-100"
                }`}
              >
                <Icon
                  className={`text-lg transition-transform ${
                    isActive ? "text-blue-600 scale-110" : "text-zinc-400"
                  }`}
                />
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-600 rounded-t-full" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Panels */}
      <div className="pt-6 text-zinc-700">
        {/* 1. Packaging Details Tab */}
        {currentTab === "description" && sizes && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="font-bold text-blue-600 mb-4 text-base md:text-lg flex items-center gap-2">
                <FiPackage className="text-red-600" /> Packaging & Specification Chart
              </h3>
              <TableContainer headings={sizes.heading} rows={sizes.rows} />
            </div>
          </div>
        )}

        {/* 2. Usage & Benefits Tab */}
        {currentTab === "additional" && (
          <div className="grid grid-cols-1 gap-6 animate-fadeIn">
            {/* Usage Instructions */}
            {usage.length > 0 && (
              <CardSection title="Usage Instructions" icon={<FiCheckCircle className="text-yellow-600" />}>
                <ul className="space-y-3">
                  {usage.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-600 text-sm md:text-base">
                      <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardSection>
            )}

            {/* Key Benefits & Composition */}
            {(regularBenefits.length > 0 || compositionDetail) && (
              <CardSection title="Key Benefits" icon={<FiCheckCircle className="text-emerald-600" />}>
                {regularBenefits.length > 0 && (
                  <ul className="space-y-2.5 mb-4">
                    {regularBenefits.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-zinc-600 text-sm md:text-base">
                        <FiCheck className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Composition Badge */}
                {compositionDetail && (
                  <div className="flex items-center gap-2.5 bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-blue-200/80 text-blue-900 text-xs md:text-sm font-medium p-3 rounded-xl mt-3">
                    <TbFlask className="text-blue-600 text-lg flex-shrink-0" />
                    <div>
                      <span className="font-bold text-blue-600">Composition: </span>
                      <span className="text-blue-800">{compositionDetail}</span>
                    </div>
                  </div>
                )}
              </CardSection>
            )}
          </div>
        )}

        {/* 3. Prices Tab */}
        {/* {currentTab === "prices" && price && (
          <div className="space-y-4 animate-fadeIn">
            <h3 className="font-bold text-blue-600 text-base md:text-lg flex items-center gap-2">
              <FiDollarSign className="text-emerald-600" /> Price List & Commercial Terms
            </h3>
            <TableContainer headings={price.heading} rows={price.rows} isPriceTable />
          </div>
        )} */}
      </div>
    </section>
  );
}

/* Card Wrapper Component */
function CardSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-bold text-blue-600 mb-4 text-base md:text-lg flex items-center gap-2.5 border-b border-zinc-100 pb-3">
        {icon}
        {title}
      </h4>
      {children}
    </div>
  );
}

/* Reusable Dynamic Table Component */
function TableContainer({
  headings,
  rows,
  isPriceTable = false,
}: {
  headings: string[];
  rows: string[][];
  isPriceTable?: boolean;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-zinc-200/80 shadow-sm bg-white">
      <table className="w-full text-left text-xs md:text-sm border-collapse min-w-[600px] pb-2">
        <thead>
          <tr className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white font-semibold">
            {headings.map((head, idx) => (
              <th key={idx} className="py-3.5 px-4 font-semibold tracking-wider border-b border-blue-800/50 whitespace-nowrap">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
          {rows.map((row, rIdx) => (
            <tr
              key={rIdx}
              className="hover:bg-blue-50/50 transition-colors even:bg-zinc-50/30"
            >
              {row.map((cell, cIdx) => {
                const headerName = headings[cIdx]?.toLowerCase() || "";
                const isCurrency =
                  isPriceTable &&
                  cell?.trim() !== "" &&
                  (headerName.includes("rate") ||
                    headerName.includes("gst") ||
                    headerName.includes("mrp") ||
                    headerName.includes("price"));

                const isMRP = isPriceTable && headerName.includes("mrp");

                return (
                  <td
                    key={cIdx}
                    className={`py-3.5 px-4 whitespace-nowrap font-medium ${
                      isMRP
                        ? "text-blue-600 font-bold bg-amber-400/15"
                        : "text-zinc-700"
                    }`}
                  >
                    {isCurrency ? `₹${cell}` : cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}