import { portfolioData } from "@/data/portfolio";
import { FadeIn, SlideUp, HoverLift } from "@/components/animations/motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { HackerText } from "@/components/animations/HackerText";
import Link from "next/link";

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="mb-12">
          <div className="flex items-center gap-4">
            <Award className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              <HackerText text="Certifications" />
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            My completed and verified cybersecurity certifications.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.completed.map((cert, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <HoverLift className="h-full">
                {cert.link ? (
                  <Link href={cert.link} target="_blank" className="block h-full">
                    <CertCard cert={cert} />
                  </Link>
                ) : (
                  <div className="h-full">
                    <CertCard cert={cert} />
                  </div>
                )}
              </HoverLift>
            </SlideUp>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/certificates">
            <button className="px-8 py-4 rounded-full border border-accent text-accent font-mono font-bold hover:bg-accent hover:text-black transition-all">
              View All Certificates
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const CertCard = ({ cert }: { cert: { title: string; issuer: string; date: string; link?: string } }) => (
  <div className="glass-card p-6 rounded-2xl border border-border h-full flex flex-col group hover:border-accent/50 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-medium flex items-center gap-1">
        <ShieldCheck className="w-3 h-3" />
        {cert.issuer}
      </span>
      {cert.link && (
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
      )}
    </div>

    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
      {cert.title}
    </h3>
    
    <p className="text-sm text-muted-foreground mb-6 flex-1">
      Achieved: {cert.date}
    </p>
    
    {cert.link && (
      <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-medium text-zinc-400">
        <span className="text-primary group-hover:underline">Verify Credential &rarr;</span>
      </div>
    )}
  </div>
);
