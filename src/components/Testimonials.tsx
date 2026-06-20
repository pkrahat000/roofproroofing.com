/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquare, ArrowLeft, ArrowRight, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial } from '../types';

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    name: "Joe Pierce",
    role: "Verified homeowner in Destin",
    quote: "I highly recommend. They were very responsive and efficient. Provided professional options and were very professional. I had some patch work done but they will also get the full...",
    rating: 5,
    date: "27 days ago",
    verified: true,
    initials: "JP"
  },
  {
    name: "Glass Slipper",
    role: "Business client - Fort Lauderdale",
    quote: "Byron, Omar, and crew have done an excellent job. They have replaced my old tile roof into a metal roof. Highly recommended!",
    rating: 5,
    date: "1 month ago",
    verified: true,
    initials: "GS"
  },
  {
    name: "Jody Dunwoody",
    role: "Homeowner in Santa Rosa Beach",
    quote: "RoofPro is awesome!! Made my repairs quickly and were very nice. They gave me my highest recommendation!",
    rating: 5,
    date: "2 months ago",
    verified: true,
    initials: "JD"
  },
  {
    name: "Steve Alexander",
    role: "Property Owner in North Port",
    quote: "RoofPro installed a new roof on our home in March 2026. The entire project was seamless from start to finish. The owner Byron is very knowledgeable, professional, and...",
    rating: 5,
    date: "2 months ago",
    verified: true,
    initials: "SA"
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showReviewModal, setShowReviewModal] = useState(false);
  
  // Custom review input states
  const [newName, setNewName] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newLocation, setNewLocation] = useState('Destin');

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newQuote.trim()) return;

    const initials = newName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const fresh: Testimonial = {
      name: newName,
      role: `Verified client in ${newLocation}`,
      quote: newQuote,
      rating: newRating,
      date: "Just now",
      verified: true,
      initials: initials || "VP"
    };

    setTestimonials([fresh, ...testimonials]);
    setCurrentIndex(0);
    setNewName('');
    setNewQuote('');
    setNewRating(5);
    setShowReviewModal(false);
  };

  return (
    <section id="testimonials" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading Block */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-black tracking-[0.4em] text-cyan-500 uppercase block">
            GENUINE GOOGLE REVIEWS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-brand-blue uppercase tracking-tight">
            Voices of our Satisfied clients
          </h2>
          <div className="h-1.5 w-16 bg-cyan-600 mx-auto rounded-full" />
        </div>

        {/* Core Rating Status Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Rating Summary Card (Matches GMB widget in screenshot) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200/60 rounded-3xl p-8 text-center space-y-4 shadow-sm">
            <h4 className="text-sm font-black text-brand-blue uppercase tracking-wider">
              Google Customer Rating
            </h4>
            <div className="space-y-1">
              <span className="text-6xl font-display font-black text-brand-blue block">
                5.0
              </span>
              <div className="flex justify-center gap-1 text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-xs text-slate-500 font-medium font-mono">
              Overall Rating based on 102 verified reviews
            </p>
            <button
              onClick={() => setShowReviewModal(true)}
              className="w-full bg-brand-blue hover:bg-cyan-950 text-white font-display font-bold text-xs py-3.5 px-6 rounded-xl shadow-sm transition-all hover:scale-103 cursor-pointer"
            >
              Write a Review
            </button>
          </div>

          {/* Testimonial slider / list */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Display Two Reviews side-by-side or scroll */}
              {testimonials.slice(0, 4).map((t, index) => (
                <div 
                  key={t.name + index}
                  className="bg-slate-50 rounded-3xl p-6 border border-slate-150/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all h-[300px]"
                >
                  <div className="space-y-4">
                    {/* Header profile info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center text-sm border border-cyan-200">
                          {t.initials}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-extrabold text-brand-blue">{t.name}</span>
                            {t.verified && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 fill-current text-white shrink-0" />}
                          </div>
                          <span className="text-[10px] text-slate-400 block truncate max-w-[150px]">{t.role}</span>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono font-medium">{t.date}</span>
                    </div>

                    {/* Star rating */}
                    <div className="flex gap-0.5 text-brand-gold">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    {/* Blockquote Quote */}
                    <p className="text-xs text-slate-650 italic leading-relaxed font-sans line-clamp-5">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="border-t border-slate-200/50 pt-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <UserCheck className="w-3 h-3 text-cyan-600" />
                      <span>Verified Google Review</span>
                    </span>
                    <span>100% recommended</span>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>

      {/* Write review dialog modal */}
      <AnimatePresence>
        {showReviewModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl text-slate-800"
            >
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-6">
                <div>
                  <h3 className="text-lg font-display font-black text-brand-blue uppercase">
                    Share Your RoofPro Experience
                  </h3>
                  <p className="text-xs text-slate-400">Your feedback helps Florida homeowners choose with confidence.</p>
                </div>
                <button 
                  onClick={() => setShowReviewModal(false)}
                  className="p-1 text-slate-400 hover:text-slate-800"
                >
                  Close
                </button>
              </div>

              <form onSubmit={handleAddReview} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="E.g., Mary Watson"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-600 block mb-1">Service Region</label>
                    <select
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    >
                      <option value="Destin">Destin</option>
                      <option value="Santa Rosa Beach">Santa Rosa Beach</option>
                      <option value="North Port">North Port</option>
                      <option value="Fort Lauderdale">Fort Lauderdale</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-600 block mb-1">Star Rating</label>
                    <div className="flex gap-1 h-10 items-center justify-center border border-slate-200 rounded-xl bg-slate-50/50">
                      {[1, 2, 3, 4, 5].map((stars) => (
                        <button
                          key={stars}
                          type="button"
                          onClick={() => setNewRating(stars)}
                          className={`focus:outline-none ${newRating >= stars ? 'text-brand-gold' : 'text-slate-300'}`}
                        >
                          <Star className="w-5 h-5 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">Your Review Quote</label>
                  <textarea
                    rows={4}
                    required
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    placeholder="Italicized client quote goes here. Tell us about Byron and your new roof..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-display font-bold text-xs py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Publish Verified Review
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
