import type { Metadata } from "next";
import { Oxygen, Exo, Nunito } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/toaster";

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
  title: "Mindbees Consultation",
  description:
    "Mindbees Consulting, we specialize in delivering comprehensive Salesforce consulting services tailored to your unique business needs. With over 15 years of IT experience and 9+ years dedicated to Salesforce development, architecture, and implementation, our team of experts is committed to driving your business forward with innovative, scalable solutions.",
  openGraph: {
    url: "https://mindbeesconsulting.com/",
    type: "website",
    description: "Mindbees salesforce consulting company",
    siteName: "Mindbees Consulting",
    images: [
      {
        url: "https://cz9aqx1sonm5juhb.public.blob.vercel-storage.com/opengraph/minbees_home_og-MNxSvxQL8LHuoIdYRHdoxmT8vOUPLv.png",
        width: 1200,
        height: 630,
        alt: "Mindbees Consultation",
      },
    ],
  },
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
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
