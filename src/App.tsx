/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductCatalog from './components/ProductCatalog';
import PromotionsSection from './components/PromotionsSection';
import SuccessStories from './components/SuccessStories';
import RegionalImpactHub from './components/RegionalImpactHub';
import Footer from './components/Footer';
import truck from './assets/images/aquaculture_black_tarp_1780393207082";

export default function App() {
  // Navigation active section tracker
  const [activeSection, setActiveSection] = useState<string>('catalog');

  // Smooth scroll helper to push selected section gracefully down into view
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Perform smooth viewport scrolling matching scroll-mt settings
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // scroll to top for hero slider
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      
      {/* Universal header navigation */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Modules Panel */}
      <main className="flex-grow">
        
        {/* Core Hero Showcase Slider */}
        <HeroSection onNavigate={handleNavigate} />

        {/* 1. Materials Catalog Specifications Screen */}
        <ProductCatalog 
          onNavigate={handleNavigate} 
        />

        {/* 2. Live Events and Active Seasonal Promotions */}
        <PromotionsSection />

        {/* Success Stories showcase */}
        <SuccessStories />

        {/* 3. Uganda & Regional Social Impact Dashboard */}
        <RegionalImpactHub />

      </main>

      {/* Corporate directory footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
