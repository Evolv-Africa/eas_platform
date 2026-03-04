import React from "react";
import { Avatar } from "./Avatar";

export interface StackedAvatarUser {
  name: string;
  src?: string | null;
}

interface StackedAvatarProps {
  users: StackedAvatarUser[];
  size?: "sm" | "md" | "lg";
  max?: number;
  overlap?: string; // e.g. "-ml-2"
  className?: string;
  overflowContent?: string;
}

const OVERLAP_MAP: Record<"sm" | "md" | "lg", string> = {
  sm: "-ml-1",
  md: "-ml-3",
  lg: "-ml-4",
};

export const StackedAvatar: React.FC<StackedAvatarProps> = ({
  users,
  size = "sm",
  max = 5,
  overlap,
  className,
  overflowContent,
}) => {
  const visibleUsers = users?.slice(0, max);
  const overflow = users?.length - max;
  const computedOverlap = overlap ?? OVERLAP_MAP[size];

  return (
    <div className={["flex items-center", className].filter(Boolean).join(" ")}>
      {visibleUsers?.map((user, idx) => (
        <span key={idx} className={idx !== 0 ? computedOverlap : undefined}>
          <Avatar name={user.name} src={user.src} size={size} />
        </span>
      ))}
      {overflow > 0 && (
        <span
          className={[
            computedOverlap,
            "inline-flex items-center justify-center rounded-full text-text-secondary font-normal ml-2 text-[10px]",
            size === "sm"
              ? "w-6 h-6 text-[10px]"
              : size === "md"
                ? "w-12 h-12 text-sm"
                : "w-15 h-15 text-base",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          +{overflow}
        </span>
      )}
      {overflowContent && overflow > 0 && (
        <span className="ml-.5 text-xs text-text-secondary">
          {overflowContent}
        </span>
      )}
    </div>
  );
};
