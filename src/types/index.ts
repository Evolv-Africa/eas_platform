export * from "./header";
export * from "./speakers";
export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
};