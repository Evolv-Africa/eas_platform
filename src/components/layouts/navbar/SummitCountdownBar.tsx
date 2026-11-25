import { FC } from "react";
import type { SummitRemaining } from "@/hooks/useSummitCountdown";
import { REGISTER_URL } from "@/constants/header";

const STARS = [
  { left: "6%", top: "20%", delay: "0s" },
  { left: "18%", top: "65%", delay: "0.5s" },
  { left: "32%", top: "15%", delay: "1.1s" },
  { left: "48%", top: "70%", delay: "0.3s" },
  { left: "63%", top: "18%", delay: "0.9s" },
  { left: "77%", top: "62%", delay: "1.4s" },
  { left: "90%", top: "22%", delay: "0.7s" },
];

export const SummitCountdownBar: FC<{ remaining: SummitRemaining }> = ({ remaining }) => {
  return (
    <div
      className="fixed inset-x-0 top-0 z-60 flex h-10 w-full items-center justify-center gap-3 overflow-hidden bg-[#00081D] px-3 text-white sm:gap-5"
      role="timer"
      aria-label={`Book your early bird pass now at 50% off. ${remaining.days} days, ${remaining.hours} hours remaining until 28 November 2026`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="glitter-sweep absolute inset-y-0 -left-16 w-16 bg-linear-to-r from-transparent via-white/30 to-transparent" />
        <div
          className="glitter-sweep absolute inset-y-0 -left-16 hidden w-16 bg-linear-to-r from-transparent via-white/30 to-transparent lg:block"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="glitter-sweep absolute inset-y-0 -left-16 hidden w-16 bg-linear-to-r from-transparent via-white/30 to-transparent xl:block"
          style={{ animationDelay: "4.5s" }}
        />
        {STARS.map((s, i) => (
          <span key={i} className="glitter-star" style={{ left: s.left, top: s.top, animationDelay: s.delay }} />
        ))}
      </div>
      <p className="relative font-poppins text-[11px] font-semibold sm:text-sm">
        ✨ Book your early bird pass now at <span className="text-amber-300">50% off</span>
      </p>
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative shrink-0 rounded bg-[#1da1f2] px-3 py-1 font-poppins text-[10px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#0d8ddb] sm:text-xs"
      >
        Get Tickets
      </a>
    </div>
  );
};

/* Previous implementation (countdown timer), kept for reference:

const UNITS = [
  ["days", "Days"],
  ["hours", "Hours"],
  ["minutes", "Min"],
  ["seconds", "Sec"],
] as const;

export const SummitCountdownBar: FC<{ remaining: SummitRemaining }> = ({ remaining }) => {
  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] flex h-10 w-full items-center justify-center gap-3 bg-[#00081D] px-3 text-white sm:gap-6"
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
*/
