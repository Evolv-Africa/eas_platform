import { FC } from "react";
import Marquee from "../animations/marquee/Marquee";
import { Button } from "../core";
import TestimonialCard from "./TestimonialCard";
import { leftTestimonials, rightTestimonials } from "./constants";
import { MouseRevealText } from "../animations";

const OurNetwork: FC = () => {
  return (
    <div className="px-5 py-10 md:py-20">
      <div className="mx-auto max-w-320 bg-blue-900 rounded-xl ">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <div className="space-y-5 md:space-y-7 px-5 md:pl-12 md:pr-0 py-12 md:py-28 lg:max-w-136.75">
            <div className="inline-block p-px rounded-full bg-hero-text-gradient">
              <div className="w-fit bg-blue-200 text-semantic-text-accent py-3 px-8 md:px-17 rounded-full text-sm leading-5">
                Our Network
              </div>
            </div>
            <p className="font-neue-machina font-extrabold leading-10 md:leading-18 text-3xl md:text-[64px] text-white">
              From Our Community
            </p>
            <p className="text-white font-poppins text-base md:text-xl leading-6 md:leading-7">
              Driving measurable growth across Africa's professional ecosystem.
            </p>
            <Button text="Join the community" size="giant" />
          </div>
          <div className="flex flex-col md:flex-row  md:gap-4">
            <div className="relative w-full md:w-1/2 h-120 md:h-175 overflow-hidden px-2">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 md:h-24 bg-linear-to-b from-blue-900 to-transparent" />
              <div className="pointer-events-none hidden md:inline absolute inset-x-0 bottom-0 z-10 h-16 md:h-24 bg-linear-to-t from-blue-900 to-transparent" />
              <div className="flex-1 overflow-hidden">
                <Marquee direction="btu" duration={30} gap={16} pauseOnHover>
                  {leftTestimonials.map((t) => (
                    <TestimonialCard key={t.name} testimonial={t} />
                  ))}
                </Marquee>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 h-120 md:h-175 overflow-hidden px-2">
              <div className="pointer-events-none hidden md:inline absolute inset-x-0 top-0 z-10 h-16 md:h-24 bg-linear-to-b from-blue-900 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 md:h-24 bg-linear-to-t from-blue-900 to-transparent" />
              <div className="flex-1 overflow-hidden">
                <Marquee direction="utb" duration={30} gap={16} pauseOnHover>
                  {rightTestimonials.map((t) => (
                    <TestimonialCard key={t.name} testimonial={t} />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative mx-auto max-w-272 mt-17.5 overflow-hidden">
          <MouseRevealText text="You Belong Here" textDirection="left" />
        </div>
        <div className="block md:hidden mx-auto max-w-272 mt-17.5">
          <p className="w-full font-extrabold font-neue-machina bg-gray-gradient bg-clip-text text-transparent text-5xl leading-12 text-center mb-3 tracking-[-2.33px]">
            You Belong Here
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurNetwork;
