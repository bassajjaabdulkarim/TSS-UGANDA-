/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialSlide {
  id: string;
  image: string;
  alt: string;
}

const TESTIMONIAL_IMAGES: TestimonialSlide[] = [
  {
    id: 'coffee-farmer',
    image: '/assets/images/testimonial_coffee_farmer_1789401630366.jpg',
    alt: 'Coffee farmer customer testimonial with sun-drying tarpaulin'
  },
  {
    id: 'transit-truck',
    image: '/assets/images/testimonial_truck_driver_1789401644785.jpg',
    alt: 'Commercial transit driver customer testimonial with truck cargo tarpaulin'
  },
  {
    id: 'hardware-store',
    image: '/assets/images/testimonial_hardware_owner_1789401658527.jpg',
    alt: 'Hardware stockist owner customer testimonial with tarpaulin rolls'
  },
  {
    id: 'fish-farming',
    image: '/assets/images/testimonial_fish_farmer_1789401670593.jpg',
    alt: 'Aquaculture fish farmer testimonial with tarpaulin pond lining'
  },
  {
    id: 'maize-harvest',
    image: '/assets/images/testimonial_maize_farmer_1789401682950.jpg',
    alt: 'Cooperative grain farmer testimonial with clean maize drying tarpaulin'
  }
];

interface SiteMapProps {
  onNavigate?: (sectionId: string) => void;
}

export default function SiteMap({ onNavigate }: SiteMapProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = TESTIMONIAL_IMAGES.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-scrolling timer
  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPaused]);

  return (
    <section 
      id="sitemap" 
      className="py-16 md:py-24 bg-slate-900 text-slate-100 border-t border-slate-800 scroll-mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Only */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            Customer Testimonials
          </h2>
        </div>

        {/* Carousel with 5 scrolling images only */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
          {/* Slides Track */}
          <div 
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TESTIMONIAL_IMAGES.map((item, index) => (
              <div 
                key={item.id} 
                className="w-full flex-shrink-0 relative aspect-[16/9] sm:aspect-[16/9] md:aspect-[21/9] max-h-[560px] bg-slate-950"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-950/70 hover:bg-slate-900/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg cursor-pointer z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-950/70 hover:bg-slate-900/90 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg cursor-pointer z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-2.5 z-10">
            {TESTIMONIAL_IMAGES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex 
                    ? 'w-8 h-2.5 bg-amber-400' 
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
