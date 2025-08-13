"use client";

import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const TextPrimary = ({ children, style, className = "" }: Props) => {
  const getClassName = () => `montserrat ${className} block`;

  return (
    <span className={getClassName()} style={style}>
      {children}
    </span>
  );
};
