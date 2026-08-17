import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Film, 
  Share2, 
  ExternalLink, 
  X, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  QrCode, 
  ArrowUpRight, 
  Music2, 
  Flame, 
  Radio,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Tv,
  Smartphone
} from 'lucide-react';
import { 
  instaProfileData 
} from '../data/ecellData';
import { ECellLogo } from './ECellLogo';

interface CustomVideoData {
  reelUrl: string;
  embedUrl: string;
  title: string;
  badge: string;
  description: string;
  audioTitle: string;
  type: 'instagram' | 'custom_video';
}

const PRESET_VIDEOS: CustomVideoData[] = [
  {
    reelUrl: 'https://www.instagram.com/reel/DbXW0j9ocQw/',
    embedUrl: '/assets/WhatsApp Video 2026-08-05 at 15.14.14.mp4',
    title: 'Bringing Ideas to Life 🪐',
    badge: 'Foundation Milestone Premiere',
    description: 'Watch the official reel showcasing the inception of The Entrepreneurship Cell at Trinity Academy of Engineering, our roadmap for student innovators, and our journey toward the IIT Bombay National Entrepreneurship Challenge (NEC) 2026.',
    audioTitle: 'Original Audio - E-Cell TAE',
    type: 'custom_video',
  },
  {
    reelUrl: 'https://www.instagram.com/reel/DbXW0j9ocQw/',
    embedUrl: 'https://www.instagram.com/reel/DbXW0j9ocQw/embed/',
    title: 'Official Instagram Stream 🚀',
    badge: 'Instagram Feed Broadcast',
    description: 'Direct embedded Instagram player connecting to the live @ecell_tae updates and community highlights.',
    audioTitle: 'Original Audio - E-Cell TAE',
    type: 'instagram',
  },
  {
    reelUrl: 'https://www.instagram.com/ecell_tae/',
    embedUrl: '/assets/WhatsApp Video 2026-08-05 at 15.14.14.mp4',
    title: 'NEC 2026 Road to IIT Bombay 🎙️',
    badge: 'National Challenge Spotlight',
    description: 'A glimpse into the preparations, campus mentorship sessions, and founder bootcamps driving Trinity Academy of Engineering towards the national stage.',
    audioTitle: 'Entrepreneurial Drive • E-Cell Beats',
    type: 'custom_video',
  },
];

export const MediaAndInstaSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<CustomVideoData>(PRESET_VIDEOS[0]);

  // Video Player Controls for Custom Video
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Direct Click to open Instagram Reel
  const handleVideoCardClick = () => {
    const targetUrl = currentVideo.reelUrl || instaProfileData.externalUrl;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="media-hub" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden bg-[#040406]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-r from-rose-600/10 via-purple-600/10 to-amber-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* TOP PROMINENT INSTAGRAM ACCESS BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-0.5 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 shadow-[0_10px_35px_rgba(225,48,108,0.15)] overflow-hidden"
        >
          <div className="bg-[#09090f]/95 backdrop-blur-xl rounded-[15px] p-5 sm:p-7 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 text-center sm:text-left flex-col sm:flex-row">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[2px] shadow-lg shadow-pink-500/30 flex items-center justify-center">
                  <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500 border-2 border-black"></span>
                </span>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2.5 flex-wrap">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                    Official Instagram Community
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500/20 to-rose-500/20 border border-rose-500/40 text-rose-300">
                    @ecell_tae
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded-full">
                    <Flame className="w-3.5 h-3.5 text-amber-400" /> NEC 2026
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Join our campus founder hub. Watch high-impact event reels, masterclasses, and national startup challenges.
                </p>
              </div>
            </div>

            {/* Quick Direct Actions */}
            <div className="flex items-center gap-3 flex-wrap justify-center w-full lg:w-auto">
              <a
                href={instaProfileData.externalUrl}
                target="_blank"
                rel="noreferrer"
                id="btn-open-instagram-hero"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Visit @ecell_tae</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-500/30 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 text-pink-300 text-xs font-semibold backdrop-blur-md">
            <Radio className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span>COMMUNITY & PRESS HUB</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Live Feed &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400">
              Media Hub
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Directly access our featured launch reel and campus announcements in horizontal widescreen or portrait mode.
          </p>
        </div>

        {/* Profile Card Summary & Direct Hub */}
        <div className="rounded-3xl border border-white/10 bg-[#08080d]/90 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-6 sm:p-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 border-b border-white/10 pb-8">
            {/* Avatar */}
            <div className="relative group flex-shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[3px] bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shadow-xl shadow-rose-500/25">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-black">
                  <ECellLogo size={110} showText={true} className="w-full h-full" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 bg-rose-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full border border-black flex items-center gap-1 shadow-md">
                <Sparkles className="w-2.5 h-2.5" />
                <span>TAE</span>
              </div>
            </div>

            {/* Profile Bio Details */}
            <div className="space-y-3 flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {instaProfileData.handle}
                  </h3>
                  <span className="text-cyan-400 font-bold text-xs bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20">
                    Official
                  </span>
                </div>

                <div className="flex items-center justify-center sm:justify-end gap-2 flex-wrap">
                  <a
                    href={instaProfileData.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Open on Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Bio description */}
              <div className="space-y-1 text-xs sm:text-sm text-slate-200">
                <p className="font-bold text-white">{instaProfileData.displayName}</p>
                <p className="text-slate-300">Bringing Ideas to life 🪐 • Official Home to E-Cell TAE • Participants NEC 2026 🏁</p>
                <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-xs text-slate-400 flex-wrap">
                  <span>📍 Trinity Academy of Engineering, Pune</span>
                  <span>•</span>
                  <a 
                    href="https://instagram.com/iitbombay_ecell" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>Affiliated with @iitbombay_ecell</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURED REEL / VIDEO HORIZONTAL WIDESCREEN STAGE */}
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-rose-400" />
                <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                  Featured Official Video & Reel Showcase
                </h3>
              </div>
            </div>

            {/* Video Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {PRESET_VIDEOS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentVideo(preset)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between gap-1 cursor-pointer ${
                    currentVideo.title === preset.title
                      ? 'bg-rose-500/15 border-rose-500/60 text-white shadow-md'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07] text-slate-300'
                  }`}
                >
                  <span className="font-bold text-xs text-white line-clamp-1">{preset.title}</span>
                  <span className="text-[10px] text-rose-300/90 font-medium">{preset.badge}</span>
                </button>
              ))}
            </div>

            {/* FULL HORIZONTAL WIDESCREEN VIDEO CARD */}
            <div className="bg-[#090910] border border-white/10 rounded-2xl p-4 sm:p-6 space-y-6">
              
              {/* Video Player Container with Click-To-Open Instagram Reel (Horizontal / Responsive) */}
              <div className="flex justify-center w-full">
                <div 
                  id="featured-reel-video-container"
                  onClick={handleVideoCardClick}
                  className="group relative w-full rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl flex items-center justify-center cursor-pointer transition-all hover:border-rose-500/60 hover:shadow-[0_0_35px_rgba(225,48,108,0.3)] aspect-[16/9] min-h-[300px] sm:min-h-[420px] max-h-[560px] max-w-5xl"
                  title="Click to open this Reel on Instagram"
                >
                  {/* Media Rendering: Custom Video Player or Instagram IFrame */}
                  {currentVideo.type === 'custom_video' && currentVideo.embedUrl ? (
                    <div className="relative w-full h-full bg-black flex items-center justify-center">
                      <video
                        ref={videoRef}
                        src={currentVideo.embedUrl}
                        className="w-full h-full object-contain bg-black"
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                      />
                      {/* Floating Custom Controls */}
                      <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsMuted(!isMuted);
                          }}
                          className="p-2 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black/90 border border-white/20 cursor-pointer"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (videoRef.current) {
                              if (isPlaying) {
                                videoRef.current.pause();
                              } else {
                                videoRef.current.play();
                              }
                              setIsPlaying(!isPlaying);
                            }
                          }}
                          className="p-2 rounded-full bg-black/70 backdrop-blur-md text-white hover:bg-black/90 border border-white/20 cursor-pointer"
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black relative">
                      <iframe
                        src={currentVideo.embedUrl}
                        className="w-full h-full border-0 rounded-2xl pointer-events-none min-h-[380px]"
                        allowFullScreen
                        scrolling="no"
                        title={currentVideo.title}
                      />
                    </div>
                  )}

                  {/* Click Overlay to Launch Instagram Reel with Horizontal Framing */}
                  <div 
                    className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1.5 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md">
                        <Instagram className="w-3.5 h-3.5" /> Instagram Reel
                      </span>
                      <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    <div className="space-y-2 text-center bg-black/75 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-2xl max-w-sm mx-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 mx-auto flex items-center justify-center text-white shadow-lg">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                      <div>
                        <span className="font-bold text-white text-sm block">
                          Click to Watch on Instagram
                        </span>
                        <span className="text-xs text-rose-300 font-medium">
                          Opens official reel in Instagram app or web ↗
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] text-slate-300 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        Fully Horizontal & Scaled
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Horizontal Story Details & Action Bar */}
              <div className="border-t border-white/10 pt-5 space-y-4">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 font-bold text-[11px] inline-flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3" /> {currentVideo.badge}
                      </span>
                      <h4 className="font-heading font-black text-xl sm:text-2xl text-white">
                        {currentVideo.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                      {currentVideo.description}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3 text-xs flex-shrink-0">
                    <div className="flex items-center gap-2 text-rose-300 font-medium">
                      <Music2 className="w-4 h-4 text-rose-400" />
                      <span>{currentVideo.audioTitle}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={currentVideo.reelUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25 transition-all cursor-pointer"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Watch & Like on Instagram</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(currentVideo.reelUrl);
                      setCopiedLink(true);
                      setTimeout(() => setCopiedLink(false), 2200);
                    }}
                    className="py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Share2 className="w-4 h-4 text-amber-400" />
                    <span>{copiedLink ? 'Link Copied! ✓' : 'Share Reel'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
