"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SlideRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/** Apparition progressive au montage du slide (animations « lazy » par slide). */
export function SlideReveal({
  children,
  delay = 0,
  className,
}: SlideRevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
