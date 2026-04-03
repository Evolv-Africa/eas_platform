import React, { useCallback, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";

type Direction = "rtl" | "ltr" | "utb" | "btu";

interface MarqueeProps {
  children: React.ReactNode;
  /** Scroll direction (default: "rtl") */
  direction?: Direction;
  /** Duration of one full cycle in seconds (default: 20) */
  duration?: number;
  /** Pause animation on hover (default: true) */
  pauseOnHover?: boolean;
  /** Gap between items in pixels (default: 48) */
  gap?: number;
  /** Additional className for the outer wrapper */
  className?: string;
  /** Array of strings to repeat in the marquee */
  repetitionArray?: string[];
}

const isHorizontal = (dir: Direction) => dir === "rtl" || dir === "ltr";
const isReverse = (dir: Direction) => dir === "ltr" || dir === "utb";

const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = "rtl",
  duration = 20,
  pauseOnHover = true,
  gap = 48,
  className = "",
  repetitionArray = ["primary", "duplicate"],
}) => {
  const [paused, setPaused] = useState(false);
  const horizontal = isHorizontal(direction);
  const reverse = isReverse(direction);
  const contentRef = useRef<HTMLDivElement>(null);
  const translate = useMotionValue(0);
  const initialized = useRef(false);

  const initOffset = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || initialized.current) return;
      contentRef.current = node;
      const size = horizontal ? node.offsetWidth : node.offsetHeight;
      const loopSize = size + gap;
      translate.set(-loopSize * 0.5);
      initialized.current = true;
    },
    [horizontal, gap, translate],
  );

  useAnimationFrame((_, delta) => {
    if (paused || !contentRef.current) return;

    const size = horizontal
      ? contentRef.current.offsetWidth
      : contentRef.current.offsetHeight;
    const loopSize = size + gap;
    const speed = loopSize / duration;
    const step = speed * (delta / 1000);

    let current = translate.get();

    if (reverse) {
      current += step;
      if (current >= 0) current -= loopSize;
    } else {
      current -= step;
      if (current <= -loopSize) current += loopSize;
    }

    translate.set(current);
  });

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <motion.div
        className={horizontal ? "flex" : "flex flex-col"}
        style={{
          gap,
          ...(horizontal ? { x: translate } : { y: translate }),
        }}
      >
        {repetitionArray.map((key, i) => (
          <div
            key={key}
            ref={i === 0 ? initOffset : undefined}
            className={
              horizontal
                ? "flex shrink-0 items-center"
                : "flex shrink-0 flex-col items-center"
            }
            style={{ gap }}
            aria-hidden={i > 0 || undefined}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
