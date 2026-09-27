"use client";

import { useEffect, useState } from "react";

export const CyberGridBackground = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20 bg-zinc-950">
      {/* 3D Grid floor */}
      <div className="absolute inset-0 [perspective:1000px]">
        <div 
          className="absolute inset-[-100%] origin-center opacity-40"
          style={{
            transform: "rotateX(60deg) translateZ(-200px)",
            backgroundImage: `
              linear-gradient(to right, rgba(0, 240, 255, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 10s linear infinite",
          }}
        />
      </div>

      {/* Grid fade out at the top for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-zinc-950/80 to-zinc-950" />

      {/* Scanning horizontal radar line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 bg-primary/80 shadow-[0_0_20px_4px_rgba(0,240,255,0.6)]"
        style={{
          animation: "scan-line 6s ease-in-out infinite alternate"
        }}
      />
      
      {/* Scanning vertical line */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-accent/60 shadow-[0_0_20px_4px_rgba(0,229,255,0.5)]"
        style={{
          animation: "scan-vertical 10s ease-in-out infinite alternate"
        }}
      />
      
      {/* Soft overlay glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05),transparent_70%)]" />
    </div>
  );
};
