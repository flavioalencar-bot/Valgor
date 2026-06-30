"use client";

import { defaultTransition, fadeUp } from "@/components/motion/presets";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </Component>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className }: StaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={fadeUp} transition={defaultTransition}>
      {children}
    </motion.div>
  );
}
