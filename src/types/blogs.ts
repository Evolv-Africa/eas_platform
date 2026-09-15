export interface BlogPost {
  id?: string;
  _id?: string;
  _createdAt?: string;
  _updatedAt?: string;
  title: string;
  slug?: string;
  category?: string;
  seoMetadata?: {
    metaTitle?: string;
    metaDescription?: string;
  };
  img?: string;
  coverImage?: string;
  excerpt?: string;
  body?: string | Array<Record<string, unknown>>;
  hoverBody?: string;
}

export interface BlogCardProps {
  post: BlogPost;
}
