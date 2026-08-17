"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";

export interface HeroParallaxProduct {
  title: string;
  link: string;
  thumbnail: string;
  category?: string;
  badge?: string;
}

export const HeroParallax = ({
  products,
  header,
  className,
}: {
  products: HeroParallaxProduct[];
  header?: React.ReactNode;
  className?: string;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [16, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-600, 200]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className={cn(
        "h-[260vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]",
        className
      )}
    >
      {header}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-10"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12 mb-12">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-12 mb-12">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-12">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: HeroParallaxProduct;
  translate: MotionValue<number>;
  key?: React.Key;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-80 w-[24rem] sm:w-[28rem] relative flex-shrink-0 rounded-2xl overflow-hidden border border-white/15 bg-black/80 shadow-2xl backdrop-blur-md"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl h-full w-full"
      >
        <img
          src={product.thumbnail}
          className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-700 group-hover/product:scale-110"
          alt={product.title}
          loading="lazy"
        />
        <div className="absolute inset-0 h-full w-full opacity-60 group-hover/product:opacity-80 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none transition-opacity duration-300" />
        
        <div className="absolute inset-x-0 bottom-0 p-5 space-y-1.5 pointer-events-none">
          {product.category && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-amber-500/20 border border-amber-500/40 text-amber-300 backdrop-blur-md">
              {product.category}
            </div>
          )}
          <h3 className="font-heading text-lg font-bold text-white group-hover/product:text-amber-300 transition-colors">
            {product.title}
          </h3>
          {product.badge && (
            <p className="text-xs text-slate-300 line-clamp-1 font-mono">
              {product.badge}
            </p>
          )}
        </div>
      </a>
    </motion.div>
  );
};
