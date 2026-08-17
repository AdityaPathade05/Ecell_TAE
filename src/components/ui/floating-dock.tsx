"use client";
import React, { useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  orientation = "vertical",
}: {
  items: { title: string; icon: React.ReactNode; href: string; onClick?: () => void }[];
  desktopClassName?: string;
  mobileClassName?: string;
  orientation?: "horizontal" | "vertical";
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} orientation={orientation} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; onClick?: () => void }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block lg:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full left-0 mb-3 flex flex-col gap-2 p-2 rounded-2xl bg-[#0e0e14]/90 backdrop-blur-xl border border-white/10 shadow-2xl z-50"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -10,
                  transition: {
                    delay: idx * 0.04,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.04 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) {
                      e.preventDefault();
                      item.onClick();
                    }
                    setOpen(false);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-amber-500/20 hover:border-amber-500/40 text-slate-300 hover:text-amber-300 transition-colors"
                  title={item.title}
                >
                  <div className="h-5 w-5 flex items-center justify-center">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0e0e14]/90 backdrop-blur-xl border border-amber-500/30 text-amber-300 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Toggle Quick Navigation"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  orientation = "vertical",
}: {
  items: { title: string; icon: React.ReactNode; href: string; onClick?: () => void }[];
  className?: string;
  orientation?: "horizontal" | "vertical";
}) => {
  const mousePos = useMotionValue(Infinity);
  const isVertical = orientation === "vertical";

  return (
    <motion.div
      onMouseMove={(e) => mousePos.set(isVertical ? e.clientY : e.clientX)}
      onMouseLeave={() => mousePos.set(Infinity)}
      className={cn(
        "hidden lg:flex items-center rounded-2xl bg-[#0b0b12]/80 backdrop-blur-xl border border-white/10 p-2 shadow-2xl shadow-black/60",
        isVertical ? "flex-col gap-3 w-14 py-3" : "flex-row gap-3 h-14 px-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          key={item.title}
          mousePos={mousePos}
          title={item.title}
          icon={item.icon}
          href={item.href}
          onClick={item.onClick}
          isVertical={isVertical}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mousePos,
  title,
  icon,
  href,
  onClick,
  isVertical,
}: {
  mousePos: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
  isVertical: boolean;
  key?: React.Key;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mousePos, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
    const center = isVertical ? bounds.y + bounds.height / 2 : bounds.x + bounds.width / 2;
    return (typeof val === "number" ? val : 0) - center;
  });

  const widthTransform = useTransform(distance, [-120, 0, 120], [38, 54, 38]);
  const heightTransform = useTransform(distance, [-120, 0, 120], [38, 54, 38]);

  const widthTransformIcon = useTransform(distance, [-120, 0, 120], [18, 26, 18]);
  const heightTransformIcon = useTransform(distance, [-120, 0, 120], [18, 26, 18]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="relative flex items-center justify-center cursor-pointer"
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 hover:border-amber-400/50 hover:bg-amber-500/15 text-slate-300 hover:text-amber-300 transition-colors shadow-sm"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: isVertical ? 6 : "-50%", y: isVertical ? "-50%" : -10 }}
              animate={{ opacity: 1, x: isVertical ? 12 : "-50%", y: isVertical ? "-50%" : -12 }}
              exit={{ opacity: 0, x: isVertical ? 6 : "-50%", y: isVertical ? "-50%" : -10 }}
              className={cn(
                "absolute z-50 whitespace-nowrap rounded-lg border border-amber-500/30 bg-[#0c0c14] px-2.5 py-1 text-[11px] font-semibold text-amber-200 shadow-xl shadow-black/80 pointer-events-none",
                isVertical
                  ? "left-full top-1/2"
                  : "bottom-full left-1/2"
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
