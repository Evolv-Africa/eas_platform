import { FC } from "react";
import type { SanitySponsor } from "@/types";

interface EventHeroProps {
  title: string;
  description?: string;
  image?: string;
  sponsors?: SanitySponsor[];
  children?: React.ReactNode;
}

const EventHero: FC<EventHeroProps> = ({
  title,
  description,
  image,
  sponsors = [],
  children,
}) => {
  return (
    <section className="w-full px-5">
      <div className="mx-auto max-w-320 pt-16 pb-16 md:pt-24">
        <div className="mx-auto w-full max-w-[40rem] text-center">
          <h1 className="wrap-break-word font-neue-machina text-[1.7rem] font-extrabold leading-[1.1] tracking-tight text-[#00081D] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-5 max-w-[68ch] font-poppins text-base leading-7 text-[#2F2F2F] md:text-xl">
              {description}
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

        {children ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {children}
          </div>
        ) : null}

        {sponsors.length > 0 ? (
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {sponsors.map((sponsor) => (
              <li key={sponsor._id}>
                <img
                  src={sponsor.imageUrl || ""}
                  alt={sponsor.name}
                  className="h-10 w-auto"
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default EventHero;
