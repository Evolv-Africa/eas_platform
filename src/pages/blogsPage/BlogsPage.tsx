import { FC, useEffect, useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { BlogCard } from "@/components/landing-pages/blogsPage/BlogCard";
import { FeaturedBlogCard } from "@/components/landing-pages/blogsPage/FeaturedBlogCard";
import { Pagination } from "@/components/landing-pages/blogsPage/Pagination";
import { getBlogPosts } from "@/services/sanity/queries";
import type { BlogPost, SanityBlogPost } from "@/types";

const POSTS_PER_PAGE = 12;

export const buildExcerptFromBody = (body: Array<Record<string, unknown>> | undefined) => {
  if (!Array.isArray(body)) return "Insights from this story.";

  const text = body
    .map((block) => {
      const children = (block as { children?: Array<{ text?: string }> })?.children ?? [];
      return children
        .map((child) => child.text ?? "")
        .join(" ")
        .trim();
    })
    .filter(Boolean)
    .join(" ");

  return text || "Insights from this story.";
};

export const mapSanityPostToCard = (post: SanityBlogPost): BlogPost => ({
  id: post._id,
  title: post.title,
  excerpt: buildExcerptFromBody(post.body),
  img: post.img,
  coverImage: post.img,
  slug: post.slug ?? post.title.toLowerCase().replace(/\s+/g, "-"),
  category: post.category || "Community",
});

const BlogsPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadPosts = async () => {
      try {
        const sanityPosts = await getBlogPosts();

        if (!isMounted) {
          return;
        }

        if (sanityPosts.length > 0) {
          setPosts(sanityPosts.map(mapSanityPostToCard));
          return;
        }

        setPosts([]);
      } catch {
        // console.error("Failed to load blog posts from Sanity:", error);

        if (isMounted) {
          setPosts([]);
        }
      }
    };

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  const featuredPost = posts[0] ?? undefined;
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document
      .getElementById("recent-posts")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-white border-b border-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-320">
          <h1 className="font-neue-machina text-4xl font-extrabold tracking-tight text-blue-900 md:text-5xl lg:text-[3.5rem]">
            Insights Stories &amp; Ideas
          </h1>
        </div>
      </section>

      {featuredPost && (
        <section className="px-4 pt-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-320">
            <FeaturedBlogCard post={featuredPost} />
          </div>
        </section>
      )}

      <section id="recent-posts" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-320">
          <h2 className="font-neue-machina text-2xl font-bold text-blue-900 mb-8 md:text-3xl">
            Recent Posts
          </h2>

          {posts.length === 0 ? (
            <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-6 text-center">
              <HiOutlineDocumentText className="mb-4 h-12 w-12 text-blue-900/60" />
              <h3 className="font-neue-machina text-xl font-bold text-blue-900">
                No recent blog posts yet
              </h3>
              <p className="mt-2 max-w-md text-sm text-gray-600">
                New stories will appear here once content is published.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post: BlogPost) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;