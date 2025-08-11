"use client";

import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: ReactNode;
}

export const LPLayout = ({ children }: Props) => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute w-full h-full -z-10"></div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
