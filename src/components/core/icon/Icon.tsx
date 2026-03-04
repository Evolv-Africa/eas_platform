import React from "react";

import type { IconNames } from "./types";

function toSnakeCase(str: string): string {
  return str
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
    .replace(/([a-z\d])([A-Z])/g, "$1_$2")
    .toLowerCase();
}

type Props = React.ComponentProps<"svg"> & {
  name: IconNames;
  className?: string;
};

type IconModules = Record<
  string,
  { default: React.FC<React.SVGProps<SVGSVGElement>> }
>;

const modules = import.meta.glob("/src/assets/icons/*.svg", {
  eager: true,
}) as IconModules;

export function Icon({ className, name, ...otherProps }: Props) {
  const IconComponent = React.useMemo(() => {
    const iconPath = `/src/assets/icons/${toSnakeCase(name)}.svg`;
    const icon = modules[iconPath]?.default;

    if (!icon && process.env.NODE_ENV === "development") {
      console.warn(`Icon "${name}" not found at path: ${iconPath}`);
    }

    return icon;
  }, [name]);

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      className={className}
      data-testid={`icon-${name}`}
      aria-hidden="true"
      {...otherProps}
    />
  );
}
