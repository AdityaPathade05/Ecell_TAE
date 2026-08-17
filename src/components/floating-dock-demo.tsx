import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  Home,
  Layers,
  Calendar,
  Users,
  Rocket,
  Mic,
  Mail,
  Instagram,
  Sparkles
} from "lucide-react";

interface FloatingDockDemoProps {
  onOpenJoinModal?: () => void;
}

export default function FloatingDockDemo({ onOpenJoinModal }: FloatingDockDemoProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    {
      title: "Hero / Overview",
      icon: <Home className="h-full w-full" />,
      href: "#hero",
      onClick: () => scrollTo("hero"),
    },
    {
      title: "Photo Gallery",
      icon: <Layers className="h-full w-full" />,
      href: "#gallery",
      onClick: () => scrollTo("gallery"),
    },
    {
      title: "Core Team (Anti-Gravity)",
      icon: <Users className="h-full w-full" />,
      href: "#team",
      onClick: () => scrollTo("team"),
    },
    {
      title: "Reels, Media & @ecell_tae",
      icon: <Instagram className="h-full w-full text-pink-400" />,
      href: "#media-hub",
      onClick: () => scrollTo("media-hub"),
    },
    {
      title: "Mentors & Speakers",
      icon: <Mic className="h-full w-full" />,
      href: "#speakers",
      onClick: () => scrollTo("speakers"),
    },
    {
      title: "Contact & Secretariat",
      icon: <Mail className="h-full w-full" />,
      href: "#contact",
      onClick: () => scrollTo("contact"),
    },
  ];

  return (
    <div className="w-auto h-auto">
      <FloatingDock
        orientation="vertical"
        items={links}
      />
    </div>
  );
}
