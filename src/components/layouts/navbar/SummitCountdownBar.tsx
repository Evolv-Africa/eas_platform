import { FC } from "react";
import type { SummitRemaining } from "@/hooks/useSummitCountdown";

const UNITS = [
  ["days", "Days"],
  ["hours", "Hours"],
  ["minutes", "Min"],
  ["seconds", "Sec"],
] as const;

export const SummitCountdownBar: FC<{ remaining: SummitRemaining }> = ({ remaining }) => {
  return (
    <div
      className="flex h-10 w-full items-center justify-center gap-3 bg-[#00081D] px-3 text-white sm:gap-6"
      role="timer"
      aria-label={`${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, ${remaining.seconds} seconds until 28 November 2026`}
    >
      <p className="hidden font-poppins text-xs font-medium sm:block">28 November</p>
      <ul className="flex items-center gap-3 sm:gap-4">
        {UNITS.map(([key, label]) => (
          <li key={key} className="flex items-baseline gap-1">
            <span className="font-neue-machina text-sm font-extrabold tabular-nums sm:text-base">
              {key === "days" ? remaining[key] : String(remaining[key]).padStart(2, "0")}
            </span>
            <span className="font-poppins text-[10px] font-medium uppercase tracking-wide text-white/70 sm:text-xs">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
