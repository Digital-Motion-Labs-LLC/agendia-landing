"use client";

import React, { useRef } from "react";
import { motion, useInView, UseInViewOptions } from "framer-motion";

type AnimationVariant = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleUp";

interface ScrollAnimationProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  viewport?: UseInViewOptions;
}

export const ScrollAnimation = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.5,
  className = "",
  viewport = { once: true, margin: "-50px" },
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);

  const getVariants = () => {
    switch (variant) {
      case "fadeUp":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "fadeLeft":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "fadeRight":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "scaleUp":
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
