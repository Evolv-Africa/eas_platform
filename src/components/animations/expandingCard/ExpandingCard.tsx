import { FC, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useMediaQuery } from "@/hooks";
interface CardData {
  id: number;
  count: string;
  title: string;
  description: string;
}

interface ExpandedCardProps {
  card: CardData;
  networkLabel: string;
  className?: string;
}

const easing = [0.4, 0, 0.2, 1] as const;

const ExpandedCardContent: FC<{
  card: CardData;
  networkLabel: string;
}> = ({ card, networkLabel }) => (
  <>
    <p className="mb-6 text-3xl font-bold font-neue-machina">{card.count}</p>
    <h3 className="mb-18 text-xl md:text-[32px] font-poppins">{card.title}</h3>
    <p className="mb-16 text-base md:text-xl leading-7 text-white font-poppins font-regular whitespace-pre-line">
      {card.description}
    </p>
    <p className="absolute bottom-0 right-0 rounded-tl-md rounded-br-2xl bg-angular-gradient px-10 py-4.5 text-base md:text-xl leading-7 text-white font-poppins">
      {networkLabel}
    </p>
  </>
);

const ExpandedCard: FC<ExpandedCardProps> = ({
  card,
  networkLabel,
  className = "",
}) => (
  <div
    className={`relative min-h-125 rounded-2xl bg-semantic-text-primary px-6 py-12 text-white ${className}`}
  >
    <ExpandedCardContent card={card} networkLabel={networkLabel} />
  </div>
);

type ExpandingCardProps = {
  card: CardData;
  expandedOnly?: boolean;
  networkLabel?: string;
};

const ExpandingCard: FC<ExpandingCardProps> = ({
  card,
  expandedOnly = false,
  networkLabel = "Network",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useMediaQuery();

  if (isMobile || expandedOnly) {
    return (
      <ExpandedCard
        card={card}
        networkLabel={networkLabel}
        className={isMobile ? "h-auto w-full py-10" : "w-159"}
      />
    );
  }

  return (
    <motion.div
      className="relative min-h-125 max-h-fit overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{ width: isHovered ? 636 : 200 }}
      transition={{ duration: 0.5, ease: easing }}
    >
      {/* Collapsed card */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            className="absolute inset-0 w-50 min-h-125 max-h-fit rounded-2xl bg-gray-200 flex flex-col items-center overflow-hidden"
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
            className="absolute inset-0 w-159 min-h-125 max-h-fit rounded-2xl bg-semantic-text-primary px-6 py-12 overflow-hidden text-white pb-32"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: easing }}
          >
            <ExpandedCardContent card={card} networkLabel={networkLabel} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandingCard;
