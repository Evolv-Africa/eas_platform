import { FC } from "react";
import { Button } from "../core";
import { OurImpactData } from "./constants";
import { ExpandingCard } from "../animations";

const OurImpact: FC = () => {
  return (
    <div className="px-5 py-10 md:py-20">
      <div className="mx-auto max-w-320 space-y-8 md:space-y-14">
        <div className="space-y-4 md:space-y-7 max-w-136.75">
          <div className="inline-block p-px rounded-full bg-hero-text-gradient">
            <div className="w-fit bg-white text-semantic-text-accent py-2.5 px-10 md:py-3 md:px-17 rounded-full text-xs md:text-sm leading-5">
              Our Impact
            </div>
          </div>
          <p className="font-neue-machina font-extrabold leading-10 md:leading-18 text-3xl md:text-[64px] text-semantic-text-primary">
            By the Numbers
          </p>
          <p className="text-semantic-text-secondary font-poppins text-base md:text-xl leading-6 md:leading-7">
            Driving measurable growth across Africa's professional ecosystem.
          </p>
          <Button text="Download our report" size="giant" />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-4 overflow-x-scroll no-scrollbar">
          {OurImpactData.map((card) => (
            <ExpandingCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
