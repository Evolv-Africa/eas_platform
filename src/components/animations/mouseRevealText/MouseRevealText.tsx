import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { MouseEvent, useRef, useState } from "react";

interface MouseRevealProps {
  text: string;
  secondaryText?: string;
  containerClassName?: string;
  maskSize?: number;
  /** Show the spotlight on load at (0,0). Default: false (hidden until mouse enters) */
  revealOnLoad?: boolean;
  textDirection?: "center" | "left" | "right";
}

export const MouseRevealText: React.FC<MouseRevealProps> = ({
  text,
  secondaryText,
  containerClassName = "",
  maskSize = 200,
  revealOnLoad = false,
  textDirection = "center",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(revealOnLoad);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Convert numeric MotionValues to pixel strings for CSS variables
  const xPx = useTransform(smoothX, (v) => `${v}px`);
  const yPx = useTransform(smoothY, (v) => `${v}px`);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (!hasEntered) setHasEntered(true);
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  const handleMouseLeave = () => {
    setHasEntered(false);
  };
  const textDirectionClass = () => {
    if (textDirection === "center") return "text-center";
    if (textDirection === "left") return "text-left";
    return "text-right";
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full overflow-hidden select-none cursor-none ${containerClassName}`}
    >
      {/* Background Layer: Dim text */}
      <div
        className={`md:text-[140px] md:leading-45 tracking-[-2.33px] font-bold font-neue-machina text-blue-800/30 ${textDirectionClass()}`}
      >
        {text}
        {secondaryText && (
          <>
            <br />
            {secondaryText}
          </>
        )}
      </div>

      {/* Foreground Layer: Revealed text behind the spotlight mask */}
      {hasEntered && (
        <motion.div
          className={`absolute inset-0 flex items-center justify-center md:text-[140px] md:leading-45 tracking-[-2.33px] font-bold font-neue-machina pointer-events-none ${textDirectionClass()}`}
          style={
            {
              WebkitMaskImage: `radial-gradient(circle ${maskSize}px at var(--mx) var(--my), black 0%, transparent 100%)`,
              maskImage: `radial-gradient(circle ${maskSize}px at var(--mx) var(--my), black 0%, transparent 100%)`,
              "--mx": xPx,
              "--my": yPx,
            } as React.CSSProperties
          }
        >
          <span className="bg-linear-to-br from-green-400 to-blue-400 bg-clip-text text-transparent">
            {text}
            {secondaryText && (
              <>
                <br />
                {secondaryText}
              </>
            )}
          </span>
        </motion.div>
      )}
    </div>
  );
};
