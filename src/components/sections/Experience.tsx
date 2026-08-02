import { portfolioData } from "@/data/portfolio";
import { FadeIn, SlideUp, HoverLift } from "@/components/animations/motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { HackerText } from "@/components/animations/HackerText";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Experience Column */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-10">
                <Briefcase className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">
                  <HackerText text="Experience" />
                </h2>
              </div>
            </FadeIn>
            
            <div className="space-y-6">
              {portfolioData.experience.map((exp, index) => (
                <SlideUp key={index} delay={index * 0.1}>
                  <HoverLift>
                    <div className="glass-card p-6 rounded-xl border border-border relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors" />
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-1 text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded-full w-fit">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </div>
                      </div>
                      <p className="text-sm text-accent mb-4 font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </HoverLift>
                </SlideUp>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-10">
                <GraduationCap className="w-6 h-6 text-accent" />
                <h2 className="text-3xl font-bold text-foreground">Education</h2>
              </div>
            </FadeIn>
            
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <SlideUp key={index} delay={index * 0.1}>
                  <HoverLift>
                    <div className="glass-card p-6 rounded-xl border border-border relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-accent/50 group-hover:bg-accent transition-colors" />
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-primary mt-1 font-medium">
                            {edu.specialization}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1 rounded-full w-fit shrink-0">
                          <Calendar className="w-3 h-3" />
                          {edu.duration}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 font-medium">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </HoverLift>
                </SlideUp>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
