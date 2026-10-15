import { FC, Suspense } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { SummitCountdownBar } from "../navbar/SummitCountdownBar";
import { useSummitCountdown } from "@/hooks/useSummitCountdown";
import { PageLoader } from "@/components/core";
import { Outlet } from "react-router-dom";

export const AppLayout: FC = () => {
  const remaining = useSummitCountdown();

  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-37.5 top-header-gradient blur-[354px] rounded-full pointer-events-none z-0" />
      {remaining ? <SummitCountdownBar remaining={remaining} /> : null}
      <Navbar offset={Boolean(remaining)} />
      <main className={remaining ? "flex-1 pt-32" : "flex-1 pt-22"}>
        <Suspense fallback={<PageLoader className="min-h-[40vh]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
