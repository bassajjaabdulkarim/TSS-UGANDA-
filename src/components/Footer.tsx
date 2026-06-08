/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-900">
          
          {/* Column 1: Company Profile Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded overflow-hidden flex items-center justify-center border border-slate-800 p-0.5 animate-fade-in">
                <img 
                  public="/images/tss_official_hq_logo_1780562057363.png" 
                  alt="TSS Uganda Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-display">TSS UGANDA</span>
            </div>
            <p className="text-slate-400 font-light leading-relaxed max-w-sm">
              An established commercial enterprise based in Kampala, Uganda, specialized in custom heavy-duty and economy tarpaulins. Driving East Africa's agricultural value chain competitiveness, reducing post-harvest coffee losses, and empowering local youth livelihoods.
            </p>
            
            {/* Social Media handles */}
            <div className="space-y-2 pt-2">
              <span className="font-bold text-slate-350 uppercase tracking-widest text-[9px] font-mono block">Official Social Media Hub</span>
              <div className="flex flex-wrap gap-2 text-[10px] text-slate-400 select-none">
                <span className="bg-slate-900 border border-slate-900/60 px-2.5 py-1 rounded font-mono hover:text-yellow-400 transition-colors">TikTok: <span className="text-white font-bold">@tss_ug</span></span>
                <span className="bg-slate-900 border border-slate-900/60 px-2.5 py-1 rounded font-mono hover:text-yellow-400 transition-colors">Facebook: <span className="text-white font-bold">@tss_ug</span></span>
                <span className="bg-slate-900 border border-slate-900/60 px-2.5 py-1 rounded font-mono hover:text-yellow-400 transition-colors">Instagram: <span className="text-white font-bold">@tss_ug</span></span>
                <span className="bg-slate-900 border border-slate-900/60 px-2.5 py-1 rounded font-mono hover:text-yellow-400 transition-colors">YouTube: <span className="text-white font-bold">@tss_ug</span></span>
                <span className="bg-slate-900 border border-slate-900/60 px-2.5 py-1 rounded font-mono hover:text-yellow-400 transition-colors">X: <span className="text-white font-bold">@tss_ug</span></span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick navigation links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-slate-200 uppercase tracking-widest text-[10px] font-mono">Operations Portal</h4>
            <ul className="space-y-2.5 text-slate-400">
              {['catalog', 'promotions', 'stories', 'impact'].map((id) => {
                const labels: Record<string, string> = {
                  catalog: 'Materials Catalog',
                  promotions: 'Live Events & Promos',
                  stories: 'Success Stories',
                  impact: 'Regional Impact Map'
                };
                return (
                  <li key={id}>
                    <button
                      onClick={() => onNavigate(id)}
                      className="hover:text-yellow-400 font-semibold transition cursor-pointer uppercase text-[10px] tracking-wider"
                    >
                      {labels[id]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Physical Headquarters Coordinates */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-slate-200 uppercase tracking-widest text-[10px] font-mono">Kampala Showroom & Contact Info</h4>
            
            <div className="space-y-3 font-light text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-450 text-sky-400 shrink-0 mt-0.5" />
                <p>Kampala Central District, Uganda</p>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-sky-450 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200 text-[10px] uppercase">Dawn Loading & Service Hours</p>
                  <p className="mt-0.5">Monday – Saturday: 06:30 AM – 06:30 PM</p>
                  <p className="text-slate-500 font-mono text-[9px] mt-0.5">*Early dawn loading active for flatbed upcountry cargo trucks.</p>
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-slate-900 pt-3 mt-3">
                <Phone className="w-4 h-4 text-sky-458 text-sky-400" />
                <p className="font-semibold text-slate-200">+256 761414008</p>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-458 text-sky-400" />
                <a href="mailto:tssugsales@gmail.com" className="hover:text-yellow-405 hover:text-yellow-450 text-yellow-400 font-semibold cursor-pointer">tssugsales@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p>© 2026 TSS Uganda (Tarpaulin Stores & Supplies). All rights secured.</p>
            <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600">Enterprise deployment registration ID: 7de1fc05-9929-4d73 • Kampala, Uganda</p>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-900/60 p-2 border border-slate-900 rounded font-mono uppercase text-[9px] text-sky-400">
            <ShieldAlert className="w-4 h-4 text-sky-400" />
            <span>Official Kampala Central distributor compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
