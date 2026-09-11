import type { FC } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/types";

type BlogCardProps = {
  post: BlogPost;
};

export const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="h-48 overflow-hidden bg-blue-900">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-neue-machina text-base font-bold leading-snug text-gray-900 line-clamp-2 mb-2">
          {post.title}
        </h3>

        <p className="font-poppins text-sm leading-6 text-gray-900 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <Link
          to={`/blogs/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary font-poppins hover:gap-2.5 transition-all duration-200 group/link"
        >
          Read More
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
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