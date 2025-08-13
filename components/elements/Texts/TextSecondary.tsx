"use client";

import { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const TextSecondary = ({ children, style, className = "" }: Props) => {
  const getClassName = () => `fraunces ${className} block`;

  return (
    <span className={getClassName()} style={style}>
      {children}
    </span>
  );
};
