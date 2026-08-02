import { portfolioData } from "@/data/portfolio";
import { FadeIn, SlideUp } from "@/components/animations/motion";
import { User, Code2, ShieldAlert } from "lucide-react";
import { HackerText } from "@/components/animations/HackerText";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <HackerText text={portfolioData.about.title} />
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SlideUp delay={0.1} className="md:col-span-2">
            <div className="glass p-6 md:p-8 rounded-2xl border border-border h-full">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {portfolioData.about.content}
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Offensive Security</h3>
                    <p className="text-sm text-muted-foreground mt-1">Finding vulnerabilities before they can be exploited.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Secure Development</h3>
                    <p className="text-sm text-muted-foreground mt-1">Building applications with security integrated from day one.</p>
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>

          <SlideUp delay={0.3} className="md:col-span-1">
            <div className="glass p-6 rounded-2xl border border-border h-full flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-border flex items-center justify-center mb-6 rotate-3 hover:rotate-6 transition-transform">
                <User className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Fast Facts</h3>
              <ul className="space-y-3 text-sm text-muted-foreground w-full text-left">
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="font-mono text-primary">Location:</span> Pune, India
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="font-mono text-primary">Status:</span> Student
                </li>
                <li className="flex justify-between border-b border-border/50 pb-2">
                  <span className="font-mono text-primary">Focus:</span> WebSec / Pentesting
                </li>
              </ul>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};
