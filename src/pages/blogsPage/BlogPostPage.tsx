import type { FC } from "react";
import { Link, useParams } from "react-router-dom";
import blogHeroImage from "../../assets/Images/blog-hero-image.png";
import { blogPosts } from "@/constants/blogdata";

type Section = {
  heading: string;
  body: string[];
};

const mockContent: Record<string, { sections: Section[] }> = {
  default: {
    sections: [
      {
        heading: "Introduction",
        body: [
          "Communities often start with something simple - a shared curiosity, a conversation, or the desire to connect with people who see the world a little differently.",
          "Evolv Africa began in much the same way.",
          "What started as LinkedIn Local Nigeria, a gathering space for professionals who wanted to move beyond online interactions and meet in real life, has grown into something much bigger than we ever imagined.",
          "And now, we're entering a new chapter.",
        ],
      },
      {
        heading: "Where It All Started",
        body: [
          "Several years ago, professionals across Nigeria began participating in LinkedIn Local meetups - events designed to bring LinkedIn connections offline and into real conversations.",
          "The idea was simple.",
          "Instead of just liking posts and exchanging comments online, people could meet face-to-face, share stories, build friendships, and form meaningful professional relationships.",
          "What happened next was powerful.",
          "People showed up.",
          "Not just once, but again and again.",
          "Entrepreneurs met collaborators.\nYoung professionals found mentors.\nIdeas turned into projects.",
          "A community had begun to form.",
          "From LinkedIn Local Nigeria to Something Bigger",
          "Over time, the community started to grow beyond the original format.",
          "The conversations became bigger.\nThe opportunities became more diverse.\nThe vision expanded.",
          "LinkedIn Local Nigeria had created something meaningful, but the community was ready for a broader identity - one that reflected the evolving ambitions of the people within it.",
          "That's where Evolv Africa was born.",
          'Why "Evolv Africa"',
          "The name reflects a simple belief.",
          "Growth is constant.",
          "Professionals evolve.\nIndustries evolve.\nCommunities evolve.",
          "Evolv Africa represents a platform where people across different industries and backgrounds can come together to connect, learn, collaborate, and grow.",
          "It's about building a space where ideas move freely and opportunities emerge naturally.",
        ],
      },
      {
        heading: "A Community Built on Connection",
        body: [
          "At its core, Evolv Africa is still about the same thing that sparked the original gatherings:",
          "People.",
          "People who are curious.\nPeople who are building.\nPeople who believe that collaboration is stronger than competition.",
          "Through events, conversations, partnerships, and shared experiences, the community continues to grow in ways that are both exciting and unpredictable.",
        ],
      },
      {
        heading: "Looking Ahead",
        body: [
          "The future of Evolv Africa is not just about hosting events or creating professional spaces.",
          "It's about building a network where:",
          "Ideas are exchanged openly.\nPartnerships form naturally.\nAnd individuals find the support they need to grow.",
          "As the community expands across industries and across the continent, the mission remains simple:",
          "Create spaces where people can connect meaningfully and build the future together.",
        ],
      },
      {
        heading: "Join the Journey",
        body: [
          "If you believe in the power of community, collaboration, and growth, you're already part of the story.",
          "And the best part?",
          "We're just getting started.",
        ],
      },
    ],
  },
};
function getContent(slug: string) {
  return mockContent[slug] ?? mockContent["default"];
}

export const BlogPostPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug) ?? blogPosts[0];
  const content = getContent(post.slug);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#fff" }}>

      <div
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          padding: "56px 32px 32px",
          textAlign: "center",
        }}
      >
        <Link
          to="/blogs"
          style={{
            display: "inline-block",
            backgroundColor: "#EAF2FF",
            color: "#003CA0",
            fontSize: "13px",
            fontWeight: 600,
            padding: "6px 16px",
            borderRadius: "999px",
            textDecoration: "none",
            marginBottom: "24px",
          }}
        >
          Community
        </Link>

        <h1
          style={{
            fontFamily: "'Neue Machina', sans-serif",
            fontSize: "clamp(34px, 5vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#111827",
            margin: "0 0 20px",
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#6b7280",
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          {post.excerpt}
        </p>
      </div>

      <div
        style={{
          maxWidth: "1300px",
          margin: "40px auto 60px",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "400px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <img
            src={blogHeroImage}
            alt={post.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#0c1f4a",
              opacity: 0.40,
            }}
          />
        </div>
      </div>

      <article
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 32px 40px",
        }}
      >
        {content.sections.map((section: Section, i: number) => (
          <section key={i} style={{ marginBottom: "44px" }}>
            <h2
              style={{
                fontFamily: "'Neue Machina', sans-serif",
                fontSize: "22px",
                fontWeight: 800,
                color: "#111827",
                marginBottom: "20px",
              }}
            >
              {section.heading}
            </h2>

            {section.body.map((para: string, j: number) => (
              <p
                key={j}
                style={{
                  fontSize: "16px",
                  lineHeight: 1.9,
                  color: "#374151",
                  marginBottom: "16px",
                  whiteSpace: "pre-line",
                }}
              >
                {para}
              </p>
            ))}
          </section>
        ))}
      </article>

    </div>
  );
};

export default BlogPostPage;