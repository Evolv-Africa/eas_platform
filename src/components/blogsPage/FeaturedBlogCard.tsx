import type { FC } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/types";

type FeaturedBlogCardProps = {
  post: BlogPost;
};

export const FeaturedBlogCard: FC<FeaturedBlogCardProps> = ({ post }) => {
  return (
    <article className="group grid gap-8 overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm md:grid-cols-[1.2fr_1fr] transition-all duration-300 hover:shadow-md">
      <div className="relative min-h-64 overflow-hidden rounded-3xl bg-blue-900 md:rounded-r-none">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-900 backdrop-blur-sm font-poppins">
          {post.category}
        </span>
      </div>

      <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
        <div className="flex items-center gap-2 text-xs text-gray-400 font-poppins mb-4">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h2 className="font-neue-machina text-2xl font-extrabold leading-tight text-blue-900 md:text-3xl group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h2>

        <p className="mt-4 font-poppins text-base leading-7 text-gray-500 line-clamp-4">
          {post.excerpt}
        </p>

        <Link
          to={`/blogs/${post.slug}`}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white font-poppins transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-[0_8px_20px_rgba(29,68,184,0.28)]"
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