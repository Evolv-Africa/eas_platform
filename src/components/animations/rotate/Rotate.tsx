import React from "react";
import { motion } from "motion/react";

interface RotateProps {
  children: React.ReactNode;
  /** Whether the rotation is triggered/active */
  isRotated: boolean;
  /** Rotation angle in degrees when triggered (default: 180) */
  rotation?: number;
  /** Animation duration in seconds (default: 0.3) */
  duration?: number;
  /** Animation easing (default: "easeInOut") */
  ease?: "linear" | "easeIn" | "easeOut" | "easeInOut";
  /** Additional className for styling */
  className?: string;
}

const Rotate: React.FC<RotateProps> = ({
  children,
  isRotated,
  rotation = 180,
  duration = 0.3,
  ease = "easeInOut",
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      animate={{ rotate: isRotated ? rotation : 0 }}
      transition={{
        duration,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Rotate;
