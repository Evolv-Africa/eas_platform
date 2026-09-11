export interface CardData {
  id: number;
  count: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar?: string;
  quote: string;
}

export const OurImpactData: CardData[] = [
  {
    id: 1,
    count: "25k+",
    title: "Community Members",
    description:
      "A thriving network of ambitious professionals, founders, creatives, and executives connected across industries and cities. Our community is built on meaningful relationships, shared growth, and access to opportunities that move careers and businesses forward.",
  },
  {
    id: 2,
    count: "15+",
    title: "Partner Organizations",
    description:
      "Our community is built on meaningful relationships, shared growth, and access to opportunities that move careers forward.",
  },
  {
    id: 3,
    count: "40+",
    title: "Speakers & Leaders",
    description:
      "Expert insights from industry pioneers and thought leaders who are shaping the future of technology and business.",
  },
  {
    id: 4,
    count: "03",
    title: "Events Organized",
    description:
      "Curated experiences designed to foster collaboration, learning, and high-impact networking.",
  },
];
export interface JourneyCardData extends CardData {
  tag: string;
}

export const AboutJourneyData: JourneyCardData[] = [
  {
    id: 1,
    count: "01",
    title: "Where It All Began",
    description:
      "The story began with LinkedIn Local Nigeria — a community-driven initiative created to bring online professional connections into real-world conversations.\n\nInstead of just networking through screens, the goal was simple: create spaces where people could meet face-to-face, exchange ideas, and build genuine professional relationships. What started as small gatherings quickly became something much bigger.",
    tag: "Origin",
  },
  {
    id: 2,
    count: "02",
    title: "A Bigger Possibility",
    description:
      "As the community grew, it became clear that people were looking for more than networking. They wanted collaboration, learning, mentorship, and opportunities to grow together.\n\nThe vision expanded from hosting meetups to creating a platform that supports emerging professionals, innovators, and leaders across industries — people who are building careers, companies, and ideas that shape the future of Africa.",
    tag: "Vision",
  },
  {
    id: 3,
    count: "03",
    title: "From LLN to Evolve Africa",
    description:
      "What began as LinkedIn Local Nigeria has now evolved into Evolv Africa Summit — a broader platform designed to bring together bold thinkers, emerging leaders, and organizations working to move the continent forward.\n\nThe evolution reflects the community itself: growing, ambitious, and ready for bigger conversations, stronger collaborations, and greater impact.",
    tag: "Evolution",
  },
];

export const leftTestimonials: Testimonial[] = [
  {
    name: "Amina Bello",
    role: "Founder, Green Innovations NG",
    quote:
      "EvolveAfrica Summit opened doors I didn't know existed — connections that have propelled my startup forward and introduced me to mentors who genuinely care about my growth.",
  },
  {
    name: "Tunde Adebayo",
    role: "Marketing Lead, NextGen Media",
    quote:
      "Attending workshops and discussions gave me clarity on my next career steps, confidence to lead initiatives, and a renewed sense of purpose for the work I do.",
  },
  {
    name: "Ibrahim Okoro",
    role: "Strategy Analyst, Impact Africa",
    quote:
      "Connecting with others who share a vision for Africa's future has been motivating and transformative. The relationships I've built here go beyond professional networking — they're genuine collaborations.",
  },
];

export const rightTestimonials: Testimonial[] = [
  {
    name: "Chiamaka Okeke",
    role: "Product Manager, Creative Hive",
    quote:
      "Sharing ideas with like-minded peers at the summit has been inspiring — every discussion sparks something new, and I often leave with actionable steps for my projects.",
  },
  {
    name: "Kwame Mensah",
    role: "CEO, PanAfrican Ventures",
    quote:
      "The Evolv community is a living network — I've built partnerships that I know will last years, and being part of this ecosystem constantly reminds me of Africa's potential.",
  },
  {
    name: "Funke Adeyemi",
    role: "Creative Director, Afro Studios",
    quote:
      "I've met mentors here who challenge my thinking and help me grow in ways I never expected.",
  },
  {
    name: "Tunde Adebayo",
    role: "Marketing Lead, NextGen Media",
    quote:
      "I've met mentors here who challenge my thinking and help me grow in ways I never expected.",
  },
];
