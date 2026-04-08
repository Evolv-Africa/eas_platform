import { FC } from "react";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

export const AppLayout: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
       <main className="flex-1 pt-[88px]">
          <Outlet />
       </main>
      <Footer />
    </div>
  );
};
