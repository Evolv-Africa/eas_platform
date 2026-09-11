import { FC } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

export const AppLayout: FC = () => {
  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-37.5 top-header-gradient blur-[354px] rounded-full pointer-events-none z-0" />
      <Navbar />
      <main className="flex-1 pt-22">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
