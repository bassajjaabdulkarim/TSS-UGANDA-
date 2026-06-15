

/**
@license
SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { REGIONAL_IMPACT, SOCIAL_BENEFITS } from '../data';
import { Globe2, ShieldCheck, MapPin, Layers } from 'lucide-react';

export default function RegionalImpactHub() {
  // Coordinate mapping carefully recalibrated to eliminate text and pin overlapping
  const svgCoords: Record<string, { x: number; y: number; textX: number; textY: number; align: "start" | "end" | "middle" }> = {
    "Kampala Central (HQ)": { x: 390, y: 275, textX: 16, textY: 4, align: "start" },
    "Masaka Region":        { x: 330, y: 315, textX: 16, textY: 4, align: "start" },
    "Lyantonde":            { x: 270, y: 345, textX: 0, textY: 22, align: "middle" },
    "Rushere":              { x: 230, y: 295, textX: -16, textY: -4, align: "end" },
    "Kazo":                 { x: 205, y: 255, textX: 0, textY: -20, align: "middle" },
    "Sheema Region":        { x: 185, y: 335, textX: 16, textY: 12, align: "start" },
    "Kizinda":              { x: 135, y: 320, textX: -16, textY: 4, align: "end" },
    "Ntungamo":             { x: 155, y: 375, textX: -16, textY: 14, align: "end" },
    "Kabale District":      { x: 115, y: 410, textX: 16, textY: 4, align: "start" }
  };

  const [selectedRegion, setSelectedRegion] = useState<string>(
    REGIONAL_IMPACT[0]?.regionName || "Kampala Central (HQ)"
  );

  return (
    <section id="impact" className="py-16 md:py-24 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 text-amber-900 border border-amber-200/50 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            <Globe2 className="w-3.5 h-3.5 text-amber-500" />
            <span>Regional Footprint & Retail Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            Strengthening Value Chains, Transforming Livelihoods
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            TSS Uganda is actively transitionary. We turn high-grade tarpaulin logistics into definitive economic pathways for increased household incomes and robust post-harvest protection.
          </p>
        </div>

        {/* Modern Interactive Dashboard Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Left Column: Interactive Region Picker */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold font-mono text-blue-600 flex items-center gap-1 mb-2">
                  <Layers className="w-3.5 h-3.5" /> Direct Supply Terminals
                </span>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-4">
                  Select Hub Location
                </h3>
                
                <div className="space-y-1.5 max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
                  {REGIONAL_IMPACT.map((loc, i) => {
                    const isActive = selectedRegion === loc.regionName;
                    return (
                      <button
                        key={i}
                        onClick={() => setSelectedRegion(loc.regionName)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all flex items-center justify-between group border ${
                          isActive
                            ? 'bg-blue-900 border-blue-900 text-white shadow-md'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400 group-hover:text-blue-600'}`} />
                          {loc.regionName}
                        </span>
                        <span className={`text-[9px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                          Terminal
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Information Display Box */}
              <div className="mt-6 pt-6 border-t border-slate-100 bg-slate-50/70 p-4 rounded-xl">
                <h4 className="text-[11px] uppercase tracking-wider font-black text-slate-400 font-mono mb-1">
                  Active Spotlight Node
                </h4>
                <p className="text-sm font-bold text-slate-900 font-display">
                  {selectedRegion}
                </p>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-light">
                  Serving as a core logistical retail terminal anchor distributing reinforced choice materials to localized cooperatives and hardware vendors.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Map Canvas Visualization */}
          <div className="lg:col-span-8">
            <div className="bg-[#051E46] relative rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden flex flex-col justify-between border border-blue-900/40 select-none min-h-[500px] sm:min-h-[580px] h-full w-full">
              
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#09316d,transparent_70%)] opacity-30 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-sans tracking-tight leading-none uppercase">
                    WE ARE NOW CLOSER TO YOU
                  </h3>
                  <p className="text-[10px] sm:text-xs text-blue-200 mt-1.5 opacity-90 leading-tight">
                    Interactive network mapping: click location buttons to track national cooperative footprint coverage.
                  </p>
                </div>
                
                {/* Branding Stamp Badge */}
                <div className="flex flex-col items-center bg-white/5 backdrop-blur-md rounded-xl p-2.5 border border-white/10 shrink-0 self-end sm:self-auto">
                  <img
                    src="/assets/images/tss_official_hq_logo_1780562057363.png"
                    alt="TSS Uganda Official Stamp Logo"
                    className="w-12 h-12 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[8px] font-black text-emerald-400 tracking-wider text-center mt-1 uppercase">
                    THE NO. 1 CHOICE BRAND
                  </span>
                </div>
              </div>

              {/* Geographic SVG Canvas Mapping Box */}
              <div className="relative w-full aspect-[600/500] my-4 mx-auto max-w-2xl">
                <svg viewBox="0 0 600 500" className="absolute inset-0 w-full h-full drop-shadow-3xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                  
                  {/* 3D bottom extrusion layers */}
                  <path d="M 152,115 C 135,140 125,155 130,165 C 135,175 145,185 160,205 C 170,215 180,210 185,215 L 125,295 C 118,305 110,320 105,335 C 107,345 105,355 110,355 C 118,355 125,365 135,385 C 140,395 130,410 120,415 C 125,410 135,405 140,405 L 265,382 C 275,378 280,370 280,370 C 290,360 295,355 320,350 C 335,345 355,342 375,325 C 390,320 395,322 420,328 C 428,330 435,322 435,315 C 438,300 440,285 440,280 C 455,270 470,265 470,255 C 470,245 455,235 445,230 C 440,215 442,195 440,195 C 435,180 435,165 435,165 C 438,150 445,135 445,135 C 440,120 435,115 435,110 C 420,108 395,105 395,105 C 380,106 365,108 365,108 C 350,112 330,115 330,115 C 320,112 310,110 310,110 C 290,108 275,105 275,105 C 255,106 235,108 235,108 C 215,110 195,112 195,112 Z" fill="#475569" className="translate-y-4 translate-x-1" opacity="0.6" />
                  <path d="M 152,115 C 135,140 125,155 130,165 C 135,175 145,185 160,205 C 170,215 180,210 185,215 L 125,295 C 118,305 110,320 105,335 C 107,345 105,355 110,355 C 118,355 125,365 135,385 C 140,395 130,410 120,415 C 125,410 135,405 140,405 L 265,382 C 275,378 280,370 280,370 C 290,360 295,355 320,350 C 335,345 355,342 375,325 C 390,320 395,322 420,328 C 428,330 435,322 435,315 C 438,300 440,285 440,280 C 455,270 470,265 470,255 C 470,245 455,235 445,230 C 440,215 442,195 440,195 C 435,180 435,165 435,165 C 438,150 445,135 445,135 C 440,120 435,115 435,110 C 420,108 395,105 395,105 C 380,106 365,108 365,108 C 350,112 330,115 330,115 C 320,112 310,110 310,110 C 290,108 275,105 275,105 C 255,106 235,108 235,108 C 215,110 195,112 195,112 Z" fill="#5A6D87" className="translate-y-2 translate-x-0.5" />
                  
                  {/* Active Top Silhouette Background */}
                  <path d="M 152,115 C 135,140 125,155 130,165 C 135,175 145,185 160,205 C 170,215 180,210 185,215 L 125,295 C 118,305 110,320 105,335 C 107,345 105,355 110,355 C 118,355 125,365 135,385 C 140,395 130,410 120,415 C 125,410 135,405 140,405 L 265,382 C 275,378 280,370 280,370 C 290,360 295,355 320,350 C 335,345 355,342 375,325 C 390,320 395,322 420,328 C 428,330 435,322 435,315 C 438,300 440,285 440,280 C 455,270 470,265 470,255 C 470,245 455,235 445,230 C 440,215 442,195 440,195 C 435,180 435,165 435,165 C 438,150 445,135 445,135 C 440,120 435,115 435,110 C 420,108 395,105 395,105 C 380,106 365,108 365,108 C 350,112 330,115 330,115 C 320,112 310,110 310,110 C 290,108 275,105 275,105 C 255,106 235,108 235,108 C 215,110 195,112 195,112 Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  
                  {/* Interconnected transit routes */}
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

                  {/* Render dynamic markers overlay */}
                  {REGIONAL_IMPACT.map((loc, idx) => {
                    const coords = svgCoords[loc.regionName] || { x: 300, y: 250, textX: 12, textY: 0, align: "start" as const };
                    const isTargeted = selectedRegion === loc.regionName;
                    const truncatedName = loc.regionName.replace(" Region", "").replace(" District", "").toUpperCase();
                    
                    return (
                      <g
                        key={idx}
                        className="cursor-pointer pointer-events-auto transition-all duration-300"
                        onClick={() => setSelectedRegion(loc.regionName)}
                      >
                        {/* Radar base pulse when active */}
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r={isTargeted ? "14" : "6"}
                          fill={isTargeted ? "#38BDF8" : "#0EA5E9"}
                          opacity={isTargeted ? "0.4" : "0.15"}
                          className={isTargeted ? "animate-ping" : ""}
                        />
                        <ellipse cx={coords.x} cy={coords.y + 1} rx="5" ry="2" fill="#000" opacity="0.3" />
                        
                        {/* Map Pin Anchor */}
                        <path
                          d="M 0 0 C -6 -8 -10 -14 -10 -19 C -10 -25 -5 -29 0 -29 C 5 -29 10 -25 10 -19 C 10 -14 6 -8 0 0 Z"
                          transform={`translate(${coords.x}, ${coords.y})`}
                          fill={isTargeted ? "#EF4444" : "#0EA5E9"}
                          stroke="white"
                          strokeWidth="1.5"
                          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
                        />
                        <circle cx={coords.x} cy={coords.y - 19} r="3" fill="white" />
                        
                        {/* Map Labels */}
                        <text
                          x={coords.x + coords.textX}
                          y={coords.y + coords.textY - 14}
                          fill={isTargeted ? "#EF4444" : "#1E3A8A"}
                          textAnchor={coords.align}
                          className={`font-sans font-black tracking-wide select-none text-[10px] sm:text-[11px] uppercase transition-all duration-200 ${
                            isTargeted ? 'scale-105' : 'opacity-85'
                          }`}
                        >
                          {truncatedName}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Bottom Footer Bar Layout */}
              <div className="relative z-10 flex flex-col md:flex-row items-end sm:items-center justify-between gap-4 mt-2 pt-4 border-t border-white/10">
                <div className="text-[10px] text-blue-200/80 font-mono tracking-wide flex items-center gap-1.5">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Active Live Distribution Terminals Operational</span>
                </div>
                <div className="flex items-center gap-3 max-w-[340px] text-right ml-auto self-end">
                  <p className="text-[10px] sm:text-[11px] font-black leading-tight text-white uppercase tracking-wider font-sans">
                    BUY QUALITY TARPAULIN AT ANY HARDWARE STORE NEAR YOU IN THESE LOCATIONS HAVING OUR LOGO
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
          </div>

        </div>

        {/* Corporate Social Metrics Value Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 browser-gradient lg:grid-cols-4 gap-6">
          {SOCIAL_BENEFITS.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-xl flex flex-col justify-between hover:shadow-lg hover:border-slate-300 transition duration-300 shadow-sm">
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
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 uppercase font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Impact Audited</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}