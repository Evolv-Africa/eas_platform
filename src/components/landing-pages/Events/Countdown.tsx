import { FC, useEffect, useState } from "react";
import stripBackground from "@/assets/Images/olutona-section-bg.svg";

// 28 November 2026, 00:00 West Africa Time
const EVENT_DATE = "2026-11-28T00:00:00+01:00";

interface CountdownProps {
  targetDate?: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

const Countdown: FC<CountdownProps> = ({ targetDate = EVENT_DATE }) => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, new Date(targetDate).getTime() - now);
  const units = [
    { label: "Days", value: Math.floor(diff / 86_400_000) },
    { label: "Hours", value: Math.floor(diff / 3_600_000) % 24 },
    { label: "Minutes", value: Math.floor(diff / 60_000) % 60 },
    { label: "Seconds", value: Math.floor(diff / 1000) % 60 },
  ];

  return (
    <section className="px-5 pb-10 md:pb-20">
      <div className="relative mx-auto max-w-320 overflow-hidden rounded-4xl bg-linear-to-b from-[#002EA8] to-[#001242] px-6 py-10 text-center sm:px-10 md:px-14 md:py-16 lg:px-20 lg:py-24">
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="mx-auto max-w-269.5 font-neue-machina text-2xl font-extrabold leading-10 tracking-[-0.04em] text-white md:text-5xl md:leading-18 lg:text-[4.5rem]">
            The <span className="text-[#3078F2]">Defining Decade</span> begins in
          </h2>

          {diff > 0 ? (
            <div className="grid w-full grid-cols-4 gap-3 md:gap-6" role="timer" aria-live="off">
              {units.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/10 py-4 backdrop-blur-sm md:py-8"
                >
                  <span className="font-neue-machina text-3xl font-extrabold tabular-nums text-white md:text-6xl">
                    {pad(value)}
                  </span>
                  <span className="mt-1 font-poppins text-[10px] font-medium uppercase tracking-widest text-[#67C34F] md:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="font-neue-machina text-2xl font-extrabold text-[#67C34F] md:text-4xl">
              It&apos;s happening now!
            </p>
          )}

          <p className="font-poppins text-sm font-normal text-white sm:text-lg">28th November 2026</p>
        </div>

        <img
          src={stripBackground}
          alt=""
          className="absolute inset-0 w-full object-cover object-center"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    </section>
  );
};

export default Countdown;
