import Button from "@/components/Button/Button";
import Badge from "@/components/Badge/Badge";
import storyImg1 from "../../assets/Images/story-3.png";
import storyImg2 from "../../assets/Images/story-1.png";
import storyImg3 from "../../assets/Images/story-2.png";

export default function WhoWeAre({ className = "" }) {
  return (
    <div className={`relative px-5 py-10 md:py-20 overflow-hidden ${className}`}>
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
          <div className="flex gap-3 w-full max-w-sm sm:max-w-md lg:max-w-none">
            {/* Left column - two stacked images */}
            <div className="flex flex-col gap-3 flex-1">
              <img
                src={storyImg2}
                alt="Evolv Africa Summit attendees"
                className="w-full h-40 sm:h-52 md:h-64 object-cover rounded-lg"
              />
              <img
                src={storyImg3}
                alt="Evolv Africa Summit community"
                className="w-full h-40 sm:h-52 md:h-64 object-cover rounded-lg"
              />
            </div>
            {/* Right column - single tall image */}
            <img
              src={storyImg1}
              alt="Evolv Africa Summit event"
              className="flex-1 object-cover rounded-lg"
            />
          </div>
        </div>

      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
        <svg
          viewBox="0 0 1600 250"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[220px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,140 C120,-20 220,280 380,120 C520,-10 620,260 780,100 C940,-20 1040,250 1220,90 C1360,0 1480,180 1600,50"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="35"
            strokeLinecap="round"
          />
        </svg>
      </div>

    </div>
  );
}