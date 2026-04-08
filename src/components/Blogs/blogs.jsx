import { useState } from "react";
import Button from "@/components/Button/Button";
import Badge from "@/components/Badge/Badge";
import blogImg1 from "../../assets/Images/blog-1.png";
import blogImg2 from "../../assets/Images/blog-2.png";
import blogImg3 from "../../assets/Images/blog-3.png";

const posts = [
  {
    img: blogImg1,
    title: "Say Hello to Evolv Africa",
    body: "Evolv Africa Summit brings together professionals, innovators, and changemakers to collaborate, learn, and grow.",
    hoverBody:
      "Evolv Africa Summit brings together professionals, innovators, and changemakers to collaborate, learn, and grow. We create spaces for meaningful professional connections across industries.",
  },
  {
    img: blogImg2,
    title: "Empowering the Next Generation",
    body: "The summit nurtures emerging leaders and innovators across Africa.",
    hoverBody:
      "The summit nurtures emerging leaders and innovators across Africa. By connecting young professionals with mentors, peers, and thought leaders, we help turn bold ideas into actionable impact.",
  },
  {
    img: blogImg3,
    title: "Building Impactful Communities",
    body: "Evolv Africa Summit fosters collaboration and knowledge sharing across sectors.",
    hoverBody:
      "Evolv Africa Summit fosters collaboration and knowledge sharing across sectors. Members gain access to networks, resources, and insights that empower them to make a real difference.",
  },
];

function BlogCard({ post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col rounded-xl overflow-hidden border border-gray-200 bg-white min-h-[420px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-neue-machina font-bold text-lg text-semantic-text-primary">
          {post.title}
        </h3>

        {/* Animated text swap */}
        <div className="relative h-[120px] overflow-hidden">
          <p
            className={(
              "absolute inset-0 font-poppins text-sm leading-6 text-semantic-text-secondary transition-all duration-300",
              hovered
                ? "opacity-0 -translate-y-2"
                : "opacity-100 translate-y-0"
            )}
          >
            {post.body}
          </p>

          <p
            className={(
              "absolute inset-0 font-poppins text-sm leading-6 text-semantic-text-secondary transition-all duration-300",
              hovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            )}
          >
            {post.hoverBody}
          </p>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="mt-auto text-sm font-semibold text-blue-600 hover:text-blue-700 underline self-end"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default function Blogs({ className = "" }) {
  return (
    <section className={("px-5 py-10 md:py-20", className)}>
      <div className="mx-auto max-w-320 text-center flex flex-col items-center">
        
        <div className="mb-6">
          <Badge>Our Blogs</Badge>
        </div>

        <h2 className="font-neue-machina font-extrabold text-3xl md:text-5xl leading-tight text-semantic-text-primary mb-4">
          Insights & Perspectives
        </h2>

        <p className="font-poppins text-base md:text-xl leading-7 text-semantic-text-secondary max-w-[620px] mb-7">
          Stay updated with news, thought leadership, and inspiring stories
          from the Evolv Africa Summit community.
        </p>

        <Button size="md" className="w-fit">
          Visit the Blog
        </Button>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-320 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
}