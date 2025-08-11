"use client";

import { CSSProperties, ReactNode } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const TextPrimary = ({ children, style, className = "" }: Props) => {
  const getClassName = () => `${montserrat.className} ${className} block`;

  return (
    <span className={getClassName()} style={style}>
      {children}
    </span>
  );
};
