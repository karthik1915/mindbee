import type { Metadata } from "next";
import { Inter as FontSans, Oxygen } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const oxygen = Oxygen({
  subsets: ["latin"],
  variable: "--font-oxygen",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Mindbee",
  description: "Mindbee salesforce consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen overflow-x-hidden bg-background font-sans antialiased",
          fontSans.variable,
          oxygen.variable,
        )}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
