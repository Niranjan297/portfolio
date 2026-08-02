import { portfolioData } from "@/data/portfolio";
import { FadeIn, SlideUp, HoverLift } from "@/components/animations/motion";
import { BookOpen, ExternalLink, Hash } from "lucide-react";
import { HackerText } from "@/components/animations/HackerText";
import Link from "next/link";

export const Blog = () => {
  return (
    <section id="journey" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mb-12">
          <div className="flex items-center gap-4">
            <BookOpen className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <HackerText text="Cybersecurity Journey" />
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            My write-ups, learnings, and practical experiences from various cybersecurity platforms and personal research.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.blog.map((post, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <HoverLift className="h-full">
                <Link href={post.link} className="block h-full">
                  <div className="glass-card p-6 rounded-2xl border border-border h-full flex flex-col group hover:border-accent/50 transition-colors">
                    
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-medium flex items-center gap-1">
                        <Hash className="w-3 h-3" />
                        {post.topic}
                      </span>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-3">
                      {post.description}
                    </p>
                    
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-medium text-zinc-400">
                      <span>{post.platform}</span>
                      <span className="text-primary group-hover:underline">Read Write-up &rarr;</span>
                    </div>

                  </div>
                </Link>
              </HoverLift>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};
