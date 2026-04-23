import { FC, useState } from "react";
import { BlogCard } from "@/components/blogsPage/BlogCard";
import { FeaturedBlogCard } from "@/components/blogsPage/FeaturedBlogCard";
import { Pagination } from "@/components/blogsPage/Pagination";
import { blogPosts } from "@/constants/blogdata";
import type { BlogPost } from "@/types";

const POSTS_PER_PAGE = 9;

const BlogsPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);
  const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = remainingPosts.slice(
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
    <div className="bg-[#f7f9fc] min-h-screen">
      <section className="bg-white border-b border-gray-100 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-320">
          <h1 className="font-neue-machina text-4xl font-extrabold tracking-tight text-blue-900 md:text-5xl lg:text-[3.5rem]">
            Insights Stories &amp; Ideas
          </h1>
        </div>
      </section>

      <section className="px-4 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-320">
          <FeaturedBlogCard post={featuredPost} />
        </div>
      </section>

      <section id="recent-posts" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-320">
          <h2 className="font-neue-machina text-2xl font-bold text-blue-900 mb-8 md:text-3xl">
            Recent Posts
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;