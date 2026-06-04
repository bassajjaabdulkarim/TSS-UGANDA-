/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { REGIONAL_IMPACT, SOCIAL_BENEFITS } from '../data';
import { RegionalImpactData } from '../types';
import { TrendingUp, Users, MapPin, Building, Globe2, Sparkles, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function RegionalImpactHub() {
  const [selectedRegion, setSelectedRegion] = useState<RegionalImpactData>(REGIONAL_IMPACT[0]);

  return (
    <section id="impact" className="py-16 md:py-24 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with clean layout */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 text-amber-900 border border-amber-200/50 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            <Globe2 className="w-3.5 h-3.5 text-amber-500" />
            <span>Regional Growth & Social Missions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 leading-tight animate-fade-in animate-duration-500">
            Strengthening Value Chains, Transforming Livelihoods
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            TSS Uganda is actively transitionary. We turn tarpaulin distribution into pathways for increased household incomes, youth employment, and robust agricultural output in Uganda and neighboring regions.
          </p>
        </div>

        {/* Dynamic Interactive map and details board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-20">
          
          {/* Left Column: Interactive Uganda SVG Map Visualization */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 p-6 sm:p-8 rounded-xl shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold font-display text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-900" />
                <span>East Africa Regional Footprint</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Click on any node to review local deployment statistics, coffee bean value upgrades, and active farmer sensitization programs.
              </p>
            </div>

            {/* Simulated Geographic map using SVG node matrix */}
            <div className="relative w-full aspect-square sm:aspect-[4/3] bg-slate-950 rounded-lg p-4 border border-slate-800 my-6 flex items-center justify-center overflow-hidden">
              
              {/* Subtle background geographic representation (abstract East Africa border mesh) */}
              <svg className="absolute inset-x-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 500 400" fill="none">
                <path d="M 150,50 L 300,50 L 380,150 L 350,280 L 220,380 L 100,280 Z" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 220,100 L 250,150 L 280,220" stroke="#fbbf24" strokeWidth="1" />
                <circle cx="250" cy="200" r="140" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2,8" />
              </svg>

              {/* Grid layout markers */}
              <div className="absolute top-4 left-4 text-[9px] font-mono text-slate-500 uppercase">GRID COMPASS MODE: UGANDA AREA</div>
              <div className="absolute bottom-4 right-4 text-[9px] font-mono text-slate-500 uppercase text-right">
                <span>KAMPALA CENTRAL HQ</span>
              </div>

              {/* Map Pins overlay dynamically */}
              <div className="absolute inset-0">
                {REGIONAL_IMPACT.map((loc, idx) => {
                  const isSelected = selectedRegion.regionName === loc.regionName;
                  return (
                    <motion.button
                      key={idx}
                      onClick={() => setSelectedRegion(loc)}
                      whileHover={{ scale: 1.15 }}
                      className="absolute p-2 -translate-x-1/2 -translate-y-1/2 focus:outline-none flex flex-col items-center group cursor-pointer"
                      style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                    >
                      <div className="relative">
                        {/* Ripple pulses around active pin */}
                        {isSelected && (
                          <span className="absolute -inset-1 rounded-full bg-amber-400 opacity-75 animate-ping" />
                        )}
                        <div className={`w-4 h-4 rounded-full border-2 transition-all shadow-md ${
                          isSelected 
                            ? 'bg-amber-400 border-white scale-125' 
                            : 'bg-orange-500 border-slate-950 group-hover:bg-orange-400'
                        }`} />
                      </div>
                      
                      {/* Floating tooltip labels */}
                      <span className={`mt-1.5 px-2 py-0.5 rounded text-[10px] whitespace-nowrap font-sans font-semibold transition-all shadow-lg ${
                        isSelected
                          ? 'bg-blue-900 text-white font-bold opacity-100'
                          : 'bg-slate-900/80 text-slate-300 opacity-0 group-hover:opacity-100'
                      }`}>
                        {loc.regionName.split(' ')[0]}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* East African Borders outline helper tags */}
              <div className="absolute top-1/4 right-8 bg-slate-900/40 text-slate-400 text-[10px] px-2 py-1 border border-slate-800/60 rounded font-mono uppercase tracking-wide">Kenya Border (Malaba/Busia)</div>
              <div className="absolute bottom-1/4 left-6 bg-slate-900/40 text-slate-400 text-[10px] px-2 py-1 border border-slate-800/60 rounded font-mono uppercase tracking-wide">Rwanda Corridor</div>
              <div className="absolute top-12 left-1/3 bg-slate-900/40 text-slate-400 text-[10px] px-2 py-1 border border-slate-800/60 rounded font-mono uppercase tracking-wide">South Sudan Transit</div>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-1.5 border-t border-slate-100 pt-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              <span className="font-light">Locations are fully synchronized with our Kampala Central fabrication operations.</span>
            </div>
          </div>

          {/* Right Column: Node Details & Metrics */}
          <div className="lg:col-span-5 bg-white border border-slate-200/60 p-6 sm:p-8 rounded-xl shadow-xl flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.regionName}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <div className="text-[10px] text-amber-800 font-mono tracking-widest uppercase font-bold mb-1">active impact region</div>
                  <h4 className="text-2xl font-extrabold font-display text-slate-900">
                    {selectedRegion.regionName}
                  </h4>
                  <div className="h-1 w-12 bg-amber-500 mt-2 rounded"></div>
                </div>

                <p className="text-sm font-light leading-relaxed text-slate-600">
                  {selectedRegion.details}
                </p>

                {/* Primary Regional commodity focus */}
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg">
                  <span className="text-[9px] text-slate-400 font-mono uppercase tracking-wider font-extrabold block">Primary Commodity focus:</span>
                  <p className="text-sm font-bold text-slate-800 mt-1 font-display">
                    {selectedRegion.keyCommodity}
                  </p>
                </div>

                {/* Detailed statistics indices inside region */}
                <div className="space-y-4 border-t border-slate-100 pt-5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold block">Regional Impact Metrics:</span>
                  
                  <div className="grid grid-cols-2 gap-4">
                    
                    {/* Stat item 1 */}
                    <div className="p-3 bg-amber-50 border border-amber-100 rounded-lg">
                      <span className="text-[9px] text-amber-800 uppercase font-mono font-bold">Farmers Deployed</span>
                      <p className="text-xl font-extrabold text-amber-950 mt-1 font-mono">
                        {selectedRegion.statistics.farmersServed.toLocaleString()}
                      </p>
                      <p className="text-[9px] text-amber-700 mt-0.5 font-mono">Active smallholder mats</p>
                    </div>

                    {/* Stat item 2 */}
                    <div className="p-3 bg-orange-50 border border-orange-100 rounded-lg">
                      <span className="text-[9px] text-orange-700 uppercase font-mono font-bold">Post-Harvest Losses</span>
                      <p className="text-xl font-extrabold text-orange-950 mt-1 font-mono">
                        -{selectedRegion.statistics.postHarvestLossDecreasePercent}%
                      </p>
                      <p className="text-[9px] text-orange-600 mt-0.5">Average regional drop</p>
                    </div>

                  </div>

                  {/* Profit index helper */}
                  <div className="p-4 bg-slate-900 text-white rounded-lg flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest">Coffee Premium Gain</span>
                      <p className="text-xs text-slate-350 mt-0.5 leading-tight">Average farmer farmgate price boost</p>
                    </div>
                    <span className="text-2xl font-extrabold text-amber-400 font-mono">
                      +{selectedRegion.statistics.coffeePremiumIncreasePercent}%
                    </span>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 border-t border-slate-100 mt-6 bg-slate-50 p-4 rounded-lg text-xs leading-relaxed text-slate-500 font-light">
              We compile regional data in collaboration with district farm unions, cooperations, and transport metrics.
            </div>
          </div>

        </div>

        {/* Corporate social objectives grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_BENEFITS.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-xl flex flex-col justify-between hover:shadow-lg transition shadow-sm">
              <div className="space-y-3">
                <span className="text-3xl font-extrabold text-blue-900 font-mono tracking-tight leading-none">
                  {item.metric}
                </span>
                <span className="text-xs uppercase font-mono tracking-wider font-bold text-slate-400 block pb-2 border-b border-slate-100">
                  {item.metricLabel}
                </span>
                <h4 className="font-extrabold font-display text-slate-900 text-base leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-1 text-[10px] font-mono text-blue-900 uppercase font-bold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Impact verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
