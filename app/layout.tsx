"use client";

import "../styles/globals.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/nsj2qkh.css" />
        <link rel="stylesheet" href="https://use.typekit.net/uki1tqd.css" />
        <link rel="stylesheet" href="https://use.typekit.net/ywj0zdg.css" />
      </head>
      <body className="montserrat">
        <main className="min-h-screen relative">
          {children}
          <div className="w-screen h-full top-0 left-0 -z-20 absolute" />
        </main>
      </body>
    </html>
  );
}
