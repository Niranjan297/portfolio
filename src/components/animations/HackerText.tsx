"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

interface Props {
  text: string;
  className?: string;
}

export const HackerText = ({ text, className = "" }: Props) => {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let iterations = 0;
      
      const interval = setInterval(() => {
        setDisplayText((prev) => 
          prev
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return text[index];
              }
              // Skip spaces
              if (text[index] === " ") return " ";
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        if (iterations >= text.length) {
          clearInterval(interval);
        }

        iterations += 1 / 3; // Controls speed of reveal
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isInView, text]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  );
};
