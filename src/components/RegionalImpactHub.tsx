/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SOCIAL_BENEFITS } from '../data';
import { Globe2, CheckCircle } from 'lucide-react';

export default function RegionalImpactHub() {
  return (
    <section id="impact" className="py-16 md:py-24 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with clean layout */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 text-amber-900 border border-amber-200/50 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            <Globe2 className="w-3.5 h-3.5 text-amber-500" />
            <span>Regional Footprint & Retail Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            Strengthening Value Chains, Transforming Livelihoods
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            TSS Uganda is actively transitionary. We turn tarpaulin distribution into pathways for increased household incomes, youth employment, and robust agricultural output in Uganda and neighboring regions.
          </p>
        </div>

        {/* Dynamic Static map centered showcase */}
        <div className="max-w-4xl mx-auto mb-20">
          
          {/* Static Uganda SVG Map Visualization matching the uploaded design */}
          <div className="bg-[#051E46] relative rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col justify-between border border-blue-900/40 select-none min-h-[500px] sm:min-h-[580px] w-full">
            {/* Ambient map background texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#09316d,transparent_70%)] opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-sans tracking-tight leading-none uppercase select-none">
                  WE ARE NOW CLOSER TO YOU
                </h3>
                <p className="text-[10px] sm:text-xs text-blue-200 mt-1.5 opacity-90 leading-tight">
                  Our robust nationwide transport, retail supply terminals, and cooperative footprint coverage.
                </p>
              </div>

              {/* Official Branding Logo in the top-right corner */}
              <div className="flex flex-col items-center bg-white/5 backdrop-blur-md rounded-xl p-2.5 border border-white/10 shrink-0 select-none self-end sm:self-auto">
                <img 
                  src="/images/tss_official_hq_logo_1780562057363.png" 
                  alt="TSS Uganda Official Stamp Logo" 
                  className="w-12 h-12 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[8px] font-black text-emerald-450 text-emerald-400 tracking-wider text-center mt-1 uppercase">THE NO. 1 CHOICE BRAND</span>
              </div>
            </div>

            {/* Geographic map container displaying the generated Uganda map photo */}
            <div className="relative w-full aspect-[600/500] my-4 mx-auto max-w-full rounded-2xl overflow-hidden shadow-xl border border-blue-900/40">
              <img 
                src="/images/uganda_map_photo_1781528867229.jpg" 
                alt="3D Map of Uganda regional footprint" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bottom-right layout pairing striped premium tarpaulin preview with high contrast slogan */}
            <div className="relative z-10 flex flex-col md:flex-row items-end sm:items-center justify-between gap-4 mt-2 pt-4 border-t border-white/10">
              <div className="text-[10px] text-blue-200/80 font-mono tracking-wide flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Official regional distribution network coverage.</span>
              </div>

              <div className="flex items-center gap-3 max-w-[340px] text-right ml-auto self-end">
                <p className="text-[10px] sm:text-[11px] font-black leading-tight text-white uppercase tracking-wider font-sans select-none">
                  BUY QUALITY TARPAULIN AT ANY HARDWARESTORE NEAR YOU IN THESE LOCATIONS HAVING OUR LOGO
                </p>
                <div className="relative shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-xl bg-white/5 border border-white/10 p-1 overflow-hidden shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051E46]/80 to-transparent z-10" />
                  <img 
                    src="/images/striped_tarp_use_1780393572426.png" 
                    alt="TSS Uganda Striped Tarpaulin Roll" 
                    className="w-full h-full object-cover rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
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
