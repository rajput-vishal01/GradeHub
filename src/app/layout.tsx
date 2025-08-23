import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Container from "@/components/Container";
import DecorativeBackground from "@/components/DecorativeBackground";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevTrails",
  description: "DevTrails:Code Your Way Forward",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
      >
        <DecorativeBackground />
        <SessionProvider>
          <Container>
            <Navbar />
            {children}
            <Footer />
          </Container>
        </SessionProvider>
      </body>
    </html>
  );
}
