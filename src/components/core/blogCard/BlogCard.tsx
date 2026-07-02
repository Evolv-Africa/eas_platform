import { BlogPost } from "@/types/blogs";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

export const BlogCard: FC<BlogPost> = ({ body, hoverBody, img, title }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white min-h-[420px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="h-48 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-neue-machina font-bold text-lg text-semantic-text-primary">
          {title}
        </h3>

        <div className="relative h-[120px] overflow-hidden">
          <p
            className={`absolute inset-0 font-poppins text-sm leading-6 text-semantic-text-secondary transition-all duration-300 ${hovered ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"}`}
          >
            {body}
          </p>
          <p
            className={`absolute inset-0 font-poppins text-sm leading-6 text-semantic-text-secondary transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          >
            {hoverBody}
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
