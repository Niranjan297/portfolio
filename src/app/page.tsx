import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Profiles } from "@/components/sections/Profiles";
import { Certifications } from "@/components/sections/Certifications";
import { Blog } from "@/components/sections/Blog";
import { Github } from "@/components/sections/Github";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 overflow-hidden">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Profiles />
      <Certifications />
      <Blog />
      <Github />
      <Contact />
    </div>
  );
}
