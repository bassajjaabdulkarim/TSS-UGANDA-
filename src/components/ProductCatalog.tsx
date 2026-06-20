/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TSS_PRODUCTS } from '../data';
import { TarpaulinProduct } from '../types';
import { Ruler, Sparkles, Check, ArrowRight, ExternalLink, BadgeCheck, ChevronDown, Compass } from 'lucide-react';

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
    material: "24ft x 36ft",
    thickness: "0.55 mm",
    uvProtection: "Double Equatorial UV Shield (6.5% compound concentration)",
    waterproofLevel: "100% Hermetically Sealed Welded Seams",
    tearStrength: "Cross-woven High-Tensile 1300D Thread Matrix",
    use: "Safeguards long-haul cargo trailers (Kampala-Mombasa corridor) and large truck loads outdoor.",
    why: "Crucial highway safety shield that reflects light, making other drivers see your truck clearly from a distance, minimizing night-time collisions and maximizing vehicle security.",
    color: "Yellow",
    colorClass: "bg-yellow-400",
    image: "/images/yellow_tarp_truck_1780390607794.png",
    features: [
      "High friction ",
      "Continuous sun baking",
      "Heavy rainfall"
    ],
    linkToProductId: "p1"
  },
  {
    id: "hd-orange",
    name: "ORANGE HEAVY DUTY TARPAULINS",
    gsm: 400,
    material: "12ft x 18ft",
    thickness: "0.38 mm",
    uvProtection: "Volcanic African Sun Stabilized (Max UV Barrier)",
    waterproofLevel: "100% Impermeable (Stops ground condensation rising)",
    tearStrength: "Double-thread Ripstop Grid Weaving",
    use: "Drying coffee cherries, cocoa beans, maize, and regional food crops.",
    why: "High-efficiency orange heat absorption speeds up coffee and grain drying without scorching them, preserving volatile bean oils and coffee cherry flesh from scorching heat.",
    color: "Orange",
    colorClass: "bg-orange-500",
    image: "/images/green_tarp_use_1780393451681.png",
    features: [
      "UV radiation penetration, filtering out destructive ultra violet rays that can scotch delicate seedlings",
      "mildew & chemical rot caused by expousre to fertilizers & pesticides",
      "wind tear when erected as over shades /micro tunnels"
    ],
    linkToProductId: "p2"
  },
  {
    id: "hd-green",
    name: "GREEN HEAVY DUTY TARPAULINS",
    gsm: 400,
    material: "26ft x 23ft",
    thickness: "0.38 mm",
    uvProtection: "Equatorial UV-A/B Solar Defense Layer",
    waterproofLevel: "Stops rising dampness & tropical rain washouts",
    tearStrength: "High-level ripstop thread weaving",
    use: "Shelter canopy for crop nursery beds and tender tree seedlings.",
    why: "Maintains cooler under-canopy temperatures and allows enough solar light transmission for photosynthesis while protecting youth seedlings from scorching sun rays.",
    color: "Green",
    colorClass: "bg-emerald-600",
    image: "/images/green_tarp_use_1780393451681.png",
    features: [
      "UV radiation penetration, filtering out destructive ultra violet rays that can scotch delicate seedlings",
      "mildew & chemical rot caused by expousre to fertilizers & pesticides",
      "wind tear when erected as over shades /micro tunnels"
    ],
    linkToProductId: "p2"
  },
  {
    id: "hd-black",
    name: "BLACK HEAVY DUTY TARPAULINS",
    gsm: 650,
    material: "12ft x 15ft",
    thickness: "0.55 mm",
    uvProtection: "Double UV Stabilized Black Armor",
    waterproofLevel: "100% Hermetic moisture block & liquid container",
    tearStrength: "Cross-woven High-Tensile 1300D Thread Matrix",
    use: "Water lining containment for circular fish farming tanks and aquaculture.",
    why: "Suppresses light penetration to inhibit green algae blooms while maintaining warm water temperatures to support tilapia & catfish metabolism.",
    color: "Black",
    colorClass: "bg-slate-900",
    image: "/images/aquaculture_black_tarp_1780393207082.png",
    features: [
      "hydrostatic pressure & puncture that could result from heavy water & puncturing form sharp roots or debris hidden beneath the soil bed",
      "photosynthesis algae growth by completely blocking out sunlight",
      "Soil chemical corrosion because it is chemically innet , resisting corrosion from both the earth beneath & aquaculture waste above"
    ],
    linkToProductId: "p1"
  },
  {
    id: "hd-stripes",
    name: "STRIPES HEAVY DUTY TARPAULINS",
    gsm: 400,
    material: "12ft x 15ft",
    thickness: "0.38 mm",
    uvProtection: "Standard Solar UV Protection Barrier",
    waterproofLevel: "100% Water-repellent rain shield",
    tearStrength: "Standard Ripstop Thread Matrix",
    use: "Market stalls, walk-in exhibition booths, and smallholder retail canopies.",
    why: "Highly attractive visual layout, extremely affordable, and light to carry - the perfect fabric choice for cooperative markets and temporary trading yards.",
    color: "Stripes",
    colorClass: "bg-slate-300 bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-200",
    image: "/images/striped_tarp_use_1780393572426.png",
    features: [
      "Repeated flexing & creasing , they resist flex cracking meaning the laminated layers won't delaminate /crack along fold lines",
      "Mild shock loads , withstand sudden tags from wind guts , tight rope tying & the weight of pulling water",
      "Heat Absorption , reflect alternating white stripes reflect a significant portion of solar radiation"
    ],
    linkToProductId: "p2"
  }
];

const ECONOMY_SHOWCASE: ShowcaseItem[] = [
  {
    id: "eco-blue",
    name: "BLUE ECONOMY TARPAULINS",
    gsm: 250,
    material: "9ft x 12ft",
    thickness: "0.24 mm",
    uvProtection: "Standard Solar UV-A/B Equatorial Coating",
    waterproofLevel: "Dual Laminated Water-Repellent Sheathing",
    tearStrength: "Standard Cross-Weave Grid",
    use: "Affordable livestock housing roof shelters, cow bomas, and temporary market stalls.",
    why: "Perfect cost-effective shelter option tailored for livestock housing roof shelter and temporary smallholder market stalls. Extremely light to transport, mount, and clean.",
    color: "Blue",
    colorClass: "bg-blue-600",
    image: "/images/blue_tarp_livestock_1780391886537.png",
    features: [
      "Ammonia & uric acid corrosion ,chemically treated to resist corrosive atmosphere",
      "Pecking ,biting & scratching",
      "Bacterial & fungal accumulation"
    ],
    linkToProductId: "p3"
  },
  {
    id: "eco-green",
    name: "ARMY GREEN ECONOMY TARPAULINS",
    gsm: 250,
    material: "15ft x 20ft",
    thickness: "0.24 mm",
    uvProtection: "Standard Solar UV-A/B Equatorial Coating",
    waterproofLevel: "Dual Laminated Water-Repellent Sheathing",
    tearStrength: "Standard Cross-Weave Grid",
    use: "Outdoor standing goods, harvest stacks, timber yards, and field equipment.",
    why: "Excellent protective weather barrier optimized for outdoor storage, protecting crop yields, construction items, and open-air goods. Blends perfectly with outdoor agricultural environments.",
    color: "Army Green",
    colorClass: "bg-emerald-800",
    image: "/images/army_green_use_1780393793155.png",
    features: [
      "Static water pooling & heavy hydro static pressure",
      "Extreme uv degradation & sub surface heat build up",
      "Industrial pollutants & Acid rains"
    ],
    linkToProductId: "p3"
  },
  {
    id: "eco-grey",
    name: "GREY ECONOMY TARPAULINS",
    gsm: 250,
    material: "12ft x 18ft",
    thickness: "0.24 mm",
    uvProtection: "Reflective Light-Shield & Solar UV Defense",
    waterproofLevel: "Dual Laminated Water-Repellent Sheathing",
    tearStrength: "Standard Cross-Weave Grid",
    use: "Covering machinery, crates, and storage goods in open-air yards.",
    why: "Easily reflected and identified at any time of the day or night. Outstanding thermal and light reflection, allowing ease of visual security monitoring day and night to protect assets.",
    color: "Grey",
    colorClass: "bg-slate-500",
    image: "/images/grey_tarp_use_1780393676967.png",
    features: [
      "Oil , grease & fuel spills",
      "Sharp edge puncture & tearing",
      "Condesation & moisture trapping"
    ],
    linkToProductId: "p3"
  }
];

const getPiecesCountByColor = (color: string): number => {
  const normColor = color.toLowerCase().trim();
  if (normColor.includes('black')) return 3;
  if (normColor.includes('blue')) return 5;
  if (normColor.includes('yellow')) return 2;
  if (normColor === 'green') return 3;
  if (normColor.includes('grey') || normColor.includes('gray')) return 5;
  if (normColor.includes('army green') || normColor.includes('armygreen')) return 5;
  if (normColor.includes('stripes') || normColor.includes('striped')) return 5;
  if (normColor === 'orange') return 2;
  return 2;
};

interface ProductCardProps {
  item: ShowcaseItem;
  key?: string;
}

function ProductCard({ item }: ProductCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div 
      className={`bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
        isOpen ? 'border-amber-400 ring-2 ring-amber-400/10' : 'border-slate-200/80 hover:border-slate-350'
      }`}
    >
      {/* 1. Product Image Container */}
      <div className="relative h-64 w-full bg-slate-900 group overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Upper Specs Overlays */}
        <span className="absolute top-4 left-4 bg-slate-950/90 text-[10px] font-mono font-bold tracking-widest text-amber-400 border border-white/10 px-3 py-1 rounded-md uppercase z-10 shadow-sm">
          {item.gsm} GSM • {item.material.split(' ')[0]}
        </span>

        <div className="absolute top-4 right-4 bg-slate-950/95 px-2.5 py-1.5 rounded-lg border border-slate-800 backdrop-blur-[3px] flex items-center gap-1.5 z-10 shadow-md">
          <span className={`w-2.5 h-2.5 rounded-full border border-white/20 ${item.colorClass}`} />
          <span className="text-[10px] font-bold text-white font-mono uppercase tracking-wider">{item.color}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-4 flex justify-between items-end">
          <span className="text-[9px] font-mono text-amber-300 font-bold tracking-wider uppercase bg-black/40 px-2 py-0.5 rounded backdrop-blur-[2px]">
            In-Field Real View
          </span>
          <span className="text-[9px] font-mono text-white/90 bg-emerald-650/80 px-2 py-0.5 rounded backdrop-blur-[2px] font-semibold border border-emerald-500/20">
            Uganda Tested
          </span>
        </div>
      </div>

      {/* 2. Product Information and Expandable Dropdown Drawer */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between bg-white">
        <div>
          <h3 className="text-base sm:text-lg font-black font-display text-slate-900 leading-snug mb-3">
            {item.name}
          </h3>

          {/* Core Visual Dropdown Trigger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl border text-left text-xs font-black font-mono uppercase tracking-wider transition-all cursor-pointer shadow-sm ${
              isOpen 
                ? 'bg-amber-400 border-amber-450 text-slate-950 hover:bg-amber-500' 
                : 'bg-slate-100 hover:bg-slate-200/85 border-slate-205 text-slate-805'
            }`}
          >
            <span className="flex items-center gap-2">
              <Sparkles className={`w-3.5 h-3.5 ${isOpen ? 'text-slate-950' : 'text-amber-500'} animate-pulse`} />
              <span>{isOpen ? 'COLLAPSE ACTIVE SPECS' : 'DETAILS & SPECIALIZED SPECS'}</span>
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-350 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* 3. In-Place Expandable Panel (Drop-Down Drawer Content) */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[800px] opacity-100 mt-4 border-t border-slate-100 pt-4' : 'max-h-0 opacity-0'
          }`}>
            
            {/* Spec Matrix Grid (Thickness & GSM) */}
            <div className="mb-4 bg-slate-50 border border-slate-100 p-3.5 rounded-xl text-[11px] grid grid-cols-2 gap-3.5">
              <div>
                <span className="text-slate-450 font-mono uppercase tracking-wider text-[8px] block mb-0.5">📏 THICKNESS</span>
                <span className="font-extrabold text-slate-800 text-xs">{item.thickness}</span>
              </div>
              <div>
                <span className="text-slate-450 font-mono uppercase tracking-wider text-[8px] block mb-0.5">⚖️ RESISTANCE</span>
                <span className="font-extrabold text-slate-800 text-xs">{item.waterproofLevel.split(' ')[0]} Protected</span>
              </div>
              <div className="col-span-2 pt-2 border-t border-slate-200/40">
                <span className="text-slate-450 font-mono uppercase tracking-wider text-[8px] block mb-0.5">🧬 MATERIAL MATRIX</span>
                <p className="text-[11px] text-slate-600 font-sans leading-relaxed font-semibold">{item.material}</p>
              </div>
            </div>

            {/* Weather specs */}
            <div className="mb-4 bg-blue-50/25 border border-blue-100/60 p-3.5 rounded-xl text-[11px] space-y-2">
              <div>
                <span className="text-blue-800 font-mono uppercase tracking-wider text-[8px] block mb-0.5">💧 WATERPROOF GRADE</span>
                <span className="font-extrabold text-blue-950">{item.waterproofLevel}</span>
              </div>
              <div>
                <span className="text-amber-800 font-mono uppercase tracking-wider text-[8px] block mb-0.5">☀️ UV SOLAR PROTECTION</span>
                <span className="font-medium text-slate-700">{item.uvProtection}</span>
              </div>
              <div>
                <span className="text-purple-850 font-mono uppercase tracking-wider text-[8px] block mb-0.5">🛡️ TEAR STRENGTH CAPACITY</span>
                <span className="font-medium text-slate-700">{item.tearStrength}</span>
              </div>
            </div>

            {/* Specialized Task Purpose */}
            <div className="mb-4 bg-amber-50/40 border border-amber-100/80 p-3.5 rounded-xl text-[11px] text-amber-955">
              <span className="text-[8px] uppercase font-mono font-bold tracking-wider block text-amber-800 mb-1">🎯 Specialized Task Purpose</span>
              <p className="leading-relaxed font-sans font-medium text-slate-700">{item.use}</p>
              <div className="mt-2.5 pt-2.5 border-t border-amber-200/40 text-[10px] italic text-amber-900/90 font-mono leading-relaxed">
                "{item.why}"
              </div>
            </div>

            {/* Detailed Key Features */}
            <div className="space-y-1.5 text-xs text-slate-600">
              <span className="text-[8px] uppercase font-mono font-bold tracking-wider block text-slate-400 mb-1.5">📋RESISTANT TO</span>
              {item.features.map((feat, index) => (
                <div key={index} className="flex items-start gap-1.5 bg-slate-50/70 p-2.5 rounded-lg border border-slate-100/80">
                  <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="leading-normal text-slate-600 text-[11px] font-medium">{feat}</span>
                </div>
              ))}
            </div>

            {/* Dynamic Direct Purchase */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <a 
                href="https://teaxy.store" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-slate-900 hover:bg-slate-950 text-white py-2.5 rounded-xl font-bold text-[11px] font-mono tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Shop on teaxy.store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Sealed Pack Information and Specs Row details */}
      <div className="p-4 bg-slate-50 border-t border-slate-200/50 flex flex-col items-center gap-1.5 text-center mt-auto">
        <div className="text-[10px] font-extrabold text-blue-900 font-mono uppercase bg-blue-50/70 border border-blue-100/50 px-2.5 py-0.5 rounded-full">
          {getPiecesCountByColor(item.color)} Pieces Pack Sealing
        </div>
        <div className="text-[9px] text-slate-500 font-medium font-mono uppercase bg-slate-100/60 px-2.5 py-0.5 rounded border border-slate-200/10">
          Kampala Central Warehouse Box
        </div>
      </div>
    </div>
  );
}

export default function ProductCatalog({ onNavigate }: ProductCatalogProps) {
  return (
    <section id="catalog" className="py-16 md:py-24 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 text-amber-955 border border-amber-200/50 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Official Tarpaulins Showroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            Uganda-Optimized Tarpaulin Material Catalog
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto">
            For All Farmers In Uganda,Get Real Value from your Harvests This Season by using Clean & Guaranteed Tarpaulin. Buy TSS Uganda  tarpaulins from a TSS Authorized Dealer near you at the Lowest Prices OR Order on teaxy.store .
          </p>
        </div>

        {/* CATEGORY 1: HEAVY DUTY TARPAULINS FIRST */}
        <div className="mb-20">
          <div className="border-b border-slate-200 pb-5 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-900 uppercase block mb-1">The True Face Of Durability</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-955 tracking-tight flex items-center gap-2">
                Heavy-Duty Tarpaulins <span className="text-xs font-bold font-mono tracking-widest text-[#d97706] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase font-semibold">400 - 800 GSM</span>
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md font-light leading-relaxed">
              Suitable for Heavy Duty and Industrial activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HEAVY_DUTY_SHOWCASE.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* CATEGORY 2: ECONOMY TARPAULINS NEXT */}
        <div className="mb-16">
          <div className="border-b border-slate-200 pb-5 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-3">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-blue-900 uppercase block mb-1">FOR THE LOWEST BUDGET</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-955 tracking-tight flex items-center gap-2">
                Economy Tarpaulins <span className="text-xs font-bold font-mono tracking-widest text-blue-900 bg-blue-50 border border-blue-105 px-2 py-0.5 rounded uppercase font-semibold">250 GSM</span>
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-md font-light leading-relaxed">
              Suitable For Light Weight Activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ECONOMY_SHOWCASE.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Kampala operations notice banner */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-955 to-slate-950 rounded-xl p-8 mt-16 text-white border border-blue-800 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl" />
          <div className="md:max-w-xl relative z-10">
            <h4 className="text-xl font-bold font-display text-white mb-2 uppercase tracking-wide">B2B</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              For Bulk /Wholesale purchases Anywhere.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto z-10">
            <a
              href="tel:+256761414008"
              className="px-6 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-blue-950 rounded-lg font-black text-xs uppercase tracking-widest text-center w-full md:w-auto transition-all shadow-lg shadow-yellow-500/10 hover:scale-105 border border-yellow-300"
            >
              Call/ WhatsApp : +256 761414008 
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
