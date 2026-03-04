import { Icon } from "@/components/core";
import { NavMenu } from "@/constants";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar: FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex items-center justify-center px-4 py-2">
      <div className="flex items-center gap-10">
        {NavMenu.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={["flex items-center gap-1", isActive && "text-primary"]
                .filter(Boolean)
                .join(" ")}
            >
              <Icon name={item.icon} className="text-md" />
              <p className="">{item.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
