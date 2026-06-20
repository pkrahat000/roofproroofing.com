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

// Import local images uploaded by user
import shingleImg from '../../images/ChatGPT Image Jun 19, 2026, 06_50_06 PM.png';
import metalImg from '../../images/ChatGPT Image Jun 19, 2026, 06_51_11 PM.png';
import tileImg from '../../images/ChatGPT Image Jun 19, 2026, 06_51_58 PM.png';
import flatImg from '../../images/ChatGPT Image Jun 19, 2026, 06_52_50 PM.png';
import repairImg from '../../images/ChatGPT Image Jun 19, 2026, 06_53_42 PM.png';
import replacementImg from '../../images/ChatGPT Image Jun 19, 2026, 06_55_30 PM.png';

// Import local commercial images uploaded by user from Ecommerce images
import commShingleImg from '../../images/Ecommerce images/ChatGPT Image Jun 19, 2026, 08_03_23 PM.png';
import commMetalImg from '../../images/Ecommerce images/ChatGPT Image Jun 19, 2026, 08_07_32 PM.png';
import commTileImg from '../../images/Ecommerce images/ChatGPT Image Jun 19, 2026, 08_09_06 PM.png';
import commFlatImg from '../../images/Ecommerce images/ChatGPT Image Jun 19, 2026, 08_09_59 PM.png';
import commRepairImg from '../../images/Ecommerce images/ChatGPT Image Jun 19, 2026, 08_12_59 PM.png';
import commReplacementImg from '../../images/Ecommerce images/ChatGPT Image Jun 19, 2026, 08_20_20 PM.png';

// Exact service names from prompt
const residentialServicesList = [
  { title: "Residential Shingle Roofing Services", img: shingleImg, icon: Layers, desc: "Architectural shingles tailored for standard durability and aesthetics." },
  { title: "Residential Metal Roofing Services", img: metalImg, icon: ShieldCheck, desc: "Lifetime metal roofing systems for storm defense and efficiency." },
  { title: "Residential Tile Roofing Services", img: tileImg, icon: Flame, desc: "Elegant, premium concrete and clay tiles crafted for durability." },
  { title: "Residential Flat / Low Slope Roofing Services", img: flatImg, icon: Sparkles, desc: "Advanced watertight solutions for low-slope attachments & decks." },
  { title: "Residential Roof Repair Services", img: repairImg, icon: Wrench, desc: "Expert leak detection, localized flashing repairs, and shingle fixes." },
  { title: "Residential Re-Roofing/Roof Replacement Services", img: replacementImg, icon: Activity, desc: "Flawless complete roof tears-offs and clean code-compliant replacements." }
];

const commercialServicesList = [
  { title: "Commercial Shingle Roofing Services", img: commShingleImg, icon: Layers, desc: "Durable, high-grade architectural shingling for institutional structures." },
  { title: "Commercial Metal Roofing Services", img: commMetalImg, icon: ShieldCheck, desc: "Standing seam and corrugated metal coverings built for heavy commercial use." },
  { title: "Commercial Tile Roofing Services", img: commTileImg, icon: Flame, desc: "Luxury commercial tile systems for master developments & commercial hubs." },
  { title: "Commercial Flat / Low Slope Roofing Services", img: commFlatImg, icon: Sparkles, desc: "Premium single-ply TPO, EPDM, and modified bitumen watertight systems." },
  { title: "Commercial Roof Repair Services", img: commRepairImg, icon: Wrench, desc: "Commercial leak inspection, membrane re-sealing, ponding fixes." },
  { title: "Commercial Re-Roofing/Roof Replacement Services", img: commReplacementImg, icon: Activity, desc: "Complete scale tear-offs or overlay options with comprehensive warranties." }
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
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
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
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
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
