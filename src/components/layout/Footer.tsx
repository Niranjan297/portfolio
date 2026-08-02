import Link from "next/link";
import { Mail, Shield } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-black/40 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-30" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                NK.CYBER
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              {portfolioData.hero.description}
            </p>
            <div className="flex gap-4">
              <Link href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={`mailto:${portfolioData.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${portfolioData.contact.email}`} className="hover:text-primary transition-colors">{portfolioData.contact.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">#</span>
                <span>{portfolioData.contact.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Niranjan Kalugade. All rights reserved.</p>
          <p>
            Designed with <span className="text-primary">Next.js</span> & <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
