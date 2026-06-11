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

  // Coordinate mapping for locations inside the 600 x 500 SVG canvas coordinate system
  const svgCoords: Record<string, { x: number; y: number; textX: number; textY: number; align: "start" | "end" | "middle" }> = {
    "Kampala Central (HQ)": { x: 380, y: 285, textX: 15, textY: 2, align: "start" },
    "Masaka Region": { x: 320, y: 315, textX: 15, textY: 2, align: "start" },
    "Lyantonde": { x: 268, y: 338, textX: 15, textY: 12, align: "start" },
    "Rushere": { x: 228, y: 308, textX: -15, textY: -10, align: "end" },
    "Kazo": { x: 202, y: 275, textX: 15, textY: 2, align: "start" },
    "Sheema Region": { x: 185, y: 338, textX: 15, textY: 10, align: "start" },
    "Kizinda": { x: 142, y: 328, textX: -15, textY: 2, align: "end" },
    "Ntungamo": { x: 160, y: 365, textX: 15, textY: 5, align: "start" },
    "Kabale District": { x: 125, y: 400, textX: 15, textY: 5, align: "start" }
  };

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
          
          {/* Left Column: Interactive Uganda SVG Map Visualization matching the uploaded design */}
          <div className="lg:col-span-7 bg-[#051E46] relative rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col justify-between border border-blue-900/40 select-none min-h-[500px] sm:min-h-[580px]">
            {/* Ambient map background texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#09316d,transparent_70%)] opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-sans tracking-tight leading-none uppercase select-none">
                  WE ARE NOW CLOSER TO YOU
                </h3>
                <p className="text-[10px] sm:text-xs text-blue-200 mt-1.5 opacity-90 leading-tight">
                  Click on any regional location pin to view local supply metrics, farm statistics, and cooperative success stories.
                </p>
              </div>

              {/* Official Branding Logo in the top-right corner */}
              <div className="flex flex-col items-center bg-white/5 backdrop-blur-md rounded-xl p-2.5 border border-white/10 shrink-0 select-none self-end sm:self-auto">
                <img 
                  src="/assets/images/tss_official_hq_logo_1780562057363.png" 
                  alt="TSS Uganda Official Stamp Logo" 
                  className="w-12 h-12 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[8px] font-black text-emerald-450 text-emerald-400 tracking-wider text-center mt-1 uppercase">THE NO. 1 CHOICE BRAND</span>
              </div>
            </div>

            {/* Simulated Geographic 3D map container */}
            <div className="relative w-full aspect-[4/3] my-4 flex items-center justify-center grow">
              
              <svg viewBox="0 0 600 500" className="w-full h-full drop-shadow-3xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 3D bottom extrusion depth shadow layers to give the 3D aesthetic shown in reference */}
                <path d="M 152,115 C 135,140 125,155 130,165 C 135,175 145,185 160,205 C 170,215 180,210 185,215 L 125,295 C 118,305 110,320 105,335 C 107,345 105,355 110,355 C 118,355 125,365 135,385 C 140,395 130,410 120,415 C 125,410 135,405 140,405 L 265,382 C 275,378 280,370 280,370 C 290,360 295,355 320,350 C 335,345 355,342 375,325 C 390,320 395,322 420,328 C 428,330 435,322 435,315 C 438,300 440,285 440,280 C 455,270 470,265 470,255 C 470,245 455,235 445,230 C 440,215 442,195 440,195 C 435,180 435,165 435,165 C 438,150 445,135 445,135 C 440,120 435,115 435,110 C 420,108 395,105 395,105 C 380,106 365,108 365,108 C 350,112 330,115 330,115 C 320,112 310,110 310,110 C 290,108 275,105 275,105 C 255,106 235,108 235,108 C 215,110 195,112 195,112 Z" fill="#475569" className="translate-y-4 translate-x-1" opacity="0.6" />
                <path d="M 152,115 C 135,140 125,155 130,165 C 135,175 145,185 160,205 C 170,215 180,210 185,215 L 125,295 C 118,305 110,320 105,335 C 107,345 105,355 110,355 C 118,355 125,365 135,385 C 140,395 130,410 120,415 C 125,410 135,405 140,405 L 265,382 C 275,378 280,370 280,370 C 290,360 295,355 320,350 C 335,345 355,342 375,325 C 390,320 395,322 420,328 C 428,330 435,322 435,315 C 438,300 440,285 440,280 C 455,270 470,265 470,255 C 470,245 455,235 445,230 C 440,215 442,195 440,195 C 435,180 435,165 435,165 C 438,150 445,135 445,135 C 440,120 435,115 435,110 C 420,108 395,105 395,105 C 380,106 365,108 365,108 C 350,112 330,115 330,115 C 320,112 310,110 310,110 C 290,108 275,105 275,105 C 255,106 235,108 235,108 C 215,110 195,112 195,112 Z" fill="#5A6D87" className="translate-y-2 translate-x-0.5" />
                
                {/* Active Top Map Silhouette layer */}
                <path d="M 152,115 C 135,140 125,155 130,165 C 135,175 145,185 160,205 C 170,215 180,210 185,215 L 125,295 C 118,305 110,320 105,335 C 107,345 105,355 110,355 C 118,355 125,365 135,385 C 140,395 130,410 120,415 C 125,410 135,405 140,405 L 265,382 C 275,378 280,370 280,370 C 290,360 295,355 320,350 C 335,345 355,342 375,325 C 390,320 395,322 420,328 C 428,330 435,322 435,315 C 438,300 440,285 440,280 C 455,270 470,265 470,255 C 470,245 455,235 445,230 C 440,215 442,195 440,195 C 435,180 435,165 435,165 C 438,150 445,135 445,135 C 440,120 435,115 435,110 C 420,108 395,105 395,105 C 380,106 365,108 365,108 C 350,112 330,115 330,115 C 320,112 310,110 310,110 C 290,108 275,105 275,105 C 255,106 235,108 235,108 C 215,110 195,112 195,112 Z" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1.5" />
                
                {/* District lines */}
                <path d="M180,80 Q200,130 220,150 T250,160" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M230,70 Q250,120 280,140 T300,160" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M280,60 Q300,110 330,130 T350,150" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M330,75 L350,115 L380,135" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M210,355 L220,310 L250,290 L280,310 L310,290 L350,335" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M160,375 L180,330 L210,320 L220,310" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M115,350 L135,330 L160,325 L180,330" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M125,290 L150,270 L190,280 L220,310" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M140,230 L170,240 L200,260 L220,265 L250,290" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M250,160 L280,210 L310,240 L350,260 L380,250" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Map Pins overlay dynamically */}
                {REGIONAL_IMPACT.map((loc, idx) => {
                  const isSelected = selectedRegion.regionName === loc.regionName;
                  const coords = svgCoords[loc.regionName] || { x: 300, y: 250, textX: 12, textY: 0, align: "start" as const };
                  const truncatedName = loc.regionName.replace(" Region", "").replace(" District", "").toUpperCase();
                  
                  return (
                    <g 
                      key={idx}
                      onClick={() => setSelectedRegion(loc)}
                      className="cursor-pointer group"
                    >
                      {/* Pulse/Ripple surrounding active point */}
                      {isSelected && (
                        <circle cx={coords.x} cy={coords.y - 18} r="16" fill="#38BDF8" opacity="0.35" className="animate-ping" />
                      )}

                      {/* Small anchor pin drop shadow */}
                      <ellipse cx={coords.x} cy={coords.y + 1} rx="5" ry="2" fill="#000" opacity="0.3" />

                      {/* Teardrop map pin matching image design */}
                      <path 
                        d="M 0 0 C -6 -8 -10 -14 -10 -19 C -10 -25 -5 -29 0 -29 C 5 -29 10 -25 10 -19 C 10 -14 6 -8 0 0 Z" 
                        transform={`translate(${coords.x}, ${coords.y})`}
                        fill={isSelected ? "#38BDF8" : "#0EA5E9"} 
                        stroke="white" 
                        strokeWidth="1.5" 
                        className="transition-colors duration-300 hover:fill-amber-400"
                        style={{ filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.25))" }}
                      />

                      {/* White center dot in the pin */}
                      <circle cx={coords.x} cy={coords.y - 19} r="3" fill="white" />

                      {/* Text label next to pin - Styled exactly to match target font & spacing */}
                      <text 
                        x={coords.x + coords.textX} 
                        y={coords.y + coords.textY - 14} 
                        fill={isSelected ? "#F59E0B" : "#1E3A8A"} 
                        textAnchor={coords.align}
                        className={`font-sans font-black select-none text-[10px] sm:text-[11px] uppercase tracking-wide transition-all duration-300 ${
                          isSelected ? "drop-shadow-[0_1px_4px_rgba(245,158,11,0.3)] ring-2" : "opacity-85"
                        }`}
                      >
                        {truncatedName}
                      </text>
                    </g>
                  );
                })}
              </svg>

            </div>

            {/* Bottom-right layout pairing striped premium tarpaulin preview with high contrast slogan */}
            <div className="relative z-10 flex flex-col md:flex-row items-end sm:items-center justify-between gap-4 mt-2 pt-4 border-t border-white/10">
              <div className="text-[10px] text-blue-200/80 font-mono tracking-wide flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active hardware store footprints. Swipe/Tap points.</span>
              </div>

              <div className="flex items-center gap-3 max-w-[340px] text-right ml-auto self-end">
                <p className="text-[10px] sm:text-[11px] font-black leading-tight text-white uppercase tracking-wider font-sans select-none">
                  BUY QUALITY TARPAULIN AT ANY HARDWARESTORE NEAR YOU IN THESE LOCATIONS HAVING OUR LOGO
                </p>
                <div className="relative shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-xl bg-white/5 border border-white/10 p-1 overflow-hidden shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051E46]/80 to-transparent z-10" />
                  <img 
                    src="/assets/images/striped_tarp_use_1780393572426.png" 
                    alt="TSS Uganda Striped Tarpaulin Roll" 
                    className="w-full h-full object-cover rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
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
                 