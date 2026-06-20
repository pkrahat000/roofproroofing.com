/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building2, Home, ArrowRight, ArrowLeft, Check, 
  Sparkles, Hammer, ShieldCheck, Mail, PhoneCall, MapPin 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { OfficeLocation, EstimateFormState } from '../types';

// Real-looking mock addresses for FL corresponding to our offices for autocompletion
const MOCK_FLORIDA_ADDRESSES = [
  '175 Main St Unit 5672, Destin, FL 32541',
  '70 Riverbirch Loop, Santa Rosa Beach, FL 32459',
  '2380 SW 15th St, Fort Lauderdale, FL 33312',
  '1647 Squaw Ln, North Port, FL 34286',
  '100 Ocean Drive, Miami Beach, FL 33139',
  '450 Las Olas Blvd, Fort Lauderdale, FL 33301',
  '1200 Emerald Coast Pkwy, Destin, FL 32541',
  '300 S Tamiami Trail, Venice, FL 34285',
];

interface HeroProps {
  locations: OfficeLocation[];
  onScrollToSection?: (sectionId: string) => void;
  prefilledData?: { material: string; notes: string } | null;
  clearPrefilled?: () => void;
}

export default function Hero({ locations, onScrollToSection, prefilledData, clearPrefilled }: HeroProps) {
  // Free estimate multi-step state
  const [formState, setFormState] = useState<EstimateFormState>({
    step: 1,
    roofType: null,
    serviceType: '',
    roofMaterial: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });

  useEffect(() => {
    if (prefilledData) {
      setFormState(prev => ({
        ...prev,
        roofType: prev.roofType || 'residential',
        serviceType: 'Residential Re-Roofing/Roof Replacement Services',
        roofMaterial: prefilledData.material,
        notes: prefilledData.notes,
        step: 4
      }));
      if (clearPrefilled) {
        clearPrefilled();
      }
    }
  }, [prefilledData]);

  const [addressSearch, setAddressSearch] = useState('');
  const [addressSuggestions, setAddressSuggestions] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Address lookup helper
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddressSearch(value);
    setFormState(prev => ({ ...prev, address: value }));

    if (value.trim().length > 2) {
      const filtered = MOCK_FLORIDA_ADDRESSES.filter(addr => 
        addr.toLowerCase().includes(value.toLowerCase())
      );
      setAddressSuggestions(filtered);
    } else {
      setAddressSuggestions([]);
    }
  };

  const selectAddress = (addr: string) => {
    setAddressSearch(addr);
    setFormState(prev => ({ ...prev, address: addr }));
    setAddressSuggestions([]);
  };

  // State workflow functions
  const handleSelectRoofType = (type: 'residential' | 'commercial') => {
    setFormState(prev => ({ 
      ...prev, 
      roofType: type,
      // Clear previous type selection if user clicks back and shifts
      serviceType: prev.roofType === type ? prev.serviceType : ''
    }));
  };

  const handleSelectService = (service: string) => {
    setFormState(prev => ({ ...prev, serviceType: service }));
  };

  const handleSelectMaterial = (material: string) => {
    setFormState(prev => ({ ...prev, roofMaterial: material }));
  };

  const validateStep = (): boolean => {
    const errors: Record<string, string> = {};
    if (formState.step === 1) {
      if (!formState.roofType) {
        errors.roofType = "Please select either Residential or Commercial Service.";
      }
    } else if (formState.step === 2) {
      if (!formState.serviceType) {
        errors.serviceType = "Please select a service type.";
      }
    } else if (formState.step === 3) {
      if (!formState.roofMaterial) {
        errors.roofMaterial = "Please select a roofing material.";
      }
    } else if (formState.step === 4) {
      if (!formState.firstName.trim()) errors.firstName = "First name is required.";
      if (!formState.lastName.trim()) errors.lastName = "Last name is required.";
      if (!formState.email.trim()) {
        errors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
        errors.email = "Please specify a valid email address.";
      }
      if (!formState.phone.trim()) {
        errors.phone = "Phone is required.";
      } else if (formState.phone.replace(/\D/g, '').length < 10) {
        errors.phone = "Provide a 10-digit phone number.";
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setFormState(prev => ({ ...prev, step: prev.step + 1 }));
      setFormErrors({});
    }
  };

  const handleBack = () => {
    setFormState(prev => ({ ...prev, step: Math.max(1, prev.step - 1) }));
    setFormErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      // Simulate submission
      setIsSubmitted(true);
      console.log("Estimate Requested:", formState);
    }
  };

  const resetForm = () => {
    setFormState({
      step: 1,
      roofType: null,
      serviceType: '',
      roofMaterial: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
    setAddressSearch('');
    setIsSubmitted(false);
  };

  return (
    <section id="home" className="relative min-h-[140vh] lg:min-h-screen pt-28 pb-16 flex items-center bg-brand-dark overflow-hidden">
      {/* Cinematic Drone image of roofing project under bright blue Florida sky with high dynamic range properties */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=1920&q=80" 
          alt="Premium Roof Replacement by RoofPro Roofing in Florida" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/50" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f8fafc] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Brand Heading */}
          <div className="lg:col-span-7 text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-300 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Florida Certified Roofing Experts</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-none uppercase">
                ROOFPRO <span className="text-cyan-400 block sm:inline">ROOFING</span>
              </h1>
              <p className="text-xl md:text-2xl font-sans font-light text-white/95 max-w-xl leading-relaxed">
                Your Experienced Local Roofers for all roofing solutions in Florida.
              </p>
            </div>

            {/* Call To Action Buttons & Live Support numbers */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => onScrollToSection('services')}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white font-display font-bold text-sm tracking-wide py-4 px-8 rounded-xl shadow-lg shadow-cyan-950/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
                >
                  Request A Free Estimate Now!
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </button>
                <div className="flex items-center gap-2 text-white/80">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                  <span className="text-sm font-semibold tracking-wider font-mono">FREE Consultation</span>
                </div>
              </div>

              {/* Exact phone numbers grid */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4">
                  Call our regional support offices:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {locations.map((loc) => (
                    <a 
                      key={loc.name}
                      href={`tel:${loc.phone.replace(/\D/g, '')}`}
                      className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 rounded-xl transition-all group"
                    >
                      <div>
                        <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">
                          {loc.name}
                        </span>
                        <span className="text-sm font-mono font-medium text-white/90">
                          {loc.phone}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                        <PhoneCall className="w-3.5 h-3.5" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-step Estimate Form */}
          <div className="lg:col-span-5">
            <div className="glass-estimate rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden text-slate-800">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100">
                <div 
                  className="h-full bg-cyan-600 transition-all duration-300" 
                  style={{ width: `${(formState.step / 4) * 100}%` }}
                />
              </div>

              <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-600 uppercase block">
                    Instant Estimate
                  </span>
                  <h3 className="text-lg font-display font-bold text-brand-blue">
                    Free Consultation
                  </h3>
                </div>
                <div className="bg-cyan-50 text-cyan-700 text-xs px-2.5 py-1 rounded-full font-mono font-bold">
                  Step {formState.step} of 4
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key={formState.step}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* STEP 1: RESIDENTIAL VS COMMERCIAL */}
                    {formState.step === 1 && (
                      <div className="space-y-4">
                        <label className="text-base font-bold text-brand-blue block">
                          Are your roofing needs for a home or business? *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <button
                            type="button"
                            onClick={() => handleSelectRoofType('residential')}
                            className={`p-5 rounded-2xl border text-left transition-all group ${
                              formState.roofType === 'residential'
                                ? 'border-cyan-600 bg-cyan-50/50 ring-2 ring-cyan-600/30'
                                : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                              formState.roofType === 'residential' ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                            }`}>
                              <Home className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-bold block text-brand-blue">Residential Services</span>
                            <span className="text-xs text-slate-500 block mt-1">Single-family homes, townhouses, asphalt & tile roofs.</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleSelectRoofType('commercial')}
                            className={`p-5 rounded-2xl border text-left transition-all group ${
                              formState.roofType === 'commercial'
                                ? 'border-cyan-600 bg-cyan-50/50 ring-2 ring-cyan-600/30'
                                : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                              formState.roofType === 'commercial' ? 'bg-cyan-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                            }`}>
                              <Building2 className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-bold block text-brand-blue">Commercial Services</span>
                            <span className="text-xs text-slate-500 block mt-1">Retail roofs, corporate facilities, low slope & flat systems.</span>
                          </button>
                        </div>
                        {formErrors.roofType && (
                          <p className="text-xs font-semibold text-rose-600 mt-2">{formErrors.roofType}</p>
                        )}
                        <div className="flex justify-end pt-4">
                          <button
                            type="button"
                            onClick={handleNext}
                            className="bg-cyan-700 hover:bg-cyan-600 text-white text-xs font-bold py-3 px-6 rounded-xl transition-all self-end flex items-center gap-2 shadow-sm"
                          >
                            <span>Next</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: SERVICE TYPE */}
                    {formState.step === 2 && (
                      <div className="space-y-4">
                        <label className="text-base font-bold text-brand-blue block">
                          {formState.roofType === 'residential' 
                            ? "What type of residential roofing service do you need? *"
                            : "What type of commercial roofing service do you need? *"
                          }
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {['Roof Replacement', 'New Construction', 'Roof Repair', 'Roof Maintenance', 'Storm Damage'].map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleSelectService(service)}
                              className={`w-full p-4 rounded-xl border text-left font-medium transition-all flex items-center justify-between ${
                                formState.serviceType === service
                                  ? 'border-cyan-600 bg-cyan-50/40 text-cyan-800 font-semibold'
                                  : 'border-slate-200 bg-white hover:bg-slate-50/70 text-slate-700'
                              }`}
                            >
                              <span>{service}</span>
                              {formState.serviceType === service && (
                                <div className="w-5 h-5 bg-cyan-600 rounded-full flex items-center justify-center text-white">
                                  <Check className="w-3 h-3" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        {formErrors.serviceType && (
                          <p className="text-xs font-semibold text-rose-600 mt-2">{formErrors.serviceType}</p>
                        )}
                        <div className="flex justify-between pt-4 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="border border-slate-250 hover:bg-slate-50 text-slate-600 text-xs font-bold py-3 px-5 rounded-xl transition-all flex items-center gap-1.5"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Back</span>
                          </button>
                          <button
                            type="button"
                            onClick={handleNext}
                            className="bg-cyan-700 hover:bg-cyan-600 text-white text-xs font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-1.5"
                          >
                            <span>Next</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: ROOF TYPE MATERIAL */}
                    {formState.step === 3 && (
                      <div className="space-y-4">
                        <label className="text-base font-bold text-brand-blue block">
                          What type of roof are you looking for help with? *
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {['Shingle Roof', 'Tile Roof', 'Metal Roof', 'Flat/Low Slope Roof', 'Other'].map((material) => (
                            <button
                              key={material}
                              type="button"
                              onClick={() => handleSelectMaterial(material)}
                              className={`w-full p-4 rounded-xl border text-left font-medium transition-all flex items-center justify-between ${
                                formState.roofMaterial === material
                                  ? 'border-cyan-600 bg-cyan-50/40 text-cyan-800 font-semibold'
                                  : 'border-slate-200 bg-white hover:bg-slate-50/70 text-slate-700'
                              }`}
                            >
                              <span>{material}</span>
                              {formState.roofMaterial === material && (
                                <div className="w-5 h-5 bg-cyan-600 rounded-full flex items-center justify-center text-white">
                                  <Check className="w-3 h-3" />
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                        {formErrors.roofMaterial && (
                          <p className="text-xs font-semibold text-rose-600 mt-2">{formErrors.roofMaterial}</p>
                        )}
                        <div className="flex justify-between pt-4 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="border border-slate-250 hover:bg-slate-50 text-slate-600 text-xs font-bold py-3 px-5 rounded-xl transition-all flex items-center gap-1.5"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Back</span>
                          </button>
                          <button
                            type="button"
                            onClick={handleNext}
                            className="bg-cyan-700 hover:bg-cyan-600 text-white text-xs font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-1.5"
                          >
                            <span>Next</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: CONTACT INFORMATION */}
                    {formState.step === 4 && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
                          Just a few final details:
                        </h4>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-bold text-slate-600 block mb-1">First Name *</label>
                            <input
                              type="text"
                              required
                              value={formState.firstName}
                              onChange={(e) => setFormState(prev => ({ ...prev, firstName: e.target.value }))}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 transition-colors"
                              placeholder="John"
                            />
                            {formErrors.firstName && <p className="text-[10px] text-rose-600 mt-1 font-semibold">{formErrors.firstName}</p>}
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-600 block mb-1">Last Name *</label>
                            <input
                              type="text"
                              required
                              value={formState.lastName}
                              onChange={(e) => setFormState(prev => ({ ...prev, lastName: e.target.value }))}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 transition-colors"
                              placeholder="Doe"
                            />
                            {formErrors.lastName && <p className="text-[10px] text-rose-600 mt-1 font-semibold">{formErrors.lastName}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-bold text-slate-600 block mb-1">Email *</label>
                            <input
                              type="email"
                              required
                              value={formState.email}
                              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 transition-colors"
                              placeholder="john.doe@example.com"
                            />
                            {formErrors.email && <p className="text-[10px] text-rose-600 mt-1 font-semibold">{formErrors.email}</p>}
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-600 block mb-1">Phone *</label>
                            <input
                              type="tel"
                              required
                              value={formState.phone}
                              onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 transition-colors"
                              placeholder="(850) 332-3330"
                            />
                            {formErrors.phone && <p className="text-[10px] text-rose-600 mt-1 font-semibold">{formErrors.phone}</p>}
                          </div>
                        </div>

                        {/* Interactive Address Selection based on placeholder instructions */}
                        <div className="relative">
                          <label className="text-xs font-bold text-slate-600 block mb-1">Your Street Address</label>
                          <input
                            type="text"
                            value={addressSearch}
                            onChange={handleAddressChange}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 transition-colors"
                            placeholder="Choose the correct address from the list when you start typing"
                          />
                          
                          {/* Rich dropdown suggestions */}
                          {addressSuggestions.length > 0 && (
                            <div className="absolute z-30 left-0 right-0 mt-1.5 rounded-xl bg-white border border-slate-100 shadow-xl overflow-hidden max-h-48 overflow-y-auto">
                              {addressSuggestions.map((addr) => (
                                <button
                                  key={addr}
                                  type="button"
                                  onClick={() => selectAddress(addr)}
                                  className="w-full text-left py-2.5 px-3.5 hover:bg-cyan-50 text-xs font-medium text-slate-700 hover:text-cyan-800 border-b border-slate-50 flex items-center gap-2 group cursor-pointer"
                                >
                                  <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 shrink-0" />
                                  <span>{addr}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-600 block mb-1">Feel free to tell us more!</label>
                          <textarea
                            rows={2}
                            value={formState.notes}
                            onChange={(e) => setFormState(prev => ({ ...prev, notes: e.target.value }))}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-600 transition-colors resize-none"
                            placeholder="Provide any additional roof details here..."
                          />
                        </div>

                        <div className="flex justify-between pt-4 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="border border-slate-250 hover:bg-slate-50 text-slate-600 text-[11px] font-bold py-3 px-5 rounded-xl transition-all flex items-center gap-1"
                          >
                            <ArrowLeft className="w-3 h-3" />
                            <span>Back</span>
                          </button>
                          <button
                            type="submit"
                            className="bg-brand-coral hover:bg-rose-500 text-white text-[11px] font-bold py-3 px-6 rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-rose-250 cursor-pointer"
                          >
                            <span>Submit Request</span>
                            <Check className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.form>
                ) : (
                  // SUCCESS THANK YOU SCREEN
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="py-8 text-center space-y-6 text-slate-800"
                  >
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border-4 border-emerald-100 animate-bounce">
                      <Check className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-display font-black text-brand-blue uppercase">
                        Thank You, {formState.firstName}!
                      </h4>
                      <p className="text-sm text-slate-500 max-w-sm mx-auto">
                        Your professional Roofing Estimate details have been securely received. Our Florida area manager will call you within <span className="text-cyan-600 font-bold">15 minutes</span> for your free consultation.
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-4 text-left border border-slate-100 space-y-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                        Request Details:
                      </span>
                      <div className="text-xs font-semibold text-slate-700 space-y-1 font-mono">
                        <p><span className="text-slate-400 font-normal">Type:</span> {formState.roofType === 'residential' ? 'Residential' : 'Commercial'}</p>
                        <p><span className="text-slate-400 font-normal">Service:</span> {formState.serviceType}</p>
                        <p><span className="text-slate-400 font-normal">Material:</span> {formState.roofMaterial}</p>
                        {formState.address && <p className="truncate"><span className="text-slate-400 font-normal">Address:</span> {formState.address}</p>}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-xs font-bold text-cyan-600 hover:text-cyan-500 hover:underline flex items-center justify-center gap-1 mx-auto cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Start a New Estimate</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
