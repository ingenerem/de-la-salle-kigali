"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
};

export default function FadeIn({ children, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 10, ease: "easeOut" }}
      className={`h-full ${className}`}
    >
      {children}
    </motion.div>
  );
}