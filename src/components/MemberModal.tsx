import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Linkedin, 
  Instagram, 
  Github, 
  Mail, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { TeamMember } from '../types';

interface MemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const MemberModal: React.FC<MemberModalProps> = ({ 
  member, 
  onClose,
}) => {
  if (!member) return null;

  return (
    <AnimatePresence>
      <div 
        id="member-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          id={`member-modal-${member.id}`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-amber-500/30 p-6 sm:p-8 bg-[#09090d] text-white shadow-2xl shadow-amber-500/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            id="close-member-modal-btn"
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-white/10">
            <div className="relative">
              <img
                src={member.imageUrl}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-amber-400/40 shadow-lg shadow-amber-500/20"
              />
              <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-amber-500 text-black text-[10px] font-extrabold uppercase">
                {member.department}
              </span>
            </div>

            <div className="text-center sm:text-left space-y-1 flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{member.departmentLabel}</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-amber-400">
                {member.role}
              </p>
              <p className="text-xs text-slate-400">
                Trinity Academy of Engineering, Pune
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="py-5 space-y-4">
            <div>
              <h4 className="text-xs font-tech uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                Executive Profile & Vision
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Achievements & Milestones Role */}
            {member.achievements && member.achievements.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-tech uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Key Contributions to E-Cell TAE</span>
                </h4>
                <div className="space-y-2">
                  {member.achievements.map((ach, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {member.tags && member.tags.length > 0 && (
              <div>
                <h4 className="text-xs font-tech uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Focus Areas & Expertise
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
