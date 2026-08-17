import React from 'react';
import { 
  Rocket, 
  ArrowUp, 
  Heart, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail, 
  ShieldCheck, 
  ExternalLink,
  Award
} from 'lucide-react';
import { ECellLogo } from './ECellLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030306] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Banner Quote from Page 11 of PDF */}
        <div className="mb-14 p-8 rounded-3xl glass-panel border border-amber-500/20 text-center relative overflow-hidden bg-gradient-to-b from-amber-500/10 to-transparent">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>PROGRESS REPORT • TRINITY ACADEMY OF ENGINEERING</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
            "Growing an Entrepreneurial Culture, One Milestone at a Time"
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            The Entrepreneurship Cell • Trinity Academy of Engineering, Pune • KJ's Educational Institute
          </p>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Institution */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-md shadow-amber-500/20">
                <ECellLogo size={38} showText={false} className="w-full h-full rounded-full" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-base text-white">
                  E-CELL TAE
                </span>
                <span className="text-[10px] text-amber-400 ml-2 font-mono">PUNE</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Fostering innovation, student-led tech startups, and entrepreneurial leadership across all engineering disciplines at Trinity Academy of Engineering in association with IIT Bombay E-Cell.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/ecell_tae"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-pink-600/20 hover:text-pink-400 border border-white/10 transition-colors"
                title="@ecell_tae Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/e-cell-tae-bb84b942a"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 border border-white/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCp-Mewz2M0Hor98y9D5cU_A"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 hover:bg-red-600/20 hover:text-red-400 border border-white/10 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="mailto:ecell.tae@tae.edu.in"
                className="p-2 rounded-xl bg-white/5 hover:bg-amber-500/20 hover:text-amber-300 border border-white/10 transition-colors"
                title="Email Secretariat"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-tech text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About E-Cell TAE
                </a>
              </li>
              <li>
                <a href="#milestones" className="hover:text-amber-400 transition-colors">
                  9-Milestone Progress Report
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-amber-400 transition-colors">
                  Anti-Gravity Draggable Team
                </a>
              </li>
              <li>
                <a href="#media-hub" className="hover:text-pink-400 transition-colors flex items-center gap-1">
                  <span>Reels & Instagram (@ecell_tae)</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-400 transition-colors">
                  Documentary Gallery & Media
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-amber-400 transition-colors">
                  Inspirational Mentors
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact Secretariat
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional & Challenge Track */}
          <div className="space-y-3">
            <h4 className="font-tech text-xs font-bold uppercase tracking-wider text-white">
              Affiliations
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>KJ's Educational Institute, Pune</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Affiliated to SPPU & AICTE</span>
              </li>
              <li className="flex items-center gap-1.5 text-amber-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>IIT Bombay E-Cell NEC Track</span>
              </li>
              <li className="pt-2">
                <span className="text-[11px] text-slate-400 block">Campus:</span>
                <span className="text-[11px] text-slate-300">Kondhwa-Saswad Road, Pune 411048</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Entrepreneurship Cell • Trinity Academy of Engineering, Pune. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
