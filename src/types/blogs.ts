import type { SanityBlogPost } from "./sanity";

export interface BlogPost extends SanityBlogPost {
  id?: string;
  excerpt?: string;
  coverImage?: string;
}

export interface BlogCardProps {
  post: BlogPost;
}
