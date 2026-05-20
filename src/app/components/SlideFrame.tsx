"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface SlideFrameProps {
  children: ReactNode;
  slideId: number;
  transitionType: string;
  speed: number;
}

export default function SlideFrame({
  children,
  slideId,
  transitionType,
  speed,
}: SlideFrameProps) {
  // Define transitions based on user preferences
  const duration = speed / 1000;

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    "slide-left": {
      initial: { x: "100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "-100%", opacity: 0 },
    },
    "slide-right": {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: "100%", opacity: 0 },
    },
    zoom: {
      initial: { scale: 0.85, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.15, opacity: 0 },
    },
    flip: {
      initial: { rotateY: 90, opacity: 0, perspective: 1000 },
      animate: { rotateY: 0, opacity: 1, perspective: 1000 },
      exit: { rotateY: -90, opacity: 0, perspective: 1000 },
    },
    cube: {
      initial: { rotateX: 65, y: 100, opacity: 0, perspective: 1200 },
      animate: { rotateX: 0, y: 0, opacity: 1, perspective: 1200 },
      exit: { rotateX: -65, y: -100, opacity: 0, perspective: 1200 },
    },
  };

  const selectedVariant = variants[transitionType as keyof typeof variants] || variants.fade;

  return (
    <div className="slide-viewport">
      <AnimatePresence mode="wait">
        <motion.div
          key={slideId}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={selectedVariant}
          transition={{
            duration: duration,
            ease: [0.25, 1, 0.5, 1], // Custom cubic-bezier (animation-curve)
          }}
          className="slide-wrapper"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
