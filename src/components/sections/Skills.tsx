import { portfolioData } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/motion";
import { TerminalSquare, Code, Wrench } from "lucide-react";

import { HackerText } from "@/components/animations/HackerText";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <HackerText text="Technical Arsenal" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my tools, languages, and core competencies in cybersecurity and software development.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Cybersecurity Skills */}
          <div className="glass p-6 md:p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <TerminalSquare className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Cybersecurity</h3>
            </div>
            <StaggerContainer className="flex flex-wrap gap-2">
              {portfolioData.skills.cybersecurity.map((skill, index) => (
                <StaggerItem key={index}>
                  <div className="px-3 py-1.5 rounded-md bg-zinc-900 border border-red-500/20 text-sm text-zinc-300 hover:text-red-400 hover:border-red-500/50 transition-colors cursor-default">
                    {skill}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Development Skills */}
          <div className="glass p-6 md:p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Development</h3>
            </div>
            <StaggerContainer className="flex flex-wrap gap-2">
              {portfolioData.skills.development.map((skill, index) => (
                <StaggerItem key={index}>
                  <div className="px-3 py-1.5 rounded-md bg-zinc-900 border border-primary/20 text-sm text-zinc-300 hover:text-primary hover:border-primary/50 transition-colors cursor-default">
                    {skill}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Tools & Utilities */}
          <div className="glass p-6 md:p-8 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Tools & Tech</h3>
            </div>
            <StaggerContainer className="flex flex-wrap gap-2">
              {portfolioData.skills.tools.map((skill, index) => (
                <StaggerItem key={index}>
                  <div className="px-3 py-1.5 rounded-md bg-zinc-900 border border-accent/20 text-sm text-zinc-300 hover:text-accent hover:border-accent/50 transition-colors cursor-default">
                    {skill}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
};
