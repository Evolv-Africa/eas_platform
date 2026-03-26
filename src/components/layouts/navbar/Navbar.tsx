import { Button, Icon } from "@/components/core";
import { NavMenu } from "@/constants";
import { type FC } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { MobileNav } from "./MobileNav";
import { useMediaQuery } from "@/hooks";

export const Navbar: FC = () => {
  const { pathname } = useLocation();
  const { isMobile } = useMediaQuery();

  return (
    <div className="w-full fixed top-0 left-0 z-50 lg:bg-transparent bg-white/30 backdrop-blur-md lg:backdrop-blur-none">
      <div className="mx-auto max-w-320 flex items-center justify-between px-4">
        {isMobile ? (
          <Icon name="Logo" height={68.76700592041016} width={155} />
        ) : (
          <div className="w-fit bg-[#FFFFFF33] backdrop-blur-xl rounded-[30px] py-2.5 px-7.5">
            <Icon name="Logo" height={68.76700592041016} width={155} />
          </div>
        )}

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10 bg-[#00081D0D] backdrop-blur-[6px] rounded-[10px] py-2.5 px-20">
          {NavMenu.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className="inline-flex flex-col items-center font-poppins leading-6"
              >
                <p>{item.label}</p>
                {isActive ? (
                  <motion.span
                    layoutId="active-nav-underline"
                    className="mt-1 h-0.5 w-full rounded-full bg-green-400"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                ) : null}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button text="Become a member" size="giant" />
        </div>

        {/* Mobile nav */}
        <MobileNav />
      </div>
    </div>
  );
};
