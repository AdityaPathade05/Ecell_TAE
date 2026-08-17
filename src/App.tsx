import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VelocityScroll } from './components/ui/scroll-based-velocity';
import { MilestonesSection } from './components/MilestonesSection';
import { PhotoGallery } from './components/PhotoGallery';
import { FloatingTeamSection } from './components/FloatingTeamSection';
import { MediaAndInstaSection } from './components/MediaAndInstaSection';
import { SpeakersCarousel } from './components/SpeakersCarousel';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import FloatingDockDemo from './components/floating-dock-demo';
import { GlobePulse } from './components/ui/cobe-globe-pulse';

export default function App() {
  const [gravityActive, setGravityActive] = useState(true);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleGravity = () => {
    setGravityActive((prev) => !prev);
  };

  return (
    <ThemeProvider>
      <div 
        id="app-root" 
        className="min-h-screen bg-[#050505] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200 relative overflow-x-hidden"
      >
        {/* Global Globe Background */}
        <div className="fixed inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0 overflow-hidden mix-blend-screen">
          <GlobePulse className="w-[150vw] sm:w-[100vw] lg:w-[80vw] max-w-[1200px] pointer-events-auto" speed={0.001} />
        </div>

        {/* Subtle grid pattern backdrop */}
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

        {/* Global Ambient Glow Overlays */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

        {/* Header / Navbar */}
        <Navbar
          onOpenJoinModal={() => setIsJoinModalOpen(true)}
          gravityActive={gravityActive}
          onToggleGravity={handleToggleGravity}
        />

        {/* Main Content Sections */}
        <main className="relative z-10">
          {/* Hero / About Introduction with Beams & Particles */}
          <HeroSection
            onExploreTeam={() => scrollToSection('team')}
            onExploreGallery={() => scrollToSection('gallery')}
            onOpenJoinModal={() => setIsJoinModalOpen(true)}
          />

          {/* Scroll Based Velocity Ticker Banner (Magic UI) */}
          <div className="py-2 border-y border-white/10 bg-black/50 backdrop-blur-md">
            <VelocityScroll
              text="TRINITY ACADEMY OF ENGINEERING • E-CELL TAE PUNE • IIT BOMBAY NATIONAL ENTREPRENEURSHIP CHALLENGE • IDEATE • INCUBATE • IMPACT •"
              default_velocity={2.5}
              numRows={1}
              className="text-2xl sm:text-3xl text-neutral-400 font-extrabold uppercase tracking-widest"
            />
          </div>

          {/* Timeline Milestones Section */}
          <MilestonesSection />

          {/* Documentary Photo Gallery & Core Assembly Archive */}
          <PhotoGallery />

          {/* Interactive Anti-Gravity Draggable Team Section */}
          <FloatingTeamSection
            gravityActive={gravityActive}
            onToggleGravity={handleToggleGravity}
          />

          {/* Official Reels, Media Assets & Instagram Page Hub */}
          <MediaAndInstaSection />

          {/* Inspirational Speakers & Mentors Carousel */}
          <SpeakersCarousel />

          {/* Contact & Recruitment Inquiries */}
          <ContactSection
            onOpenJoinModal={() => setIsJoinModalOpen(true)}
          />
        </main>

        {/* Floating Quick Dock Navigation on the left corner/side */}
        <div className="fixed bottom-6 left-4 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 z-40 pointer-events-auto">
          <FloatingDockDemo onOpenJoinModal={() => setIsJoinModalOpen(true)} />
        </div>

        {/* Footer with Institutional Credentials & Quote */}
        <Footer />

        {/* Recruitment / Interest Modal */}
        <JoinModal
          isOpen={isJoinModalOpen}
          onClose={() => setIsJoinModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
