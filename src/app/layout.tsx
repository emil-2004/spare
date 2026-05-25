import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import MouseGlow from "@/components/ui/MouseGlow";
import AmbientLight from "@/components/ui/AmbientLight";

import UIOverlays from "@/components/ui/UIOverlays";
import Preloader from "@/components/ui/Preloader";
import CinematicBackground from "@/components/ui/CinematicBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TRUCK | Premium Industrial Spare Parts",
  description: "Engineered for heavy duty performance. Premium truck spare parts and heavy vehicle components.",
};

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
        <Preloader />
        <UIOverlays />
        <CinematicBackground />
        <AmbientLight />
        <MouseGlow />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
