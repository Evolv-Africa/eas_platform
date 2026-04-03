import { FC, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useMediaQuery } from "@/hooks";
interface CardData {
  id: number;
  count: string;
  title: string;
  description: string;
}

const easing = [0.4, 0, 0.2, 1] as const;

const ExpandingCard: FC<{ card: CardData }> = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useMediaQuery();

  // On mobile: render expanded card statically, no animation
  if (isMobile) {
    return (
      <div className="w-full rounded-2xl bg-semantic-text-primary px-6 py-10 text-white">
        <p className="mb-4 text-3xl font-bold font-neue-machina">
          {card.count}
        </p>
        <h3 className="text-2xl font-poppins mb-6">{card.title}</h3>
        <p className="text-white font-poppins text-base leading-6">
          {card.description}
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="relative h-125 overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{ width: isHovered ? 636 : 200 }}
      transition={{ duration: 0.5, ease: easing }}
    >
      {/* Collapsed card */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            className="absolute inset-0 w-50 h-125 rounded-2xl bg-gray-200 flex flex-col items-center overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.4, ease: easing }}
          >
            <p className="mt-8 text-3xl font-bold font-neue-machina text-gray-900">
              {card.count}
            </p>
            <div className="flex flex-1 items-center justify-center">
              <h3 className="text-[32px] text-semantic-text-secondary font-poppins whitespace-nowrap [writing-mode:vertical-lr]">
                {card.title}
              </h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 w-159 h-125 rounded-2xl bg-semantic-text-primary px-6 py-12 overflow-hidden text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: easing }}
          >
            <p className="mb-6 text-3xl font-bold font-neue-machina">
              {card.count}
            </p>
            <h3 className="text-[32px] font-poppins mb-18">{card.title}</h3>
            <p className="text-white font-poppins text-xl leading-7">
              {card.description}
            </p>
            <p className="absolute bottom-0 right-0 text-white font-poppins py-4.5 px-10 text-xl leading-7 rounded-tl-md bg-angular-gradient">
              Network
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandingCard;
