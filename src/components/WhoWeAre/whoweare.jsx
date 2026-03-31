import clsx from "clsx";
import Button from "@/components/Button/Button";
import Badge from "@/components/Badge/Badge";
import storyImg1 from "../../assets/Images/story-3.png";
import storyImg2 from "../../assets/Images/story-1.png";
import storyImg3 from "../../assets/Images/story-2.png";

export default function WhoWeAre({ className = "" }) {
  return (
    <section className={clsx("relative w-full px-6 py-16 md:px-16 lg:px-24", className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <Badge>Who We Are</Badge>
          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Story
          </h2>
          <p className="max-w-md text-base leading-relaxed text-gray-600">
            Founded as LinkedIn Local Nigeria, Evolv Africa Summit began as a
            grassroots initiative to connect professionals beyond the screen.
            Today, we've grown into a pan-African platform fostering
            collaboration, innovation, and leadership development.
          </p>
          <Button variant="primary" size="md" className="w-fit">
            Learn about us
          </Button>
        </div>

        <div className="relative flex w-full justify-center lg:w-1/2 z-20">
          <div className="relative z-20 grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-4">
              <div className="h-40 w-36 sm:h-48 sm:w-44 md:h-56 md:w-52 lg:h-[14rem] lg:w-60 overflow-hidden">
                <img src={storyImg2} alt="Evolv Africa Summit attendees" className="h-full w-full object-cover" />
              </div>
              <div className="h-40 w-36 sm:h-48 sm:w-44 md:h-56 md:w-52 lg:h-[14rem] lg:w-60 overflow-hidden">
                <img src={storyImg3} alt="Evolv Africa Summit community" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="h-[21rem] w-36 sm:h-[25rem] sm:w-44 md:h-[29rem] md:w-52 lg:h-[28.8rem] lg:w-60 overflow-hidden">
              <img src={storyImg1} alt="Evolv Africa Summit event" className="h-full w-full object-center brightness-110 contrast-105" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen z-10 pointer-events-none">
        <svg viewBox="0 0 1390 160" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,130 C120,160 240,60 400,100 C560,140 620,50 780,90 C940,130 1000,30 1180,60 C1300,80 1380,10 1440,0"
            fill="none" stroke="#4CAF50" strokeWidth="30" strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}