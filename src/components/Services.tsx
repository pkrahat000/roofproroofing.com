/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ShieldCheck, ArrowUpRight, Flame, Layers, 
  Wrench, Activity, Sparkles 
} from 'lucide-react';
import { motion } from 'motion/react';

// Exact service names from prompt
const residentialServicesList = [
  { 
    title: "Residential Shingle Roofing Services", 
    img: "/images/residential_shingle.png", 
    fallback: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    icon: Layers, 
    desc: "Architectural shingles tailored for standard durability and aesthetics." 
  },
  { 
    title: "Residential Metal Roofing Services", 
    img: "/images/residential_metal.png", 
    fallback: "https://images.unsplash.com/photo-1628744448840-55412b7746f3?auto=format&fit=crop&w=800&q=80",
    icon: ShieldCheck, 
    desc: "Lifetime metal roofing systems for storm defense and efficiency." 
  },
  { 
    title: "Residential Tile Roofing Services", 
    img: "/images/residential_tile.png", 
    fallback: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    icon: Flame, 
    desc: "Elegant, premium concrete and clay tiles crafted for durability." 
  },
  { 
    title: "Residential Flat / Low Slope Roofing Services", 
    img: "/images/residential_flat.png", 
    fallback: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    icon: Sparkles, 
    desc: "Advanced watertight solutions for low-slope attachments & decks." 
  },
  { 
    title: "Residential Roof Repair Services", 
    img: "/images/residential_repair.png", 
    fallback: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    icon: Wrench, 
    desc: "Expert leak detection, localized flashing repairs, and shingle fixes." 
  },
  { 
    title: "Residential Re-Roofing/Roof Replacement Services", 
    img: "/images/residential_replacement.png", 
    fallback: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=800&q=80",
    icon: Activity, 
    desc: "Flawless complete roof tears-offs and clean code-compliant replacements." 
  }
];

const commercialServicesList = [
  { 
    title: "Commercial Shingle Roofing Services", 
    img: "/images/ecommerce_images/commercial_shingle.png", 
    fallback: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    icon: Layers, 
    desc: "Durable, high-grade architectural shingling for institutional structures." 
  },
  { 
    title: "Commercial Metal Roofing Services", 
    img: "/images/ecommerce_images/commercial_metal.png", 
    fallback: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    icon: ShieldCheck, 
    desc: "Standing seam and corrugated metal coverings built for heavy commercial use." 
  },
  { 
    title: "Commercial Tile Roofing Services", 
    img: "/images/ecommerce_images/commercial_tile.png", 
    fallback: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    icon: Flame, 
    desc: "Luxury commercial tile systems for master developments & commercial hubs." 
  },
  { 
    title: "Commercial Flat / Low Slope Roofing Services", 
    img: "/images/ecommerce_images/commercial_flat.png", 
    fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    icon: Sparkles, 
    desc: "Premium single-ply TPO, EPDM, and modified bitumen watertight systems." 
  },
  { 
    title: "Commercial Roof Repair Services", 
    img: "/images/ecommerce_images/commercial_repair.png", 
    fallback: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    icon: Wrench, 
    desc: "Commercial leak inspection, membrane re-sealing, ponding fixes." 
  },
  { 
    title: "Commercial Re-Roofing/Roof Replacement Services", 
    img: "/images/ecommerce_images/commercial_replacement.png", 
    fallback: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    icon: Activity, 
    desc: "Complete scale tear-offs or overlay options with comprehensive warranties." 
  }
];

interface ServicesProps {
  onScrollToForm: () => void;
}

export default function Services({ onScrollToForm }: ServicesProps) {
  // Toggle switch: 'all' or 'residential' or 'commercial'
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial'>('all');

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Title Section */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs tracking-[0.3em] font-mono font-black text-cyan-600 uppercase block">
            PROFESSIONAL SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-blue uppercase tracking-tight">
            WHAT WE OFFER
          </h2>
          <div className="h-1.5 w-24 bg-cyan-600 mx-auto rounded-full" />
          
          {/* Custom Interactive Sliding Toggle Switch */}
          <div className="pt-6 flex justify-center">
            <div className="inline-flex items-center gap-4 bg-slate-100 p-1.5 rounded-full shadow-inner border border-slate-200">
              <button
                onClick={() => setActiveTab('residential')}
                className={`py-2.5 px-6 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 ${
                  activeTab === 'residential'
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Residential Services
              </button>
              
              <button
                onClick={() => setActiveTab('all')}
                className={`py-2.5 px-4 rounded-full text-xs font-extrabold tracking-widest uppercase transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                ALL
              </button>

              <button
                onClick={() => setActiveTab('commercial')}
                className={`py-2.5 px-6 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 ${
                  activeTab === 'commercial'
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Commercial Services
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Service Grid Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* RESIDENTIAL SERVICES COLUMN */}
          {(activeTab === 'all' || activeTab === 'residential') && (
            <div id="services-residential" className="space-y-8 scroll-mt-24">
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <h3 className="text-2xl font-display font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-cyan-600 rounded-full" />
                  Residential Services
                </h3>
                <span className="text-xs bg-cyan-50 text-cyan-700 font-mono font-bold px-2.5 py-1 rounded-full">
                  6 Premium Offerings
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {residentialServicesList.map((service, idx) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={idx}
                      className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-cyan-500/20 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1.5"
                    >
                      {/* Decorative image background */}
                      <div className="relative h-44 overflow-hidden">
                        <img 
                          src={service.img} 
                          alt={service.title} 
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = service.fallback;
                          }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                          <div className="w-7 h-7 rounded-lg bg-cyan-600/90 text-white flex items-center justify-center backdrop-blur-sm">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] text-white/90 font-bold bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded uppercase tracking-wider">
                            Residential
                          </span>
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <h4 className="text-sm font-bold text-brand-blue group-hover:text-cyan-700 transition-colors line-clamp-2">
                            {service.title}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                        <button 
                          onClick={onScrollToForm}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-700 hover:text-cyan-500 hover:underline transition-all pt-2 group-hover:gap-2 cursor-pointer"
                        >
                          <span>Get Free Consultation</span>
                          <ArrowUpRight className="w-3 h-3 text-cyan-600" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* COMMERCIAL SERVICES COLUMN */}
          {(activeTab === 'all' || activeTab === 'commercial') && (
            <div id="services-commercial" className="space-y-8 scroll-mt-24">
              <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
                <h3 className="text-2xl font-display font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-cyan-600 rounded-full" />
                  Commercial Services
                </h3>
                <span className="text-xs bg-cyan-50 text-cyan-700 font-mono font-bold px-2.5 py-1 rounded-full">
                  6 Heavy-Duty Solutions
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {commercialServicesList.map((service, idx) => {
                  const IconComponent = service.icon;
                  return (
                    <div 
                      key={idx}
                      className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-cyan-500/20 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1.5"
                    >
                      {/* Decorative image background */}
                      <div className="relative h-44 overflow-hidden">
                        <img 
                          src={service.img} 
                          alt={service.title} 
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = service.fallback;
                          }}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                          <div className="w-7 h-7 rounded-lg bg-brand-blue/90 text-white flex items-center justify-center backdrop-blur-sm">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] text-white/90 font-bold bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded uppercase tracking-wider">
                            Commercial
                          </span>
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <h4 className="text-sm font-bold text-brand-blue group-hover:text-cyan-700 transition-colors line-clamp-2">
                            {service.title}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                        <button 
                          onClick={onScrollToForm}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-700 hover:text-cyan-500 hover:underline transition-all pt-2 group-hover:gap-2 cursor-pointer"
                        >
                          <span>Get Free Consultation</span>
                          <ArrowUpRight className="w-3 h-3 text-cyan-600" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
