import { fetchSanityQuery } from "./client";
import type {
  SanityBlogPost,
  SanityContentCollections,
  SanityEvent,
  SanityFaq,
  SanitySpeaker,
  SanityTeamMember,
} from "@/types";

const speakerProjection = `{
  _id,
  _createdAt,
  _updatedAt,
  firstName,
  lastName,
  email,
  bio,
  "socials": coalesce(socials[], []),
  "imageUrl": image.asset->url
}`;

const eventProjection = `{
  _id,
  _createdAt,
  _updatedAt,
  title,
  eventType,
  "impactStorytelling": coalesce(impactStorytelling[], []),
  "mediaAndTestimonials": coalesce(mediaAndTestimonials[]{
    quote,
    "imageUrl": mediaItem.asset->url
  }, []),
  "sponsorsAndPartners": coalesce(sponsorsAndPartners[], [])
}`;

const faqProjection = `{
  _id,
  _createdAt,
  _updatedAt,
  question,
  answer
}`;

const teamMemberProjection = `{
  _id,
  _createdAt,
  _updatedAt,
  name,
  role,
  bio,
  "socials": coalesce(socials[], []),
  musicMood
}`;

const blogPostProjection = `{
  _id,
  _createdAt,
  _updatedAt,
  title,
  "slug": slug.current,
  category,
  seoMetadata,
  "body": coalesce(body[], [])
}`;

export const speakerListQuery = `*[_type == "speaker"] | order(firstName asc, lastName asc) ${speakerProjection}`;

export const eventListQuery = `*[_type == "event"] | order(_createdAt desc) ${eventProjection}`;

export const faqListQuery = `*[_type == "faq"] | order(_createdAt asc) ${faqProjection}`;

export const teamMemberListQuery = `*[_type == "teamMember"] | order(name asc) ${teamMemberProjection}`;

export const blogPostListQuery = `*[_type == "blogPost"] | order(_createdAt desc) ${blogPostProjection}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] ${blogPostProjection}`;

export const getSpeakers = () =>
  fetchSanityQuery<SanitySpeaker[]>(speakerListQuery);

export const getEvents = () => fetchSanityQuery<SanityEvent[]>(eventListQuery);

export const getFaqs = () => fetchSanityQuery<SanityFaq[]>(faqListQuery);

export const getTeamMembers = () =>
  fetchSanityQuery<SanityTeamMember[]>(teamMemberListQuery);

export const getBlogPosts = () =>
  fetchSanityQuery<SanityBlogPost[]>(blogPostListQuery);

export const getBlogPostBySlug = (slug: string) =>
  fetchSanityQuery<SanityBlogPost | null>(blogPostBySlugQuery, { slug });

export const getSanityContentCollections =
  async (): Promise<SanityContentCollections> => {
    const [speakers, events, faqs, teamMembers, blogPosts] = await Promise.all([
      getSpeakers(),
      getEvents(),
      getFaqs(),
      getTeamMembers(),
      getBlogPosts(),
    ]);

    return {
      speakers,
      events,
      faqs,
      teamMembers,
      blogPosts,
    };
  };
