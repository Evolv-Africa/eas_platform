import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children, ...props }) => {
  return (
    <span
      className="w-fit rounded-full px-10 py-2 text-sm font-medium inline-block"
      style={{
        border: "1.5px solid #1D44B8",
        color: "#1D44B8",
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;