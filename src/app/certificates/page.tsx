import { portfolioData } from "@/data/portfolio";
import { FadeIn, SlideUp } from "@/components/animations/motion";
import { HackerText } from "@/components/animations/HackerText";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen py-24 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <FadeIn>
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:underline mb-12 font-mono">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <HackerText text="Verified Credentials" />
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-16 text-lg">
            A comprehensive view of my cybersecurity certifications, badges, and completed learning paths.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {portfolioData.certifications.completed.map((cert, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <div className="glass-card rounded-2xl border border-border overflow-hidden flex flex-col group h-full">
                {/* Certificate Image Placeholder / Photo */}
                <div className="relative w-full aspect-[4/3] bg-zinc-900/50 flex items-center justify-center p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                  
                  {cert.image ? (
                    <a 
                      href={cert.image} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="relative w-full h-full border border-white/10 rounded-lg overflow-hidden shadow-2xl block group-hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                    >
                      <Image 
                        src={cert.image} 
                        alt={cert.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </a>
                  ) : (
                    <div className="text-center opacity-50">
                      <ShieldCheck className="w-16 h-16 mx-auto mb-4" />
                      <p className="font-mono text-sm">Image not available</p>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1 border-t border-border">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono font-medium flex items-center gap-1">
                      {cert.issuer}
                    </span>
                    <span className="text-sm font-mono text-muted-foreground">{cert.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {cert.title}
                  </h3>
                  
                  <div className="mt-auto pt-6">
                    {cert.link ? (
                      <Link 
                        href={cert.link} 
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-bold font-mono rounded-lg hover:bg-white transition-colors"
                      >
                        Verify Credential <ExternalLink className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="inline-block px-6 py-3 border border-border text-muted-foreground font-mono rounded-lg">
                        Internal Assessment
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </main>
  );
}
