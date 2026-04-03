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
    body: "Evolv Africa Summit brings together professionals, innovators, and changemakers to collaborate, learn, and grow. We create spaces for meaningful professional connections across industries.",
    hoverBody: "Evolv Africa Summit brings together professionals, innovators, and changemakers to collaborate, learn, and grow. We create spaces for meaningful professional connections across industries. We create spaces for meaningful professional connections across industries.",
  },
  {
    img: blogImg2,
    title: "Empowering the Next Generation",
    body: "The summit nurtures emerging leaders and innovators across Africa. By connecting young professionals with mentors, peers, and thought leaders, we help turn bold ideas into actionable impact.",
    hoverBody: "The summit nurtures emerging leaders and innovators across Africa. By connecting young professionals with mentors, peers, and thought leaders, we help turn bold ideas into actionable impact. We create spaces for meaningful professional connections across industries.",
  },
  {
    img: blogImg3,
    title: "Building Impactful Communities",
    body: "Evolv Africa Summit fosters collaboration and knowledge sharing across sectors. Members gain access to networks, resources, and insights that empower them to make a real difference in their communities.",
    hoverBody: "Evolv Africa Summit brings together professionals, innovators, and changemakers to collaborate, learn, and grow. We create spaces for meaningful professional connections across industries. We create spaces for meaningful professional connections across industries.",
  },
];

function BlogCard({ post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
        minHeight: "450px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 10px 25px rgba(0,0,0,0.08)"
          : "0 2px 6px rgba(0,0,0,0.04)",
      }}
    >
      {/* Image */}
      <div style={{ height: "200px", overflow: "hidden", flexShrink: 0 }}>
        <img
          src={post.img}
          alt={post.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flex: 1,
        }}
      >
        <h3
          style={{
            fontSize: "17px",
            fontWeight: 700,
            color: "#0a0a1a",
            margin: 0,
            fontFamily: "Georgia, serif",
          }}
        >
          {post.title}
        </h3>

        <div
          style={{
            position: "relative",
            height: "140px",
            overflow: "hidden",
          }}
        >
          {/* Default text */}
          <p
            style={{
              fontSize: "14px",
              color: "#4b5563",
              lineHeight: 1.65,
              margin: 0,
              position: "absolute",
              inset: 0,
              opacity: hovered ? 0 : 1,
              transform: hovered ? "translateY(-10px)" : "translateY(0)",
              transition: "all 0.3s ease",
            }}
          >
            {post.body}
          </p>

          {/* Hover text */}
          <p
            style={{
              fontSize: "14px",
              color: "#4b5563",
              lineHeight: 1.65,
              margin: 0,
              position: "absolute",
              inset: 0,
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.3s ease",
            }}
          >
            {post.hoverBody}
          </p>
        </div>

        <a
          href="#"
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#1D44B8",
            textDecoration: "underline",
            marginTop: "8px",
            alignSelf: "flex-end",
          }}
        >
          Read More
        </a>
      </div>
    </div>
  );
}
export default function Blogs({ className = "" }) {
  return (
    <section className={`${className} px-6 md:px-16 lg:px-24`} style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: "20px" }}>
          <Badge>Our Blogs</Badge>
        </div>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", fontWeight: 800, color: "#0a0a1a", marginBottom: "16px", lineHeight: 1.2 }}>
          Insights &amp; Perspectives
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", maxWidth: "620px", margin: "0 auto 28px", lineHeight: 1.7 }}>
          Stay updated with news, thought leadership, and inspiring stories from the Evolv Africa Summit community.
        </p>
        <Button variant="primary" size="md">Visit the Blog</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ maxWidth: "72rem", margin: "48px auto 0" }}>
        {posts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
}