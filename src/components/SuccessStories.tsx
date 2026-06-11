/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, 
  TrendingUp, 
  Droplets, 
  Truck, 
  Warehouse, 
  Coins, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle,
  Clock
} from 'lucide-react';
import { SUCCESS_STORIES } from './SUCCESS_STORIES';

export interface SuccessStory {
  id: string;
  category: 'FOUNDER' | 'TEAXY' | 'transit';
  categoryLabel: string;
  title: string;
  farmerName: string;
  location: string;
  challenge: string;
  solution: string;
  impactMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  testimonial: string;
  imageKey: 'FOUNDER' | 'TEAXY' | 'truck';
  materialUsed: string;
}

export default function SuccessStories() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'FOUNDER' | 'TEAXY' | 'transit'>('all');

  const filteredStories = SUCCESS_STORIES.filter(s => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  const getStoryIconOnDemand = (cat: 'FOUNDER' | 'TEAXY' | 'transit') => {
    switch (cat) {
      case 'FOUNDER':
        return <Droplets className="w-5 h-5 text-amber-500" />;
      case 'TEAXY':
        return <Warehouse className="w-5 h-5 text-amber-500" />;
      case 'transit':
        return <Truck className="w-5 h-5 text-amber-500" />;
    }
  };

  const getStoryImageFallback = (key: 'FOUNDER' | 'TEAXY' | 'truck') => {
    if (key === 'truck') return "/images/yellow_tarp_truck_1780390607794.png";
    if (key === 'FOUNDER') return "/images/FOUNDER.png";
    return "/images/TEAXY.png";
  };

  return (
    <section id="stories" className="py-20 md:py-28 bg-white text-slate-900 scroll-mt-20 border-t border-slate-205">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtitle Alignment */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 text-amber-900 border border-amber-200/50 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Pioneering Post-Harvest Quality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            Success Stories: Real Impact Across Uganda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            Read detailed case studies illustrating how TSS Uganda premium tarpaulins preserve quality, block molds, and secure export grades—directly uplifting farmgate earnings and transit security.
          </p>

          {/* Quick Category Filtering */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Case Studies' },
              { id: 'FOUNDER', label: 'Meticulous Drying' },
              { id: 'TEAXY', label: 'Safe Storage' },
              { id: 'transit', label: 'Secure Transport' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-blue-900 text-white shadow-md shadow-blue-900/10'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Listing */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredStories.map((story, sIdx) => {
              const isEven = sIdx % 2 === 0;
              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sIdx * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-slate-50 border border-slate-200/60 p-6 sm:p-10 rounded-2xl shadow-sm"
                >
                  
                  {/* Left Column: Visual representation & metrics layout */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden shadow-md">
                      <img
                        src={getStoryImageFallback(story.imageKey)}
                        alt={story.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                      
                      {/* Floating material identification tag */}
                      <span className="absolute bottom-4 left-4 bg-blue-950/95 text-[10px] font-mono text-amber-400 px-3 py-1.5 rounded border border-amber-500/20 font-bold uppercase tracking-wider">
                        Material: {story.materialUsed}
                      </span>
                    </div>

                    {/* Highly polished bento impact stat panels */}
                    <div className="grid grid-cols-3 gap-2">
                      {story.impactMetrics.map((met, mIdx) => (
                        <div key={mIdx} className="bg-white border border-slate-200 p-3 rounded-lg text-center shadow-xs">
                          <span className="text-[9px] uppercase font-mono text-slate-400 block tracking-wider font-extrabold">{met.label}</span>
                          <p className="text-lg sm:text-xl font-black font-mono text-blue-900 mt-1 leading-none">{met.value}</p>
                          <p className="text-[8px] text-emerald-600 mt-1 leading-tight font-medium font-mono">{met.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Case description & testimonial layout */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Upper Category and Location block */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-900 border border-amber-500/20 rounded-full text-[10px] font-black uppercase tracking-wider font-mono">
                        {getStoryIconOnDemand(story.category)}
                        <span>{story.categoryLabel}</span>
                      </span>
                      <span className="text-slate-400 text-xs font-mono">•</span>
                      <span className="text-[11px] font-bold tracking-wide uppercase text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{story.location}</span>
                      </span>
                    </div>

                    {/* Big title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
                      {story.title}
                    </h3>

                    {/* Challenge & Solution details */}
                    <div className="space-y-4 text-xs leading-relaxed text-slate-600 font-light pr-2">
                      <div>
                        <strong className="block text-[10px] font-mono font-bold uppercase text-red-500 tracking-wider mb-1">REMARKS:</strong>
                        <p>{story.challenge}</p>
                      </div>
                      
                      <div>
                        <strong className="block text-[10px] font-mono font-bold uppercase text-blue-900 tracking-wider mb-1">TSS MISSION:</strong>
                        <p>{story.solution}</p>
                      </div>
                    </div>

                    {/* Elegant Testimonial card */}
                    <div className="bg-blue-950 text-white rounded-xl p-5 border border-blue-900 relative">
                      <Quote className="absolute -top-3.5 -left-1.5 w-8 h-8 text-amber-500/40 transform rotate-180 pointer-events-none" />
                      <p className="text-xs italic leading-relaxed text-slate-200 font-light font-sans">
                        "{story.testimonial}"
                      </p>
                      
                      <div className="mt-4 pt-3 border-t border-blue-900 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white leading-none">{story.farmerName}</p>
                          <p className="text-[9px] text-amber-400 font-bold uppercase tracking-wider mt-1">{story.category === "transit" ? "Transporter" : "C.E.O / FOUNDER TSS UGANDA" : "Customer Care Assistant" }</p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[9px] text-emerald-400 font-bold uppercase font-mono">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span>Verified Board Member</span>
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
