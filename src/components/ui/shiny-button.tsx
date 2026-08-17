"use client";
import React from "react";
import { motion, type TargetAndTransition, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref as any}
      initial={{ "--x": "100%", scale: 0.98 } as TargetAndTransition}
      animate={{ "--x": "-100%", scale: 1 } as TargetAndTransition}
      whileTap={{ scale: 0.95 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 5,
          mass: 0.5,
        },
      } as Transition}
      {...(props as any)}
      className={cn(
        "relative rounded-xl px-6 py-3.5 font-heading text-sm font-semibold backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow-amber-500/20 hover:shadow-lg dark:bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.15)_0%,transparent_60%)] border border-amber-500/30 text-white bg-neutral-900/80 cursor-pointer overflow-hidden",
        className
      )}
    >
      <span
        className="relative block size-full text-sm uppercase tracking-wide text-neutral-100"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(0 0% 100%) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(0 0% 100%) calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg,hsl(0 0% 100%) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(0 0% 100%) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(245,158,11,0.1)_calc(var(--x)+20%),rgba(245,158,11,0.5)_calc(var(--x)+25%),rgba(245,158,11,0.1)_calc(var(--x)+100%))] p-px"
      />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";
