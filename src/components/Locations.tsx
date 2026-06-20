/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Map, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OfficeLocation } from '../types';

interface LocationsProps {
  locations: OfficeLocation[];
  onScrollToForm: () => void;
}

export default function Locations({ locations, onScrollToForm }: LocationsProps) {
  // Active office tab
  const [activeTab, setActiveTab] = useState(0);

  const activeOffice = locations[activeTab];

  // Custom detailed mock coordinates pathways or descriptions to render beautiful region maps
  const MAP_REGIONS: Record<string, string> = {
    "destin": "M 20 40 Q 55 60 70 85 T 160 110 L 160 180 L 20 180 Z", // Emerald Coast Gulf pathway
    "santarosabeach": "M 50 40 Q 80 55 110 80 T 170 110 L 170 180 L 50 180 Z", // SRB shoreline
    "northport": "M 80 40 Q 110 90 130 140 T 150 170 L 150 180 L 20 180 Z", // Charlotte Harbor
    "fortlauderdale": "M 110 30 Q 130 80 140 130 T 165 175 L 165 180 L 10 180 Z" // Broward coastline
  };

  const mapSlug = activeOffice.name.toLowerCase().replace(/ /g, '');

  return (
    <section id="locations" className="py-24 bg-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Repeating CTA Banner */}
        <div className="mb-16 bg-gradient-to-r from-brand-blue to-cyan-950 rounded-3xl p-6 md:p-8 shadow-xl text-white flex flex-col xl:flex-row items-center justify-between gap-6 border-b-4 border-cyan-500">
          <div className="space-y-2 text-center xl:text-left">
            <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-tight">
              OUR LOCATIONS
            </h3>
            <p className="text-sm text-cyan-200 font-medium font-sans">
              Find physical RoofPro physical design showrooms near you in Florida.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
            <button 
              onClick={onScrollToForm}
              className="w-full sm:w-auto shrink-0 bg-cyan-600 hover:bg-cyan-500 text-white font-display font-bold text-xs py-3.5 px-6 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all text-center cursor-pointer uppercase tracking-wider"
            >
              Request A Free Estimate Now!
            </button>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-mono">
              {locations.map((loc) => (
                <div key={loc.name} className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 text-center">
                  <span className="text-cyan-300 font-bold block text-[10px] uppercase leading-none mb-1">
                    {loc.name}
                  </span>
                  <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="hover:text-cyan-300 font-semibold transition-colors">
                    {loc.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-black tracking-[0.4em] text-cyan-600 uppercase block">
            LOCAL FLORIDA EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-blue uppercase tracking-tight">
            SERVING ALL CORNERS OF FLORIDA
          </h2>
          <div className="h-1.5 w-16 bg-cyan-600 mx-auto rounded-full" />
        </div>

        {/* Layout: Interactive tab controls at the top */}
        <div className="flex flex-wrap justify-center border-b border-slate-200/80 mb-12 bg-white p-2 rounded-2xl shadow-sm">
          {locations.map((loc, index) => (
            <button
              key={loc.name}
              onClick={() => setActiveTab(index)}
              id={`locations-${loc.name.toLowerCase().replace(/ /g, '')}`}
              className={`py-3.5 px-6 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === index 
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'text-slate-550 hover:text-slate-800'
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        {/* Active Location Display area (3 sub columns as in screenshot) */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeOffice.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Sub-Column 1: Location Showroom Card */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-white rounded-3xl p-6 md:p-8 shadow-md border border-slate-200/60">
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-600 block uppercase">
                    Physical Office
                  </span>
                  <h3 className="text-2xl font-display font-black text-brand-blue uppercase">
                    {activeOffice.name} Office
                  </h3>
                </div>

                <div className="space-y-4 font-normal">
                  <a 
                    href={`tel:${activeOffice.phone.replace(/\D/g, '')}`}
                    className="flex gap-3.5 p-3.5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-cyan-50/50 hover:border-cyan-500/20 group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono font-bold block uppercase tracking-wider">
                        Call regional manager
                      </span>
                      <span className="text-sm font-bold text-slate-700 font-mono">
                        {activeOffice.phone}
                      </span>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${activeOffice.email}`}
                    className="flex gap-3.5 p-3.5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-cyan-50/50 hover:border-cyan-500/20 group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono font-bold block uppercase tracking-wider">
                        Secure email support
                      </span>
                      <span className="text-sm font-semibold text-slate-700 font-mono">
                        {activeOffice.email}
                      </span>
                    </div>
                  </a>

                  <div className="flex gap-3.5 p-3.5 bg-slate-50 border border-slate-100 rounded-2xl">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-mono font-bold block uppercase tracking-wider">
                        Physical address
                      </span>
                      <span className="text-xs font-medium text-slate-700 leading-snug">
                        {activeOffice.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Licensed & Bonded</span>
                </span>
                <span className="font-mono">RC-FL#1209</span>
              </div>
            </div>

            {/* Sub-Column 2: Service Areas (Badged block checklist) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 md:p-8 shadow-md border border-slate-200/60 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-600 block uppercase">
                    Operational Limit
                  </span>
                  <h3 className="text-sm font-display font-black text-brand-blue uppercase tracking-wide">
                    Service Area Municipalities
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 overflow-y-auto max-h-[300px] pr-1">
                  {activeOffice.serviceAreas.map((area) => (
                    <span 
                      key={area}
                      className="bg-slate-50 hover:bg-cyan-50 hover:text-cyan-700 border border-slate-100 text-slate-650 text-xs py-1.5 px-3 rounded-xl font-medium transition-all inline-flex items-center gap-1 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                      <span>{area}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-[10px] text-slate-400 font-mono">
                * Call for assistance if your area is not listed above. We extend service area limits for large projects.
              </div>
            </div>

            {/* Sub-Column 3: Service Area Map (Vector rendering) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 md:p-8 shadow-md border border-slate-200/60 flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-600 block uppercase">
                    Local Boundary
                  </span>
                  <h3 className="text-sm font-display font-black text-brand-blue uppercase tracking-wide">
                    Service Area Map
                  </h3>
                </div>

                {/* Highly premium Clean Vector Florida Region Highlighter Map */}
                <div className="relative w-full h-56 bg-gradient-to-br from-indigo-50/50 to-cyan-50 rounded-2xl border border-slate-100 flex items-center justify-center p-2">
                  <div className="absolute inset-4 opacity-10 pointer-events-none">
                    <Map className="w-full h-full text-slate-400" />
                  </div>
                  
                  {/* Styled visual Florida state representation */}
                  <svg viewBox="0 0 200 200" className="w-full h-full max-h-52 drop-shadow-md">
                    {/* Simplified State boundary */}
                    <path 
                      d="M 10 20 L 140 20 L 140 80 Q 150 140 180 180 L 170 180 Q 130 180 110 130 Z" 
                      fill="#e2e8f0" 
                      stroke="#cbd5e1" 
                      strokeWidth="1.5" 
                    />
                    
                    {/* Highlighted region based on Active Office */}
                    <path 
                      d={MAP_REGIONS[mapSlug]} 
                      fill="url(#regionGrad)" 
                      stroke="#06b6d4" 
                      strokeWidth="2.5" 
                      className="animate-pulse"
                    />

                    {/* Showroom point */}
                    <circle cx="90" cy="85" r="5" fill="#e11d48" className="animate-bounce" />
                    <circle cx="90" cy="85" r="12" fill="none" stroke="#e11d48" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="regionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0891b2" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0e7490" stopOpacity="0.85" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute top-2.5 right-2.5 bg-brand-blue text-white font-mono text-[9px] font-bold px-2 py-1 rounded shadow-sm uppercase">
                    Active Area
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                <span>Showroom Coordinator: Byron</span>
                <span>Zoom Level: Region</span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
