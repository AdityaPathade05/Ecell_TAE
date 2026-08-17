import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Play, 
  Pause,
  Award,
  Building2
} from 'lucide-react';
import { speakersData } from '../data/ecellData';

export const SpeakersCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % speakersData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % speakersData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + speakersData.length) % speakersData.length);
  };

  const activeSpeaker = speakersData[currentIndex];

  return (
    <section 
      id="speakers" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>INSTITUTIONAL PATRON & MENTORS</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Patron & <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-300 bg-clip-text text-transparent">Mentors</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Visionary guidance, strategic institutional mentorship, and academic patron support driving entrepreneurial excellence at Trinity Academy of Engineering.
        </p>

        {/* Direct Switcher Buttons */}
        <div className="flex items-center justify-center gap-3 pt-3 flex-wrap">
          {speakersData.map((speaker, idx) => (
            <button
              key={speaker.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                idx === currentIndex
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{speaker.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Main Container */}
      <div 
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpeaker.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="p-8 sm:p-12 rounded-3xl glass-panel border border-amber-500/25 shadow-2xl relative bg-[#09090e]/90 overflow-hidden"
          >
            {/* Top quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote className="w-28 h-28 text-amber-400" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar / Portrait */}
              <div className="relative flex-shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-cyan-400 shadow-xl shadow-amber-500/20 overflow-hidden">
                  <img
                    src={activeSpeaker.avatarUrl}
                    alt={activeSpeaker.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600";
                    }}
                    className="w-full h-full rounded-[14px] object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-[#050505] border border-white/20 text-amber-400 shadow-md z-10">
                  <Building2 className="w-4 h-4" />
                </div>
              </div>

              {/* Quote & Speaker Details */}
              <div className="space-y-4 text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    <Award className="w-3.5 h-3.5" />
                    <span>{activeSpeaker.topic}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    ★ PATRON & MENTOR
                  </span>
                </div>

                <blockquote className="text-base sm:text-xl font-normal text-slate-100 italic leading-relaxed">
                  "{activeSpeaker.quote}"
                </blockquote>

                <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {activeSpeaker.name}
                    </h3>
                    <p className="text-xs text-amber-400 font-medium">
                      {activeSpeaker.designation} • <span className="text-slate-300">{activeSpeaker.company}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 justify-center sm:justify-end">
                    {activeSpeaker.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-slate-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Toolbar */}
        <div className="mt-8 flex items-center justify-between px-2">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {speakersData.map((_, idx) => (
              <button
                key={idx}
                id={`speaker-dot-${idx}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'w-8 bg-amber-400 shadow-sm shadow-amber-400/50'
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Left/Right Controls & Play/Pause */}
          <div className="flex items-center gap-2">
            <button
              id="speaker-autoplay-toggle-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
              className="p-2 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              id="speaker-prev-btn"
              onClick={handlePrev}
              aria-label="Previous speaker"
              className="p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              id="speaker-next-btn"
              onClick={handleNext}
              aria-label="Next speaker"
              className="p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
