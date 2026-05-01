import { Badge, Button, BlogCard } from "@/components/core";
import blogImg1 from "@/assets/Images/blog-1.png";
import blogImg2 from "@/assets/Images/blog-2.png";
import blogImg3 from "@/assets/Images/blog-3.png";

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

const Blogs: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <section className={`px-5 py-10 md:py-20 ${className}`}>
      <div className="mx-auto max-w-320 text-center flex flex-col items-center">
        <div className="mb-6">
          <Badge>Our Blogs</Badge>
        </div>

        <h2 className="font-neue-machina font-extrabold text-3xl md:text-5xl leading-tight text-semantic-text-primary mb-4">
          Insights & Perspectives
        </h2>

        <p className="font-poppins text-base md:text-xl leading-7 text-semantic-text-secondary max-w-[620px] mb-7">
          Stay updated with news, thought leadership, and inspiring stories from
          the Evolv Africa Summit community.
        </p>

        <Button
          variant="primary"
          size="medium"
          style={{ padding: "24px 28px" }}
        >
          Visit the Blog
        </Button>
      </div>

      <div className="mx-auto max-w-320 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
