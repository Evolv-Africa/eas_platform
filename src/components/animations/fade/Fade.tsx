import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface FadeProps {
  children: React.ReactNode;
  /** Whether the element should be visible */
  show?: boolean;
  /** Animation duration in seconds (default: 0.3) */
  duration?: number;
  /** Additional className */
  className?: string;
  /** Delay before animation starts (default: 0) */
  delay?: number;
  /** Initial and exit opacity (default: 0) */
  initialOpacity?: number;
}

const Fade: React.FC<FadeProps> = ({
  children,
  show = true,
  duration = 0.3,
  className = "",
  delay = 0,
  initialOpacity = 0,
}) => {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className={className}
          initial={{ opacity: initialOpacity }}
          animate={{ opacity: 1 }}
          exit={{ opacity: initialOpacity }}
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

export default Fade;
