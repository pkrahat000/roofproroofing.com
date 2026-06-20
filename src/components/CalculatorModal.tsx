/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import { X, Calculator, HelpCircle, Check, ArrowRight, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyData: (material: string, notes: string) => void;
}

export default function CalculatorModal({ isOpen, onClose, onApplyData }: CalculatorModalProps) {
  const [width, setWidth] = useState(40);
  const [length, setLength] = useState(50);
  const [pitch, setPitch] = useState<'low' | 'medium' | 'steep'>('medium');
  const [material, setMaterial] = useState<'shingle' | 'metal' | 'tile' | 'flat'>('shingle');

  // Calculation states
  const [sqft, setSqft] = useState(0);
  const [lowEst, setLowEst] = useState(0);
  const [highEst, setHighEst] = useState(0);

  const MATERIAL_PRICING = {
    shingle: { name: "Architectural Shingles", price: 4.50 },
    metal: { name: "Standing Seam Metal", price: 8.50 },
    tile: { name: "Concrete / Clay Tiles", price: 11.00 },
    flat: { name: "Single-ply TPO Flat", price: 6.50 }
  };

  const PITCH_MULTIPLIERS = {
    low: { label: "Low Pitch (4:12 - Flat)", multiplier: 1.05 },
    medium: { label: "Medium Pitch (6:12 - Standard)", multiplier: 1.15 },
    steep: { label: "Steep Pitch (9:12 - Hard)", multiplier: 1.30 }
  };

  useEffect(() => {
    const flatArea = width * length;
    const pitchM = PITCH_MULTIPLIERS[pitch].multiplier;
    const computedSqft = Math.round(flatArea * pitchM);
    setSqft(computedSqft);

    const basePrice = MATERIAL_PRICING[material].price;
    const midEstimate = computedSqft * basePrice;
    
    // Low and High tolerance boundaries
    setLowEst(Math.round(midEstimate * 0.9));
    setHighEst(Math.round(midEstimate * 1.15));
  }, [width, length, pitch, material]);

  const handleApply = () => {
    const materialLabel = MATERIAL_PRICING[material].name + " Roof";
    const compiledNotes = `Calculated roof dimensions: ${width}ft x ${length}ft (~${sqft} sq ft layout). Selected pitch: ${PITCH_MULTIPLIERS[pitch].label}. Estimated budget bracket: $${lowEst.toLocaleString()} - $${highEst.toLocaleString()}.`;
    onApplyData(materialLabel, compiledNotes);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/85 backdrop-blur-md"
        >
          {/* Dismiss Click Area */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div 
            initial={{ scale: 0.95, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 15 }}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl overflow-hidden text-slate-800 border border-slate-100 z-10"
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-white">
                  <Calculator className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-black text-brand-blue uppercase">
                    RoofPro Calculator
                  </h3>
                  <p className="text-xs text-slate-450">Get an instant, reliable budgetary range for your Florida roof.</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 p-2 rounded-full transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sliders Input form */}
              <div className="space-y-6">
                <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-600 uppercase block">
                  Step 1: Dimensions & Pitch
                </span>

                {/* Width */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-600">
                    <span>Roof Width (Horizontal)</span>
                    <span className="font-mono text-cyan-700">{width} feet</span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="150" 
                    value={width} 
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                  />
                </div>

                {/* Length */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-600">
                    <span>Roof Length (Vertical span)</span>
                    <span className="font-mono text-cyan-700">{length} feet</span>
                  </div>
                  <input 
                    type="range" 
                    min="15" 
                    max="150" 
                    value={length} 
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                  />
                </div>

                {/* Pitch selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 block">Roof Pitch Profile</label>
                  <div className="grid grid-cols-3 gap-2">
                    {([
                      { id: 'low', label: 'Flat / Low' },
                      { id: 'medium', label: 'Standard' },
                      { id: 'steep', label: 'Steep' }
                    ] as const).map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPitch(p.id)}
                        className={`text-xs py-2 px-3 rounded-lg border font-semibold transition-all cursor-pointer ${
                          pitch === p.id 
                            ? 'bg-cyan-50 border-cyan-500 text-cyan-700' 
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 block">Roofing Material</label>
                  <div className="grid grid-cols-2 gap-2">
                    {([
                      { id: 'shingle', label: 'Shingle' },
                      { id: 'metal', label: 'Metal' },
                      { id: 'tile', label: 'Tile' },
                      { id: 'flat', label: 'TPO Flat' }
                    ] as const).map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMaterial(m.id)}
                        className={`text-xs py-2.5 px-3 rounded-xl border text-left font-bold transition-all flex justify-between items-center cursor-pointer ${
                          material === m.id 
                            ? 'bg-brand-blue border-brand-blue text-white shadow-sm' 
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span>{m.label}</span>
                        {material === m.id && <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Outputs Summary Panel */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-150 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-600 uppercase block mb-1">
                    Calculated output
                  </span>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                    Budget Estimate (FL Stock Rates)
                  </h4>

                  <div className="divide-y divide-slate-150 font-normal text-sm text-slate-700 space-y-4 pt-1">
                    <div className="flex justify-between items-center pb-3">
                      <span className="text-slate-500 text-xs">Footprint Area</span>
                      <span className="font-semibold font-mono text-slate-800">
                        {(width * length).toLocaleString()} sq ft
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3">
                      <span className="text-slate-500 text-xs flex items-center gap-1">
                        Slate Slope Multiplier
                        <HelpCircle className="w-3 h-3 text-slate-400" title="Multiplier to adjust flat blueprint to slanted 3D slope surface" />
                      </span>
                      <span className="font-semibold font-mono text-slate-800">
                        x{PITCH_MULTIPLIERS[pitch].multiplier}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3">
                      <span className="text-slate-500 text-xs">Actual Roof Surface</span>
                      <span className="font-black font-mono text-brand-blue">
                        {sqft.toLocaleString()} sq ft
                      </span>
                    </div>

                    {/* Cost Output Bracket */}
                    <div className="pt-4 pb-1">
                      <span className="text-xs text-slate-500 block mb-1">Estimated Budget:</span>
                      <div className="text-2xl md:text-3xl font-display font-black text-emerald-700 font-mono tracking-tight flex items-center leading-none">
                        <span className="text-lg font-bold mr-0.5">$</span>
                        {lowEst.toLocaleString()} - {highEst.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={handleApply}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-display font-bold text-xs py-3.5 rounded-xl transition-all shadow-md hover:scale-[1.02] flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Apply This To Free Estimate Form</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[10px] text-slate-400 text-center leading-normal">
                    * Estimates include high-wind Florida wind-mitigation underlayment, tear-off labor fees, and complete clean up.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
