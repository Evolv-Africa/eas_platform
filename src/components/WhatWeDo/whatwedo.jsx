import { useState } from "react";
import clsx from "clsx";
import Button from "@/components/Button/Button";
import Badge from "@/components/Badge/Badge";

const cards = [
  {
    title: "Flagship Events",
    description:
      "High-impact summits and meetups designed to inspire and empower.",
    justify: "justify-between",
    hoverBg: "hover:bg-green-500",
  },
  {
    title: "Community Building",
    description:
      "We create spaces for meaningful professional connections across industries.",
    justify: "justify-end",
    hoverBg: "hover:bg-blue-500",
  },
  {
    title: "Partnerships",
    description:
      "Collaborating with organizations to drive innovation and opportunity.",
    justify: "justify-end",
    hoverBg: "hover:bg-blue-500",
  },
  {
    title: "Professional Development",
    description:
      "Creating platforms that accelerate career growth and meaningful collaboration.",
    justify: "justify-between",
    hoverBg: "hover:bg-green-500",
  },
];

function Card({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={clsx(
        "rounded-xl p-6 min-h-[180px] flex flex-col transition-all duration-300 cursor-pointer",
        "bg-[#e7e7e7]",
        card.justify,
        card.hoverBg
      )}
    >
      <h3
        className={clsx(
          "font-neue-machina font-bold text-lg transition-colors",
          hovered ? "text-white" : "text-semantic-text-primary"
        )}
      >
        {card.title}
      </h3>

      <p
        className={clsx(
          "font-poppins text-sm leading-6 transition-colors",
          hovered ? "text-white" : "text-semantic-text-secondary"
        )}
      >
        {card.description}
      </p>
    </div>
  );
}

export default function WhatWeDo({ className = "" }) {
  return (
    <section className={clsx("px-5 py-10 md:py-20", className)}>
      <div className="mx-auto max-w-320 text-center flex flex-col items-center">
        
        {/* Header */}
        <div className="mb-6">
          <Badge>What We Do</Badge>
        </div>

        <h2 className="font-neue-machina font-extrabold text-3xl md:text-5xl leading-tight text-semantic-text-primary mb-5">
          Evolving Conversations.
          <br />
          Expanding Possibilities.
        </h2>

        <p className="font-poppins text-base md:text-xl leading-7 text-semantic-text-secondary max-w-[705px] mb-7">
          Evolv Africa Summit brings together professionals, innovators, and
          organizations to collaborate, learn, and shape the future of
          leadership and opportunity across the continent.
        </p>

        {/* Fix button width */}
        <Button size="md" className="w-fit">
          Partner with us
        </Button>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-320 mt-12 flex flex-col gap-4">
        
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