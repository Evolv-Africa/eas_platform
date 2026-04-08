import clsx from "clsx";
import Button from "@/components/Button/Button";
import Badge from "@/components/Badge/Badge";
import storyImg1 from "../../assets/Images/story-3.png";
import storyImg2 from "../../assets/Images/story-1.png";
import storyImg3 from "../../assets/Images/story-2.png";

export default function WhoWeAre({ className = "" }) {
  return (
    <div className={clsx("relative px-5 py-10 md:py-20 overflow-hidden", className)}>
      <div className="mx-auto max-w-320 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT: Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 items-start">
          <Badge>Who We Are</Badge>
          <h2 className="font-neue-machina font-extrabold text-3xl md:text-5xl leading-tight text-semantic-text-primary">
            Our Story
          </h2>
          <p className="font-poppins text-base md:text-xl leading-7 text-semantic-text-secondary">
            Founded as LinkedIn Local Nigeria, Evolv Africa Summit began as a
            grassroots initiative to connect professionals beyond the screen.
            Today, we've grown into a pan-African platform fostering
            collaboration, innovation, and leadership development.
          </p>
          <Button variant="primary" size="md">Learn about us</Button>
        </div>

        {/* RIGHT: Images */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <img
                src={storyImg2}
                alt="Evolv Africa Summit attendees"
                className="w-56 h-64 md:w-64 md:h-72 object-cover"
              />
              <img
                src={storyImg3}
                alt="Evolv Africa Summit community"
                className="w-56 h-64 md:w-64 md:h-72 object-cover"
              />
            </div>
            <img
              src={storyImg1}
              alt="Evolv Africa Summit event"
              className="w-56 md:w-64 object-cover"
            />
          </div>
        </div>

      </div>

      {/* Wave — absolute, pulled up to sit behind/under images */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        <svg viewBox="0 0 1390 160" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,130 C120,160 240,60 400,100 C560,140 620,50 780,90 C940,130 1000,30 1180,60 C1300,80 1380,10 1440,0"
            fill="none" stroke="#4CAF50" strokeWidth="30" strokeLinecap="round"
          />
        </svg>
      </div>

    </div>
  );
}