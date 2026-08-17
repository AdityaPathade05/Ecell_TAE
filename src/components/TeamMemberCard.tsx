import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ChevronRight, 
  Info
} from 'lucide-react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
  gravityActive?: boolean;
  isGridMode?: boolean;
  onSelect: (member: TeamMember) => void;
  dragConstraintsRef?: React.RefObject<HTMLDivElement | null>;
  index: number;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  member,
  onSelect,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      id={`team-member-card-${member.id}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative w-full rounded-2xl glass-card transition-all duration-300 select-none ${
        isHovered
          ? 'border-amber-400/60 shadow-[0_10px_30px_rgba(245,158,11,0.2)] z-20 bg-[#0d0d12]/95'
          : 'border-white/10 hover:border-white/20 z-10 bg-[#08080c]/80'
      } p-5`}
    >

      {/* Profile Header */}
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <img
            src={member.imageUrl}
            alt={member.name}
            referrerPolicy="no-referrer"
            className="w-[72px] h-[72px] rounded-xl object-cover border border-white/15 shadow-md"
          />
          <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-[#050505]" />
        </div>

        <div className="flex-1 min-w-0 pr-2 space-y-1">
          <div className="flex items-center justify-between gap-1 mb-1">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/20">
              {member.departmentLabel}
            </div>
          </div>

          <h3 className="font-heading text-base font-bold text-white truncate">
            {member.name}
          </h3>
        </div>
      </div>

      {/* Brief Bio */}
      <p className="mt-3 text-xs text-slate-300 line-clamp-2 leading-relaxed">
        {member.bio}
      </p>

      {/* Expanded Profile Detail Revealed on Hover */}
      <motion.div
        initial={false}
        animate={{
          height: isHovered ? 'auto' : 0,
          opacity: isHovered ? 1 : 0,
          marginTop: isHovered ? 12 : 0,
        }}
        className="overflow-hidden space-y-2.5 border-t border-white/10 pt-2"
      >
        {/* View Detailed Profile Trigger */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(member);
          }}
          className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold bg-white/10 hover:bg-amber-500 hover:text-black text-slate-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Info className="w-3.5 h-3.5" />
          <span>View Profile</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </motion.div>

      {/* Bottom Tag Bar */}
      <div className="mt-3 flex items-center gap-1.5 flex-wrap">
        {(member.tags || []).slice(0, 2).map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-400 border border-white/5"
          >
            #{tag}
          </span>
        ))}
        {member.tags && member.tags.length > 2 && (
          <span className="text-[10px] text-slate-500">+{member.tags.length - 2}</span>
        )}
      </div>
    </motion.div>
  );
};
