/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldCheck, MapPin, Phone, Compass, Ship } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 bg-white text-slate-900 shadow-md border-b border-slate-200 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Top micro-bar for corporate metadata */}
      <div className="bg-blue-950 text-slate-100 py-2 px-4 text-xs font-semibold border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            <span className="tracking-wide uppercase text-[10px] text-yellow-105 font-bold">Serving East Africa's Agriculture, Logistics & Construction Supply Chains</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] tracking-wide font-mono uppercase">
            <span className="text-blue-100 flex items-center gap-1 font-sans">
              <span className="text-[9px] uppercase tracking-wider text-blue-300">Socials:</span>
              <span className="text-yellow-400 font-bold font-mono text-xs">@tss_ug</span>
            </span>
            <span className="flex items-center gap-1 text-sky-300">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-slate-200">Kampala, Uganda</span>
            </span>
            <span className="flex items-center gap-1 text-sky-300">
              <Phone className="w-3.5 h-3.5" />
              <span className="text-slate-200 font-bold">+256 761414008</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex justify-between items-center">
          {/* Brand Logo & Name */}
          <div 
            onClick={() => onNavigate('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 bg-white rounded-lg group-hover:bg-slate-50 transition-colors shadow-lg border border-slate-200 overflow-hidden flex items-center justify-center p-1">
              <img 
                src="/images/tss_official_hq_logo_1780562057363.png" 
                alt="TSS Uganda Logo" 
                className="w-10 h-10 object-contain transition-transform group-hover:scale-105 animate-fade-in"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl tracking-tighter text-blue-950 font-display">TSS UGANDA</span>
                <span className="bg-yellow-100 text-yellow-800 border border-yellow-200 px-2 py-0.5 rounded text-[9px] font-bold tracking-widest uppercase font-mono animate-pulse">Est. Kampala</span>
              </div>
              <p className="text-[10px] text-sky-500 font-extrabold mt-0.5 tracking-widest uppercase font-mono">Heavy Duty Protective Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 font-semibold text-xs uppercase tracking-wider">
            {[
              { id: 'catalog', label: 'Material Catalog' },
              { id: 'promotions', label: 'Live Events & Promos' },
              { id: 'stories', label: 'Success Stories' },
              { id: 'impact', label: 'Regional Impact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => onNavigate(tab.id)}
                className={`px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                  activeSection === tab.id
                    ? 'bg-blue-900 text-yellow-300 font-bold shadow-inner'
                    : 'hover:bg-slate-100 text-slate-600 hover:text-blue-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Call-to-action button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+256761414008"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-black text-[11px] uppercase px-4 py-2.5 rounded-lg shadow-md tracking-widest transition-all duration-250 text-center inline-block"
            >
              Call Sales
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
