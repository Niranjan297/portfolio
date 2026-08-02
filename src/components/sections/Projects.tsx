"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn, SlideUp } from "@/components/animations/motion";
import { ExternalLink, Layers } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { HackerText } from "@/components/animations/HackerText";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mb-16">
          <div className="flex items-center gap-4">
            <Layers className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <HackerText text="Featured Projects" />
            </h2>
          </div>
          <div className="h-px w-full max-w-md bg-gradient-to-r from-primary/50 to-transparent mt-4" />
        </FadeIn>

        <div className="grid grid-cols-1 gap-12">
          {portfolioData.projects.map((project, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <div 
                className={`glass p-1 rounded-2xl border transition-colors duration-300 ${
                  activeProject === index ? "border-primary/50" : "border-border"
                }`}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="bg-zinc-950/80 rounded-xl p-6 md:p-8 h-full">
                  <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* Project Info */}
                    <div className="flex-1 space-y-6">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex gap-3">
                          {project.github !== "#" && (
                            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-900 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                              <Github className="w-5 h-5" />
                            </Link>
                          )}
                          {project.liveDemo !== "#" && (
                            <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-900 text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors">
                              <ExternalLink className="w-5 h-5" />
                            </Link>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.overview}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">The Problem</h4>
                          <p className="text-sm text-zinc-400">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">The Solution</h4>
                          <p className="text-sm text-zinc-400">{project.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Features / Details sidebar */}
                    <div className="w-full lg:w-72 shrink-0 bg-black/40 rounded-lg p-5 border border-border/50">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        Key Features
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1 text-xs">▹</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4 border-t border-border/50">
                        <div className="mb-3">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Challenges</span>
                          <span className="text-sm text-zinc-300">{project.challenges}</span>
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Lessons Learned</span>
                          <span className="text-sm text-zinc-300">{project.lessonsLearned}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};
