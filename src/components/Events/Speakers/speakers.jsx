import { useState } from "react";
import Badge from "@/components/Badge/Badge";

import speaker1 from "@/assets/Images/speaker-2.png";
import speaker2 from "@/assets/Images/speaker-3.png";
import speaker3 from "@/assets/Images/speaker-2.png";
import speaker4 from "@/assets/Images/speaker-3.png";
import speaker5 from "@/assets/Images/speaker-2.png";
import speaker6 from "@/assets/Images/speaker-3.png";

const speakers = [
  {
    img: speaker1,
    role: "Co Founder",
    name: "Oladotun Ajayi",
    funFact: "I can write with my both hands",
    overlayColor: "rgba(0, 60, 160, 0.6)",
  },
  {
    img: speaker2,
    role: "CEO",
    name: "Jane Doe",
    funFact: "I've visited 30 countries before 30",
    overlayColor: "rgba(30, 120, 40, 0.6)",
  },
  {
    img: speaker3,
    role: "Lead Organizer",
    name: "Amaka Obi",
    funFact: "I can speak 4 languages fluently",
    overlayColor: "rgba(0, 60, 160, 0.6)",
  },
  {
    img: speaker4,
    role: "Head of Community",
    name: "Chidi Nwosu",
    funFact: "I started coding at age 10",
    overlayColor: "rgba(30, 120, 40, 0.6)",
  },
  {
    img: speaker5,
    role: "Keynote Speaker",
    name: "Fatima Aliyu",
    funFact: "I ran a marathon in under 4 hours",
    overlayColor: "rgba(0, 60, 160, 0.6)",
  },
  {
    img: speaker6,
    role: "Panelist",
    name: "Emeka Eze",
    funFact: "I built my first startup at 19 🚀",
    overlayColor: "rgba(30, 120, 40, 0.6)",
  },
];

const VISIBLE = 4;

function SpeakerCard({ speaker }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        flex: "0 0 calc(25% - 12px)",
        height: "500px",
        cursor: "pointer",
        borderRadius: "16px",
        overflow: "hidden",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        isolation: "isolate",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        <img
          src={speaker.img}
          alt={speaker.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0, 
          backgroundColor: speaker.overlayColor,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "30px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          color: "white",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            transform: hovered ? "translateY(0)" : "translateY(20px)",
            transition: "transform 0.4s ease-out",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontWeight: "600",
              opacity: 0.8,
              display: "block",
              marginBottom: "8px",
            }}
          >
            {speaker.role}
          </span>
          <h3
            style={{
              fontSize: "1.8rem",
              margin: "0 0 10px 0",
              fontFamily: "var(--font-neue-machina)",
              fontWeight: "800",
              lineHeight: "1.1",
            }}
          >
            {speaker.name}
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              margin: 0,
              lineHeight: "1.4",
              fontWeight: "400",
              fontStyle: "italic",
            }}
          >
            "{speaker.funFact}"
          </p>
        </div>
      </div>
    </div>
  );
}
      
export default function Speakers({ className = "" }) {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(speakers.length - VISIBLE, prev + 1)
    );
  };

  const visibleSpeakers = speakers.slice(
    startIndex,
    startIndex + VISIBLE
  );

  return (
    <section
      className={className}
      style={{
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Badge>The Voices of Impact</Badge>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                margin: 0,
                fontFamily: "var(--font-neue-machina)",
                fontWeight: 800,
              }}
            >
              Meet Our Speakers
            </h2>
          </div>

          {/* Arrows */}
          <div style={{ display: "flex", gap: "16px" }}>
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              style={{
                background: "none",
                border: "none",
                cursor: startIndex === 0 ? "not-allowed" : "pointer",
                opacity: startIndex === 0 ? 0.4 : 1,
                fontSize: "40px",
                lineHeight: 1,
              }}
            >
              ←
            </button>

            <button
              onClick={handleNext}
              disabled={startIndex >= speakers.length - VISIBLE}
              style={{
                background: "none",
                border: "none",
                cursor:
                  startIndex >= speakers.length - VISIBLE
                    ? "not-allowed"
                    : "pointer",
                opacity:
                  startIndex >= speakers.length - VISIBLE ? 0.4 : 1,
                fontSize: "40px",
              }}
            >
              →
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            overflowX: "auto",
          }}
        >
          {visibleSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}