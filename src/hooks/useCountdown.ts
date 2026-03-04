import { COUNTDOWN_TIME } from "@/constants/system";
import React from "react";

type Options = {
  sendOtp: () => void;
};

export function useCountdown<T extends Options>(options = {} as T) {
  const intervalId = React.useRef<NodeJS.Timeout | null>(null);
  const [countdown, setCountdown] = React.useState(COUNTDOWN_TIME);
  const [resendCount, setResendCount] = React.useState(0);

  const { sendOtp } = options;

  const formatCountdown = (countdown: number) => {
    const minutes = Math.floor(countdown / (COUNTDOWN_TIME / 2));
    const seconds = countdown % (COUNTDOWN_TIME / 2);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const resendOtp = () => {
    if (countdown === 0) {
      sendOtp();
      setResendCount((prev) => prev + 1);
    }
  };

  const startCountdown = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
    setCountdown(COUNTDOWN_TIME);
    intervalId.current = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(intervalId.current!);
        }
        return prevCountdown > 0 ? prevCountdown - 1 : 0;
      });
    }, 1000);
  };

  React.useEffect(() => {
    startCountdown();
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return {
    resendOtp,
    startCountdown,
    countdown,
    formatCountdown,
    resendCount,
  };
}
