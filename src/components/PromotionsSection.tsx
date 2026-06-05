/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Tag, Percent, ArrowRight, Award, Megaphone, Sparkles, CheckCircle, Flame, MapPin, PhoneCall, Gift } from 'lucide-react';

export default function PromotionsSection() {
  const [activePromoTab, setActivePromoTab] = useState<'all' | 'offers' | 'events'>('all');

  const promos = [
    {
      id: 1,
      type: 'offers',
      badge: 'ACTIVE PROMO',
      badgeColor: 'bg-yellow-400 text-slate-900 border-yellow-300',
      title: 'Kampala Annual post-Harvest Crop-Guard Special',
      description: 'Get exclusive warehouse discounts directly from our Kampala dispatch line. Valid on 400 GSM Heavy-Duty Orange and Green tarpaulins designed specifically for hygienic sun-drying of Robusta and Arabica cherries.',
      offerValue: '15% DISCOUNT',
      validUntil: 'Valid until June 30, 2026',
      cta: 'Claim Discount via Phone',
      icon: Percent,
      bgColor: 'border-l-4 border-l-yellow-400 bg-yellow-50/10 border-slate-200'
    },
    {
      id: 2,
      type: 'events',
      badge: 'LIVE WORKSHOP',
      badgeColor: 'bg-blue-600 text-white border-blue-500 border-blue-400',
      title: 'Nakawa Open-Air Fabric Sensitization Seminar',
      description: 'Join the TSS team live at our central Nakawa warehouse yard. Get a practical hand-on introduction on how to construct rain-sliding A-line tents, handle nocturnal dew condensation, and optimal eyelet placement under mountain winds.',
      offerValue: 'FREE ADMISSION',
      validUntil: 'Event Date: June 15, 2026 • 10:00 AM',
      cta: 'Register Attendance Direct',
      icon: Calendar,
      bgColor: 'border-l-4 border-l-blue-600 bg-blue-50/10 border-slate-200'
    },
    {
      id: 3,
      type: 'offers',
      badge: 'MASANYU PROMO',
      badgeColor: 'bg-yellow-400 text-slate-900 border-yellow-300',
      title: 'TSS UG Masanyu Buy & Win Promotion',
      description: 'Buy any heavy-duty or economy tarpaulins from our catalog and stand a chance to win amazing gifts (heavy duty straps, branded shirts, premium toolkits) and instant cashbacks! Draw conducted live weekly at our showroom yard in Kampala.',
      offerValue: 'LUCKY GIFTS & WIN',
      validUntil: 'Weekly Draw Live: Sat 4 PM',
      cta: 'Inquire Win Terms',
      icon: Gift,
      bgColor: 'border-l-4 border-l-blue-900 bg-blue-50/10 border-slate-200'
    }
  ];

  const filteredPromos = activePromoTab === 'all' 
    ? promos 
    : promos.filter(p => p.type === activePromoTab);

  return (
    <section id="promotions" className="scroll-mt-20 py-20 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
           {/* Dynamic Background Graphics emphasizing Blue, Light Blue, and Yellow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-yellow-100 border border-yellow-300 px-3 py-1 rounded-full text-xs font-bold text-yellow-850 uppercase tracking-widest font-mono mb-4">
            <Flame className="w-3.5 h-3.5 text-yellow-600 animate-bounce" />
            <span>Active Live Events & Campaigns</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-display uppercase tracking-tight">
            TSS UG Live Events & Promos
          </h2>
          <p className="mt-4 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
            Stay updated with active seasonal discounts, open-air specialized workshops, and exciting lucky draws orchestrated straight from our main dispatch warehouse in Kampala.
          </p>

          {/* Filtering Tabs */}
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setActivePromoTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activePromoTab === 'all'
                  ? 'bg-blue-905 bg-blue-900 text-yellow-300 shadow-md border border-blue-800'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              All Direct Promos
            </button>
            <button
              onClick={() => setActivePromoTab('offers')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activePromoTab === 'offers'
                  ? 'bg-yellow-400 text-slate-905 text-slate-900 border border-yellow-300 shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              Active Offers
            </button>
            <button
              onClick={() => setActivePromoTab('events')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activePromoTab === 'events'
                  ? 'bg-sky-600 text-white shadow-md border border-sky-500'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              Live Workshops
            </button>
          </div>
        </div>

        {/* Bento Grid: Left Column is Mascot & Live Hotline, Right Column is Promo Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Mascot Invitation Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white rounded-3xl p-8 border border-blue-800 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl group-hover:bg-yellow-400/10 transition-colors" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-yellow-400 text-slate-950 border border-yellow-350 px-2.5 py-1 rounded-full text-[9px] font-black font-mono uppercase tracking-widest flex items-center gap-1 animate-pulse">
                  <Sparkles className="w-3 h-3 text-slate-950 animate-spin" />
                  <span>Meet Tass!</span>
                </span>
                <span className="text-xs text-sky-300 font-mono font-bold uppercase tracking-wider">TSS Brand Champion</span>
              </div>

              {/* Speech bubble design */}
              <div className="bg-slate-900 border border-blue-800/45 p-4 rounded-2xl text-xs text-slate-200 leading-relaxed mb-6 font-medium relative italic">
                <span className="absolute -bottom-2.5 left-8 w-4 h-4 bg-slate-900 border-r border-b border-blue-800/40 rotate-45" />
                "Call our central Kampala dispatch hotline at <strong className="text-yellow-400 not-italic hover:underline font-mono text-[13px]">+256 761414008</strong> and state your dimensions. We'll instantly apply active promotions to your order!"
              </div>

              {/* Mascot Asset Image Rendering */}
              <div className="w-full h-64 flex items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm shadow-inner mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent z-10 pointer-events-none" />
                <img 
                  src="/assets/images/tass_dispatch_mascot_1780564254694.png" 
                  alt="Tass - TSS Uganda Mascot" 
                  className="w-full h-full object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Live Hotline Calling Bar */}
            <div className="pt-6 border-t border-blue-850/60 mt-auto">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-extrabold text-sm text-yellow-300 uppercase tracking-widest">Kampala Central Dispatch</h4>
                  <p className="text-[10px] text-slate-300 mt-0.5 font-mono uppercase">Open Mon - Sat 8:00 AM - 6:00 PM</p>
                </div>
                <a
                  href="tel:+256761414008"
                  className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 p-3 h-12 w-12 rounded-full flex items-center justify-center transition-all hover:scale-110 shrink-0 border border-yellow-300 shadow-lg shadow-yellow-500/10"
                >
                  <PhoneCall className="w-5 h-5 text-slate-950" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Promotional Events Grid */}
          <div className="lg:col-span-7 flex flex-col gap-5 justify-between">
            {filteredPromos.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center flex flex-col justify-center items-center h-full">
                <Megaphone className="w-10 h-10 text-slate-300 mb-3" />
                <p className="text-slate-500 text-sm font-semibold uppercase font-mono">No offers live under this filter</p>
                <button 
                  onClick={() => setActivePromoTab('all')}
                  className="mt-4 text-xs font-bold text-blue-800 hover:underline"
                >
                  Reset Active Filters
                </button>
              </div>
            ) : (
              filteredPromos.map((promo) => {
                const IconComponent = promo.icon;
                return (
                  <div
                    key={promo.id}
                    className={`bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start justify-between ${promo.bgColor}`}
                  >
                    <div className="flex-grow space-y-3">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className={`text-[8px] font-black font-mono px-2.5 py-0.5 rounded border ${promo.badgeColor}`}>
                          {promo.badge}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">{promo.validUntil}</span>
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                        {promo.title}
                      </h3>
                      
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {promo.description}
                      </p>

                      <div className="pt-2">
                        <a
                          href="tel:+256761414008"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-950 bg-slate-50/50 border border-slate-200 hover:bg-slate-100 px-3.5 py-2 rounded-lg transition-all"
                        >
                          <span>{promo.cta}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-center shrink-0 w-full sm:w-36 flex flex-col justify-center items-center gap-1.5">
                      <div className="p-2 bg-yellow-100 rounded-full text-blue-900">
                        <IconComponent className="w-5 h-5 text-blue-900" />
                      </div>
                      <span className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider">VALUE</span>
                      <span className="text-sm font-black text-blue-950 tracking-tight leading-none text-center">
                        {promo.offerValue}
                      </span>
                    </div>
                  </div>
                );
              })
            )}

            {/* Quality Standard Notice Banner */}
            <div className="bg-sky-50 border border-sky-100/80 rounded-2xl p-4 flex items-center gap-3.5 text-sky-950 text-xs">
              <div className="p-2 bg-sky-200 text-sky-700 rounded-lg shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <strong className="block uppercase tracking-wider text-[10px] text-sky-900 font-extrabold font-mono mb-0.5"> Kampala Dispatch Quality Standard</strong>
                <p className="text-sky-850 leading-relaxed font-normal">
                  All promotional stock items undergo precise dual-lamination checks and are fitted with customized non-rusting eyelet reinforcements to guard exports against extreme weather.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
