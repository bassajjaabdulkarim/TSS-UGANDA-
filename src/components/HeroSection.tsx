/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles, Sprout, Truck, Drill, CornerDownRight, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HERO_IMAGES = [
  {
    src: "/src/assets/images/orange_tarp_coffee_1780390624788.png",
    tag: "COFFEE QUALITY & POST-HARVEST EXCELLENCE",
    title: "Empowering Uganda's Farmers, Securing Global Premium Exports",
    subtitle: "Durable tarpaulins designed to eliminate soil contamination, speed up sun drying of Arabica and Robusta, and double standard farmgate incomes.",
    icon: Sprout,
    gradient: "from-blue-950/95 via-slate-950/85 to-transparent",
    actionText: "View Live Events & Promos",
    actionTarget: "promotions"
  },
  {
    src: "/src/assets/images/yellow_tarp_truck_1780390607794.png",
    tag: "HEAVY INDUSTRIAL & LOGISTICS SUPPLY CHAIN SECURITY",
    title: "Rugged Weather Armor for East Africa's Core Transit Corridors",
    subtitle: "High-GSM tear-proof covers engineered for long-haul carrier trucks operating across East Africa, protecting vital goods from harsh equatorial sun and heavy tropical monsoons.",
    icon: Truck,
    gradient: "from-blue-950/95 via-slate-950/85 to-transparent",
    actionText: "Explore Materials Catalog",
    actionTarget: "catalog"
  },
  {
    src: "/src/assets/images/tarpaulin_customization_hub_1780388737537.png",
    tag: "KAMPALA FABRICATION & CUSTOMIZATION HUB",
    title: "Precision Tooling, Heat-Sealing & Heavy-Duty Eyeleting",
    subtitle: "Based in Kampala, we custom-tailor tarpaulins to any length, reinforcing with brass eyelets and robust heat welded hems.",
    icon: Drill,
    gradient: "from-blue-950/95 via-slate-950/85 to-transparent",
    actionText: "Explore Materials Catalog",
    actionTarget: "catalog"
  }
];

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = HERO_IMAGES[currentIndex];
  const IconComponent = currentSlide.icon;

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-12 md:py-20 lg:py-24 border-b border-slate-900">
      {/* Background Interactive Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentSlide.src}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Darker localized gradient overlay for absolute readability */}
            <div className={`absolute inset-0 bg-gradient-to-r ${currentSlide.gradient}`} />
            <div className="absolute inset-0 bg-slate-950/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Slider Content */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Promotional badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              key={`badge-${currentIndex}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-400/15 border border-yellow-400/30 rounded-full text-xs font-bold text-yellow-400 tracking-wider uppercase mb-6 font-mono"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-450" />
              <span>{currentSlide.tag}</span>
            </motion.div>

            {/* Title with Outfit typographic details */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              key={`title-${currentIndex}`}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.1] mb-6 max-w-2xl"
            >
              {currentSlide.title}
            </motion.h1>

            {/* Subtext description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              key={`sub-${currentIndex}`}
              className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl font-light leading-relaxed"
            >
              {currentSlide.subtitle}
            </motion.p>

            {/* Call to actions in layout */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              key={`actions-${currentIndex}`}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => onNavigate(currentSlide.actionTarget)}
                className="inline-flex items-center gap-2.5 bg-yellow-400 hover:bg-yellow-500 text-blue-950 px-6 py-3.5 rounded-lg font-black text-xs tracking-wider uppercase shadow-xl hover:shadow-yellow-500/10 transition-all duration-200 cursor-pointer border border-yellow-300"
              >
                <IconComponent className="w-4.5 h-4.5" />
                <span>{currentSlide.actionText}</span>
              </button>
            </motion.div>

            {/* Slider Dots */}
            <div className="flex gap-2.5 mt-10 md:mt-12">
              {HERO_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? 'w-8 bg-yellow-400' 
                      : 'w-2.5 bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Side Fast Contact & Location Card */}
          <div className="lg:col-span-4 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-xl shadow-2xl backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-yellow-400 font-mono text-[10px] uppercase tracking-widest font-bold mb-4">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span>Direct Showroom & Supplies</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 leading-tight">Visit Us in Kampala</h3>
              <p className="text-xs text-slate-400 mb-6 font-light">
                We are strategically positioned right at the heart of Kampala's busiest transportation and trading sector to serve bulk orders instantly.
              </p>

              <div className="space-y-4 text-sm mb-6 border-t border-slate-800/80 pt-5">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 bg-slate-800 rounded text-yellow-400 mt-0.5">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider">Main Hub Location</h4>
                    <p className="text-xs text-slate-300 mt-1">Kampala Central Division, Uganda</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-slate-800/30 pt-3">
                  <div className="p-1.5 bg-slate-800 rounded text-yellow-400 mt-0.5">
                    <Truck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 text-xs uppercase tracking-wider">Upcountry Deliveries</h4>
                    <p className="text-xs text-slate-300 mt-1">Same-day dispatch to Mbale, Kapchorwa, Jinja, Masaka, Gulu, Mbarara and regional East Africa border stations.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('catalog')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium py-3 px-4 rounded-lg text-xs uppercase tracking-wider border border-slate-700 transition-colors"
              >
                Explore Materials Catalog
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
