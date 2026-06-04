import { FC } from "react";
import { Icon } from "../core/icon/Icon";
import { TEAM_HOW_WE_WORK } from "@/constants";

const HowWeWork: FC = () => {
  return (
    <div className="w-full px-5 py-20 lg:py-32">
      <div className="mx-auto max-w-320 h-[700px] flex flex-col bg-blue-900 rounded-[20px] overflow-hidden relative">
        {/* Header */}
        <div className="w-full md:w-[640px] mx-auto flex flex-col items-center text-center pt-[6%] px-8 pointer-events-none font-neue-machina">
          <h2 className="text-white font-extrabold text-2xl md:text-4xl lg:text-5xl mb-3">
            How We Work
          </h2>
          <p className="text-white text-sm md:text-[24px] font-semibold md:font-extrabold md:leading-8">
            Evolv Africa is powered by several teams working together to grow
            the community and create meaningful experiences.
          </p>
        </div>
        <div className="relative w-full flex-1 mt-5">
          {TEAM_HOW_WE_WORK.map(({ name, x, y, rotate, w }) => (
            <div
              key={name}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                width: `${w}px`,
                transform: `rotate(${rotate}deg)`,
                transformOrigin: "top left",
              }}
            >
              <Icon name={name} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
