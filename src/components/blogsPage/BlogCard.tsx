import type { FC } from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  coverImage: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
}

type BlogCardProps = {
  post: BlogPost;
};

export const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden bg-blue-900">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-900 backdrop-blur-sm font-poppins">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-gray-400 font-poppins mb-3">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="font-neue-machina text-base font-bold leading-snug text-blue-900 line-clamp-2 mb-2 group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h3>

        <p className="font-poppins text-sm leading-6 text-gray-500 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <Link
          to={`/blogs/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary font-poppins transition-gap duration-200 hover:gap-2.5 group/link"
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