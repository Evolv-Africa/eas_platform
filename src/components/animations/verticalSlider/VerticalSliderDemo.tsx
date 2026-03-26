"use client";

import { useState } from "react";
import {
  VerticalSlider,
  type AnimationPreset,
  type SlideDirection,
} from "./VerticalSlider";

const DEMO_ITEMS_1 = ["Developers", "Designers", "Founders", "Dreamers"];
const DEMO_ITEMS_2 = [
  "Ship faster.",
  "Build boldly.",
  "Think clearly.",
  "Move first.",
];
const DEMO_ITEMS_3 = ["React", "TypeScript", "Tailwind CSS", "Framer Motion"];

export default function VerticalSliderDemo() {
  const [activePreset, setActivePreset] = useState<AnimationPreset>("smooth");
  const [activeDirection, setActiveDirection] = useState<SlideDirection>("up");

  const presets: AnimationPreset[] = ["smooth", "spring", "snappy", "drift"];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-16 px-6 gap-20"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0f 0%, #0f0f1a 50%, #0a0f0a 100%)",
        fontFamily: "'DM Serif Display', Georgia, serif",
      }}
    >
      {/* Google font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::selection { background: #4ade80; color: #000; }
      `}</style>

      {/* ── Hero ── */}
      <section className="flex flex-col items-center gap-6 text-center ">
        <span
          className="text-xs tracking-[0.3em] uppercase mb-2"
          style={{ color: "#4ade80", fontFamily: "'DM Mono', monospace" }}
        >
          Reusable Component
        </span>

        <h1
          className="text-5xl md:text-7xl font-normal leading-tight"
          style={{ color: "#f0f0e8" }}
        >
          Built for{" "}
          <VerticalSlider
            items={DEMO_ITEMS_1}
            interval={2000}
            preset="spring"
            direction="up"
            className="align-middle"
            itemClassName="italic"
            style={{ color: "#4ade80" }}
          />
        </h1>

        <p
          className="text-lg md:text-xl leading-relaxed max-w-xl"
          style={{
            color: "#8888a0",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.875rem",
          }}
        >
          A zero-dependency vertical text slider powered by Framer Motion. Fully
          typed, accessible, and endlessly composable.
        </p>
      </section>

      {/* ── Tagline demo ── */}
      <section className="flex flex-col items-center gap-4">
        <p
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "#555570", fontFamily: "'DM Mono', monospace" }}
        >
          Inline usage
        </p>
        <div
          className="text-3xl md:text-5xl text-center leading-snug"
          style={{ color: "#f0f0e8" }}
        >
          <VerticalSlider
            items={DEMO_ITEMS_2}
            interval={1800}
            preset="drift"
            direction="up"
            itemClassName=""
          />
        </div>
      </section>

      {/* ── Interactive preset playground ── */}
      <section className="w-full max-w-2xl flex flex-col items-center gap-8">
        <p
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "#555570", fontFamily: "'DM Mono', monospace" }}
        >
          Playground — try different presets
        </p>

        {/* Live preview */}
        <div
          className="w-full rounded-2xl flex items-center justify-center"
          style={{
            height: 140,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <VerticalSlider
            key={`${activePreset}-${activeDirection}`}
            items={DEMO_ITEMS_3}
            interval={1600}
            preset={activePreset}
            direction={activeDirection}
            className="text-4xl md:text-5xl"
            itemClassName=""
            style={{ color: "#f0f0e8" }}
          />
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 justify-center">
          {presets.map((p) => (
            <button
              key={p}
              onClick={() => setActivePreset(p)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                background:
                  activePreset === p ? "#4ade80" : "rgba(255,255,255,0.05)",
                color: activePreset === p ? "#000" : "#8888a0",
                border: "1px solid",
                borderColor:
                  activePreset === p ? "#4ade80" : "rgba(255,255,255,0.1)",
                padding: "6px 16px",
                borderRadius: 999,
                cursor: "pointer",
                transition: "all 0.2s",
                textTransform: "uppercase",
              }}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() =>
              setActiveDirection((d) => (d === "up" ? "down" : "up"))
            }
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              background: "rgba(255,255,255,0.05)",
              color: "#8888a0",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "6px 16px",
              borderRadius: 999,
              cursor: "pointer",
              transition: "all 0.2s",
              textTransform: "uppercase",
            }}
          >
            Direction: {activeDirection}
          </button>
        </div>
      </section>

      {/* ── API table ── */}
      <section className="w-full max-w-2xl flex flex-col gap-6">
        <p
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "#555570", fontFamily: "'DM Mono', monospace" }}
        >
          Props API
        </p>
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {[
            ["items", "string[]", "required", "Strings to cycle through"],
            ["interval", "number", "2200", "Ms each item is shown"],
            [
              "direction",
              "'up' | 'down'",
              "'up'",
              "Exit direction of outgoing text",
            ],
            [
              "preset",
              "AnimationPreset",
              "'smooth'",
              "smooth | spring | snappy | drift",
            ],
            ["loop", "boolean", "true", "Restart after last item"],
            ["pauseOnHover", "boolean", "true", "Pauses the timer on hover"],
            ["className", "string", "—", "Wrapper element classes"],
            ["itemClassName", "string", "—", "Per-item element classes"],
            [
              "onIndexChange",
              "(i: number) => void",
              "—",
              "Fires on index change",
            ],
          ].map(([prop, type, def, desc], i) => (
            <div
              key={prop}
              className="grid grid-cols-4 gap-3 px-5 py-3 text-xs items-start"
              style={{
                fontFamily: "'DM Mono', monospace",
                background:
                  i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                borderBottom:
                  i < 8 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <span style={{ color: "#4ade80" }}>{prop}</span>
              <span style={{ color: "#a0a0c0" }}>{type}</span>
              <span style={{ color: "#666680" }}>{def}</span>
              <span style={{ color: "#666680" }}>{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Usage snippet ── */}
      <section className="w-full max-w-2xl flex flex-col gap-4">
        <p
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: "#555570", fontFamily: "'DM Mono', monospace" }}
        >
          Usage
        </p>
        <pre
          className="rounded-2xl p-6 text-xs leading-relaxed overflow-x-auto"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontFamily: "'DM Mono', monospace",
            color: "#a0c0a0",
          }}
        >{`import { VerticalSlider } from "./VerticalSlider";

// Inline inside a heading
<h1>
  Built for{" "}
  <VerticalSlider
    items={["Developers", "Designers", "Founders"]}
    interval={2000}
    preset="spring"
    direction="up"
  />
</h1>

// Standalone with callback
<VerticalSlider
  items={["Ship faster.", "Build boldly.", "Move first."]}
  preset="drift"
  loop={true}
  pauseOnHover={true}
  onIndexChange={(i) => console.log("now showing:", i)}
/>`}</pre>
      </section>
    </div>
  );
}
