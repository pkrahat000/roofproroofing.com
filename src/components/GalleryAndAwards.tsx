/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Maximize2, 
  Award, ShieldCheck, CheckCircle2, Star 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectImage {
  src: string;
  fallback: string;
  label: string;
  category: 'residential' | 'commercial';
  location: string;
  material: string;
}

const PROJECT_IMAGES: ProjectImage[] = [
  { 
    src: "/images/projects_images/project_1.png", 
    fallback: "/images/residential_flat.png",
    label: "slider_image_1", 
    category: "residential", 
    location: "Santa Rosa Beach, FL", 
    material: "Asphalt Shingles" 
  },
  { 
    src: "/images/residential_metal.png", 
    fallback: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    label: "slider_image_2", 
    category: "residential", 
    location: "Destin, FL", 
    material: "Architectural Metal" 
  },
  { 
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", 
    fallback: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    label: "slider_image_3", 
    category: "residential", 
    location: "Fort Lauderdale, FL", 
    material: "Concrete Tiles" 
  },
  { 
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", 
    fallback: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    label: "slider_image_4", 
    category: "residential", 
    location: "North Port, FL", 
    material: "Lifetime Shingles" 
  },
  { 
    src: "/images/residential_shingle.png", 
    fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    label: "slider_image_5", 
    category: "commercial", 
    location: "Fort Lauderdale, FL", 
    material: "Seam Metal" 
  },
  { 
    src: "/images/residential_tile.png", 
    fallback: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    label: "slider_image_6", 
    category: "residential", 
    location: "Destin, FL", 
    material: "Clay Tiles" 
  },
  { 
    src: "/images/projects_images/project_7.png", 
    fallback: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    label: "slider_image_7", 
    category: "commercial", 
    location: "Panama City, FL", 
    material: "Tile Overlays" 
  },
  { 
    src: "/images/projects_images/project_8.png", 
    fallback: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    label: "slider_image_8", 
    category: "residential", 
    location: "Niceville, FL", 
    material: "Architectural Shingles" 
  }
];

export default function GalleryAndAwards() {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = PROJECT_IMAGES.filter(img => 
    filter === 'all' || img.category === filter
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Gallery Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-black tracking-[0.4em] text-cyan-600 uppercase block">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-blue uppercase tracking-tight">
              Explore Our Projects
            </h2>
            <div className="h-1.5 w-16 bg-cyan-600 rounded-full" />
            <p className="text-slate-650 text-sm leading-relaxed font-normal">
              Browse our gallery of Commercial and Residential projects to witness the precision and care RoofPro Roofing brings to every project across Florida. Each image showcases our commitment to quality and service for homes and businesses alike. Discover why RoofPro Roofing is the trusted choice for exceptional roofing solutions in Florida.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
            {/* Gallery Category Filter Slider */}
            <div className="inline-flex gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl shadow-sm mb-6">
              {(['all', 'residential', 'commercial'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setFilter(cat); setLightboxIndex(null); }}
                  className={`py-1.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    filter === cat 
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {cat === 'all' ? 'Show All' : cat}
                </button>
              ))}
            </div>

            <button 
              onClick={() => { setFilter('all'); }} 
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-display font-bold text-xs py-4 px-8 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center cursor-pointer uppercase tracking-wider"
            >
              View Our Full Gallery Of Work
            </button>
          </div>
        </div>

        {/* 12 Image responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.label}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-200/40 cursor-pointer bg-slate-250 hover:shadow-lg hover:border-cyan-500/20 transition-all duration-350"
                style={index === 0 ? { borderColor: '#ff0000' } : undefined}
              >
                <img 
                  src={img.src} 
                  alt={img.label} 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = img.fallback;
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Dynamic Overlay Info Panel on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-cyan-400 block">
                        {img.material}
                      </span>
                      <h4 className="text-sm font-display font-black uppercase tracking-tight">
                        {img.location}
                      </h4>
                      <span className="text-[10px] text-white/50 block font-mono">
                        {img.label}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-cyan-600/90 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* RECOGNITION / OUR AWARDS SECTION */}
        <div id="awards" className="border-t border-slate-200 pt-16 scroll-mt-24">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono font-black tracking-[0.4em] text-cyan-500 uppercase block">
              STATEWIDE RECOGNITION
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-brand-blue uppercase tracking-tight">
              Recognition / Our Awards
            </h2>
            <div className="h-1.5 w-12 bg-cyan-600 mx-auto rounded-full" />
          </div>

          {/* 4 awards side-by-side representing BestinDestin2026, BBB, Best Of EC Logo 2025, and Master cert */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center max-w-5xl mx-auto">
            
            {/* Best In Destin 2026 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm flex flex-col items-center text-center gap-3 group hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 font-bold border-2 border-cyan-100 group-hover:scale-105 transition-transform">
                🏆
              </div>
              <div>
                <span className="text-xs font-bold text-brand-blue tracking-tight block group-hover:text-cyan-700">
                  Best in Destin 2026
                </span>
                <span className="text-[9px] text-slate-400 uppercase font-mono font-semibold">
                  Gold Award Winner
                </span>
              </div>
            </div>

            {/* BBB A+ Accredited */}
            <div className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm flex flex-col items-center text-center gap-3 group hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-700 font-display font-bold border-2 border-blue-100 group-hover:scale-105 transition-transform">
                BBB
              </div>
              <div>
                <span className="text-xs font-bold text-brand-blue tracking-tight block group-hover:text-blue-700">
                  BBB Accredited Business
                </span>
                <span className="text-[9px] text-emerald-600 uppercase font-mono font-black">
                  A+ Rating Verified
                </span>
              </div>
            </div>

            {/* Best Of EC Logo 2025 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm flex flex-col items-center text-center gap-3 group hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 font-bold border-2 border-amber-100 group-hover:scale-105 transition-transform">
                ⭐
              </div>
              <div>
                <span className="text-xs font-bold text-brand-blue tracking-tight block group-hover:text-amber-700">
                  Best Of EC Logo 2025
                </span>
                <span className="text-[9px] text-slate-400 uppercase font-mono font-semibold">
                  Emerald Coast Favorite
                </span>
              </div>
            </div>

            {/* GAF Elite Master Seal (Representing download 3) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm flex flex-col items-center text-center gap-3 group hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-rose-600 font-bold border-2 border-red-100 group-hover:scale-105 transition-transform">
                🎖️
              </div>
              <div>
                <span className="text-xs font-bold text-brand-blue tracking-tight block group-hover:text-rose-700">
                  GAF Master Elite
                </span>
                <span className="text-[9px] text-rose-600 uppercase font-mono font-semibold">
                  Top 2% Contractor
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Overlay Player */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-brand-dark/95 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-md"
          >
            {/* Close button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-cyan-400 bg-white/10 p-2.5 rounded-full hover:scale-105 active:scale-95 transition-all focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full flex flex-col items-center gap-4 text-white">
              <div className="relative w-full aspect-video md:max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <img 
                  src={filteredImages[lightboxIndex].src} 
                  alt={filteredImages[lightboxIndex].label} 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = filteredImages[lightboxIndex].fallback;
                  }}
                  className="w-full h-full object-contain"
                />

                {/* Left navigation arrow */}
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-cyan-600 text-white p-3 rounded-full hover:scale-110 active:scale-90 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right navigation arrow */}
                <button 
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-cyan-600 text-white p-3 rounded-full hover:scale-110 active:scale-90 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Details Meta Panel */}
              <div className="flex flex-col sm:flex-row justify-between w-full border-t border-white/10 pt-4 px-2 gap-2">
                <div>
                  <h3 className="text-lg font-display font-black uppercase text-cyan-400">
                    {filteredImages[lightboxIndex].location}
                  </h3>
                  <p className="text-xs text-white/70">
                    Material: <span className="text-white font-semibold">{filteredImages[lightboxIndex].material}</span> | Category: <span className="text-white font-semibold uppercase">{filteredImages[lightboxIndex].category}</span>
                  </p>
                </div>
                <div className="text-right sm:self-center">
                  <span className="text-xs font-mono bg-white/10 px-3 py-1.5 rounded-lg border border-white/5">
                    {filteredImages[lightboxIndex].label} | {lightboxIndex + 1} of {filteredImages.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
