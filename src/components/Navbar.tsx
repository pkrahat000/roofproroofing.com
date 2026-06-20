/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Phone, MapPin, ExternalLink, 
  Facebook, Instagram, Youtube, HelpCircle 
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { OfficeLocation } from '../types';

interface NavbarProps {
  locations: OfficeLocation[];
  onNavigate: (sectionId: string) => void;
  openCalculator: () => void;
}

export default function Navbar({ locations, onNavigate, openCalculator }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'locations' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    onNavigate(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-brand-dark/95 text-white/90 text-xs py-2 px-4 md:px-8 border-b border-white/5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <Youtube className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleLinkClick('faq')} 
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-medium"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 px-4 md:px-8 py-4 ${
        isScrolled 
          ? 'bg-brand-blue shadow-lg border-b border-cyan-950/20 py-3' 
          : 'bg-brand-blue/90 md:bg-brand-blue/40 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick('home')} 
            className="flex items-center gap-2 text-white group focus:outline-none cursor-pointer"
          >
            <div className="relative w-8 h-8 flex items-center justify-center bg-cyan-600 rounded-lg group-hover:bg-cyan-500 transition-colors">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 text-white"
              >
                <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v11a1 1 0 01-1 1h-3" />
                <path d="M9 21V12h6v9" />
              </svg>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-display font-black text-xl tracking-tight uppercase group-hover:text-cyan-300 transition-colors">
                roofpro
              </span>
              <span className="text-[9px] text-cyan-400 uppercase tracking-widest font-bold">
                roofing
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <button 
              onClick={() => handleLinkClick('home')}
              className="text-sm font-medium text-white/90 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => handleLinkClick('whoweare')}
              className="text-sm font-medium text-white/90 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Who We Are
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`text-sm font-medium text-white/90 transition-colors flex items-center gap-1 cursor-pointer hover:text-cyan-300 ${
                  activeDropdown === 'services' ? 'text-cyan-300' : ''
                }`}
              >
                Our Services
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-brand-blue border border-white/10 shadow-xl overflow-hidden"
                  >
                    <div className="p-1">
                      <button 
                        onClick={() => handleLinkClick('services-residential')}
                        className="w-full text-left px-4 py-2.5 rounded-lg text-xs font-semibold text-white hover:bg-cyan-950 hover:text-cyan-300 transition-all cursor-pointer"
                      >
                        Residential Services
                      </button>
                      <button 
                        onClick={() => handleLinkClick('services-commercial')}
                        className="w-full text-left px-4 py-2.5 rounded-lg text-xs font-semibold text-white hover:bg-cyan-950 hover:text-cyan-300 transition-all cursor-pointer"
                      >
                        Commercial Services
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Locations Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('locations')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`text-sm font-medium text-white/90 transition-colors flex items-center gap-1 cursor-pointer hover:text-cyan-300 ${
                  activeDropdown === 'locations' ? 'text-cyan-300' : ''
                }`}
              >
                Our Locations
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'locations' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-80 rounded-xl bg-brand-blue border border-white/10 shadow-xl overflow-hidden"
                  >
                    <div className="p-2 space-y-1">
                      {locations.map((loc) => (
                        <button 
                          key={loc.name}
                          onClick={() => handleLinkClick(`locations-${loc.name.toLowerCase().replace(/ /g, '')}`)}
                          className="w-full text-left p-2.5 rounded-lg hover:bg-cyan-950/80 transition-all group/loc cursor-pointer"
                        >
                          <div className="flex justify-between items-start">
                            <span className="text-xs font-bold text-white group-hover/loc:text-cyan-300">
                              {loc.name}
                            </span>
                            <span className="text-[10px] text-cyan-400 font-mono font-medium">
                              {loc.phone}
                            </span>
                          </div>
                          <span className="text-[10px] text-white/60 block truncate mt-0.5">
                            {loc.address}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={openCalculator}
              className="text-sm font-medium text-white/90 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Roofing Calculator
            </button>
            <button 
              onClick={() => handleLinkClick('gallery')}
              className="text-sm font-medium text-white/90 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Roofing Media
            </button>
            <a 
              href="https://express-fin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/90 hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              Financing
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
            <button 
              onClick={() => handleLinkClick('faq')}
              className="text-sm font-medium text-white/90 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleLinkClick('contact')}
              className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold py-2 px-4 rounded-lg shadow-sm transition-all hover:scale-[1.03] cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden text-white hover:text-cyan-400 transition-colors p-1"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sliding Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-blue border-b border-cyan-900/30 overflow-hidden shadow-2xl"
          >
            <div className="px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
              {/* Top Links */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handleLinkClick('home')} 
                  className="p-3 text-center bg-cyan-950/40 text-sm font-semibold text-white rounded-lg hover:bg-cyan-900/50"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleLinkClick('whoweare')} 
                  className="p-3 text-center bg-cyan-950/40 text-sm font-semibold text-white rounded-lg hover:bg-cyan-900/50"
                >
                  Who We Are
                </button>
              </div>

              {/* Accordion Style Services */}
              <div className="space-y-1">
                <span className="text-[10px] tracking-wider uppercase text-cyan-400 font-bold block mb-1">
                  Our Services
                </span>
                <button 
                  onClick={() => handleLinkClick('services-residential')}
                  className="w-full text-left py-2 px-3 text-sm text-white/90 hover:text-cyan-300 hover:bg-cyan-950/30 rounded-lg flex items-center justify-between"
                >
                  <span>Residential Services</span>
                </button>
                <button 
                  onClick={() => handleLinkClick('services-commercial')}
                  className="w-full text-left py-2 px-3 text-sm text-white/90 hover:text-cyan-300 hover:bg-cyan-950/30 rounded-lg flex items-center justify-between"
                >
                  <span>Commercial Services</span>
                </button>
              </div>

              {/* Locations */}
              <div className="space-y-1">
                <span className="text-[10px] tracking-wider uppercase text-cyan-400 font-bold block mb-1">
                  Our Locations
                </span>
                {locations.map((loc) => (
                  <button 
                    key={loc.name}
                    onClick={() => handleLinkClick(`locations-${loc.name.toLowerCase().replace(/ /g, '')}`)}
                    className="w-full text-left py-2 px-3 rounded-lg hover:bg-syn-950/30 text-white/80 hover:text-white"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold">{loc.name} Office</span>
                      <span className="text-[10px] font-mono font-medium text-cyan-400">{loc.phone}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Utility Tools */}
              <div className="space-y-1">
                <span className="text-[10px] tracking-wider uppercase text-cyan-400 font-bold block mb-1">
                  Roof Tools & Media
                </span>
                <button 
                  onClick={() => { openCalculator(); setIsMobileMenuOpen(false); }}
                  className="w-full text-left py-2.5 px-3 text-sm text-white/90 hover:text-cyan-300 hover:bg-cyan-950/30 rounded-lg block"
                >
                  Roofing Calculator
                </button>
                <button 
                  onClick={() => handleLinkClick('gallery')}
                  className="w-full text-left py-2.5 px-3 text-sm text-white/90 hover:text-cyan-300 hover:bg-cyan-950/30 rounded-lg block"
                >
                  Roofing Media
                </button>
                <a 
                  href="https://express-fin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-left py-2.5 px-3 text-sm text-white/90 hover:text-cyan-300 hover:bg-cyan-950/30 rounded-lg flex items-center justify-between"
                >
                  <span>Financing</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
                <button 
                  onClick={() => handleLinkClick('faq')}
                  className="w-full text-left py-2.5 px-3 text-sm text-white/90 hover:text-cyan-300 hover:bg-cyan-950/30 rounded-lg block"
                >
                  FAQ
                </button>
              </div>

              <button 
                onClick={() => handleLinkClick('contact')}
                className="w-full bg-cyan-600 text-white py-3 rounded-xl font-bold text-center text-sm shadow-md block hover:bg-cyan-500"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
