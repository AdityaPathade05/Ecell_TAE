import React, { useState } from 'react';
import { 
  Users, 
  Flame, 
  Sparkles
} from 'lucide-react';
import { teamMembersData } from '../data/ecellData';
import { TeamMember, Department } from '../types';
import { TeamMemberCard } from './TeamMemberCard';
import { MemberModal } from './MemberModal';

interface FloatingTeamSectionProps {
  gravityActive?: boolean;
  onToggleGravity?: () => void;
}

export const FloatingTeamSection: React.FC<FloatingTeamSectionProps> = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const departments: { id: Department; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'All Members', icon: Users },
    { id: 'leadership', label: 'Executive Leadership', icon: Flame },
    { id: 'heads', label: 'Core Team Heads', icon: Sparkles },
  ];

  const filteredMembers = teamMembersData.filter((member) => {
    if (selectedDepartment === 'all') return true;
    return member.department === selectedDepartment;
  });

  return (
    <section 
      id="team" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold backdrop-blur-md">
          <Users className="w-4 h-4 text-amber-400" />
          <span>TEAM LEADERSHIP & INNOVATORS</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Meet the Minds Behind <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-300 bg-clip-text text-transparent">E-Cell TAE</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          The student leaders, faculty advisors, and innovators driving entrepreneurship at Trinity Academy of Engineering, Pune.
        </p>
      </div>

      {/* Control Bar: Category Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-10 p-2 rounded-2xl glass-panel border border-white/10 max-w-2xl mx-auto overflow-x-auto scrollbar-none">
        {departments.map((dept) => {
          const Icon = dept.icon;
          const isSelected = selectedDepartment === dept.id;
          return (
            <button
              key={dept.id}
              id={`dept-tab-${dept.id}`}
              onClick={() => setSelectedDepartment(dept.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20 font-bold'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{dept.label}</span>
            </button>
          );
        })}
      </div>

      {/* Static Team Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member, index) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            onSelect={(m) => setSelectedMember(m)}
            index={index}
          />
        ))}
      </div>

      {/* Member Details Modal */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};
