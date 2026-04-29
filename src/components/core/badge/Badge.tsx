import { FC } from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Badge: FC<BadgeProps> = ({ children, ...props }) => {
  return (
    <div
      className="w-fit rounded-full px-10 py-2 text-sm font-medium inline-block"
      style={{
        border: "1.5px solid #1D44B8",
        color: "#1D44B8",
      }}
      {...props}
    >
      {children}
    </div>
  );
};
