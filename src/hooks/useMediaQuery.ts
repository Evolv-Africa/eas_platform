import { useEffect, useState } from "react";

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
} as const;

export const useMediaQuery = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    () => {
      if (globalThis.window === undefined) return "desktop";
      const w = globalThis.innerWidth;
      if (w < BREAKPOINTS.mobile) return "mobile";
      if (w < BREAKPOINTS.tablet) return "tablet";
      return "desktop";
    },
  );

  useEffect(() => {
    const mobileQuery = globalThis.matchMedia(
      `(max-width: ${BREAKPOINTS.mobile - 1}px)`,
    );
    const tabletQuery = globalThis.matchMedia(
      `(min-width: ${BREAKPOINTS.mobile}px) and (max-width: ${BREAKPOINTS.tablet - 1}px)`,
    );

    const update = () => {
      if (mobileQuery.matches) setScreenSize("mobile");
      else if (tabletQuery.matches) setScreenSize("tablet");
      else setScreenSize("desktop");
    };

    mobileQuery.addEventListener("change", update);
    tabletQuery.addEventListener("change", update);

    return () => {
      mobileQuery.removeEventListener("change", update);
      tabletQuery.removeEventListener("change", update);
    };
  }, []);

  return {
    isMobile: screenSize === "mobile",
    isTablet: screenSize === "tablet",
    isDesktop: screenSize === "desktop",
  };
};
