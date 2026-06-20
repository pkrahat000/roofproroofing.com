/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Zap, FileClock, ShieldCheck, HeartHandshake, CheckSquare,
  DollarSign, Landmark, HelpCircle, ShieldAlert, Award, ExternalLink 
} from 'lucide-react';

const BENEFITS = [
  { text: "Incredible Response Times", icon: Zap, bg: "bg-cyan-500/10 text-cyan-400" },
  { text: "Free Estimates", icon: FileClock, bg: "bg-emerald-500/10 text-emerald-400" },
  { text: "Quality Workmanship", icon: ShieldCheck, bg: "bg-blue-500/10 text-blue-400" },
  { text: "Top-Quality Roofing Materials", icon: CheckSquare, bg: "bg-teal-500/10 text-teal-400" },
  { text: "Affordable Prices", icon: DollarSign, bg: "bg-violet-500/10 text-violet-400" },
  { text: "Lifetime Warranties", icon: HeartHandshake, bg: "bg-rose-500/10 text-rose-400" },
  { text: "Financing Available", icon: Landmark, bg: "bg-amber-500/10 text-amber-400" },
  { text: "Claims Assistance", icon: HelpCircle, bg: "bg-indigo-500/10 text-indigo-400" },
];

export default function WhyChooseUs() {
  return (
    <section id="whychooseus" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background decor lights */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Why Choose Us list grid */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-black tracking-[0.4em] text-cyan-400 uppercase block">
                PEACE OF MIND GUARANTEE
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
                WHY CHOOSE US
              </h2>
              <div className="h-1.5 w-16 bg-cyan-400 rounded-full" />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              Choosing a roofing contractor is a decision that affects your property's safety for decades. At RoofPro, we fuse speed, expert licensing, and master-certified roofing systems to give you ultimate security.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {BENEFITS.map((b) => {
                const Icon = b.icon;
                return (
                  <div 
                    key={b.text}
                    className="flex items-center gap-3.5 p-3.5 bg-white/5 border border-white/[0.04] rounded-2xl hover:bg-white/10 hover:border-cyan-500/20 transition-all duration-200 group"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${b.bg} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">
                      {b.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Block: Certifications & Brand Authority Card */}
          <div className="lg:col-span-6">
            <div className="bg-white text-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl space-y-8 border border-slate-100">
              <div className="text-center space-y-2 pb-4 border-b border-slate-100">
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-600 block uppercase">
                  LICENSING & TRUST CARDS
                </span>
                <h3 className="text-xl md:text-2xl font-display font-extrabold text-brand-blue tracking-tight leading-none">
                  Florida's Trusted & Experienced Roofing Professionals
                </h3>
              </div>

              {/* Certification 1: Fortified Roof */}
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                {/* SVG Badge Fortified Roof */}
                <div className="w-16 h-16 shrink-0 bg-cyan-50 rounded-2xl flex flex-col items-center justify-center text-cyan-800 border-2 border-cyan-100 relative shadow-sm">
                  <ShieldAlert className="w-8 h-8 text-cyan-700" />
                  <span className="text-[8px] font-extrabold font-mono text-cyan-800 leading-none mt-1">
                    FORTIFIED
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                    Fortified Roof installers
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    As Fortified Roof installers, RoofPro Roofing meets rigorous standards to enhance building resilience. This certification ensures superior protection against severe weather, reducing damage and insurance premiums. Our expertise in Fortified roofing offers customers added security and peace of mind.
                  </p>
                </div>
              </div>

              {/* Certification 2: GAF Certified Contractors (Link to gaf.com) */}
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                {/* GAF Logo representation */}
                <a 
                  href="https://www.gaf.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 shrink-0 bg-red-50 hover:bg-red-100 rounded-2xl flex flex-col items-center justify-center text-rose-600 border-2 border-red-100 relative shadow-sm transition-all group/gaf"
                >
                  <Award className="w-8 h-8 text-rose-600 group-hover/gaf:scale-105 transition-transform" />
                  <span className="text-[9px] font-mono font-black text-rose-700 leading-none mt-0.5">
                    GAF
                  </span>
                  <div className="absolute top-1 right-1">
                    <ExternalLink className="w-1.5 h-1.5 text-rose-400" />
                  </div>
                </a>
                <div className="space-y-1.5">
                  <h4 className="text-sm font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                    <a 
                      href="https://www.gaf.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-cyan-600 hover:underline inline-flex items-center gap-1 transition-colors group"
                    >
                      <span>GAF Certified Contractors</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-450 group-hover:text-cyan-600 transition-colors" />
                    </a>
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    Being GAF Certified means RoofPro Roofing is recognized for exceptional roofing expertise. This certification allows us to provide enhanced warranties, including lifetime coverage on materials and workmanship. Trust in our GAF-Certified services for top-tier roofing solutions and lasting durability.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
