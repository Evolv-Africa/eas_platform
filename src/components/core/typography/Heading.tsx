import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingVariant = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingWeight = "regular" | "medium" | "semibold" | "bold";
type HeadingTone = "primary" | "secondary" | "tertiary" | "accent";

const VARIANT_MAP: Record<HeadingVariant, string> = {
  display: "text-6xl leading-[1.1] tracking-[-0.02em]",
  h1: "text-5xl leading-[1.15] tracking-[-0.02em]",
  h2: "text-4xl leading-[1.2] tracking-[-0.015em]",
  h3: "text-3xl leading-[1.25] tracking-[-0.01em]",
  h4: "text-2xl leading-[1.3]",
  h5: "text-xl leading-[1.35]",
  h6: "text-lg leading-[1.4]",
};

const WEIGHT_MAP: Record<HeadingWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const TONE_MAP: Record<HeadingTone, string> = {
  primary: "text-semantic-text-primary",
  secondary: "text-semantic-text-secondary",
  tertiary: "text-semantic-text-tertiary",
  accent: "text-semantic-text-accent",
};

export interface HeadingProps extends Omit<
  React.ComponentPropsWithoutRef<HeadingLevel>,
  "color"
> {
  as?: HeadingLevel;
  variant?: HeadingVariant;
  weight?: HeadingWeight;
  tone?: HeadingTone;
}

export const Heading: React.FC<HeadingProps> = ({
  as,
  variant = "h2",
  weight = "bold",
  tone = "primary",
  className,
  children,
  ...props
}) => {
  const Component = as ?? (variant === "display" ? "h1" : variant);

  return React.createElement(
    Component,
    {
      className: [
        "font-geist",
        VARIANT_MAP[variant],
        WEIGHT_MAP[weight],
        TONE_MAP[tone],
        className,
      ]
        .filter(Boolean)
        .join(" "),
      ...props,
    },
    children,
  );
};
