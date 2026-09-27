"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export const AnimatedTerminal = () => {
  const commands = portfolioData.hero.terminalLines;
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < commands.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, commands[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, Math.random() * 800 + 400); // Random delay between 400ms and 1200ms

      return () => clearTimeout(timer);
    }
  }, [currentLine, commands]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto rounded-lg overflow-hidden border border-border glass bg-black/80 font-mono text-sm shadow-2xl shadow-primary/10"
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-zinc-900 border-b border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 text-center text-xs text-muted-foreground flex justify-center items-center gap-2">
          <span>niranjan:~</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-56 overflow-y-auto flex flex-col gap-1 text-green-400/90">
        {lines.map((line, i) => {
          const isCommand = line.startsWith("$");
          return (
            <div key={i} className="flex gap-2">
              {isCommand && <span className="text-primary select-none">$</span>}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={isCommand ? "text-green-400 font-bold" : "text-muted-foreground ml-4"}
              >
                {isCommand ? line.replace("$ ", "") : line}
              </motion.span>
            </div>
          );
        })}
        {currentLine < commands.length && (
          <div className="flex gap-2">
            <span className="text-primary select-none">$</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="w-2 h-4 bg-primary inline-block"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};
