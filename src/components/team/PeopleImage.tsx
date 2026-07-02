import { Person } from "@/types";
import { AnimatePresence, motion } from "motion/react";
import { FC } from "react";

const PeopleImage: FC<{
  activePerson: Person;
}> = ({ activePerson }) => {
  return (
    <div className="relative w-full aspect-4/5 rounded-3xl overflow-hidden bg-[#0A3D91] shadow-xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] fill-none stroke-[#002663]"
          strokeWidth="15"
        >
          <circle cx="100" cy="100" r="40" />
          <circle cx="100" cy="100" r="65" />
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="115" />
        </svg>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-30%] left-[-20%] w-[120%] h-[120%] fill-none stroke-[#002663]"
          strokeWidth="15"
        >
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="80" />
        </svg>
      </div>

      {/* Active Image with Transition */}
      <AnimatePresence mode="wait">
        {activePerson && (
          <motion.img
            key={activePerson.id}
            src={activePerson.image}
            alt={activePerson.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PeopleImage;
