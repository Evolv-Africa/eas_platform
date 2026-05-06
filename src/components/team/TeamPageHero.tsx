import { FC } from "react";

const TeamPageHero: FC = () => {
  return (
    <div className="w-full px-5 py-20 lg:py-32">
      <div className="mx-auto max-w-320 flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-0">
        {/* Left Column */}
        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className="font-neue-machina font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#00081d] leading-none tracking-tight">
            These Are The
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <h1 className="font-neue-machina font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#00081d] leading-none tracking-tight">
              People
            </h1>
            <div className="h-[2px] bg-[#00081d] flex-1 max-w-[120px] md:max-w-[200px] mt-2"></div>
          </div>

          <p className="font-poppins text-gray-500 mt-6 max-w-sm text-sm md:text-base leading-relaxed">
            A community doesn't build itself. These are the people working
            behind the scenes to create spaces where ideas grow and connections
            matter.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col w-full lg:w-1/2 items-end">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-4 w-full justify-end">
              <div className="h-[2px] bg-[#00081d] flex-1 min-w-[80px] md:min-w-[150px] mt-2" />
              <h1 className="w-fit font-neue-machina font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#00081d] leading-none tracking-tight text-right">
                Behind Evolv
              </h1>
            </div>
            <h1 className="font-neue-machina font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#00081d] leading-none tracking-tight text-right mt-2">
              Africa
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPageHero;
