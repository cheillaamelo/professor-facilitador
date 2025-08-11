"use client";

import { CSSProperties, ReactNode } from "react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const TextSecondary = ({ children, style, className = "" }: Props) => {
  const getClassName = () => `${fraunces.className} ${className} block`;

  return (
    <span className={getClassName()} style={style}>
      {children}
    </span>
  );
};
