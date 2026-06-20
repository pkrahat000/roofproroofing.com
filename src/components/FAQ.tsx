/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Mail, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: "Claims & Storms",
    q: "How do I know if my Florida home has roof storm damage?",
    a: "Look for shingle bruising, blistering, circular cracking, or missing tabs after high winds. Interior ceiling stains, gutter granular build-ups, or damaged metal panels are also signs. RoofPro offers complementary complete drone inspections to evaluate your roof with precision."
  },
  {
    category: "Cost & Finance",
    q: "Do you offer financing for roof replacements?",
    a: "Yes! We partner with premier lenders via express-fin.com to offer flexible financing solutions, zero-down options, and low-interest monthly payment plans tailored to fit your household budget."
  },
  {
    category: "Duration",
    q: "How long does a standard residential roof replacement take?",
    a: "Most residential asphalt shingle roof replacements in Florida are completed in 1 to 2 days. Tile and standing seam metal roofing systems may take 3 to 5 days, depending on pitch, size, and specific city building inspection stages."
  },
  {
    category: "Warranties",
    q: "What commercial and residential warranties do you offer?",
    a: "As GAF-Certified contractors and Fortified Roof specialists, we provide up to 50-year system warranties, including GAF System Plus guarantees and our lifetime workmanship warranties on qualifying premium installations."
  },
  {
    category: "Storm Mitigation",
    q: "What is a 'Fortified Roof' and does it lower my insurance?",
    a: "A Fortified Roof is a structural upgrade standard that uses enhanced water barriers, ring-shank nails, and edge anchors to resist hurricane-force winds. In Florida, installing a certified Fortified Roof may qualify you for significant wind mitigation discounts on your homeowners insurance premiums."
  }
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Heading */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-black tracking-[0.4em] text-cyan-600 uppercase block">
            HAVE QUESTIONS?
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-blue uppercase tracking-tight">
            Got Questions / FAQ
          </h2>
          <div className="h-1.5 w-16 bg-cyan-600 mx-auto rounded-full" />
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isExpanded = activeIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-150 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-cyan-500/25"
              >
                <button
                  type="button"
                  onClick={() => setActiveIdx(isExpanded ? null : idx)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer hover:bg-slate-100/40"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono font-semibold uppercase text-cyan-600 tracking-wider">
                      {faq.category}
                    </span>
                    <h3 className="text-sm font-semibold text-brand-blue leading-snug font-sans">
                      {faq.q}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-cyan-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 md:p-6 pt-0 border-t border-slate-100 text-xs text-slate-650 leading-relaxed font-sans font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Helper Banner */}
        <div className="mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-6 text-center space-y-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-xs font-bold text-brand-blue uppercase">
              Still Need Clear Answers?
            </h4>
            <p className="text-[11px] text-slate-500 font-sans">
              Our Florida showroom directors are available to discuss codes, permits, and quotes.
            </p>
          </div>
          <a
            href="mailto:info@roofproroofing.com"
            className="shrink-0 bg-brand-blue hover:bg-cyan-950 text-white font-mono font-bold text-xs py-3 px-5 rounded-xl transition-all shadow-sm"
          >
            Email Support
          </a>
        </div>

      </div>
    </section>
  );
}
