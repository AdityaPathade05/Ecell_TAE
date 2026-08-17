import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Target, 
  Sparkles, 
  Calendar, 
  Award, 
  ChevronRight, 
  ChevronLeft, 
  Layers
} from 'lucide-react';
import { milestonesData } from '../data/ecellData';
import { Milestone } from '../types';
import { CardSpotlight } from './ui/card-spotlight';

export const MilestoneTimeline: React.FC = () => {
  const [activeMilestoneId, setActiveMilestoneId] = useState<number>(1);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const activeMilestone = milestonesData.find((m) => m.id === activeMilestoneId) || milestonesData[0];

  const handleNext = () => {
    setActiveMilestoneId((prev) => (prev < milestonesData.length ? prev + 1 : 1));
  };

  const handlePrev = () => {
    setActiveMilestoneId((prev) => (prev > 1 ? prev - 1 : milestonesData.length));
  };

  return (
    <section 
      id="milestones" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold backdrop-blur-md">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>PROGRESS REPORT • 13 JULY – 3 AUGUST 2026</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          The Journey at a <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-300 bg-clip-text text-transparent">Glance</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Eight milestones, three weeks — from announcement to national-level registration at Trinity Academy of Engineering, Pune.
        </p>
      </div>

      {/* 8-Step Timeline Horizontal Tracker (Interactive) */}
      <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
        <div className="flex items-center min-w-[760px] justify-between relative px-4">
          {/* Connecting line */}
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-white/10 -z-0" />
          <motion.div 
            className="absolute left-6 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-400 -z-0"
            animate={{
              width: `${((activeMilestoneId - 1) / (milestonesData.length - 1)) * 94}%`,
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />

          {milestonesData.map((milestone) => {
            const isSelected = milestone.id === activeMilestoneId;
            const isPassed = milestone.id < activeMilestoneId;

            return (
              <button
                key={milestone.id}
                id={`milestone-step-btn-${milestone.id}`}
                onClick={() => setActiveMilestoneId(milestone.id)}
                className={`relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none`}
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                    isSelected
                      ? 'bg-amber-400 text-black ring-4 ring-amber-500/30 scale-110 shadow-lg shadow-amber-400/30'
                      : isPassed
                      ? 'bg-cyan-500 text-black ring-2 ring-cyan-500/30'
                      : 'bg-[#12121a] text-slate-400 border border-white/15 hover:border-amber-400/50 hover:text-white'
                  }`}
                >
                  {isPassed ? <CheckCircle2 className="w-5 h-5 text-black" /> : milestone.numberStr}
                </div>

                <span
                  className={`mt-2 text-[11px] font-mono whitespace-nowrap transition-colors ${
                    isSelected ? 'text-amber-400 font-bold' : 'text-slate-400'
                  }`}
                >
                  {milestone.dates}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Milestone Card with CardSpotlight (Aceternity UI) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Detailed Spotlight Box */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <CardSpotlight
                color="#f59e0b"
                radius={400}
                className="p-6 sm:p-8 rounded-3xl border-amber-500/30 shadow-2xl space-y-6"
              >
                {/* Top Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="font-heading text-2xl font-black text-amber-400 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      #{activeMilestone.numberStr}
                    </span>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-semibold block">
                        {activeMilestone.dates}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Category: {activeMilestone.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Completed & Documented</span>
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                    {activeMilestone.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed font-light">
                    {activeMilestone.description}
                  </p>
                </div>

                {/* Two Column Grid: Objectives & Outcomes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {/* Objectives */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-tech uppercase tracking-wider text-amber-400 font-bold">
                      <Target className="w-4 h-4" />
                      <span>Objectives</span>
                    </div>
                    <ul className="space-y-2">
                      {activeMilestone.objective.map((obj, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-tech uppercase tracking-wider text-cyan-400 font-bold">
                      <Award className="w-4 h-4" />
                      <span>Key Outcomes & Impact</span>
                    </div>
                    <ul className="space-y-2">
                      {activeMilestone.outcome.map((out, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    id="milestone-prev-btn"
                    onClick={handlePrev}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Milestone</span>
                  </button>

                  <span className="text-xs font-mono text-slate-400">
                    {activeMilestoneId} of {milestonesData.length}
                  </span>

                  <button
                    id="milestone-next-btn"
                    onClick={handleNext}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 text-black hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20 cursor-pointer"
                  >
                    <span>Next Milestone</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </CardSpotlight>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Quick Milestone Grid Directory */}
        <div className="lg:col-span-4 space-y-3">
          <div className="p-4 rounded-2xl glass-panel border border-white/10 mb-3">
            <h4 className="text-xs font-tech uppercase tracking-wider text-slate-400 font-bold mb-1">
              8-Milestone Directory
            </h4>
            <p className="text-xs text-slate-300">
              Click any phase below to inspect the verified documentation.
            </p>
          </div>

          <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
            {milestonesData.map((m) => {
              const isSelected = m.id === activeMilestoneId;
              return (
                <button
                  key={m.id}
                  id={`milestone-sidebar-item-${m.id}`}
                  onClick={() => setActiveMilestoneId(m.id)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500/40 text-white shadow-lg shadow-amber-500/10'
                      : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold px-2 py-1 rounded-lg ${
                      isSelected ? 'bg-amber-400 text-black' : 'bg-white/10 text-slate-400'
                    }`}>
                      {m.numberStr}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white truncate max-w-[200px]">
                        {m.title}
                      </div>
                      <div className="text-[10px] font-mono text-amber-400/80">
                        {m.dates}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
