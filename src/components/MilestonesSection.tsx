import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { milestonesData } from '../data/ecellData';
import { Calendar, Target, CheckCircle2, Flag, ArrowRight } from 'lucide-react';

export const MilestonesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToMilestone = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll('.snap-center');
      
      if (cards.length > 0) {
        const cardWidth = cards[0].clientWidth;
        // Add gap size (space-x-6 is 24px)
        const gap = 24; 
        container.scrollTo({
          left: index * (cardWidth + gap),
          behavior: 'smooth'
        });
        setActiveIndex(index);
      }
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft;
      const cards = container.querySelectorAll('.snap-center');
      
      if (cards.length > 0) {
        const cardWidth = cards[0].clientWidth;
        const gap = 24;
        const newIndex = Math.round(scrollPosition / (cardWidth + gap));
        
        const safeIndex = Math.max(0, Math.min(newIndex, milestonesData.length - 1));
        if (activeIndex !== safeIndex) {
          setActiveIndex(safeIndex);
        }
      }
    }
  };

  return (
    <section id="milestones" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Flag className="w-3.5 h-3.5" />
            Our Journey
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading"
          >
            Evolution & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400">Milestones</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 max-w-2xl mx-auto text-base sm:text-lg"
          >
            Tracing the structural and operational roadmap of E-Cell TAE from inception to national-level execution.
          </motion.p>
        </div>

        {/* Horizontal Timeline */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="relative overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar scroll-smooth"
        >
          <div className="flex flex-row space-x-6 w-max px-4">
            {milestonesData.map((milestone, index) => {
              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col items-start gap-8 w-[350px] sm:w-[450px] snap-center shrink-0"
                >
                  {/* Timeline Line Segment to next dot */}
                  {index < milestonesData.length - 1 && (
                    <div 
                      onClick={() => scrollToMilestone(index + 1)}
                      className="absolute top-[27px] left-[47px] w-[calc(100%+24px)] h-[6px] -mt-[2px] bg-white/5 z-10 cursor-pointer hover:bg-white/10 transition-colors"
                    >
                      <motion.div 
                        className="h-[2px] mt-[2px] bg-gradient-to-r from-amber-400 to-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: activeIndex > index ? '100%' : '0%' }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                    </div>
                  )}

                  {/* Timeline Dot/Number */}
                  <button 
                    onClick={() => scrollToMilestone(index)}
                    aria-label={`Go to milestone ${index + 1}`}
                    className={`absolute top-[13px] left-8 flex items-center justify-center w-[30px] h-[30px] rounded-full border-[3px] shadow-[0_0_15px_rgba(251,191,36,0.3)] z-20 transition-all duration-300 cursor-pointer hover:scale-110 ${activeIndex >= index ? 'bg-amber-400 border-amber-200' : 'bg-slate-950 border-amber-400 text-amber-400'}`}
                  >
                    <div className={`w-2 h-2 rounded-full ${activeIndex >= index ? 'bg-slate-900' : 'bg-amber-400'}`} />
                  </button>

                  {/* Content Card */}
                  <div className="w-full pt-[60px]">
                    <div className={`glass p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative group overflow-hidden h-full ${activeIndex === index ? 'border-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.1)]' : 'border-white/10 hover:border-amber-400/30'}`}>
                      {/* Hover Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="flex flex-wrap gap-2 mb-4 justify-start">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300 font-mono">
                          <Calendar className="w-3 h-3 text-amber-400" />
                          {milestone.dates}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-300 font-medium">
                          {milestone.badge}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-3">
                        <span className="text-amber-400 mr-2">{milestone.numberStr}.</span>
                        {milestone.title}
                      </h3>

                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {milestone.description}
                      </p>

                      <div className="space-y-4">
                        {/* Objectives */}
                        {milestone.objective && milestone.objective.length > 0 && (
                          <div className="flex flex-col gap-2 items-start">
                            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                              <Target className="w-3.5 h-3.5 text-cyan-400" />
                              Key Objectives
                            </h4>
                            <ul className="space-y-1.5 text-xs text-slate-400 text-left">
                              {milestone.objective.map((obj, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <ArrowRight className="w-3 h-3 mt-0.5 text-slate-500 flex-shrink-0" />
                                  <span>{obj}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Outcomes */}
                        {milestone.outcome && milestone.outcome.length > 0 && (
                          <div className="flex flex-col gap-2 pt-4 border-t border-white/5 items-start">
                            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                              Outcomes
                            </h4>
                            <ul className="space-y-1.5 text-xs text-slate-400 text-left">
                              {milestone.outcome.map((out, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <ArrowRight className="w-3 h-3 mt-0.5 text-slate-500 flex-shrink-0" />
                                  <span>{out}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
