/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  ChevronDown, ChevronUp, AlertCircle, Sparkles, 
  Settings, Phone, ArrowRight, HelpCircle 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OfficeLocation } from '../types';

interface ExpertiseProps {
  locations: OfficeLocation[];
  onScrollToForm: () => void;
}

export default function Expertise({ locations, onScrollToForm }: ExpertiseProps) {
  // Accordion active state: column name + index
  const [activeRepair, setActiveRepair] = useState<number | null>(0);
  const [activeReplacement, setActiveReplacement] = useState<number | null>(0);
  const [activeNew, setActiveNew] = useState<number | null>(0);

  const repairQA = [
    {
      q: "Did A Storm Damage Your Roof?",
      a: "Heavy storms in Florida can cause leaks and shingle damage. Call us to restore your roof's integrity."
    },
    {
      q: "Is Your Roof Leaking?",
      a: "Noticed a leak during Florida's rainy season? We quickly address and fix leaks to prevent further damage."
    },
    {
      q: "Are Shingles Damaged Or Missing?",
      a: "Missing or damaged shingles from strong winds? Our team will replace them promptly to maintain your roof's protection."
    }
  ];

  const replacementQA = [
    {
      q: "Is your roof over 20 years old?",
      a: "Aging Roofs: If your roof is over 20 years old and showing signs of wear, it's time for a complete replacement to ensure safety and durability."
    },
    {
      q: "Did a hurricane damage your roof?",
      a: "Extensive damage from hurricanes or severe storms may require a full roof replacement to restore your home's protection."
    },
    {
      q: "Energy efficient roofing can save you $",
      a: "Energy Efficiency Upgrade: Replace your old roof with energy-efficient materials to reduce cooling costs in Florida's hot climate."
    }
  ];

  const newConstructionQA = [
    {
      q: "Building a new home in Florida?",
      a: "Building a new home in Florida? Our team provides expert roofing solutions tailored to your design and specifications."
    },
    {
      q: "Need a roof for a commercial property?",
      a: "Commercial Buildings: We offer durable and reliable roofing installations for businesses."
    },
    {
      q: "Expanding your home or business?",
      a: "Additions and Extensions: Expanding your home or business? We seamlessly integrate new roofs with existing structures for a cohesive look."
    }
  ];

  return (
    <section id="expertise" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Banner callout at the top as requested */}
        <div className="mb-16 bg-gradient-to-r from-brand-blue to-cyan-950 rounded-3xl p-6 md:p-8 shadow-xl text-white flex flex-col xl:flex-row items-center justify-between gap-6 border-b-4 border-cyan-500">
          <div className="space-y-2 text-center xl:text-left">
            <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-tight">
              YOUR ROOFING NEEDS / OUR EXPERTISE
            </h3>
            <p className="text-sm text-cyan-200 font-medium">
              We cover storm damage, insurance claims, and pristine new roof installations.
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
            KNOWLEDGE & PROFESSIONALISM
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-brand-blue uppercase tracking-tight">
            CRITICAL DISASTER PROTECTION & RESILIENCE
          </h2>
          <div className="h-1.5 w-16 bg-cyan-600 mx-auto rounded-full" />
        </div>

        {/* Three Columns of Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Roof Repair */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/60 shadow-md space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 bg-cyan-600 text-white rounded-xl flex items-center justify-center font-bold">
                🛠️
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-600 uppercase block tracking-wider leading-none mb-1">
                  Wind & Leaks
                </span>
                <h3 className="text-lg font-display font-black text-brand-blue uppercase">
                  Roof Repair
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {repairQA.map((qa, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveRepair(activeRepair === i ? null : i)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 focus:outline-none cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <h4 className="text-xs font-bold text-brand-blue leading-snug">
                      {qa.q}
                    </h4>
                    {activeRepair === i ? (
                      <ChevronUp className="w-4 h-4 text-cyan-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeRepair === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 border-t border-slate-100 text-xs text-slate-600 leading-relaxed font-sans font-normal whitespace-pre-line">
                          {qa.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Roof Replacement */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/60 shadow-md space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 bg-cyan-650 text-white rounded-xl flex items-center justify-center font-bold">
                🏠
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-600 uppercase block tracking-wider leading-none mb-1">
                  Lifetime Value
                </span>
                <h3 className="text-lg font-display font-black text-brand-blue uppercase">
                  Roof Replacement
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {replacementQA.map((qa, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveReplacement(activeReplacement === i ? null : i)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 focus:outline-none cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <h4 className="text-xs font-bold text-brand-blue leading-snug">
                      {qa.q}
                    </h4>
                    {activeReplacement === i ? (
                      <ChevronUp className="w-4 h-4 text-cyan-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeReplacement === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 border-t border-slate-100 text-xs text-slate-600 leading-relaxed font-sans font-normal whitespace-pre-line">
                          {qa.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: New Construction */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/60 shadow-md space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 bg-brand-blue text-white rounded-xl flex items-center justify-center font-bold">
                🏢
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-600 uppercase block tracking-wider leading-none mb-1">
                  Structural Codes
                </span>
                <h3 className="text-lg font-display font-black text-brand-blue uppercase">
                  New Construction
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {newConstructionQA.map((qa, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-2xl border border-slate-150 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveNew(activeNew === i ? null : i)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 focus:outline-none cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <h4 className="text-xs font-bold text-brand-blue leading-snug">
                      {qa.q}
                    </h4>
                    {activeNew === i ? (
                      <ChevronUp className="w-4 h-4 text-cyan-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeNew === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 border-t border-slate-100 text-xs text-slate-600 leading-relaxed font-sans font-normal whitespace-pre-line">
                          {qa.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
