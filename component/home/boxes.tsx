import React from 'react';
import { FaIndustry, FaFlask, FaBoxes } from 'react-icons/fa';
import { ImLab } from 'react-icons/im';

interface CardItem {
  id: number;
  icon: React.ReactNode;
  heading: string;
  para: string;
  bgColor: string; // Storing full utility class strings
}

const data: CardItem[] = [
  {
    id: 1,
    icon: <FaIndustry />,
    heading: 'Trusted Manufacturing Excellence',
    para: 'With over 70 years of manufacturing experience, Wembley Laboratories delivers high-performance adhesive solutions trusted for their consistent quality, reliability, and superior bonding performance.',
    bgColor: 'bg-blue-600',
  },
  {
    id: 2,
    icon: <FaFlask />,
    heading: 'Research & Innovation',
    para: 'Our dedicated research and development team continuously enhances existing products while developing innovative adhesive solutions that meet the changing requirements of consumers and industries.',
    bgColor: 'bg-yellow-500',
  },
  {
    id: 3,
    icon: <FaBoxes />,
    heading: 'Wide Range of Adhesive Solutions',
    para: 'From all-purpose adhesives and instant glues to epoxy systems, solvent cements, sealants, tapes, and specialty products, QuickFix offers solutions for domestic, commercial, and industrial bonding applications.',
    bgColor: 'bg-blue-600',
  },
];

export default function Boxes() {
  return (
    <section className="flex  w-full overflow-x-auto scrollbar-none">
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex w-full shrink-0 items-start gap-4 p-6 text-white sm:w-1/2 md:w-1/3 md:border-r md:border-white/20 lg:p-9 ${item.bgColor}`}
        >
          {/* Icon Badge */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 text-2xl aspect-square md:h-14 md:w-14 md:text-3xl">
            {item.icon}
          </div>

          {/* Text Content */}
          <div className="space-y-2">
            <h3 className="text-base font-bold sm:text-lg">{item.heading}</h3>
            <p className="text-xs text-white/90 sm:text-sm">{item.para}</p>
          </div>
        </div>
      ))}
    </section>
  );
}