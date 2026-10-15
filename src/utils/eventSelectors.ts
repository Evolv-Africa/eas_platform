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
    return { featured: undefined, upcoming: [] as SanityEvent[] };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isUpcoming = (e: SanityEvent) => {
    if (!e.eventDate) return true;
    const d = new Date(e.eventDate);
    return isNaN(d.getTime()) || d.getTime() >= today.getTime();
  };

  const upcomingEvents = events.filter(isUpcoming);

  if (upcomingEvents.length === 0) {
    return { featured: undefined, upcoming: [] as SanityEvent[] };
  }

  // Clone and sort by eventDate (ascending)
  const sorted = [...upcomingEvents].sort((a, b) => {
    const da = new Date(a.eventDate ?? 0).getTime();
    const db = new Date(b.eventDate ?? 0).getTime();
    return da - db;
  });

  const featuredCandidates = sorted.filter((e) => e.isFeatured);
  let featured: SanityEvent | undefined;

  if (featuredCandidates.length === 0) {
    // No explicit featured – use the nearest future event
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

  return { featured, upcoming };
}

export const getOrdinalSuffix = (day: number): string => {
  if (day >= 11 && day <= 13) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

/** Formats an ISO date as e.g. "24th May 2025". Returns an empty string for invalid input. */
export const formatEventDate = (iso?: string): string => {
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  return `${day}${getOrdinalSuffix(day)} ${month} ${date.getFullYear()}`;
};

function portableTextBlocks(body: Array<Record<string, unknown>> | undefined): string[] {
  if (!Array.isArray(body)) return [];
  return body
    .map((block) => {
      const children = (block as { children?: Array<{ text?: string }> })?.children ?? [];
      return children.map((child) => child.text ?? '').join(' ').trim();
    })
    .filter(Boolean);
}

/** Plain-text excerpt from a Sanity portable text body. */
export const getPortableTextExcerpt = (
  body: Array<Record<string, unknown>> | undefined
): string => portableTextBlocks(body).join(' ');

/** One string per portable-text block, so a story can render as paragraphs. */
export const getPortableTextParagraphs = (
  body: Array<Record<string, unknown>> | undefined
): string[] => portableTextBlocks(body);
