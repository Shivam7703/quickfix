import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
  fullWidthOnMobile?: boolean; // Mobile responsive control toggle
}

function Buttonmain({
  href,
  text,
  variant = "primary",
}: ButtonProps) {
  const isExternal =
    href.startsWith("tel:") ||
    href.startsWith("https:") ||
    href.startsWith("mailto:") ||
    href.startsWith("www.");

  // Mobile check styling class logic
  const wrapperClass = ` w-max
   inline-block group/btn text-center`;

  if (variant === "secondary") {
    return (
      <ButtonSecondary 
        href={href} 
        text11={text} 
        isExternal={isExternal} 
        wrapperClass={wrapperClass} 
      />
    );
  }

  if (isExternal) {
    return (
      <a href={href} className={wrapperClass}>
        <Button text11={text} />
      </a>
    );
  }

  return (
    <Link href={href} className={wrapperClass}>
      <Button text11={text} />
    </Link>
  );
}

export default Buttonmain;

/* ==========================================================================
   Primary Button UI (Red to Blue Premium Glossy Gradient Accent)
   ========================================================================== */
function Button({ text11 }: { text11: string }) {
  return (
    <span
      className="
        inline-flex items-center justify-center sm:gap-2.5 sm:px-6 py-3 px-4 gap-1.5 text-xs  rounded-lg w-full
        sm:text-sm sm:font-semibold tracking-wide transition-all duration-300 group
        relative overflow-hidden shadow-md hover:scale-[0.95]
        
        /* Premium Light Theme Gradient using your core colors */
        hover:bg-yellow-500 text-white 
     bg-blue-700 shadow-blue-600/20 hover:shadow-lg
      "
    >
      <span className="relative z-10">{text11}</span>
      <FaArrowRight
        size={12}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
      />
    </span>
  );
}

/* ==========================================================================
   Secondary Outlined Button UI (Border Interaction with fill)
   ========================================================================== */
function ButtonSecondary({
  text11,
  href,
  isExternal,
  wrapperClass,
}: {
  text11: string;
  href: string;
  isExternal: boolean;
  wrapperClass: string;
}) {
  const classes = `
    inline-flex items-center justify-center sm:gap-2.5 sm:px-6 py-3 px-4 gap-1.5 text-xs rounded-lg w-full
    sm:text-sm font-semibold tracking-wide transition-all duration-300 group
    relative overflow-hidden border backdrop-blur-sm shadow-sm active:scale-[0.98]
    
    /* Luxury styling matching light layout using core colors */
    border-blue-600 text-blue-600 hover:text-white
  `;

  const inner = (
    <>
      {/* Background slide fill on hover using your primary blue */}
      <span
        className="
          absolute inset-0 translate-y-full group-hover/btn:translate-y-0
          transition-transform duration-300 ease-in-out -z-10
          bg-blue-600
        "
      />

      <span className="relative capitalize z-10">{text11}</span>
      <FaArrowRight
        size={12}
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
      />
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={`${classes} ${wrapperClass}`}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={`${classes} ${wrapperClass}`}>
      {inner}
    </Link>
  );
}