import { FC, useEffect, useState } from "react";
import { HiOutlineCalendar } from "react-icons/hi2";
import eventImage from "@/assets/images/evolv_25.webp";
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

  return (
    <div>
      <main>
        {loading ? null : featured ? (
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
          <section className="mx-auto w-full max-w-320 px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 text-center">
              <HiOutlineCalendar className="mb-4 h-12 w-12 text-blue-900/60" />
              <h1 className="font-neue-machina text-xl font-bold text-blue-900">
                No upcoming event is published yet
              </h1>
              <p className="mt-2 max-w-md text-sm text-gray-600">
                The next event will appear here once it is published.
              </p>
            </div>
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
