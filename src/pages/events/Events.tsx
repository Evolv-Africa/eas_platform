import { FC, useEffect, useState } from "react";
import eventImage from "@/assets/images/evolv_25.webp";
import { Badge, PageLoader } from "@/components/core";
import { EventHero, EventSchedule, ComingSoon, Speakers, RegisterButton } from "@/components/landing-pages/Events";
import { getEvents } from "@/services/sanity/queries";
import { getPortableTextExcerpt, splitFeaturedEvents } from "@/utils/eventSelectors";
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
  const featuredDescription = getPortableTextExcerpt(featured?.impactStorytelling);

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
        <EventHero
          title={featured?.title || "University Campus Tour (Lagos Edition)"}
          description={
            featuredDescription ||
            "This event description goes into this box. This events description goes into this box."
          }
          image={featured?.imageUrl || eventImage}
          sponsors={featured?.sponsorsAndPartners || []}
        >
          <RegisterButton event={featured} />
          <Badge parentClassName="rounded-md!" className="font-poppins text-sm font-medium px-8 py-3 rounded-md cursor-pointer">
            Sign Up to Email List
          </Badge>
        </EventHero>

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
