import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  parentClassName?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  parentClassName = "",
  className = "",
  ...props
}) => {
  const isRoundedCustom = parentClassName.includes("rounded-") || className.includes("rounded-");
  const outerRounded = isRoundedCustom ? "" : "rounded-full";
  const innerRounded = isRoundedCustom ? "" : "rounded-full";

  return (
    <span className={`w-fit whitespace-nowrap inline-block p-0.25 generic-border-gradient ${outerRounded} ${parentClassName}`}>
      <span
        className={`w-fit whitespace-nowrap ${innerRounded} px-10 py-2 text-sm font-medium inline-block bg-white text-[#003CA0] ${className}`}
        {...props}
      >
        {children}
      </span>
    </span>
  );
};
