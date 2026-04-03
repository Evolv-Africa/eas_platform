import { useState } from "react";
import Button from "@/components/Button/Button";
import Badge from "@/components/Badge/Badge";

const cards = [
  { title: "Flagship Events", description: "High-impact summits and meetups designed to inspire and empower.", justify: "space-between", hoverBg: "#4CAF50" },
  { title: "Community Building", description: "We create spaces for meaningful professional\nconnections across industries.", justify: "flex-end", hoverBg: "#1D44B8" },
  { title: "Partnerships", description: "Collaborating with organizations to drive\ninnovation and opportunity.", justify: "flex-end", hoverBg: "#1D44B8" },
  { title: "Professional Development", description: "Creating platforms that accelerate career growth and meaningful collaboration.", justify: "space-between", hoverBg: "#4CAF50" },
];

function Card({ card }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? card.hoverBg : "#e7e7e7",
        borderRadius: "12px",
        padding: "24px",
        minHeight: "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: card.justify,
        gap: "6px",
        transition: "background-color 0.25s ease",
        cursor: "pointer",
      }}
    >
      <h3 style={{ fontSize: "17px", fontWeight: 700, color: hovered ? "#ffffff" : "#0a0a1a", fontFamily: "Georgia, serif", margin: 0, transition: "color 0.25s ease" }}>
        {card.title}
      </h3>
      <p style={{ fontSize: "14px", color: hovered ? "#ffffff" : "#4b5563", lineHeight: 1.6, margin: 0, whiteSpace: "pre-line", transition: "color 0.25s ease" }}>
        {card.description}
      </p>
    </div>
  );
}

export default function WhatWeDo({ className = "" }) {
  return (
    <section className={className} style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
        <div className="mb-6"><Badge>What We Do</Badge></div>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.15, color: "#0a0a1a", marginBottom: "20px" }}>
          Evolving Conversations.<br />Expanding Possibilities.
        </h2>
        <p style={{ fontSize: "15px", color: "#6b7280", maxWidth: "705px", margin: "0 auto 28px", lineHeight: 1.7 }}>
          Evolv Africa Summit brings together professionals, innovators, and organizations to collaborate, learn, and shape the future of leadership and opportunity across the continent.
        </p>
        <Button variant="primary" size="md">Partner with us</Button>
      </div>

      <div style={{ maxWidth: "72rem", margin: "48px auto 0", display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4">
          <Card card={cards[0]} />
          <Card card={cards[1]} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4">
          <Card card={cards[2]} />
          <Card card={cards[3]} />
        </div>
      </div>
    </section>
  );
}