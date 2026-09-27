import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParticlesBackground } from "@/components/animations/ParticlesBackground";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { ScrollProgress } from "@/components/animations/ScrollProgress";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Niranjan Kalugade | Cybersecurity & Full Stack Developer",
  description: "Portfolio of Niranjan Kalugade, a Cybersecurity Student, Web Application Penetration Tester, and AI-Assisted Full Stack Web Developer.",
  keywords: ["Cybersecurity", "Penetration Testing", "Full Stack Developer", "Next.js", "React", "Portfolio", "Niranjan Kalugade"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col relative`}
      >
        <ScrollProgress />
        <CustomCursor />
        <ParticlesBackground />
        {/* Fallback gradient if particles take a moment */}
        <div className="aurora-bg fixed" />
        <Navbar />
        <main className="flex-1 relative z-10 pt-24 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
