import React from "react";

type TextElement = "p" | "span" | "small" | "label";
type TextVariant = "xl" | "lg" | "md" | "sm" | "xs" | "caption";
type TextWeight = "regular" | "medium" | "semibold" | "bold";
type TextTone =
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent"
  | "success"
  | "warning"
  | "error";

const VARIANT_MAP: Record<TextVariant, string> = {
  xl: "text-xl leading-[1.45]",
  lg: "text-lg leading-[1.45]",
  md: "text-base leading-[1.5]",
  sm: "text-sm leading-[1.45]",
  xs: "text-xs leading-[1.4]",
  caption: "text-[11px] leading-[1.35] tracking-[0.01em] uppercase",
};

const WEIGHT_MAP: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const TONE_MAP: Record<TextTone, string> = {
  primary: "text-semantic-text-primary",
  secondary: "text-semantic-text-secondary",
  tertiary: "text-semantic-text-tertiary",
  accent: "text-semantic-text-accent",
  success: "text-semantic-text-success",
  warning: "text-semantic-text-warning",
  error: "text-semantic-text-error",
};

export interface TextProps extends Omit<
  React.ComponentPropsWithoutRef<TextElement>,
  "color"
> {
  as?: TextElement;
  variant?: TextVariant;
  weight?: TextWeight;
  tone?: TextTone;
}

export const Text: React.FC<TextProps> = ({
  as = "p",
  variant = "md",
  weight = "regular",
  tone = "secondary",
  className,
  children,
  ...props
}) => {
  return React.createElement(
    as,
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
