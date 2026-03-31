import { Button } from "@/components/core";
import { NavMenu } from "@/constants";
import { type FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { Link, useLocation } from "react-router-dom";

const HamburgerButton: FC<{ isOpen: boolean; toggle: () => void }> = ({
  isOpen,
  toggle,
}) => (
  <button
    onClick={toggle}
    className="relative z-60 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    <motion.span
      className={`block h-0.5 w-6 rounded-full ${isOpen ? "bg-white" : "bg-[#00081D]"} lg:bg-white`}
      animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
    <motion.span
      className={`block h-0.5 w-6 rounded-full ${isOpen ? "bg-white" : "bg-[#00081D]"} lg:bg-white`}
      animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    />
    <motion.span
      className={`block h-0.5 w-6 rounded-full ${isOpen ? "bg-white" : "bg-[#00081D]"} lg:bg-white`}
      animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    />
  </button>
);

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      when: "beforeChildren",
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const mobileItemVariants: Variants = {
  closed: { opacity: 0, x: 30 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export const MobileNav: FC = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <HamburgerButton
        isOpen={isOpen}
        toggle={() => setIsOpen((prev) => !prev)}
      />

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              className="fixed top-0 right-0 h-dvh w-4/5 max-w-sm bg-blue-900/95 backdrop-blur-xl flex flex-col pt-24 px-8 pb-10 lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col gap-2">
                {NavMenu.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <motion.div key={item.id} variants={mobileItemVariants}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={[
                          "block rounded-lg px-4 py-3 font-poppins text-lg transition-colors",
                          isActive
                            ? "bg-green-500/15 text-green-400"
                            : "text-white hover:bg-white/10",
                        ].join(" ")}
                      >
                        {item.label}
                        {isActive && (
                          <motion.span
                            layoutId="active-mobile-underline"
                            className="mt-1 block h-0.5 w-8 rounded-full bg-green-400"
                            transition={{
                              type: "spring",
                              stiffness: 450,
                              damping: 35,
                            }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div className="mt-auto" variants={mobileItemVariants}>
                <Button
                  text="Become a member"
                  size="giant"
                  className="w-full"
                />
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
