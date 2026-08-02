"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/animations/motion";
import { HackerText } from "@/components/animations/HackerText";
import { SiTryhackme } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/animations/Magnetic";

export const Profiles = () => {
  const tryHackMe = portfolioData.profiles?.tryHackMe;

  if (!tryHackMe) return null;

  return (
    <section id="profiles" className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <HackerText text="Cybersecurity Profiles" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on learning, practical labs, and continuous skill development through industry-recognized cybersecurity platforms.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-8">
          <StaggerItem>
            <div className="glass bg-black/40 border border-border hover:border-primary/40 transition-all duration-300 rounded-3xl p-6 md:p-10 group hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* TryHackMe Logo Column */}
                <div className="shrink-0 flex flex-col items-center gap-4">
                  <div className="rounded-2xl bg-[#0d1424] border border-border flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-lg px-6 py-4 relative overflow-hidden">
                    <div className="flex items-center gap-3 relative z-10">
                      <SiTryhackme className="w-[4.5rem] h-[4.5rem] text-white" />
                      <div className="flex flex-col text-white font-bold leading-[1.1] text-3xl text-left tracking-wide">
                        <span>Try</span>
                        <span>Hack</span>
                        <span>Me</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-1 flex flex-col gap-6 w-full">
                  <div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {tryHackMe.description}
                    </p>
                  </div>

                  {/* Live TryHackMe Badge */}
                  <div className="w-full max-w-[400px]">
                    <img 
                      src={`https://tryhackme-badges.s3.amazonaws.com/${tryHackMe.url.split('/').pop()}.png`} 
                      alt="TryHackMe Live Badge"
                      className="w-full h-auto rounded-lg shadow-lg border border-border/50 group-hover:border-primary/30 transition-colors"
                      loading="lazy"
                    />
                  </div>

                  {/* Learning Focus Areas Visualization */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Learning Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {tryHackMe.focusAreas.map((area, idx) => (
                        <div 
                          key={idx} 
                          className="px-3 py-1.5 rounded-md bg-accent/10 border border-accent/20 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
                        >
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 mt-auto">
                    <Magnetic strength={20}>
                      <Link 
                        href={tryHackMe.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover-trigger group/btn"
                      >
                        View TryHackMe Profile
                        <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
