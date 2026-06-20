/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowUp, Mail, Phone, MapPin, ExternalLink, 
  Facebook, Instagram, Youtube, HelpCircle, ShieldCheck, Award 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  openCalculator: () => void;
}

export default function Footer({ onNavigate, openCalculator }: FooterProps) {
  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (sectionId: string) => {
    onNavigate(sectionId);
  };

  return (
    <footer id="contact" className="bg-brand-dark text-slate-300 pt-20 pb-12 relative overflow-hidden border-t border-cyan-950/40">
      
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-16">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          {/* Brand and pitch column */}
          <div className="lg:col-span-4 space-y-6">
            <button 
              onClick={handleBackToTop} 
              className="flex items-center gap-2 text-white group focus:outline-none cursor-pointer text-left"
            >
              <div className="relative w-9 h-9 flex items-center justify-center bg-cyan-600 rounded-xl">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-white">
                  <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v11a1 1 0 01-1 1h-3" />
                  <path d="M9 21V12h6v9" />
                </svg>
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-display font-black text-2xl tracking-tight uppercase text-white">
                  roofpro
                </span>
                <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">
                  roofing
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-xs leading-relaxed font-normal">
              Looking for the best roofing contractor in Florida? Look no further than RoofPro, your experienced, Fortified, and GAF-Certified local roofers for all of your roofing needs.
            </p>

            <div className="space-y-3 pt-2">
              <a 
                href="mailto:info@roofproroofing.com" 
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-350 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>info@roofproroofing.com</span>
              </a>
              <div className="flex gap-4 pt-1">
                <a href="https://facebook.com" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:bg-cyan-600 hover:text-white hover:border-cyan-500 transition-all text-slate-400">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:bg-cyan-600 hover:text-white hover:border-cyan-500 transition-all text-slate-400">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center hover:bg-cyan-600 hover:text-white hover:border-cyan-500 transition-all text-slate-400">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-display font-black tracking-wider uppercase text-white flex items-center gap-1.5 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-cyan-400 transition-colors py-0.5 block text-left w-full cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('whoweare')} className="hover:text-cyan-400 transition-colors py-0.5 block text-left w-full cursor-pointer">
                  Who We Are
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-cyan-400 transition-colors py-0.5 block text-left w-full cursor-pointer">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('gallery')} className="hover:text-cyan-400 transition-colors py-0.5 block text-left w-full cursor-pointer">
                  Roofing Media
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('faq')} className="hover:text-cyan-400 transition-colors py-0.5 block text-left w-full cursor-pointer">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('faq')} className="hover:text-cyan-400 transition-colors py-0.5 block text-left w-full cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={handleBackToTop} className="hover:text-cyan-400 transition-colors py-0.5 block text-left w-full cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-display font-black tracking-wider uppercase text-white flex items-center gap-1.5 border-b border-slate-800 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => handleLinkClick('services-residential')} className="hover:text-cyan-400 transition-colors py-0.5 block text-left w-full cursor-pointer">
                  Residential Roofing
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services-commercial')} className="hover:text-cyan-400 transition-colors py-0.5 block text-left w-full cursor-pointer">
                  Commercial Roofing
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('expertise')} className="hover:text-cyan-400 transition-colors py-0.5 block text-left w-full cursor-pointer">
                  Storm Damage
                </button>
              </li>
              <li>
                <button onClick={openCalculator} className="hover:text-cyan-400 transition-colors py-0.5 block text-left w-full cursor-pointer">
                  Roofing Calculator
                </button>
              </li>
              <li>
                <a 
                  href="https://express-fin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-cyan-400 transition-colors py-0.5 flex items-center gap-1"
                >
                  <span>Financing</span>
                  <ExternalLink className="w-3 h-3 text-cyan-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Our Locations Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-display font-black tracking-wider uppercase text-white flex items-center gap-1.5 border-b border-slate-800 pb-2">
              Our Locations
            </h4>
            <div className="space-y-4 text-xs">
              
              {/* Destin */}
              <div className="space-y-1">
                <button 
                  onClick={() => handleLinkClick('locations-destin')}
                  className="font-bold text-white hover:text-cyan-400 transition-colors block text-left uppercase text-[11px] font-display"
                >
                  Destin – 850-332-3330
                </button>
                <p className="text-[10px] text-slate-500 font-mono flex items-center gap-1 leading-none">
                  <MapPin className="w-3 h-3 text-cyan-600" />
                  <span>175 Main St Unit 5672, Destin, FL 32541</span>
                </p>
              </div>

              {/* North Port */}
              <div className="space-y-1">
                <button 
                  onClick={() => handleLinkClick('locations-northport')}
                  className="font-bold text-white hover:text-cyan-400 transition-colors block text-left uppercase text-[11px] font-display"
                >
                  North Port – (941) 456-4496
                </button>
                <p className="text-[10px] text-slate-500 font-mono flex items-center gap-1 leading-none">
                  <MapPin className="w-3 h-3 text-cyan-600" />
                  <span>1647 Squaw Ln, North Port, FL 34286</span>
                </p>
              </div>

              {/* Santa Rosa Beach */}
              <div className="space-y-1">
                <button 
                  onClick={() => handleLinkClick('locations-santarosabeach')}
                  className="font-bold text-white hover:text-cyan-400 transition-colors block text-left uppercase text-[11px] font-display"
                >
                  Santa Rosa Beach – 850-332-3330
                </button>
                <p className="text-[10px] text-slate-500 font-mono flex items-center gap-1 leading-none">
                  <MapPin className="w-3 h-3 text-cyan-600" />
                  <span>70 Riverbirch Loop, Santa Rosa Beach, FL 32459</span>
                </p>
              </div>

              {/* Fort Lauderdale */}
              <div className="space-y-1">
                <button 
                  onClick={() => handleLinkClick('locations-fortlauderdale')}
                  className="font-bold text-white hover:text-cyan-400 transition-colors block text-left uppercase text-[11px] font-display"
                >
                  Fort Lauderdale – (754) 400-0074
                </button>
                <p className="text-[10px] text-slate-500 font-mono flex items-center gap-1 leading-none">
                  <MapPin className="w-3 h-3 text-cyan-600" />
                  <span>2380 SW 15th St, Fort Lauderdale, FL 33312</span>
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-slate-500">
          <div className="text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} RoofPro Roofing. All rights reserved.</p>
            <p className="text-[10px] font-mono">Licensed Builder & Roofing Contractor #RC-FL192083</p>
          </div>

          <div className="flex gap-4">
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <button 
              onClick={handleBackToTop}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-600 hover:text-white transition-all text-slate-400 border border-white/5 font-bold flex items-center gap-1 shadow-sm cursor-pointer"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3 h-3 animate-bounce" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
