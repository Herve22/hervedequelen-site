import Image from "next/image";
import React from "react";

type IconName = "lock" | "flash" | "target" | "bar-chart" | "user" | "trend";
type Variant = "A-glow-strong" | "B-glow-soft";

interface ProvisionIconProps {
  name: IconName;
  variant?: Variant;
  size?: number;
  className?: string;
}

export const ProvisionIcon: React.FC<ProvisionIconProps> = ({
  name,
  variant = "A-glow-strong",
  size = 40,
  className = "",
}) => {
  const src = `/icons/provisions-premium/${variant}/${name}.svg`;
  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      className={`icon-premium ${className}`}
    />
  );
};
