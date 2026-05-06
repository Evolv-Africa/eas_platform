import type { FC } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/types";
import blogHeroImage from "@/assets/Images/blog-hero-image.png";

type FeaturedBlogCardProps = {
  post: BlogPost;
};

export const FeaturedBlogCard: FC<FeaturedBlogCardProps> = ({ post }) => {
  return (
    <article className="group grid gap-8 overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm md:grid-cols-[1.2fr_1fr] transition-all duration-300 hover:shadow-md">
      <div className="relative min-h-64 overflow-hidden rounded-3xl bg-blue-900 md:rounded-r-none">
        <img
          src={blogHeroImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-40"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
        <span
          className="mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold font-poppins"
          style={{ backgroundColor: "#EAF2FF", color: "#003CA0" }}
        >
          Community
        </span>

        <h2 className="font-neue-machina text-2xl font-extrabold leading-tight text-blue-900 md:text-3xl">
          {post.title}
        </h2>

        <p className="mt-4 font-poppins text-base leading-7 text-gray-900 line-clamp-4">
          {post.excerpt}
        </p>

        <Link
          to={`/blogs/${post.slug}`}
          className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary font-poppins hover:gap-2.5 transition-all duration-200"
        >
          Read More
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};