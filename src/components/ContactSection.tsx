import React from 'react';
import { 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Youtube,
  Building2, 
  Award,
  ExternalLink,
  Phone
} from 'lucide-react';

interface ContactSectionProps {
  onOpenJoinModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section 
      id="contact" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      {/* Ambient background blur */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold backdrop-blur-md">
          <Mail className="w-3.5 h-3.5 text-amber-400" />
          <span>CONNECT & SECRETARIAT</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Get in Touch with <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-300 bg-clip-text text-transparent">E-Cell TAE</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Official secretariat, innovation cell headquarters, and institutional communication portal of Trinity Academy of Engineering.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 space-y-8 shadow-2xl shadow-black/40">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Trinity Academy of Engineering
                </h3>
                <p className="text-xs text-slate-400">
                  KJ's Educational Institute • Approved by AICTE, Affiliated to Savitribai Phule Pune University (SPPU)
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 sm:col-span-2">
              <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold text-sm mb-0.5">Campus Headquarters</strong>
                <span className="leading-relaxed">Survey No. 25 & 27, Near Bopdev Ghat, Kondhwa-Saswad Road, Pune - 411048, Maharashtra, India.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
              <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold text-sm mb-0.5">Official E-Cell Inquiries</strong>
                <a href="mailto:ecell.tae@tae.edu.in" className="hover:text-cyan-300 transition-colors block">ecell.tae@tae.edu.in</a>
                <a href="mailto:tae.pune@kjes.edu.in" className="hover:text-cyan-300 transition-colors block text-slate-400">tae.pune@kjes.edu.in</a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
              <Award className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold text-sm mb-0.5">National Association</strong>
                <span className="leading-relaxed">IIT Bombay E-Cell Network • National Entrepreneurship Challenge (NEC)</span>
              </div>
            </div>
          </div>

          {/* Social Channels & Portals */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block font-medium">Official Social Handles:</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/ecell_tae"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-600/15 border border-pink-500/30 text-pink-300 hover:bg-pink-600/30 text-xs font-semibold transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>@ecell_tae</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://www.linkedin.com/in/e-cell-tae-bb84b942a"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-300 hover:bg-blue-600/30 text-xs font-semibold transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Community</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCp-Mewz2M0Hor98y9D5cU_A"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/15 border border-red-500/30 text-red-300 hover:bg-red-600/30 text-xs font-semibold transition-all cursor-pointer"
              >
                <Youtube className="w-4 h-4" />
                <span>YouTube Channel</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
