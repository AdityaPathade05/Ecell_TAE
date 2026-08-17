import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Calendar, 
  Users, 
  ExternalLink,
  Camera,
  GraduationCap
} from 'lucide-react';
import { statsData, officialGroupPhoto } from '../data/ecellData';
import { BackgroundBeams } from './ui/background-beams';
import { Particles } from './ui/particles';
import { ShimmerButton } from './ui/shimmer-button';
import { ShinyButton } from './ui/shiny-button';
import { MagicCard } from './ui/magic-card';

interface HeroSectionProps {
  onExploreTeam: () => void;
  onExploreMilestones?: () => void;
  onOpenJoinModal: () => void;
  onExploreGallery?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTeam,
  onExploreMilestones,
  onOpenJoinModal,
  onExploreGallery,
}) => {
  const heroGroupPhotoUrl = officialGroupPhoto.url;

  const scrollToGallery = () => {
    if (onExploreGallery) {
      onExploreGallery();
    } else {
      const el = document.getElementById('gallery');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="about" 
      className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Dynamic Background Beams (Aceternity UI) */}
      <BackgroundBeams className="opacity-70" />

      {/* Interactive Cursor Reactive Particles (Magic UI) */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={60}
        ease={60}
        color="#f59e0b"
        size={1.5}
      />

      {/* Official Team Group Photo Background Atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-700 -z-20 opacity-20 sm:opacity-25 scale-100"
        style={{
          backgroundImage: `url(${heroGroupPhotoUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 28%',
          filter: 'grayscale(50%) contrast(1.1) brightness(0.55)',
        }}
      />

      {/* Atmospheric Vignette and Deep Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/75 to-[#050505] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.08),_transparent_60%)] pointer-events-none -z-10" />

      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Top Institutional Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>In Association with IIT Bombay E-Cell (NEC)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-xs font-medium backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>KJ's Educational Institute • TAE Pune</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <div className="max-w-4xl space-y-6">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              The <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-300 bg-clip-text text-transparent">Entrepreneurship</span> Cell
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-normal">
              From first announcement to national-level registration — the official journey of establishing 
              <span className="text-amber-300 font-semibold"> The E-Cell at Trinity Academy of Engineering, Pune</span>. 
              Fostering student-led innovation, leadership, and startup acceleration.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                id="hero-view-team-btn"
                onClick={onExploreTeam}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Users className="w-4 h-4 text-slate-950" />
                <span>Meet the Team & Innovators</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* FEATURED BIG LEADERSHIP SPOTLIGHT CARDS (Full Width Panoramic Cards with Small Info) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 space-y-8"
        >
          {/* Card 1: Faculty Advisor & Co-ordinator - Prof. Gulnaz Thakur */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                Governance & Institutional Advisory
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Faculty Advisor & Co-ordinator
            </h3>

            <div className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-r from-[#0d0905]/95 via-[#08080d]/95 to-[#050508]/95 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_15px_40px_rgba(245,158,11,0.1)] overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Left: Avatar & Identity */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left gap-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
                  <div className="relative">
                    <img
                      src="/assets/Gulnaz.jpeg"
                      alt="Prof. Gulnaz Thakur"
                      referrerPolicy="no-referrer"
                      className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-amber-400/60 shadow-xl"
                    />
                    <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-lg bg-amber-500 text-black font-extrabold text-[10px] uppercase tracking-wider shadow-md">
                      FACULTY ADVISOR
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                      TAE PUNE INSTITUTIONAL LEADERSHIP
                    </span>
                    <h4 className="font-heading font-black text-xl sm:text-2xl text-white">
                      Prof. Gulnaz Thakur
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-300 font-semibold">
                      Faculty Advisor & E-Cell TAE Co-ordinator
                    </p>
                  </div>
                </div>

                {/* Right: Strategy, Description & Small Milestone Info */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 font-bold text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      INSTITUTIONAL MENTOR & COORDINATOR
                    </span>
                    <h4 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                      Guiding Campus Innovation & Strategic Governance
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Dedicated faculty coordinator providing strategic governance, administrative backing, and liaison for IIT Bombay E-Cell activities and NEC 2026 tracks.
                    </p>
                  </div>

                  {/* 3 Small Key Milestone Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all space-y-1">
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span>Key Milestone</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Guided the E-Cell proposal and administrative approval
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all space-y-1">
                      <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-bold">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span>Key Milestone</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Mentor for IIT Bombay NEC 2026 Track submissions
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all space-y-1">
                      <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Key Milestone</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-snug">
                        Coordinator between college management and student leaders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: President & IIT Bombay Campus Ambassador - Nisha Nale */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                Student Leadership & Representation
              </span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              President & IIT Bombay Campus Ambassador
            </h3>

            <div className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-[#060a0f]/95 via-[#08080d]/95 to-[#050508]/95 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_15px_40px_rgba(6,182,212,0.1)] overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Left: Avatar & Identity */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left gap-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
                  <div className="relative">
                    <img
                      src="/assets/Nisha Nale.jpeg"
                      alt="Nisha Nale"
                      referrerPolicy="no-referrer"
                      className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-cyan-400/60 shadow-xl"
                    />
                    <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-lg bg-cyan-500 text-black font-extrabold text-[10px] uppercase tracking-wider shadow-md">
                      PRESIDENT
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-[10px] font-bold text-cyan-300">
                        President & CA
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-semibold text-slate-300">
                        Official IIT Bombay Appointment
                      </span>
                    </div>
                    <h4 className="font-heading font-black text-xl sm:text-2xl text-white">
                      Nisha Nale
                    </h4>
                    <p className="text-xs sm:text-sm text-cyan-300 font-semibold">
                      President, E-Cell TAE • Official IIT Bombay Campus Ambassador
                    </p>
                  </div>
                </div>

                {/* Right: Bio & Small Key Impact Bullet Points */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                      Driving Student Ventures & National Ecosystem Alignment
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Nisha Nale was proudly selected as the Official Campus Ambassador by IIT Bombay E-Cell and serves as President of E-Cell TAE. Her appointment catalyzed the formal founding of E-Cell TAE, connecting engineering students to national challenges and mentorship webinars.
                    </p>
                  </div>

                  {/* Small Key Impact List */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                      <span>KEY IMPACT</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <div>
                          <strong className="text-white">Campus Outreach Lead:</strong> Coordinated student digital onboarding & wings.
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        <div>
                          <strong className="text-white">NEC 2026 Delegation:</strong> Maintains active liaison with IIT Bombay organizing board.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Bottom Metric Badges */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {statsData.map((stat, i) => (
            <div 
              key={i} 
              className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all hover:bg-white/[0.08] group"
            >
              <div className="font-heading text-2xl sm:text-3xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-amber-400 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
