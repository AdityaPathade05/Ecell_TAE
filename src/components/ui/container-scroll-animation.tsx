"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

export const ContainerScroll = ({
  titleComponent,
  children,
  className,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.5], [0, -40]);

  return (
    <div
      className={cn(
        "h-[50rem] md:h-[65rem] flex items-center justify-center relative p-2 md:p-14 [perspective:1000px]",
        className
      )}
      ref={containerRef}
    >
      <div
        className="py-10 md:py-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center mb-8 px-4"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[26rem] md:h-[38rem] w-full border-4 border-[#333333]/80 p-2 md:p-6 bg-[#0c0c0e] rounded-[30px] shadow-2xl relative overflow-hidden backdrop-blur-xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 p-4 md:p-6 border border-white/10 relative">
        {/* Subtle top indicator bar */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-white/20" />
        {children}
      </div>
    </motion.div>
  );
};
