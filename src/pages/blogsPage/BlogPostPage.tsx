import { useEffect, useState } from "react";
import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import blogHeroImage from "@/assets/images/blog-hero-image.png";
import { getBlogPostBySlug } from "@/services/sanity/queries";
import type { BlogPost, SanityBlogPost } from "@/types";

const mapSanityPostToBlog = (post: SanityBlogPost): BlogPost => ({
  id: post._id,
  _id: post._id,
  _createdAt: post._createdAt,
  _updatedAt: post._updatedAt,
  title: post.title,
  slug: post.slug ?? post.title.toLowerCase().replace(/\s+/g, "-"),
  category: post.category || "Community",
  seoMetadata: post.seoMetadata,
  img: post.img,
  coverImage: post.img,
  body: post.body,
});

export const BlogPostPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setPost(null);
      return;
    }

    let isMounted = true;

    const loadPost = async () => {
      try {
        const result = await getBlogPostBySlug(slug);

        if (!isMounted) return;

        setPost(result ? mapSanityPostToBlog(result) : null);
      } catch (error) {
        console.error("Failed to load blog post:", error);
        if (isMounted) setPost(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadPost();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-blue-900">
        <div>
          <p className="font-neue-machina text-2xl font-bold">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
        <h1 className="font-neue-machina text-3xl font-bold text-blue-900">Blog not found</h1>
        <p className="mt-3 max-w-md text-gray-600">
          The article you are looking for does not exist or has not been published yet.
        </p>
        <Link
          to="/blogs"
          className="mt-6 inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-900"
        >
          Back to blogs
        </Link>
      </div>
    );
  }
  const paragraphs =
    (post.body ?? [])
      .filter((block) => (block as { _type?: string })?._type === "block")
      .map((block) => {
        const children = (block as { children?: Array<{ text?: string }> })?.children ?? [];
        return children.map((child) => child.text ?? "").join(" ").trim();
      })
      .filter(Boolean);

  return (
    <div className="bg-white font-poppins">
      <div className="mx-auto max-w-230 px-8 pb-8 pt-14 text-center">
        <Link
          to="/blogs"
          className="mb-6 inline-block rounded-full bg-[#EAF2FF] px-4 py-2 text-[13px] font-semibold text-[#003CA0] no-underline capitalize"
        >
          {post.category?.split("-").join(" ")}
        </Link>

        <h1 className="font-neue-machina text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.15] text-gray-900">
          {post.title}
        </h1>

        <p className="mx-auto mt-5 max-w-180 text-[17px] leading-8 text-[#6b7280]">
          {post.seoMetadata?.metaDescription}
        </p>
      </div>

      <div className="mx-auto my-10 max-w-325 px-8">
        <div className="relative h-100 overflow-hidden rounded-[20px]">
          <img
            src={post.img ?? blogHeroImage}
            alt={post.title}
            className="block h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="absolute inset-0 bg-[#0c1f4a] opacity-40" />
        </div>
      </div>

      <article className="mx-auto max-w-190 px-8 pb-10">
        {paragraphs.map((paragraph, index) => (
          <p
            key={`${paragraph.slice(0, 18)}-${index}`}
            className="mb-4 whitespace-pre-line text-[16px] leading-[1.9] text-[#374151]"
          >
            {paragraph}
          </p>
        ))}
      </article>
    </div>
  );
};

export default BlogPostPage;