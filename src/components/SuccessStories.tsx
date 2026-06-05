/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, 
  TrendingUp, 
  Droplets, 
  Truck, 
  Warehouse, 
  Coins, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle,
  Clock
} from 'lucide-react';

interface SuccessStory {
  id: string;
  category: 'drying' | 'storage' | 'transit';
  categoryLabel: string;
  title: string;
  farmerName: string;
  location: string;
  challenge: string;
  solution: string;
  impactMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  testimonial: string;
  imageKey: 'coffee' | 'factory' | 'truck';
  materialUsed: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-1",
    category: "drying",
    categoryLabel: "Post-Harvest Drying",
    title: "Overcoming Ochratoxin: Bugisu Arabica Premium Grade Victory",
    farmerName: "Beatrice Chebet",
    location: "Kapchorwa District, Mount Elgon Region",
    challenge: "Drying coffee cherries directly on bare soil introduced destructive moisture, dust, and Aspergillus mold spores (the cause of Ochratoxin A). This heavily degraded our crop's quality. Upcountry bulk buyers either rejected our harvest outright or paid extreme discount prices, pushing my family and cooperative members into severe seasonal debt.",
    solution: "The Mount Elgon Cooperative union distributed TSS 400 GSM Food-Grade Crop Guard Pro tarpaulins. Equipped with volcanic African Sun stabilizers and a direct food-grade inner matrix, these sheets isolated the damp soil, blocked high solar radiation heat, and allowed the cherries to dry in a pristine, uncontaminated environment.",
    testimonial: "Drying coffee directly on dirt almost drove my family into debt because buyers would pay pennies for contaminated beans. Since using the TSS Crop Guard Pro, our beans are flawlessly clean. We sold our entire Bugisu Arabica crop at a specialty premium grade this year, doubling our farmgate earnings!",
    materialUsed: "TSS Crop Guard Pro (400 GSM, Specialty Food-Grade)",
    imageKey: "coffee",
    impactMetrics: [
      { label: "Post-Harvest Defect Loss", value: "< 2%", detail: "Down from 35% soil rot" },
      { label: "Premium Farmgate Price", value: "+44%", detail: "Spec-grade export certified" },
      { label: "Drying Time Cut", value: "8 Days", detail: "Shortened from 14-day average" }
    ]
  },
  {
    id: "story-2",
    category: "storage",
    categoryLabel: "Cooperative Warehousing",
    title: "Retaining Dry Integrity: Hermetic Maize Storage Defense",
    farmerName: "Ronald Mugisha",
    location: "Masaka United Farmers Cooperative",
    challenge: "Persistent, erratic rainy seasons in Masaka caused high relative humidity. Moisture from the concrete warehouse slabs seeped up into primary storage pallets, turning dry maize sacks damp, encouraging aflatoxins, and rotting hundreds of storage bags every season. This directly threatened cooperative contracts and members' food security.",
    solution: "Lined storage vaults and stacked bags directly upon TSS Heavy-Duty 650 GSM Carrier Shield sheets. These sheets feature 100% hermetic dual-laminated PE sheaths and ultrasonically welded multi-season seams to seal off ascending ground condensation and roof dripping.",
    testimonial: "We used to lose hundreds of corn and robusta bags every single rainy season to dampness rising from the warehouse slab. Laying down TSS Heavy-Duty sheets under our pallets has created an impenetrable water barrier. Our inventory remains perfectly dry, shielding the livelihoods of over 11,200 farmers.",
    materialUsed: "TSS Heavy-Duty Carrier Shield (650 GSM Poly-PVC Core)",
    imageKey: "factory",
    impactMetrics: [
      { label: "Stored Stock Spoilage", value: "0%", detail: "Completely eliminated damp rot" },
      { label: "Annual Co-Op Savings", value: "3,500+ Bags Safeguarded", detail: "Protected collective volume" },
      { label: "Protected Farmer Families", value: "11,200+", detail: "Secured regional market value" }
    ]
  },
  {
    id: "story-3",
    category: "transit",
    categoryLabel: "Logistics & Transportation",
    title: "Waterproof Long-Haul Carrier Corridor Security",
    farmerName: "David Ssekamanya",
    location: "Gulu Regional Transit Corridor",
    challenge: "Long-haul flatbed trailers traversing the Kampala-Gulu-South Sudan trading corridor faced unpredictable tropical downpours. Weak, standard 150 GSM tarpaulins regularly developed micro-tears under highway winds, letting rain seep in and rot entire container-loads of grain transit cargo, causing high client reimbursement claims.",
    solution: "Outfitted our entire transit fleet with Custom TSS 850 GSM Ultimate Carrier Shield covers. Designed with cross-woven 1300D polyester filaments, reinforced corners, and steel eyelets spaced every 30cm to lock onto trailer trailers securely under high atmospheric drag.",
    testimonial: "Tropical rainstorms on the way to Gulu can ruin a full load of grain in minutes if your truck covers leak. Our TSS Carrier Shield is completely leak-proof and handles high-velocity highway wind resistance without a single tear. We have hit zero cargo claims over active transit contracts.",
    materialUsed: "TSS Ultimate Highway Armor (850 GSM Double-Reinforced PVC)",
    imageKey: "truck",
    impactMetrics: [
      { label: "Transit Water Claims", value: "0.00%", detail: "Zero grain rot claims" },
      { label: "Annual Transporter Net", value: "+18%", detail: "From insurance & quality bonuses" },
      { label: "Average Tarp Lifespan", value: "4+ Years", detail: "Stands up to high equatorial UV" }
    ]
  }
];

export default function SuccessStories() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'drying' | 'storage' | 'transit'>('all');

  const filteredStories = SUCCESS_STORIES.filter(s => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  const getStoryIconOnDemand = (cat: 'drying' | 'storage' | 'transit') => {
    switch (cat) {
      case 'drying':
        return <Droplets className="w-5 h-5 text-amber-500" />;
      case 'storage':
        return <Warehouse className="w-5 h-5 text-amber-500" />;
      case 'transit':
        return <Truck className="w-5 h-5 text-amber-500" />;
    }
  };

  const getStoryImageFallback = (key: 'coffee' | 'factory' | 'truck') => {
    if (key === 'truck') return "/assets/images/yellow_tarp_truck_1780390607794.png";
    if (key === 'coffee') return "/assets/images/orange_tarp_coffee_1780390624788.png";
    return "/assets/images/tarpaulin_customization_hub_1780388737537.png";
  };

  return (
    <section id="stories" className="py-20 md:py-28 bg-white text-slate-900 scroll-mt-20 border-t border-slate-205">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtitle Alignment */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 text-amber-900 border border-amber-200/50 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Pioneering Post-Harvest Quality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            Success Stories: Real Impact Across Uganda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light">
            Read detailed case studies illustrating how TSS Uganda premium tarpaulins preserve quality, block molds, and secure export grades—directly uplifting farmgate earnings and transit security.
          </p>

          {/* Quick Category Filtering */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Case Studies' },
              { id: 'drying', label: 'Meticulous Drying' },
              { id: 'storage', label: 'Safe Storage' },
              { id: 'transit', label: 'Secure Transport' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-blue-900 text-white shadow-md shadow-blue-900/10'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Listing */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredStories.map((story, sIdx) => {
              const isEven = sIdx % 2 === 0;
              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sIdx * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-slate-50 border border-slate-200/60 p-6 sm:p-10 rounded-2xl shadow-sm"
                >
                  
                  {/* Left Column: Visual representation & metrics layout */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden shadow-md">
                      <img
                        src={getStoryImageFallback(story.imageKey)}
                        alt={story.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                      
                      {/* Floating material identification tag */}
                      <span className="absolute bottom-4 left-4 bg-blue-950/95 text-[10px] font-mono text-amber-400 px-3 py-1.5 rounded border border-amber-500/20 font-bold uppercase tracking-wider">
                        Material: {story.materialUsed}
                      </span>
                    </div>

                    {/* Highly polished bento impact stat panels */}
                    <div className="grid grid-cols-3 gap-2">
                      {story.impactMetrics.map((met, mIdx) => (
                        <div key={mIdx} className="bg-white border border-slate-200 p-3 rounded-lg text-center shadow-xs">
                          <span className="text-[9px] uppercase font-mono text-slate-400 block tracking-wider font-extrabold">{met.label}</span>
                          <p className="text-lg sm:text-xl font-black font-mono text-blue-900 mt-1 leading-none">{met.value}</p>
                          <p className="text-[8px] text-emerald-600 mt-1 leading-tight font-medium font-mono">{met.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Case description & testimonial layout */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Upper Category and Location block */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-900 border border-amber-500/20 rounded-full text-[10px] font-black uppercase tracking-wider font-mono">
                        {getStoryIconOnDemand(story.category)}
                        <span>{story.categoryLabel}</span>
                      </span>
                      <span className="text-slate-400 text-xs font-mono">•</span>
                      <span className="text-[11px] font-bold tracking-wide uppercase text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{story.location}</span>
                      </span>
                    </div>

                    {/* Big title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
                      {story.title}
                    </h3>

                    {/* Challenge & Solution details */}
                    <div className="space-y-4 text-xs leading-relaxed text-slate-600 font-light pr-2">
                      <div>
                        <strong className="block text-[10px] font-mono font-bold uppercase text-red-500 tracking-wider mb-1">The Post-Harvest Challenge:</strong>
                        <p>{story.challenge}</p>
                      </div>
                      
                      <div>
                        <strong className="block text-[10px] font-mono font-bold uppercase text-blue-900 tracking-wider mb-1">The TSS Solution:</strong>
                        <p>{story.solution}</p>
                      </div>
                    </div>

                    {/* Elegant Testimonial card */}
                    <div className="bg-blue-950 text-white rounded-xl p-5 border border-blue-900 relative">
                      <Quote className="absolute -top-3.5 -left-1.5 w-8 h-8 text-amber-500/40 transform rotate-180 pointer-events-none" />
                      <p className="text-xs italic leading-relaxed text-slate-200 font-light font-sans">
                        "{story.testimonial}"
                      </p>
                      
                      <div className="mt-4 pt-3 border-t border-blue-900 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white leading-none">{story.farmerName}</p>
                          <p className="text-[9px] text-amber-400 font-bold uppercase tracking-wider mt-1">{story.category === "transit" ? "Transporter" : "Lead Representative"}</p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[9px] text-emerald-400 font-bold uppercase font-mono">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          <span>Verified Case study</span>
                        </span>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
