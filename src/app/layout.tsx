"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { UserContextProvider } from "@/Context/UserContext";
import "componentsla/dist/style.css";
import { Toaster, ToasterProvider } from "componentsla";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToasterProvider>
          <UserContextProvider>{children}</UserContextProvider>
          <Toaster position="top-right" />
        </ToasterProvider>
      </body>
    </html>
  );
}
