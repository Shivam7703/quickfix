"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type Variants,
} from "framer-motion";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

type Stat = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { id: "units", value: 225000, suffix: "+", label: "Units packed per day" },
  { id: "capacity", value: 20, suffix: " MT", label: "Production capacity per day" },
  { id: "plants", value: 2, label: "Manufacturing plants" },
  { id: "distributors", value: 200, suffix: "+", label: "Distributors across India" },
  { id: "experience", value: 70, suffix: "+", label: "Years of experience" },
];

/* -------------------------------------------------------------------------- */
/*  Count-up number                                                           */
/* -------------------------------------------------------------------------- */

function Counter({
  value,
  suffix = "",
  duration = 2.4,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  // en-IN gives Indian digit grouping: 2,25,000
  const display = useTransform(motionValue, (v) =>
    Math.round(v).toLocaleString("en-IN")
  );

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      motionValue.set(value);
      return;
    }
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, duration, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {/* Screen readers get the final value; the animated one is hidden */}
      <span className="sr-only">
        {value.toLocaleString("en-IN")}
        {suffix}
      </span>
      <span aria-hidden="true">
        <motion.span>{display}</motion.span>
        {suffix}
      </span>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function StatsCounter() {
  return (
    <section
      aria-label="Quickfix at a glance"
      className="relative isolate overflow-hidden bg-yellow-500 py-7 px-4 sm:p-14 lg:px-20"
    >
      {/* Depth: soft light from top-left, warm shade from bottom-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 120% at 5% 0%, rgba(253,224,71,0.45) 0%, transparent 60%), radial-gradient(55% 110% at 100% 100%, rgba(161,98,7,0.55) 0%, transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <motion.dl
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-x-6 gap-y-10  lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:gap-x-0 lg:gap-y-0 "
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              variants={rise}
              className={[
                "flex flex-col-reverse justify-end",
                // first stat spans full width on small screens
                i === 0 ? "col-span-2 lg:col-span-1" : "",
                // vertical dividers on desktop only
                i > 0 ? "lg:border-l lg:border-stone-950/30 lg:pl-6 xl:pl-8" : "",
                i < stats.length - 1 ? "lg:pr-6 xl:pr-8" : "",
              ].join(" ")}
            >
              <dt className="mt-3 max-w-[18ch] text-sm font-semibold leading-snug text-stone-950/75 sm:text-base">
                {stat.label}
              </dt>
              <dd
                className={[
                  "font-semibold leading-none tracking-tight text-stone-950",
                  i === 0
                    ? "text-6xl sm:text-7xl lg:text-4xl xl:text-5xl"
                    : "text-4xl sm:text-5xl lg:text-4xl xl:text-5xl",
                ].join(" ")}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}