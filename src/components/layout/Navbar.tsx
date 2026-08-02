"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "@/components/animations/Magnetic";
import { HackerText } from "@/components/animations/HackerText";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Magnetic strength={20}>
          <Link href="#" className="flex items-center gap-2 group hover-trigger">
            <Shield className="w-8 h-8 text-primary group-hover:animate-pulse-glow" />
            <span className="font-bold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              <HackerText text="NK.CYBER" />
            </span>
          </Link>
        </Magnetic>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Magnetic key={link.name} strength={15}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover-trigger"
              >
                {link.name}
              </Link>
            </Magnetic>
          ))}
          <Magnetic strength={30}>
            <Link
              href="#contact"
              className="px-4 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors text-sm font-medium hover-trigger"
            >
              Let&apos;s Connect
            </Link>
          </Magnetic>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-card border-t border-border flex flex-col p-4 md:hidden gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-4 px-4 rounded-md hover:bg-white/5 active:bg-white/10"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center px-4 py-4 rounded-md bg-primary text-primary-foreground font-semibold active:bg-primary/80"
            >
              Hire Me
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
