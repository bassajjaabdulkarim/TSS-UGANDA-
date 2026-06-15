/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { 
  Compass, 
  Layers, 
  MapPin, 
  BookOpen, 
  ExternalLink, 
  HelpCircle, 
  PhoneCall, 
  ChevronRight, 
  FileText, 
  BadgeHelp 
} from 'lucide-react';

interface SiteMapProps {
  onNavigate: (sectionId: string) => void;
}

export default function SiteMap({ onNavigate }: SiteMapProps) {
  return (
    <section id="sitemap" className="py-16 bg-slate-900 text-slate-100 border-t border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with elegant corporate styling */}
        <div className="border-b border-slate-800 pb-8 mb-12">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-[10px] uppercase tracking-widest font-bold mb-3">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>TSS Uganda Navigation Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white leading-tight">
            National Site Map & Digital Portal Index
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 font-light max-w-3xl leading-relaxed">
            Quickly navigate across our commercial material specifications, live event campaigns, farmer extension guides, regional coverage parameters, and active communication corridors.
          </p>
        </div>

        {/* 4-Column High-Contrast Bento Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Core Operations Modules */}
          <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800/60 hover:border-slate-700/65 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-900/40 rounded-lg text-blue-400">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-black uppercase text-slate-200 tracking-wider font-mono">Operations Portal</h3>
            </div>
            
            <ul className="space-y-3">
              {[
                { id: 'hero', label: 'TSS Showroom Slider' },
                { id: 'catalog', label: 'Tarpaulin Products & Specs' },
                { id: 'promotions', label: 'Live Events & Promos' },
                { id: 'stories', label: 'Success Stories' },
                { id: 'impact', label: 'Uganda Regional Footprint' }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => onNavigate(link.id)} 
                    className="group flex items-center justify-between w-full text-left text-slate-400 hover:text-yellow-400 text-[11px] font-semibold transition-all py-1 cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <ChevronRight className="w-3 H-3 text-slate-600 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                      {link.label}
                    </span>
                    <span className="text-[8px] font-mono opacity-0 group-hover:opacity-100 text-amber-500 uppercase tracking-widest bg-amber-500/10 px-1 py-0.5 rounded font-bold">
                      Jump
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Tarpaulin Catalog Index */}
          <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800/60 hover:border-slate-700/65 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-black uppercase text-slate-200 tracking-wider font-mono">Material Catalog</h3>
            </div>

            <ul className="space-y-3">
              {[
                { label: 'Carrier Shield (650 GSM Heavy)', sub: 'Truck Cover Specs' },
                { label: 'Crop Guard Pro (400 GSM Heavy)', sub: 'Coffee Drying Specs' },
                { label: 'Crop Defender (250 GSM Economy)', sub: 'Smallholder Agriculture' }
              ].map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => onNavigate('catalog')}
                    className="group flex flex-col items-start text-left w-full text-slate-400 hover:text-yellow-400 transition-colors py-1 cursor-pointer"
                  >
                    <span className="text-[11px] font-extrabold flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-amber-500 mt-0.5"></span>
                      {item.label}
                    </span>
                    <span className="text-[9px] text-slate-500 pl-2.5 font-light">
                      {item.sub}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional Hub & Farming Sectors */}
          <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800/60 hover:border-slate-700/65 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-black uppercase text-slate-200 tracking-wider font-mono">Deployment Footprint</h3>
            </div>

            <ul className="space-y-2.5">
              {[
                { label: 'Kampala-HQ', desc: 'Trailer Heavy Duty covers' },
                { label: 'Masaka & Sheema', desc: 'Robusta & Arabica Coffee' },
                { label: 'Lyantonde & Ntungamo', desc: 'Bulk Cargo & Matooke' },
                { label: 'Rushere & Kazo', desc: 'Dairy, Silage & Pastures' },
                { label: 'Kabale Highlands', desc: 'Anti-Frost Garden Shields' }
              ].map((item, idx) => (
                <li key={idx} className="text-[10px] text-slate-400">
                  <span className="font-extrabold text-slate-300 block">{item.label}</span>
                  <span className="text-slate-500 font-light block">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Farmer Guidelines & Compliance */}
          <div className="bg-slate-950/40 p-5 rounded-2xl border border-slate-800/60 hover:border-slate-700/65 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-black uppercase text-slate-200 tracking-wider font-mono">Extension Archives</h3>
            </div>

            <ul className="space-y-3">
              {[
                { label: 'GSM Calibration Guide', ref: 'Choose weight based on crop volume' },
                { label: 'Nocturnal Dew Prevention', ref: 'Forming A-line protective tents' },
                { label: 'Ochratoxin A Guard', ref: 'Pure soil separation compliance safety' }
              ].map((guide, idx) => (
                <li key={idx}>
                  <div className="text-[10px] text-slate-400 select-none">
                    <span className="font-bold text-slate-300 flex items-center gap-1">
                      <HelpCircle className="w-3 h-3 text-purple-400 shrink-0" />
                      {guide.label}
                    </span>
                    <p className="text-[9px] text-slate-500 font-light mt-0.5 leading-tight pl-4">
                      {guide.ref}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sitemap Metadata & Compliance Status banner */}
        <div className="p-4 bg-slate-950 border border-slate-800/70 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px]">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <div className="font-light text-slate-450 text-slate-400">
              <strong className="text-white">Active SEO Web Crawler Compliance index:</strong> Sitemap aligned dynamically to Uganda-centric trading parameters.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('hero')}
              className="text-slate-400 hover:text-yellow-400 flex items-center gap-1.5 transition-colors cursor-pointer font-bold font-mono tracking-wider text-[9px] uppercase"
            >
              <span>Back to Top Showroom</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
