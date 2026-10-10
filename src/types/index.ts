export type BlogPost = {
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
  body?: Array<Record<string, unknown>>;
  excerpt?: string;
  coverImage?: string;
};

export * from "./header";
export * from "./sanity";
export * from "./speakers";
export * from "./team";
