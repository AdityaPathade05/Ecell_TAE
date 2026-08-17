import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Menu, 
  X, 
  Sparkles, 
  Compass, 
  Users, 
  Milestone as MilestoneIcon, 
  Send,
  Film,
  Instagram,
  Flag
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ECellLogo } from './ECellLogo';

interface NavbarProps {
  onOpenJoinModal: () => void;
  gravityActive: boolean;
  onToggleGravity: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenJoinModal, 
  gravityActive, 
  onToggleGravity 
}) => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'gallery', 'team', 'media-hub', 'speakers', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', icon: Compass },
    { name: 'Milestones', href: '#milestones', id: 'milestones', icon: Flag },
    { name: 'Gallery', href: '#gallery', id: 'gallery', icon: Sparkles },
    { name: 'Team', href: '#team', id: 'team', icon: Users },
    { name: 'Reels & Media', href: '#media-hub', id: 'media-hub', icon: Film },
    { name: 'Mentors', href: '#speakers', id: 'speakers', icon: Sparkles },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Send },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50 py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-lg shadow-slate-200/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & College Badging */}
        <a 
          href="#top" 
          id="navbar-brand-logo"
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="relative">
            <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-orange-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 group-hover:shadow-amber-500/40 transition-all duration-300">
              <ECellLogo size={52} showText={false} className="w-full h-full rounded-full" />
            </div>
            <span className="absolute bottom-0 right-0 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white dark:text-white dark:group-hover:text-amber-400 light:text-slate-900 light:group-hover:text-amber-600 transition-colors">
                E-CELL
              </span>
              <span className="px-1.5 py-0.5 text-[11px] font-bold rounded-md bg-amber-500/20 text-amber-400 border border-amber-500/30">
                TAE
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 truncate max-w-[200px] sm:max-w-[280px]">
              Trinity Academy of Engineering, Pune
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.name}
                id={`nav-link-${link.id}`}
                onClick={() => scrollTo(link.href)}
                className={`relative px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? theme === 'dark'
                      ? 'text-amber-300 bg-amber-500/15 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                      : 'text-amber-700 bg-amber-50 border border-amber-200'
                    : theme === 'dark'
                      ? 'text-slate-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5 opacity-80" />
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5">
          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="md:hidden p-2 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-300 bg-white/5 text-slate-200 dark:text-slate-200 light:text-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 dark:border-white/10 light:border-slate-200 bg-[#070709]/95 dark:bg-[#070709]/95 light:bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/5 dark:border-white/5 light:border-slate-200 text-xs text-slate-400">
              <span>Navigation Menu</span>
              <button
                onClick={onToggleGravity}
                className="flex items-center gap-1.5 px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[11px]"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${gravityActive ? 'bg-cyan-400' : 'bg-slate-500'}`} />
                {gravityActive ? '0G Physics: Active' : '0G Physics: Off'}
              </button>
            </div>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => scrollTo(link.href)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-colors ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white dark:text-slate-300 light:text-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{link.name}</span>
                </button>
              );
            })}

            <div className="pt-2">
              <button
                id="mobile-join-button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/25"
              >
                <span>Join E-Cell TAE Community</span>
                <Rocket className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
