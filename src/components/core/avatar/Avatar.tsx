import React, { useState } from "react";

type AvatarSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

const SIZE_MAP: Record<AvatarSize, string> = {
  sm: "w-6 h-6", // 24px
  md: "w-12 h-12", // 48px
  lg: "w-15 h-15", // 60px
  xl: "w-18 h-18", // 72px
  "2xl": "w-21 h-21", // 84px
  "3xl": "w-24 h-24", // 96px
};

interface AvatarProps {
  name: string;
  src?: string | null;
  size?: AvatarSize;
  className?: string;
  alt?: string;
  testId?: string;
  isLoading?: boolean;
}

function getInitials(name: string) {
  if (!name) return "";
  const words = name.trim().split(/\s+/);
  return words
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  src,
  size = "md",
  className,
  alt,
  testId = "avatar",
  isLoading,
}) => {
  const [imgError, setImgError] = useState(false);
  const showInitials = !src || imgError;
  const initials = getInitials(name);

  if (isLoading)
    return (
      <div
        className={[
          "bg-neutral-grey-400 rounded-full animate-pulse",
          SIZE_MAP[size],
        ].join(" ")}
      />
    );

  return (
    <span
      data-testid={testId}
      className={[
        "inline-flex items-center justify-center rounded-full bg-neutral-grey-400 text-text-secondary text-[10px] font-normal overflow-hidden",
        SIZE_MAP[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ userSelect: "none" }}
      aria-label={name}
    >
      {showInitials ? (
        <span>{initials}</span>
      ) : (
        <img
          src={src ?? undefined}
          alt={alt || name}
          className="w-full h-full object-cover rounded-full"
          onError={() => setImgError(true)}
        />
      )}
    </span>
  );
};
