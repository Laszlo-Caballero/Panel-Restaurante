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
      <main className="flex min-h-svh w-full flex-1 flex-col">
        <div className="flex w-full">
          <Options />
          <div className="flex w-full flex-col">
            <Nav />
            <div className="h-full w-full p-4">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}
