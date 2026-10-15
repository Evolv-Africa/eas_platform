import { useEffect, useState } from "react";

const SUMMIT_START = new Date(2026, 10, 28, 0, 0, 0, 0).getTime();

export type SummitRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function summitRemaining(now = Date.now()): SummitRemaining | null {
  const diff = SUMMIT_START - now;
  if (diff <= 0) return null;

  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function useSummitCountdown() {
  const [remaining, setRemaining] = useState(() => summitRemaining());

  useEffect(() => {
    const id = window.setInterval(() => setRemaining(summitRemaining()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return remaining;
}
