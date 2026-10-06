import { BlogPost } from "@/types/blogs";
import { FC } from "react";
import { Link } from "react-router-dom";

export const BlogCard: FC<BlogPost> = ({ img, title, excerpt }) => {

  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white min-h-105 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-neue-machina font-bold text-lg text-semantic-text-primary">
          {title}
        </h3>

        <div className="h-30 overflow-hidden">
          <p className="font-poppins text-sm leading-6 text-semantic-text-secondary">
            {excerpt ?? "Latest article"}
          </p>
        </div>

        <Link
          to={"#"}
          className="mt-auto text-sm font-semibold text-blue-600 hover:text-blue-700 underline self-end"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
