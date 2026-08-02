"use client";

import { portfolioData } from "@/data/portfolio";
import { FadeIn, SlideUp } from "@/components/animations/motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { HackerText } from "@/components/animations/HackerText";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <HackerText text="Establish Secure Connection" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project in mind, need a security assessment, or just want to say hi, my inbox is always open.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <SlideUp>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground mb-2">Reach out via email for direct communication.</p>
                  <a href={`mailto:${portfolioData.contact.email}`} className="text-primary hover:underline font-mono">
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground mb-2">Available for urgent inquiries or consultations.</p>
                  <a href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`} className="text-accent hover:underline font-mono">
                    {portfolioData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 shrink-0">
                  <MapPin className="w-6 h-6 text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Pune, Maharashtra, India<br />
                    Available for Remote Work Globally
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">Professional Profiles</h3>
                <div className="flex gap-4">
                  <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-black/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all hover:-translate-y-1">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                  </a>
                  <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-black/50 border border-border hover:border-accent/50 text-muted-foreground hover:text-accent transition-all hover:-translate-y-1">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                  </a>
                  <a href={portfolioData.profiles?.tryHackMe?.url || "#"} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-black/50 border border-border hover:border-white/50 text-muted-foreground hover:text-white transition-all hover:-translate-y-1">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.016 0C5.38 0 0 5.378 0 12.015S5.38 24 12.016 24 24 18.652 24 12.015C24 5.378 18.652 0 12.016 0zm3.87 18.528h-3.79l-4.47-5.918H7.6l2.126-5.467h3.791l4.375 5.795-1.999 5.59zM8.905 4.56l5.772.03-3.087 5.786z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Contact Form */}
          <SlideUp delay={0.2}>
            <form className="glass p-8 rounded-2xl border border-border flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="bg-black/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com"
                  className="bg-black/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="How can I help you?"
                  className="bg-black/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};
