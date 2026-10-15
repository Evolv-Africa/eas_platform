import HeroImage from "@/assets/images/eas-2026.jpg";
import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks";
import type { SanitySponsor } from "@/types";
import { VerticalSlider } from "@/components/animations";
import Marquee from "@/components/animations/marquee/Marquee";

const SUMMIT_DATE = new Date(2026, 10, 28);

function daysUntilSummit(now = new Date()) {
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const summit = Date.UTC(
    SUMMIT_DATE.getFullYear(),
    SUMMIT_DATE.getMonth(),
    SUMMIT_DATE.getDate(),
  );
  return Math.round((summit - today) / 86_400_000);
}

const DaysToSummit: FC = () => {
  const [days, setDays] = useState(() => daysUntilSummit());

  useEffect(() => {
    const id = window.setInterval(() => setDays(daysUntilSummit()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (days < 0) return null;

  return (
    <div className="mt-8">
      <p className="font-poppins text-xs font-medium uppercase tracking-[0.16em] text-[#2F2F2F]">
        28 November 2026
      </p>
      {days === 0 ? (
        <p className="mt-2 font-neue-machina text-4xl font-extrabold text-[#00081D]">
          Today
        </p>
      ) : (
        <p className="mt-2 font-neue-machina text-5xl font-extrabold leading-none tabular-nums text-[#00081D] md:text-6xl">
          {days}
          <span className="ml-3 align-middle font-poppins text-sm font-medium uppercase tracking-[0.14em] text-[#2F2F2F]">
            {days === 1 ? "day to go" : "days to go"}
          </span>
        </p>
      )}
    </div>
  );
};

const Hero: FC<{
  description?: string;
  image?: string;
  children?: React.ReactNode;
  sponsors?: SanitySponsor[];
}> = ({
  description = "Evolv Africa presents the flagship summit for the movers, builders, and changemakers shaping our future. Join us as we transition from conversations to execution.",
  image = HeroImage,
  children,
  sponsors = [],
}) => {
  const words = ["builders", "leaders", "innovators", "creators", "founders"];
  const { isMobile } = useMediaQuery();

  return (
    <div className="w-full px-5">
      <div className="mx-auto max-w-320 pt-16 md:pt-24">
        <div className="mx-auto w-full max-w-[42rem] text-center">
          <h1 className="font-neue-machina text-3xl font-extrabold leading-[1.05] tracking-tight text-[#00081D] sm:text-5xl md:text-6xl">
            From narrative to bold actions. Uniting Africa&apos;s next generation of{" "}
            <VerticalSlider items={words} loop />
          </h1>
          <p className="mx-auto mt-5 max-w-[68ch] font-poppins text-base leading-7 text-[#2F2F2F] md:text-xl">
            {description}
          </p>
          <DaysToSummit />
          {children}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl">
          <img
            src={image || HeroImage}
            alt="The Defining Decade, from narrative to bold actions"
            className="aspect-video w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="mx-auto max-w-320 space-y-5 py-16">
        <p className="mx-auto w-full max-w-185.5 text-center font-medium text-base leading-7 text-semantic-text-secondary md:text-xl">
          Trusted by forward-thinking organizations and communities across
          Africa.
        </p>
        {(isMobile || sponsors.length >= 4) ? (
          <Marquee
            direction="rtl"
            duration={20}
            gap={80}
            pauseOnHover={false}
            repetitionArray={["primary", "duplicate", "triple", "quadruple"]}
          >
            {sponsors.map((sponsor) => (
              <img
                key={sponsor._id}
                src={sponsor.imageUrl || ""}
                alt={sponsor.name}
                className="h-12 w-auto grayscale hover:grayscale-0!"
              />
            ))}
          </Marquee>
        ) : (
          <div className="flex justify-center gap-4">
            {sponsors.map((sponsor) => (
              <img
                key={sponsor._id}
                src={sponsor.imageUrl || ""}
                alt={sponsor.name}
                className="h-16 w-auto grayscale hover:grayscale-0"
              />
            ))}
          </div>
        )}
        <p className="mx-auto w-fit text-base leading-7 text-gray-600 md:text-xl">
          Formerly LinkedIn Local Nigeria
        </p>
      </div>
    </div>
  );
};

export default Hero;
