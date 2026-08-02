"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn, SlideUp } from "@/components/animations/motion";
import { GitMerge, Star, GitPullRequest } from "lucide-react";
import { FaGithub as GithubIcon } from "react-icons/fa";
import Image from "next/image";

export const Github = () => {
  const username = portfolioData.contact.github.split("/").pop();

  return (
    <section id="github" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-zinc-900 rounded-full mb-4 border border-border">
            <GithubIcon className="w-8 h-8 text-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Open Source & Contributions</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My active contributions to the open-source community, personal projects, and daily coding activity.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <SlideUp>
            <div className="glass p-6 md:p-8 rounded-2xl border border-border flex flex-col items-center">
              
              {/* GitHub Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
                {/* Stats */}
                <div className="bg-black/50 p-4 rounded-xl border border-border/50 flex flex-col justify-center items-center h-48 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Using github-readme-stats as a placeholder, requires live connection. Using standard img tag */}
                  <img 
                    src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=00f0ff&text_color=a1a1aa&icon_color=00e5ff&bg_color=00000000`} 
                    alt="GitHub Stats" 
                    className="w-full h-full object-contain relative z-10"
                    loading="lazy"
                  />
                </div>
                
                {/* Top Languages */}
                <div className="bg-black/50 p-4 rounded-xl border border-border/50 flex flex-col justify-center items-center h-48 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=00f0ff&text_color=a1a1aa&bg_color=00000000`} 
                    alt="Top Languages" 
                    className="w-full h-full object-contain relative z-10"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Activity Graph Placeholder */}
              <div className="w-full bg-black/50 rounded-xl border border-border/50 p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-left">Contribution Graph</h3>
                <div className="w-full overflow-x-auto pb-4">
                    {/* Placeholder for react-github-calendar or similar */}
                    <img 
                      src={`https://ghchart.rshah.org/00f0ff/${username}`} 
                      alt="GitHub Contribution Graph" 
                      className="w-full min-w-[700px] opacity-80 hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                </div>
              </div>

              <a 
                href={portfolioData.contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 px-6 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-primary transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-5 h-5" />
                Follow on GitHub
              </a>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};
