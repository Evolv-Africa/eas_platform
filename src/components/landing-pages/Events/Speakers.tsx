import { useCallback, useEffect, useRef, useState } from "react";
import speaker1 from "@/assets/images/speaker-2.png";
import speaker2 from "@/assets/images/speaker-3.png";
import { Badge } from "@/components/core";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";


import type { SanitySpeaker } from "@/types";

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
  title?: string;
  desc?: string;
  sanitySpeakers?: SanitySpeaker[];
}

const OVERLAY_COLORS = ["rgba(0, 60, 160, 0.6)", "rgba(30, 120, 40, 0.6)"];
const FALLBACK_IMAGES = [speaker1, speaker2];

const mapSanitySpeaker = (speaker: SanitySpeaker, index: number): Speaker => ({
  img: speaker.imageUrl || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length],
  role: "Speaker",
  name: `${speaker.firstName ?? ""} ${speaker.lastName ?? ""}`.trim(),
  funFact: speaker.bio ?? "",
  overlayColor: OVERLAY_COLORS[index % OVERLAY_COLORS.length],
});

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

const Speakers: React.FC<SpeakersProps> = ({ className = "", title = "Meet Our Speakers", desc = "", sanitySpeakers }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [canScrollNext, setCanScrollNext] = useState<boolean>(false);

  const speakers: Speaker[] = (sanitySpeakers ?? []).map(mapSanitySpeaker);

  const checkScrollability = useCallback(() => {
    const el = scrollRef.current;
    if (!el) {
      setCanScrollPrev(false);
      setCanScrollNext(false);
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScrollLeft = scrollWidth - clientWidth;

    setCanScrollPrev(scrollLeft > 2);
    setCanScrollNext(maxScrollLeft > 2 && scrollLeft < maxScrollLeft - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        checkScrollability();
      });
      ro.observe(el);
    }

    const timer1 = setTimeout(checkScrollability, 50);
    const timer2 = setTimeout(checkScrollability, 300);

    return () => {
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
      ro?.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [checkScrollability, sanitySpeakers]);

  const handlePrev = (): void => {
    if (scrollRef.current && canScrollPrev) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const handleNext = (): void => {
    if (scrollRef.current && canScrollNext) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  if (speakers.length === 0) {
    return null;
  }

  return (
    <section id="speakers" className={`py-12 md:py-16 px-5 ${className}`}>
      <div className="md:max-w-320 mx-auto">
        <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
          <div className="flex flex-col items-start gap-3">
            <Badge>The Voices of Impact</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-neue-machina font-extrabold text-semantic-text-primary">
              {title}
            </h2>
            {desc && <p className="text-base font-light italic max-w-[80%] text-gray-600">{desc}</p>}
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canScrollPrev}
              aria-label="Previous speaker"
              className={`bg-transparent border-none transition-opacity ${canScrollPrev
                ? "cursor-pointer text-semantic-text-primary hover:opacity-70"
                : "cursor-not-allowed text-semantic-text-primary opacity-30"
                }`}
            >
              <GoArrowLeft className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canScrollNext}
              aria-label="Next speaker"
              className={`bg-transparent border-none transition-opacity ${canScrollNext
                ? "cursor-pointer text-semantic-text-primary hover:opacity-70"
                : "cursor-not-allowed text-semantic-text-primary opacity-30"
                }`}
            >
              <GoArrowRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScrollability}
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
