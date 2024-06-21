import type { Metadata } from "next";
import { Oxygen, Exo, Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";

import { cn } from "@/lib/utils";

const NunitoFont = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunitosans",
});

const ExoFont = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
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
          "min-h-screen overflow-x-hidden scroll-smooth bg-background antialiased",
          NunitoFont.variable,
          oxygen.variable,
          ExoFont.variable,
        )}
      >
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
