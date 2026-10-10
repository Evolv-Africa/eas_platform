import { SanityEvent } from '@/types';

/**
 * Split a list of events into a featured event and upcoming events.
 *
 * Rules:
 *  - If exactly one event has `isFeatured === true`, it becomes the featured.
 *  - If multiple events are flagged as featured, the one with the earliest `eventDate` wins.
 *  - If none are flagged, the event with the nearest future `eventDate` becomes featured.
 *  - Upcoming events are all other events, sorted by date (soonest first).
 */
export function splitFeaturedEvents(events: SanityEvent[]) {
  if (!events || events.length === 0) {
    return { featured: undefined, upcoming: [] } as const;
  }

  // Clone and sort by eventDate (ascending)
  const sorted = [...events].sort((a, b) => {
    const da = new Date(a.eventDate ?? 0).getTime();
    const db = new Date(b.eventDate ?? 0).getTime();
    return da - db;
  });

  const featuredCandidates = sorted.filter((e) => e.isFeatured);
  let featured: SanityEvent | undefined;

  if (featuredCandidates.length === 0) {
    // No explicit featured – use the earliest event
    featured = sorted[0];
  } else if (featuredCandidates.length === 1) {
    featured = featuredCandidates[0];
  } else {
    // Multiple featured – pick the one with earliest date
    featured = featuredCandidates.reduce((prev, cur) =>
      new Date(prev.eventDate ?? 0) < new Date(cur.eventDate ?? 0) ? prev : cur
    );
    // Optional: log a warning for developers
    // console.warn('[Sanity] Multiple events marked as featured; using earliest date.');
  }

  const upcoming = sorted.filter((e) => e._id !== featured?._id);

  return { featured, upcoming } as const;
}
