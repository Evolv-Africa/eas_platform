import { FC } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

export const AppLayout: FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 w-full md:max-w-[1400px] mx-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
