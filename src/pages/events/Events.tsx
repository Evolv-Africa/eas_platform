import { FC, useEffect, useState } from "react";
import eventImage from "@/assets/images/evolv_25.webp";
import { PageLoader } from "@/components/core";
import { EventHero, EventSchedule, ComingSoon, Speakers, RegisterButton } from "@/components/landing-pages/Events";
import { getEvents } from "@/services/sanity/queries";
import { formatEventDate, getPortableTextParagraphs, splitFeaturedEvents } from "@/utils/eventSelectors";
import type { SanityEvent } from "@/types";

const Events: FC = () => {
  const [events, setEvents] = useState<SanityEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const loadEvents = async () => {
      try {
        const sanityEvents = await getEvents();

        if (!isMounted) {
          return;
        }

        if (sanityEvents && sanityEvents.length > 0) {
          setEvents(sanityEvents);
        } else {
          setEvents([]);
        }
        setLoading(false);
      } catch {
        // console.error("Failed to load events from Sanity:", error);
        if (isMounted) {
          setEvents([]);
        }
        setLoading(false);
      }
    };

    loadEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  const { featured, upcoming } = splitFeaturedEvents(events);
  const story = getPortableTextParagraphs(featured?.impactStorytelling);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <div>
      <main>
        {featured ? (
          <EventHero
            title={featured.title}
            dateLabel={formatEventDate(featured.eventDate)}
            location={featured.location}
            eventType={featured.eventType}
            paragraphs={story}
            image={featured.imageUrl || eventImage}
            media={featured.mediaAndTestimonials ?? []}
            sponsors={featured.sponsorsAndPartners || []}
          >
            <RegisterButton event={featured} />
          </EventHero>
        ) : (
          <section className="mx-auto w-full max-w-320 px-5 pt-16 md:pt-24">
            <h1 className="font-neue-machina text-3xl font-extrabold text-[#00081D] md:text-5xl">
              No upcoming event is published yet
            </h1>
          </section>
        )}

        {featured?.speakers && featured.speakers.length > 0 && (
          <Speakers sanitySpeakers={featured.speakers} />
        )}
        {featured?.schedule && featured.schedule.length > 0 && (
          <EventSchedule schedule={featured.schedule} />
        )}
        {upcoming && upcoming.length > 0 && <ComingSoon events={upcoming} />}
      </main>
    </div>
  );
};

export default Events;
