import {
  HOW_WE_WORK_CANVAS,
  TEAM_HOW_WE_WORK,
  type TeamBubble,
} from "@/constants/team";
import { motion, type Variants } from "motion/react";
import { FC } from "react";

/** Figma section frame (483:868) */
const SECTION = { width: 1306, height: 689, teamsOffsetX: -89, teamsOffsetY: -26 } as const;

const teamIconUrls = import.meta.glob<string>(
  "/src/assets/team-bubbles/*.svg",
  { eager: true, query: "?url", import: "default" },
);

function getTeamIconUrl(icon: string) {
  return teamIconUrls[`/src/assets/team-bubbles/${icon}.svg`];
}

function bubbleVariants(bubble: TeamBubble): Variants {
  return {
    hidden: {
      y: -bubble.drop,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: bubble.bounce,
        duration: bubble.duration,
        delay: bubble.delay,
      },
    },
  };
}

const headerVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.42,
      duration: 1.9,
    },
  },
};

const HowWeWork: FC = () => {
  return (
    <section className="w-full px-5 py-10 md:py-20" aria-labelledby="how-we-work-heading">
      <motion.div
        className="relative mx-auto w-full max-w-[1306px] overflow-hidden rounded-[20px] bg-blue-900"
        style={{ aspectRatio: `${SECTION.width} / ${SECTION.height}` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25, margin: "0px 0px -10% 0px" }}
      >
        <motion.div
          variants={headerVariants}
          className="pointer-events-none absolute inset-x-0 top-[18.4%] z-10 flex flex-col items-center px-6 text-center font-neue-machina text-white"
        >
          <h2
            id="how-we-work-heading"
            className="w-full max-w-[640px] text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.17] tracking-[-0.02em]"
          >
            How We Work
          </h2>
          <p className="mt-1 w-full max-w-[640px] text-[clamp(1rem,2vw,1.5rem)] font-extrabold leading-8 tracking-[-0.02em]">
            Evolv Africa is powered by several teams working together to grow
            the community and create meaningful experiences.
          </p>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute"
          variants={{ hidden: {}, visible: {} }}
          style={{
            left: `${(SECTION.teamsOffsetX / SECTION.width) * 100}%`,
            top: `${(SECTION.teamsOffsetY / SECTION.height) * 100}%`,
            width: `${(HOW_WE_WORK_CANVAS.width / SECTION.width) * 100}%`,
            height: `${(HOW_WE_WORK_CANVAS.height / SECTION.height) * 100}%`,
          }}
        >
          {TEAM_HOW_WE_WORK.map((bubble) => {
            const src = getTeamIconUrl(bubble.icon);
            if (!src) return null;

            return (
              <motion.div
                key={bubble.id}
                variants={bubbleVariants(bubble)}
                className="absolute"
                style={{
                  left: `${(bubble.x / HOW_WE_WORK_CANVAS.width) * 100}%`,
                  top: `${(bubble.y / HOW_WE_WORK_CANVAS.height) * 100}%`,
                  width: `${(bubble.w / HOW_WE_WORK_CANVAS.width) * 100}%`,
                  transform: bubble.rotate
                    ? `rotate(${bubble.rotate}deg)`
                    : undefined,
                  transformOrigin: "top left",
                }}
              >
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-full select-none"
                  draggable={false}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowWeWork;
