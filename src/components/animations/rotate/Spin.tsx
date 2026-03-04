import React from "react";
import { motion } from "motion/react";

interface SpinProps {
  children: React.ReactNode;
  /** Rotation angle in degrees (default: 360) */
  rotation?: number;
  /** Animation duration in seconds (default: 1) */
  duration?: number;
  /** Animation easing (default: "linear") */
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut";
  /** Number of times to repeat (default: Infinity) */
  repeat?: number;
  /** Whether to alternate rotation direction (default: false) */
  reverse?: boolean;
  /** Additional className for styling */
  className?: string;
}

const Spin: React.FC<SpinProps> = ({
  children,
  rotation = 360,
  duration = 1,
  ease = "linear",
  repeat = Infinity,
  reverse = false,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      animate={{ rotate: rotation }}
      transition={{
        duration,
        ease,
        repeat,
        repeatType: reverse ? "reverse" : "loop",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Spin;
