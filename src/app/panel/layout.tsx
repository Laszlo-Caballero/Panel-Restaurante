"use client";
import Nav from "@/Components/layout/Nav/Nav";
import Options from "@/Components/layout/Options/Options";
import { ReactNode } from "react";

export default function PanelLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <main className="flex">
        <Options />
        <div className="w-full">
          <Nav />
          <div className="h-full w-full">{children}</div>
        </div>
      </main>
    </>
  );
}
