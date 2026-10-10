export interface SanityDocument {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface SanitySocialLink {
  name: string;
  url: string;
}

export interface SanitySpeaker extends SanityDocument {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  socials: SanitySocialLink[];
  imageUrl?: string;
}

export interface SanityEventMediaItem {
  imageUrl?: string;
  quote?: string;
}

export interface SanityEvent extends SanityDocument {
  title: string;
  eventType?: string;
  imageUrl?: string;
  impactStorytelling: Array<Record<string, unknown>>;
  mediaAndTestimonials: SanityEventMediaItem[];
  speakers: SanitySpeaker[];
  sponsorsAndPartners: SanitySponsor[];
  schedule?: SanityScheduleDay[];
  eventDate?: string;
  isFeatured?: boolean;
}

export interface SanityScheduleItem {
  _key: string;
  time: string;
  title: string;
  description?: string;
  location?: string;
}

export interface SanityScheduleDay {
  _key: string;
  date: string;
  dayTitle?: string;
  items: SanityScheduleItem[];
}

export interface SanitySponsor extends SanityDocument {
  name: string;
  website?: string;
  imageUrl?: string;
}


export interface SanityFaq extends SanityDocument {
  question: string;
  answer: string;
}

export interface SanityTeamMember extends SanityDocument {
  name: string;
  role?: string;
  bio?: string;
  socials: SanitySocialLink[];
  musicMood?: string;
}

export interface SanitySeoMetadata {
  metaTitle?: string;
  metaDescription?: string;
}

export interface SanityBlogPost extends SanityDocument {
  title: string;
  slug?: string;
  category: string;
  seoMetadata?: SanitySeoMetadata;
  img?: string;
  body: Array<Record<string, unknown>>;
}

export interface SanityContentCollections {
  speakers: SanitySpeaker[];
  events: SanityEvent[];
  faqs: SanityFaq[];
  teamMembers: SanityTeamMember[];
  sponsorsAndPartners: SanitySponsor[];
  blogPosts: SanityBlogPost[];
}
