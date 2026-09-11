import { useRef, useState } from "react";
import speaker1 from "@/assets/images/speaker-2.png";
import speaker2 from "@/assets/images/speaker-3.png";
import { Badge } from "@/components/core";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";



interface Speaker {
  img: string;
  role: string;
  name: string;
  funFact: string;
  overlayColor: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
}

interface SpeakersProps {
  className?: string;
}

const speakers: Speaker[] = [
  {
    img: speaker1,
    role: "Co Founder",
    name: "Oladotun Ajayi",
    funFact: "I can write with my both hands",
    overlayColor: "rgba(0, 60, 160, 0.6)",
  },
  {
    img: speaker2,
    role: "CEO",
    name: "Jane Doe",
    funFact: "I've visited 30 countries before 30",
    overlayColor: "rgba(30, 120, 40, 0.6)",
  },
  {
    img: speaker1,
    role: "Lead Organizer",
    name: "Amaka Obi",
    funFact: "I can speak 4 languages fluently",
    overlayColor: "rgba(0, 60, 160, 0.6)",
  },
  {
    img: speaker2,
    role: "Head of Community",
    name: "Chidi Nwosu",
    funFact: "I started coding at age 10",
    overlayColor: "rgba(30, 120, 40, 0.6)",
  },
  {
    img: speaker1,
    role: "Keynote Speaker",
    name: "Fatima Aliyu",
    funFact: "I ran a marathon in under 4 hours",
    overlayColor: "rgba(0, 60, 160, 0.6)",
  },
  {
    img: speaker2,
    role: "Panelist",
    name: "Emeka Eze",
    funFact: "I built my first startup at 19",
    overlayColor: "rgba(30, 120, 40, 0.6)",
  },
];

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        height: "500px",
        minWidth: "280px",
        flexShrink: 0,
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        isolation: "isolate",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
      className="w-full sm:w-[320px] lg:w-[calc(25%-12px)] lg:min-w-[calc(25%-12px)] snap-start transition-all"
    >
      <div
        className="w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
      >
        <img
          src={speaker.img}
          alt={speaker.name}
          className="w-full h-full object-cover object-top block"
        />
      </div>

      <div
        className="absolute inset-0 flex flex-col justify-end p-7 text-white transition-opacity duration-400 ease-in-out box-border"
        style={{
          backgroundColor: speaker.overlayColor,
          opacity: hovered ? 1 : 0,
        }}
      >
        <div
          className="transition-transform duration-400 ease-out"
          style={{
            transform: hovered ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span className="text-xs uppercase tracking-widest font-semibold opacity-80 block mb-2">
            {speaker.role}
          </span>
          <h3 className="text-2xl md:text-[1.8rem] mb-2.5 font-neue-machina font-extrabold leading-tight">
            {speaker.name}
          </h3>
          <p className="text-sm md:text-[0.95rem] leading-relaxed italic font-normal">
            "{speaker.funFact}"
          </p>
        </div>
      </div>
    </div>
  );
};

const Speakers: React.FC<SpeakersProps> = ({ className = "" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handlePrev = (): void => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleNext = (): void => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className={`py-12 md:py-16 px-5 ${className}`}>
      <div className="md:max-w-320 mx-auto">
        <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
          <div className="flex flex-col items-start gap-3">
            <Badge>The Voices of Impact</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-neue-machina font-extrabold text-semantic-text-primary">
              Meet Our Speakers
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous speaker"
              className="bg-transparent border-none cursor-pointer text-semantic-text-primary hover:opacity-70 transition-opacity"
            >
              <GoArrowLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next speaker"
              className="bg-transparent border-none cursor-pointer text-semantic-text-primary hover:opacity-70 transition-opacity"
            >
              <GoArrowRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="w-full flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        >
          {speakers.map((speaker, index) => (
            <SpeakerCard key={`${speaker.name}-${index}`} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
