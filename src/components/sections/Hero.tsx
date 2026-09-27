import { portfolioData } from "@/data/portfolio";
import { AnimatedTerminal } from "@/components/animations/AnimatedTerminal";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/motion";
import { Magnetic } from "@/components/animations/Magnetic";
import { HackerText } from "@/components/animations/HackerText";
import { ArrowRight, ShieldCheck, Terminal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center relative pt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <StaggerContainer className="flex flex-col gap-6">
              
              <StaggerItem>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Available for Hire</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                  Hi, I&apos;m <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    <HackerText text={portfolioData.hero.name} />
                  </span>
                </h1>
              </StaggerItem>

              <StaggerItem>
                <div className="h-8 md:h-10 relative overflow-hidden flex items-center">
                  <p className="text-xl md:text-2xl font-mono text-muted-foreground">
                    <span className="text-primary">{">"}</span> {portfolioData.hero.role}
                    <span className="animate-pulse">_</span>
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  {portfolioData.hero.description}
                </p>
              </StaggerItem>

              <StaggerItem className="flex flex-wrap gap-4 pt-4">
                <Magnetic strength={40}>
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors hover-trigger"
                  >
                    <Terminal className="w-5 h-5" />
                    View Projects
                  </Link>
                </Magnetic>
                <Magnetic strength={40}>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border hover:border-primary/50 bg-background/50 backdrop-blur hover:bg-primary/10 transition-colors font-medium text-foreground hover-trigger"
                  >
                    Contact Me
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Magnetic>
              </StaggerItem>

              <StaggerItem className="flex items-center gap-6 pt-6">
                <Magnetic strength={20}>
                  <Link href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-trigger group">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="w-6 h-6 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                  </Link>
                </Magnetic>
                <Magnetic strength={20}>
                  <Link href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors hover-trigger group">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-6 h-6 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                  </Link>
                </Magnetic>
                <Magnetic strength={20}>
                  <Link href={`mailto:${portfolioData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors hover-trigger group">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </Link>
                </Magnetic>
                <Magnetic strength={20}>
                  <Link href={portfolioData.profiles?.tryHackMe?.url || "#"} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors hover-trigger group">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.016 0C5.38 0 0 5.378 0 12.015S5.38 24 12.016 24 24 18.652 24 12.015C24 5.378 18.652 0 12.016 0zm3.87 18.528h-3.79l-4.47-5.918H7.6l2.126-5.467h3.791l4.375 5.795-1.999 5.59zM8.905 4.56l5.772.03-3.087 5.786z"/></svg>
                  </Link>
                </Magnetic>
              </StaggerItem>
              
            </StaggerContainer>
          </div>

          {/* Right Column - Visuals */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center gap-8 relative">
            <FadeIn delay={0.2} className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 rounded-full border-2 border-accent/40 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-4 rounded-full overflow-hidden bg-black/50 backdrop-blur-md flex items-center justify-center border border-border">
                <Image src="/avatar.jpg" alt="Profile" fill className="object-cover" unoptimized />
              </div>
            </FadeIn>

            <SlideUp delay={0.4} className="w-full relative z-10 -mt-12 lg:-mt-24">
              <AnimatedTerminal />
            </SlideUp>
          </div>
          
        </div>
      </div>
    </section>
  );
};
