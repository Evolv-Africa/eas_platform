"use client";

import { FC, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SlideDirection = "up" | "down";
export type AnimationPreset = "smooth" | "spring" | "snappy" | "drift";

export interface VerticalSliderProps {
  /** Array of strings (or React nodes) to cycle through */
  items: string[];
  /** Milliseconds each item stays visible before transitioning */
  interval?: number;
  /** Direction the outgoing text exits */
  direction?: SlideDirection;
  /** Built-in animation feel */
  preset?: AnimationPreset;
  /** Tailwind classes applied to the outer wrapper */
  className?: string;
  /** Tailwind classes applied to each text item */
  itemClassName?: string;
  /** If true, cycles indefinitely; false = stops after last item */
  loop?: boolean;
  /** Pause cycling on hover */
  pauseOnHover?: boolean;
  /** Fires whenever the active index changes */
  onIndexChange?: (index: number) => void;
  /** Inline styles applied to the outer wrapper */
  style?: React.CSSProperties;
}

// ─── Animation presets ───────────────────────────────────────────────────────

const PRESETS: Record<
  AnimationPreset,
  { transition: object; distance: number }
> = {
  smooth: {
    transition: { duration: 0.55, ease: [0.32, 0.72, 0, 1] },
    distance: 48,
  },
  spring: {
    transition: { type: "spring", stiffness: 320, damping: 28 },
    distance: 56,
  },
  snappy: {
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
    distance: 36,
  },
  drift: {
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    distance: 64,
  },
};

// ─── Helper: build variants from direction + preset ──────────────────────────

function buildVariants(
  direction: SlideDirection,
  preset: AnimationPreset,
): Variants {
  const { transition, distance } = PRESETS[preset];
  const sign = direction === "up" ? 1 : -1; // "up" → exits upward, enters from below

  return {
    enter: {
      y: sign * distance,
      opacity: 0,
      filter: "blur(4px)",
    },
    center: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition,
    },
    exit: {
      y: -sign * distance,
      opacity: 0,
      filter: "blur(4px)",
      transition,
    },
  };
}

// ─── Component ───────────────────────────────────────────────────────────────

export const VerticalSlider: FC<VerticalSliderProps> = ({
  items,
  interval = 2200,
  direction = "up",
  preset = "smooth",
  className = "",
  itemClassName = "",
  loop = true,
  pauseOnHover = true,
  onIndexChange,
  style,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const variants = buildVariants(direction, preset);

  useEffect(() => {
    if (items.length <= 1) return;

    const advance = () => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        if (next >= items.length) return loop ? 0 : prev;
        return next;
      });
    };

    if (!paused) {
      timerRef.current = setInterval(advance, interval);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, interval, items.length, loop]);

  useEffect(() => {
    onIndexChange?.(activeIndex);
  }, [activeIndex, onIndexChange]);

  return (
    <span
      className={`relative inline-flex overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      aria-live="polite"
      aria-atomic="true"
      style={style}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={activeIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className={`inline-block whitespace-nowrap ${itemClassName} bg-hero-text-gradient bg-clip-text text-transparent`}
        >
          {items[activeIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
