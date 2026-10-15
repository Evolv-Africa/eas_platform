import { FC } from "react";
import type { SanityEventMediaItem, SanitySponsor } from "@/types";

interface EventHeroProps {
  title: string;
  dateLabel?: string;
  location?: string;
  eventType?: string;
  paragraphs?: string[];
  image?: string;
  media?: SanityEventMediaItem[];
  sponsors?: SanitySponsor[];
  children?: React.ReactNode;
}

const EventHero: FC<EventHeroProps> = ({
  title,
  dateLabel,
  location,
  eventType,
  paragraphs = [],
  image,
  media = [],
  sponsors = [],
  children,
}) => {
  const facts = [dateLabel, location, eventType].filter(Boolean);

  return (
    <section className="w-full px-5">
      <div className="mx-auto max-w-320 pt-16 pb-8 md:pt-24">
        <div className="mx-auto w-full max-w-[46rem]">
          <h1 className="text-center font-neue-machina text-[1.7rem] font-extrabold leading-[1.1] tracking-tight text-[#00081D] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {facts.length > 0 ? (
            <p className="mt-4 text-center font-poppins text-sm font-medium text-[#2F2F2F] md:text-base">
              {facts.join("  ·  ")}
            </p>
          ) : null}
        </div>

        {image ? (
          <div className="mt-10 overflow-hidden rounded-2xl">
            <img
              src={image}
              alt=""
              className="aspect-video w-full object-cover object-center"
            />
          </div>
        ) : null}

        {paragraphs.length > 0 ? (
          <div className="mx-auto mt-10 max-w-[68ch] space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-poppins text-base leading-7 text-[#2F2F2F] md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}

        {children ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {children}
          </div>
        ) : null}

        {media.length > 0 ? (
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {media.map((item) => (
              <li key={`${item.imageUrl ?? ""}-${item.quote ?? ""}`} className="overflow-hidden rounded-2xl bg-[#F7F7F7]">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt="" className="aspect-video w-full object-cover" />
                ) : null}
                {item.quote ? (
                  <p className="px-5 py-4 font-poppins text-base leading-7 text-[#2F2F2F]">
                    {item.quote}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}

        {sponsors.length > 0 ? (
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {sponsors.map((sponsor) => (
              <li key={sponsor._id}>
                <img src={sponsor.imageUrl || ""} alt={sponsor.name} className="h-10 w-auto" />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default EventHero;
