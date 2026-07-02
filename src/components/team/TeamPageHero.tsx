import { FC } from "react";

const TeamPageHero: FC = () => {
  return (
    <div className="w-full px-5 py-10 md:py-20 lg:py-32">
      <div className="mx-auto flex max-w-320 flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="w-full lg:w-1/2">
          <h1 className="font-neue-machina text-4xl font-extrabold leading-[1.05] tracking-tight text-[#00081d] sm:text-5xl md:text-6xl lg:text-7xl">
            These Are The
          </h1>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
            <h1 className="font-neue-machina text-4xl font-extrabold leading-[1.05] tracking-tight text-[#00081d] sm:text-5xl md:text-6xl lg:text-7xl">
              People
            </h1>
            <div className="hidden h-[2px] w-full max-w-[200px] bg-[#00081d] sm:block" />
          </div>

          <p className="mt-6 w-full font-poppins text-base leading-7 text-gray-600 md:max-w-md md:text-xl md:leading-8">
            A community doesn&apos;t build itself. These are the people working
            behind the scenes to create spaces where ideas grow and connections
            matter.
          </p>
        </div>

        <div className="w-full lg:w-1/2 lg:text-right">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:justify-end">
            <div className="hidden h-[2px] w-full max-w-[150px] bg-[#00081d] lg:order-first lg:block" />
            <h1 className="font-neue-machina text-4xl font-extrabold leading-[1.05] tracking-tight text-[#00081d] sm:text-5xl md:text-6xl lg:text-7xl">
              Behind Evolv
            </h1>
          </div>
          <h1 className="mt-2 font-neue-machina text-4xl font-extrabold leading-[1.05] tracking-tight text-[#00081d] sm:text-5xl md:text-6xl lg:text-7xl">
            Africa
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TeamPageHero;
