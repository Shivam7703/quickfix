"use client";

import React, { useState, useMemo } from "react";
import {
  FiPackage,
  FiList,
  FiTag,
  FiCheckCircle,
  FiAlertTriangle,
  FiInfo,
  FiCheck,
  FiDollarSign,
} from "react-icons/fi";
import { TbFlask } from "react-icons/tb";

interface ProductTabsProps {
  data?: {
    id?: number;
    title?: string;
    category?: string;
    description?: string;
    imgs?: string[];
    sizes?: {
      heading?: string[];
      rows?: string[][];
    };
    usage?: string[];
    benefits?: string[];
    precaution?: string[];
    price?: {
      heading?: string[];
      rows?: string[][];
    };
  };
}

const TABS = [
  { id: "description", label: "Packaging Details", icon: FiPackage },
  { id: "additional", label: "Usage & Benefits", icon: FiList },
  { id: "prices", label: "Price List", icon: FiTag },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function ProductTabs({ data }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("description");

  const { description, sizes, usage = [], benefits = [], precaution = [], price } = data || {};

  // Separate regular benefits from chemical composition
  const { regularBenefits, compositionDetail } = useMemo(() => {
    let composition = "";
    const list = benefits.filter((item) => {
      if (item.toLowerCase().includes("composition:")) {
        composition = item.replace(/composition:\s*/i, "");
        return false;
      }
      return true;
    });
    return { regularBenefits: list, compositionDetail: composition };
  }, [benefits]);

  return (
    <section className=" max-w-6xl mx-auto my-6 ">
      {/* Tabs Navigation Header */}
      <div className="border-b border-zinc-300 relative">
        <nav
          className="flex gap-2 sm:gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
          aria-label="Product Tabs"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
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
        {activeTab === "description" && (
          <div className="space-y-6 animate-fadeIn">
            

            {sizes?.heading && sizes?.rows && sizes.rows.length > 0 && (
              <div>
                <h3 className="font-bold text-blue-600 mb-4 text-base md:text-lg flex items-center gap-2">
                  <FiPackage className="text-red-600" /> Packaging & Specification Chart
                </h3>
                <TableContainer headings={sizes.heading} rows={sizes.rows} />
              </div>
            )}
          </div>
        )}

        {/* 2. Usage & Benefits Tab */}
        {activeTab === "additional" && (
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
        {activeTab === "prices" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-blue-600 text-base md:text-lg flex items-center gap-2">
                <FiDollarSign className="text-emerald-600" /> Price List & Commercial Terms
              </h3>
            </div>
            {price?.heading && price?.rows && price.rows.length > 0 ? (
              <TableContainer headings={price.heading} rows={price.rows} isPriceTable />
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-zinc-200/80">
                <FiInfo className="mx-auto text-3xl text-zinc-300 mb-2" />
                <p className="text-zinc-500 text-sm">Price information is currently unavailable for this product.</p>
              </div>
            )}
          </div>
        )}
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