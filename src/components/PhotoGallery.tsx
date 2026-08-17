import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles, 
  ZoomIn, 
  Search
} from 'lucide-react';
import { galleryPhotosData, officialGroupPhoto } from '../data/ecellData';
import { GalleryPhoto } from '../types';

const FALLBACK_EVENT_IMAGE = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200';

export const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'core-team', label: 'Core Assembly' },
    { id: 'charter', label: 'Charter & Sanctions' },
    { id: 'meetings', label: 'Interviews & Meets' },
  ];

  // Filtering by category & search query
  const filteredPhotos = galleryPhotosData.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.categoryLabel.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      (p.attendees && p.attendees.some((att) => att.toLowerCase().includes(query)));
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (photo: GalleryPhoto) => {
    const idx = galleryPhotosData.findIndex((p) => p.id === photo.id);
    setCurrentIndex(idx !== -1 ? idx : 0);
    setActivePhoto(photo);
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (galleryPhotosData.length === 0) return;
    const nextIdx = (currentIndex + 1) % galleryPhotosData.length;
    setCurrentIndex(nextIdx);
    setActivePhoto(galleryPhotosData[nextIdx]);
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (galleryPhotosData.length === 0) return;
    const prevIdx = (currentIndex - 1 + galleryPhotosData.length) % galleryPhotosData.length;
    setCurrentIndex(prevIdx);
    setActivePhoto(galleryPhotosData[prevIdx]);
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5" />
              Official Documentary Vault
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
              Moments That Built{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400">
                E-Cell TAE
              </span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
              Official photographic journey capturing inaugural assemblies, mentor roundtables, technical workshops, and national innovation milestones.
            </p>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="p-4 rounded-2xl glass border border-white/10 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const count = cat.id === 'all' 
                ? galleryPhotosData.length 
                : galleryPhotosData.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  id={`filter-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/10 bg-white/5 border border-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.id ? 'bg-black/30 text-slate-950 font-mono' : 'bg-white/10 text-slate-400 font-mono'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64 flex-shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search documentary photos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-black/40 border border-white/15 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Featured Core Team Spotlight (when in 'all' or 'core-team') */}
        {(selectedCategory === 'all' || selectedCategory === 'core-team') && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden glass border border-amber-500/30 mb-12 group cursor-pointer"
            onClick={() => openLightbox(galleryPhotosData[0])}
          >
            {/* Main Photo Visual */}
            <div className="relative h-80 sm:h-96 md:h-[460px] w-full overflow-hidden bg-slate-900">
              <img
                src={officialGroupPhoto.url}
                alt={officialGroupPhoto.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = FALLBACK_EVENT_IMAGE;
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />

              {/* Top Badges */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs shadow-lg uppercase tracking-wider backdrop-blur-md pointer-events-auto">
                  <Sparkles className="w-3.5 h-3.5" />
                  Official Core Group Portrait
                </span>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-slate-300 text-xs font-mono backdrop-blur-md pointer-events-auto">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {officialGroupPhoto.date}
                </span>
              </div>

              {/* Bottom Content Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium border border-cyan-500/30">
                      Milestone 01-08 Archive
                    </span>
                    <span className="text-slate-400 text-xs font-mono">
                      📍 Trinity Academy of Engineering, Pune
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-heading leading-tight">
                    {officialGroupPhoto.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2">
                    {officialGroupPhoto.caption}
                  </p>

                  {/* Attendees list tag chips */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {officialGroupPhoto.attendees.slice(0, 4).map((att, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-[11px] text-slate-200 backdrop-blur-md"
                      >
                        {att}
                      </span>
                    ))}
                    {officialGroupPhoto.attendees.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px]">
                        +{officialGroupPhoto.attendees.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button: Inspect */}
                <div className="flex items-center gap-2.5 self-start md:self-auto pointer-events-auto">
                  <button
                    id="view-group-photo-btn"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md transition-all shadow-lg group-hover:border-amber-400/50 cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                    <span>Inspect High-Res</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => openLightbox(photo)}
              className="group rounded-2xl overflow-hidden glass border border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_EVENT_IMAGE;
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                {/* Category & Milestone Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/15 text-[11px] font-medium text-cyan-300 backdrop-blur-md">
                    {photo.categoryLabel}
                  </span>
                  {photo.milestoneRef && (
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono">
                      {photo.milestoneRef}
                    </span>
                  )}
                </div>

                {/* Date Chip */}
                <div className="absolute bottom-3 left-3 text-[11px] text-slate-300 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  {photo.date}
                </div>

                {/* Hover Quick Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px] pointer-events-none">
                  <div className="p-3 rounded-full bg-white/20 text-white border border-white/30 transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 truncate max-w-[200px]">
                    <MapPin className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{photo.location}</span>
                  </span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-0.5 text-[11px] group-hover:translate-x-0.5 transition-transform">
                    Inspect <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-4 sm:p-6 lg:p-10 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] glass rounded-3xl border border-white/20 overflow-hidden flex flex-col lg:flex-row bg-[#08080c] shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-4 lg:right-[380px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-110 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo Viewport */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_EVENT_IMAGE;
                  }}
                  className="max-h-[60vh] lg:max-h-[80vh] w-full object-contain p-2"
                />
              </div>

              {/* Sidebar Info Panel */}
              <div className="w-full lg:w-96 p-6 lg:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/10 bg-slate-950/60">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider border border-cyan-500/30">
                      {activePhoto.categoryLabel}
                    </span>
                    {activePhoto.milestoneRef && (
                      <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-mono border border-amber-500/30">
                        {activePhoto.milestoneRef}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading">
                    {activePhoto.title}
                  </h3>

                  <div className="flex flex-col gap-2 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{activePhoto.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{activePhoto.location}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Historical Record & Description
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activePhoto.description}
                    </p>
                  </div>

                  {activePhoto.attendees && activePhoto.attendees.length > 0 && (
                    <div className="pt-2 border-t border-white/10">
                      <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        Key Leaders & Participants
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {activePhoto.attendees.map((attendee, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300"
                          >
                            {attendee}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-500">
                  <span>Photo {currentIndex + 1} of {galleryPhotosData.length}</span>
                  <span className="text-amber-400 font-mono">E-Cell TAE Archive</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
