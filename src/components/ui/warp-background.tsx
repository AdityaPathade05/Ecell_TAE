"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface WarpBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  perspective?: number;
  beamsPerSide?: number;
  beamSize?: number;
  beamDelayMax?: number;
  beamDuration?: number;
  gridColor?: string;
}

export const WarpBackground: React.FC<WarpBackgroundProps> = ({
  children,
  className,
  containerClassName,
  perspective = 100,
  beamsPerSide = 3,
  beamSize = 4,
  beamDelayMax = 4,
  beamDuration = 6,
  gridColor = "rgba(245, 158, 11, 0.15)",
}) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-6 md:p-12",
        containerClassName
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
        style={{
          perspective: `${perspective}px`,
        }}
      >
        {/* Top/Bottom/Left/Right 3D Grid planes creating the dynamic warp corridor */}
        <div
          className="absolute inset-0 [transform-style:preserve-3d]"
          style={{
            transform: "rotateX(60deg) translateZ(-80px)",
          }}
        >
          <div
            className="absolute inset-[-100%] opacity-40"
            style={{
              backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
              maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)",
            }}
          />
        </div>

        {/* Warp Light Beams */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {Array.from({ length: beamsPerSide }).map((_, i) => (
            <motion.div
              key={`beam-${i}`}
              className="absolute w-[2px] bg-gradient-to-b from-transparent via-amber-400 to-transparent"
              style={{
                height: `${beamSize * 30}px`,
                left: `${15 + i * 25}%`,
                top: "-10%",
                filter: "blur(1px)",
              }}
              animate={{
                top: ["-20%", "120%"],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: beamDuration + (i % 2),
                repeat: Infinity,
                delay: (i * beamDelayMax) / beamsPerSide,
                ease: "linear",
              }}
            />
          ))}
          {Array.from({ length: beamsPerSide }).map((_, i) => (
            <motion.div
              key={`cyan-beam-${i}`}
              className="absolute w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
              style={{
                height: `${beamSize * 25}px`,
                right: `${15 + i * 25}%`,
                top: "-10%",
                filter: "blur(1px)",
              }}
              animate={{
                top: ["-20%", "120%"],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: beamDuration + 2 - (i % 2),
                repeat: Infinity,
                delay: ((i + 1) * beamDelayMax) / beamsPerSide,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
