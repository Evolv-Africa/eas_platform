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
  impactStorytelling: Array<Record<string, unknown>>;
  mediaAndTestimonials: SanityEventMediaItem[];
  sponsorsAndPartners: string[];
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
  body: Array<Record<string, unknown>>;
}

export interface SanityContentCollections {
  speakers: SanitySpeaker[];
  events: SanityEvent[];
  faqs: SanityFaq[];
  teamMembers: SanityTeamMember[];
  blogPosts: SanityBlogPost[];
}
