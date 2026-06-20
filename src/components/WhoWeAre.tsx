/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ClipboardCheck, Clock, ShieldAlert, Award, 
  MapPin, Plus, Minus, CheckCircle, ExternalLink 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Exact text matching user prompt rules:
const EXACT_BIO_TEXT = "RoofPro Roofing rigorously adheres to the highest industry standards, following manufacturer guidelines and state codes to ensure flawless installations of shingle, metal, and tile roofs. As a Fortified Roof contractor and GAF-Certified provider, we offer comprehensive warranties, including superior material warranties and lifetime workmanship guarantees on select projects. Enjoy peace of mind with every job completed.";

export default function WhoWeAre() {
  const [showMoreAboutUs, setShowMoreAboutUs] = useState(false);

  return (
    <section id="whoweare" className="py-24 bg-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Top Header Block & "Find Out More" button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-black tracking-[0.4em] text-cyan-600 uppercase block font-mono">
              GET TO KNOW US
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-blue uppercase leading-none">
              WHO WE ARE
            </h2>
            <div className="h-1.5 w-16 bg-cyan-600 rounded-full" />
          </div>

          <button
            onClick={() => setShowMoreAboutUs(!showMoreAboutUs)}
            className="inline-flex items-center gap-2 bg-cyan-700 hover:bg-cyan-600 text-white font-display font-bold text-xs py-3.5 px-6 rounded-xl shadow-md cursor-pointer transition-all hover:scale-105"
          >
            <span>{showMoreAboutUs ? 'Close Read More' : 'Find Out More About Us'}</span>
            {showMoreAboutUs ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Expandable detailed Bio block */}
        <AnimatePresence>
          {showMoreAboutUs && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-12 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                  <h3 className="text-lg font-bold text-brand-blue font-display uppercase tracking-wide flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-600" />
                    Florida's Top Rated Licensed Roofers
                  </h3>
                  <p>
                    For over two decades, <strong>RoofPro Roofing</strong> has been a foundational pillar of Florida's residential and commercial structural landscape. Combining state-of-the-art drone inspections, premium material sourcing, and specialized tropical wind mitigation techniques, we build roofs designed to stand the test of time and weather any storm.
                  </p>
                  <p>
                    From the warm coastlines of Destin and Santa Rosa Beach to the tropical properties of Fort Lauderdale and Southwest Florida, our localized installation crews understand the nuances of Florida building codes and wind resistance protocols.
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2 font-semibold text-brand-blue">
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-4 h-4 text-emerald-500" /> Fully Insured & Licensed
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-4 h-4 text-emerald-500" /> GAF Certified Contractor
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-4 h-4 text-emerald-500" /> Fortified Roof Specialist
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-4 h-4 text-emerald-500" /> 102+ Five-Star Google Reviews
                    </div>
                  </div>
                </div>

                {/* Highly aesthetic illustration or drone image */}
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=800&q=80" 
                    alt="RoofPro Roofing professional local crew installing shingle underlayment in Destin Florida"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold">RoofPro Craftsmanship</p>
                    <p className="text-sm font-bold">Licensed Local Florida Crew</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Three horizontally aligned feature cards with exact identical text content as mandatory requirement */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Best Practices */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-150 flex flex-col items-start gap-6 hover:shadow-xl transition-all hover:scale-[1.01]">
            <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-700">
              <ClipboardCheck className="w-7 h-7" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-display font-black text-brand-blue uppercase tracking-tight">
                Best Practices
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {EXACT_BIO_TEXT}
              </p>
            </div>
          </div>

          {/* Card 2: On-Time Delivery */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-150 flex flex-col items-start gap-6 hover:shadow-xl transition-all hover:scale-[1.01]">
            <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-700">
              <Clock className="w-7 h-7" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-display font-black text-brand-blue uppercase tracking-tight">
                On-Time Delivery
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {EXACT_BIO_TEXT}
              </p>
            </div>
          </div>

          {/* Card 3: Professionalism & Dependability */}
          <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-150 flex flex-col items-start gap-6 hover:shadow-xl transition-all hover:scale-[1.01]">
            <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-700">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-display font-black text-brand-blue uppercase tracking-tight">
                Professionalism & Dependability
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                {EXACT_BIO_TEXT}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
