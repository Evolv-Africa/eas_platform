import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface SlideFadeProps {
  children: React.ReactNode;
  /** Direction of the slide animation */
  direction?: "left" | "right" | "up" | "down";
  /** Whether the element should be visible */
  show?: boolean;
  /** Animation duration in seconds (default: 0.3) */
  duration?: number;
  /** Distance to slide in pixels (default: 50) */
  distance?: number;
  /** Additional className */
  className?: string;
  /** Delay before animation starts (default: 0) */
  delay?: number;
  /** Initial and exit opacity (default: 0) */
  initialOpacity?: number;
}

const SlideFade: React.FC<SlideFadeProps> = ({
  children,
  direction = "up",
  show = true,
  duration = 0.3,
  distance = 50,
  className = "",
  delay = 0,
  initialOpacity = 0,
}) => {
  const directions = {
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
  };

  const initial = { ...directions[direction], opacity: initialOpacity };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className={className}
          initial={initial}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={initial}
          transition={{
            duration,
            delay,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideFade;
