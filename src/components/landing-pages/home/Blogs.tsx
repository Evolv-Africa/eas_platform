import { FC, useEffect, useState } from "react";
import { Badge, Button, BlogCard } from "@/components/core";
import { getBlogPosts } from "@/services/sanity/queries";
import type { BlogPost } from "@/types";
import { mapSanityPostToCard } from "@/pages/blogsPage/BlogsPage";
import { HiOutlineDocumentText } from "react-icons/hi2";


const DISPLAY_COUNT = 3;

const Blogs: FC<{ className?: string }> = ({ className = "" }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    let isMounted = true;
    const loadPosts = async () => {
      try {
        const sanityPosts = await getBlogPosts();
        if (!isMounted) return;
        if (sanityPosts.length > 0) {
          setPosts(sanityPosts.map(mapSanityPostToCard));
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.error("Failed to load blog posts from Sanity:", error);
        if (isMounted) setPosts([]);
      }
    };
    loadPosts();
    return () => {
      isMounted = false;
    };
  }, []);

  const displayedPosts = posts.slice(0, DISPLAY_COUNT);

  return (
    <section className={`px-5 py-10 md:py-20 ${className}`}>
      <div className="mx-auto max-w-320 text-center flex flex-col items-center">
        <div className="mb-6">
          <Badge parentClassName="rounded-full" className="rounded-full">Our Blogs</Badge>
        </div>
        <h2 className="font-neue-machina font-extrabold text-3xl md:text-5xl leading-tight text-semantic-text-primary mb-4">
          Insights &amp; Perspectives
        </h2>
        <p className="font-poppins text-base md:text-xl leading-7 text-semantic-text-secondary max-w-[620px] mb-7">
          Stay updated with news, thought leadership, and inspiring stories from the Evolv Africa Summit community.
        </p>
        <Button variant="primary" size="medium" style={{ padding: "24px 28px" }}>
          Visit the Blog
        </Button>
      </div>

      {/* Recent Posts */}
      {posts.length === 0 ? null : (
        <section id="recent-posts" className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-320">
            <h2 className="font-neue-machina text-2xl font-bold text-blue-900 mb-8 md:text-3xl">
              Recent Posts
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {displayedPosts.map((post: BlogPost) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default Blogs;
