/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TSS_PRODUCTS } from '../data';
import { TarpaulinProduct } from '../types';
import { Ruler, Sparkles, Check, ArrowRight, ExternalLink, BadgeCheck } from 'lucide-react';

interface ProductCatalogProps {
  onNavigate: (section: string) => void;
}

interface ShowcaseItem {
  id: string;
  name: string;
  gsm: number;
  material: string;
  thickness: string;
  uvProtection: string;
  waterproofLevel: string;
  tearStrength: string;
  use: string;
  why: string;
  color: string;
  colorClass: string;
  image: string;
  features: string[];
  linkToProductId: string;
}

const HEAVY_DUTY_SHOWCASE: ShowcaseItem[] = [
  {
    id: "hd-yellow",
    name: "YELLOW HEAVY DUTY TARPAULINS",
    gsm: 650,
    material: "Multi-layered High-Density Polyester PVC Core",
    thickness: "0.55 mm",
    uvProtection: "Double Equatorial UV Shield (6.5% compound concentration)",
    waterproofLevel: "100% Hermetically Sealed Welded Seams",
    tearStrength: "Cross-woven High-Tensile 1300D Thread Matrix",
    use: "Safeguards long-haul cargo trailers (Kampala-Mombasa corridor) and large truck loads outdoor.",
    why: "Crucial highway safety shield that reflects light, making other drivers see your truck clearly from a distance, minimizing night-time collisions and maximizing vehicle security.",
    color: "Yellow",
    colorClass: "bg-yellow-400",
    image: "/assets/images/yellow_tarp_truck_1780390607794.png",
    features: [
      "Brass eyelets spaced every 30cm for extreme secure tie-down",
      "Special anti-fungal treatment stabilizes trailer mold growth",
      "Highly visible color reflects light to prevent highway collisions"
    ],
    linkToProductId: "p1"
  },
  {
    id: "hd-orange",
    name: "ORANGE HEAVY DUTY TARPAULINS",
    gsm: 400,
    material: "Reinforced High-Density Polyethylene with Dual LDPE Sheaths",
    thickness: "0.38 mm",
    uvProtection: "Volcanic African Sun Stabilized (Max UV Barrier)",
    waterproofLevel: "100% Impermeable (Stops ground condensation rising)",
    tearStrength: "Double-thread Ripstop Grid Weaving",
    use: "Drying coffee cherries, cocoa beans, maize, and regional food crops.",
    why: "High-efficiency orange heat absorption speeds up coffee and grain drying without scorching them, preserving volatile bean oils and coffee cherry flesh from scorching heat.",
    color: "Orange",
    colorClass: "bg-orange-500",
    image: "/assets/images/orange_tarp_coffee_1780390624788.png",
    features: [
      "100% food-grade material - preserves delicate natural coffee aromas",
      "Hydrophobic rain-shedding surface resists unpredictable tropical cloudbursts",
      "Flexible, lightweight design folds in seconds to shield against surprise rain"
    ],
    linkToProductId: "p2"
  },
  {
    id: "hd-green",
    name: "GREEN HEAVY DUTY TARPAULINS",
    gsm: 400,
    material: "Reinforced High-Density Polyethylene Core with Dual LDPE Sheaths",
    thickness: "0.38 mm",
    uvProtection: "Equatorial UV-A/B Solar Defense Layer",
    waterproofLevel: "Stops rising dampness & tropical rain washouts",
    tearStrength: "High-level ripstop thread weaving",
    use: "Shelter canopy for crop nursery beds and tender tree seedlings.",
    why: "Maintains cooler under-canopy temperatures and allows enough solar light transmission for photosynthesis while protecting youth seedlings from scorching sun rays.",
    color: "Green",
    colorClass: "bg-emerald-600",
    image: "/assets/images/green_tarp_use_1780393451681.png",
    features: [
      "Balances solar exposure - perfect for tender crop nursery beds",
      "Tear-proof edges with aluminum secure grommets every 50cm",
      "Highly resilient against equatorial storms and wind gusts"
    ],
    linkToProductId: "p2"
  },
  {
    id: "hd-black",
    name: "BLACK HEAVY DUTY TARPAULINS",
    gsm: 650,
    material: "Multi-layered High-Density Polyester PVC Core",
    thickness: "0.55 mm",
    uvProtection: "Double UV Stabilized Black Armor",
    waterproofLevel: "100% Hermetic moisture block & liquid container",
    tearStrength: "Cross-woven High-Tensile 1300D Thread Matrix",
    use: "Water lining containment for circular fish farming tanks and aquaculture.",
    why: "Suppresses light penetration to inhibit green algae blooms while maintaining warm water temperatures to support tilapia & catfish metabolism.",
    color: "Black",
    colorClass: "bg-slate-900",
    image: "/assets/images/aquaculture_black_tarp_1780393207082.png",
    features: [
      "Ensures water containment stability - non-toxic to aquatic stock",
      "Highly puncture-resistant against roots, gravel, and frame edges",
      "Locks heat water temperature to optimize fish feeding levels"
    ],
    linkToProductId: "p1"
  },
  {
    id: "hd-stripes",
    name: "STRIPES HEAVY DUTY TARPAULINS",
    gsm: 400,
    material: "Reinforced HDPE Crop Guard Weaving Format",
    thickness: "0.38 mm",
    uvProtection: "Standard Solar UV Protection Barrier",
    waterproofLevel: "100% Water-repellent rain shield",
    tearStrength: "Standard Ripstop Thread Matrix",
    use: "Market stalls, walk-in exhibition booths, and smallholder retail canopies.",
    why: "Highly attractive visual layout, extremely affordable, and light to carry - the perfect fabric choice for cooperative markets and temporary trading yards.",
    color: "Stripes",
    colorClass: "bg-slate-300 bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-200",
    image: "/assets/images/striped_tarp_use_1780393572426.png",
    features: [
      "Incredibly lightweight to fold and transport to daily cooperative yards",
      "Vibrant high-contrast design attracts regional customers to your stall",
      "Affordable retail yard covering with durable corner reinforcement"
    ],
    linkToProductId: "p2"
  }
];

const ECONOMY_SHOWCASE: ShowcaseItem[] = [
  {
    id: "eco-blue",
    name: "BLUE ECONOMY TARPAULINS",
    gsm: 250,
    material: "Medium-Density Laminated Polyethylene Matrix",
    thickness: "0.24 mm",
    uvProtection: "Standard Solar UV-A/B Equatorial Coating",
    waterproofLevel: "Dual Laminated Water-Repellent Sheathing",
    tearStrength: "Standard Cross-Weave Grid",
    use: "Affordable livestock housing roof shelters, cow bomas, and temporary market stalls.",
    why: "Perfect cost-effective shelter option tailored for livestock housing roof shelter and temporary smallholder market stalls. Extremely light to transport, mount, and clean.",
    color: "Blue",
    colorClass: "bg-blue-600",
    image: "/assets/images/blue_tarp_livestock_1780391886537.png",
    features: [
      "Unmatched price point - optimized for low-capital farming households",
      "Easily mounted onto timber framing structures for cattle & chicken bomas",
      "Specially designed lightweight build - easy for a single farmer to carry"
    ],
    linkToProductId: "p3"
  },
  {
    id: "eco-green",
    name: "ARMY GREEN ECONOMY TARPAULINS",
    gsm: 250,
    material: "Medium-Density Laminated Polyethylene Matrix",
    thickness: "0.24 mm",
    uvProtection: "Standard Solar UV-A/B Equatorial Coating",
    waterproofLevel: "Dual Laminated Water-Repellent Sheathing",
    tearStrength: "Standard Cross-Weave Grid",
    use: "Outdoor standing goods, harvest stacks, timber yards, and field equipment.",
    why: "Excellent protective weather barrier optimized for outdoor storage, protecting crop yields, construction items, and open-air goods. Blends perfectly with outdoor agricultural environments.",
    color: "Army Green",
    colorClass: "bg-emerald-800",
    image: "/assets/images/army_green_use_1780393793155.png",
    features: [
      "Protects standing harvest stacks and sacks from rainfall and ground moisture",
      "Low-visibility army green tone blends with farm gardens, deterring theft",
      "Aluminum eyelets located every 100cm for simple rope securement"
    ],
    linkToProductId: "p3"
  },
  {
    id: "eco-grey",
    name: "GREY ECONOMY TARPAULINS",
    gsm: 250,
    material: "Medium-Density Laminated Polyethylene Matrix",
    thickness: "0.24 mm",
    uvProtection: "Reflective Light-Shield & Solar UV Defense",
    waterproofLevel: "Dual Laminated Water-Repellent Sheathing",
    tearStrength: "Standard Cross-Weave Grid",
    use: "Covering machinery, crates, and storage goods in open-air yards.",
    why: "Easily reflected and identified at any time of the day or night. Outstanding thermal and light reflection, allowing ease of visual security monitoring day and night to protect assets.",
    color: "Grey",
    colorClass: "bg-slate-500",
    image: "/assets/images/grey_tarp_use_1780393676967.png",
    features: [
      "Easily recognized under security torches or vehicle headlights",
      "Outstanding heat-deflection traits - keeps underlying engines cooler",
      "Dual-coated rot-proof layer avoids degradation in damp outdoor yards"
    ],
    linkToProductId: "p3"
  }
];

export default function ProductCatalog({ onNavigate }: ProductCatalogProps) {
  
  const renderCard = (item: ShowcaseItem) => {
    return (
      <div 
        key={item.id} 
        className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
      >
        {/* Active Real Use Image Container */}
        <div className="relative h-60 w-full bg-slate-900 group overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          
          {/* Upper Info Overlays */}
          <span className="absolute top-4 left-4 bg-blue-950/90 text-[10px] font-mono font-bold tracking-widest text-amber-400 border border-amber-500/20 px-3 py-1 rounded-md uppercase z-10 shadow-sm">
            {item.gsm} GSM • {item.material.split(' ')[0]}
          </span>

          <div className="absolute top-4 right-4 bg-slate-950/95 px-2.5 py-1.5 rounded-lg border border-slate-800 backdrop-blur-[3px] flex items-center gap-1.5 z-10 shadow-md">
            <span className={`w-3 h-3 rounded-full border border-white/20 ${item.colorClass}`} />
            <span className="text-[10px] font-bold text-white font-mono uppercase tracking-wider">{item.color}</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex justify-between items-end">
            <span className="text-[9px] font-mono text-amber-350 font-bold tracking-wider uppercase bg-black/40 px-2 py-0.5 rounded backdrop-blur-[2px]">
              Active In-Use View
            </span>
            <a 
              href="https://teaxy.store" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-3 py-1.5 rounded-lg font-black text-[11px] font-mono tracking-wide uppercase transition-all shadow hover:scale-105 flex items-center gap-1"
            >
              <span>shop here</span>
              <span className="underline">teaxy.store</span>
            </a>
          </div>
        </div>

        {/* Card Body - Uses & Specs */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold font-display text-slate-900 leading-snug mb-3">
              {item.name}
            </h3>
            
            <p className="text-[11px] font-mono text-slate-500 mb-4 flex items-center gap-1">
              <span>Core Material:</span>
              <span className="font-extrabold text-slate-700 truncate">{item.material}</span>
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4 bg-slate-50 p-3 rounded-lg border border-slate-100 text-[11px]">
              <div>
                <span className="text-slate-400 uppercase tracking-wider text-[8px] block">Thickness</span>
                <span className="font-bold text-slate-700">{item.thickness}</span>
              </div>
              <div>
                <span className="text-slate-400 uppercase tracking-wider text-[8px] block">Water Resistance</span>
                <span className="font-extrabold text-blue-900 line-clamp-1">{item.waterproofLevel.split(' ')[0]} Waterproof</span>
              </div>
            </div>

            {/* Application Section */}
            <div className="mb-4 bg-amber-50/40 border border-amber-100 p-3.5 rounded-xl text-xs text-amber-950">
              <span className="text-[9px] uppercase font-mono font-bold tracking-wider block text-amber-800 mb-1">🎯 Specialized Task Purpose</span>
              <p className="leading-relaxed">{item.use}</p>
            </div>

            {/* Why Optimized */}
            <div className="mb-4 text-xs font-sans text-slate-600 leading-relaxed border-l-2 border-slate-300 pl-3 italic">
              <strong>Why this choice:</strong> {item.why}
            </div>

            {/* List Specs Checklist */}
            <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
              <span className="text-[9px] uppercase font-mono font-bold tracking-wider block text-slate-400 mb-1">Detailed Features</span>
              {item.features.map((feat, index) => (
                <div key={index} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="p-5 bg-slate-50 border-t border-slate-200/60 flex flex-col gap-2">
          <a
            href="tel:+256761414008"
            className="w-full bg-blue-900 hover:bg-blue-800 text-yellow-300 border border-blue-800/80 font-extrabold text-[11px] py-3 rounded-lg uppercase tracking-wider transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01]"
          >
            <BadgeCheck className="w-4 h-4 text-yellow-400" />
            <span>Call to Order: +256 761414008</span>
          </a>
          <div className="text-center text-[10px] text-slate-500 font-medium font-mono uppercase mt-1">
            Kampala Central Warehouse Dispatch
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 text-amber-950 border border-amber-200/50 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Official Tarpaulins Showroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            Uganda-Optimized Tarpaulin Material Catalog
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto">
            TSS Uganda structures tarpaulins with dense high-grade weave matrices, dual lamination, and extreme equatorial UV defense. Find each class, color option, and its verified active duty usage in-field.
          </p>
        </div>

        {/* CATEGORY 1: HEAVY DUTY TARPAULINS FIRST */}
        <div className="mb-20">
          <div className="border-b border-slate-200 pb-4 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-900 uppercase block mb-1">CATEGORY 01 (PREMIUM)</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950 tracking-tight flex items-center gap-2">
                Heavy-Duty Tarpaulins <span className="text-xs font-bold font-mono tracking-widest text-[#d97706] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase font-semibold">400 - 800 GSM</span>
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md font-light leading-relaxed">
              Resistant to high friction, continuous sun baking, heavy rainfall, and intense cargo tie-down strain on transport routes and farm-coops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HEAVY_DUTY_SHOWCASE.map(item => renderCard(item))}
          </div>
        </div>

        {/* CATEGORY 2: ECONOMY TARPAULINS NEXT */}
        <div className="mb-16">
          <div className="border-b border-slate-200 pb-4 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-900 uppercase block mb-1">CATEGORY 02 (AFFORDABLE)</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950 tracking-tight flex items-center gap-2">
                Economy Tarpaulins <span className="text-xs font-bold font-mono tracking-widest text-blue-900 bg-blue-50 border border-blue-105 px-2 py-0.5 rounded uppercase font-semibold">250 GSM</span>
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md font-light leading-relaxed">
              Highly affordable, exceptionally light to carry, simple to wash down, and quickly configured with ropes & timber layouts on the go.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ECONOMY_SHOWCASE.map(item => renderCard(item))}
          </div>
        </div>

        {/* Kampala operations notice banner */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-955 to-slate-950 rounded-xl p-8 mt-16 text-white border border-blue-800 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl" />
          <div className="md:max-w-xl relative z-10">
            <h4 className="text-xl font-bold font-display text-white mb-2 uppercase tracking-wide">Need Custom Shapes, Colors or Specialized Eyelet Pattern?</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              TSS Uganda specializes in tailoring custom layouts. Whether you need a truck-side zipper, triangular architectural grommets, specialized hook-and-loop seal tape, or extra heavy eyelet reinforcement for severe mountain winds, our high-tech workshop in Kampala is fully equipped to meet your dimensions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto z-10">
            <a
              href="tel:+256761414008"
              className="px-6 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-blue-950 rounded-lg font-black text-xs uppercase tracking-widest text-center w-full md:w-auto transition-all shadow-lg shadow-yellow-500/10 hover:scale-105 border border-yellow-300"
            >
              Call Specialist: +256 761414008
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
