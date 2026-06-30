"use client";

import { defaultTransition } from "@/components/motion/presets";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  to: number;
  suffix?: string;
  className?: string;
};

export function AnimatedCounter({ to, suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [inView, to, count]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

type BarProps = {
  percent: number;
  className?: string;
};

export function AnimatedProgressBar({ percent, className }: BarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-valgor-500 to-valgor-400"
        initial={{ width: 0 }}
        animate={inView ? { width: `${percent}%` } : { width: 0 }}
        transition={{ ...defaultTransition, duration: 1.2, delay: 0.3 }}
      />
    </div>
  );
}
