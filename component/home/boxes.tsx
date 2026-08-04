import React from 'react';
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
    icon: <ImLab />,
    heading: 'ipsum Wembley Laboratories',
    para: 'Wembley Laboratories Ltd was founded in the year 1952, by pioneering entrepreneur S. Amarjit Singh Lamba and his brothers. In their quest.',
    bgColor: 'bg-blue-600',
  },
  {
    id: 2,
    icon: <ImLab />,
    heading: 'ipsum Wembley Laboratories',
    para: 'Wembley Laboratories Ltd was founded in the year 1952, by pioneering entrepreneur S. Amarjit Singh Lamba and his brothers. In their quest.',
    bgColor: 'bg-yellow-500', // Replaced yellow-500 with amber-600 for white text contrast
  },
  {
    id: 3,
    icon: <ImLab />,
    heading: 'ipsum Wembley Laboratories',
    para: 'Wembley Laboratories Ltd was founded in the year 1952, by pioneering entrepreneur S. Amarjit Singh Lamba and his brothers. In their quest.',
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