"use client";

import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import { ReactNode } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/odw2qav.css" />
      </head>
      <body className={montserrat.className}>
        <main className="min-h-screen relative">
          {children}
          <div className="w-screen h-full top-0 left-0 -z-20 absolute" />
        </main>
      </body>
    </html>
  );
}
