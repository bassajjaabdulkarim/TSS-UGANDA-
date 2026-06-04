/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TarpaulinProduct {
  id: string;
  name: string;
  category: 'heavy-duty' | 'economy-agri' | 'custom';
  gsm: number; // Grams per square meter
  material: string; // HDPE, PVC, LDPE Laminated, etc.
  uvProtection: string; // e.g., "Standard", "Double Equatorial UV (6%)", "Max UV Barrier"
  waterproofLevel: string; // e.g., "100% Hermetic", "Water-Repellent"
  tearStrength: string; // e.g., "High-Tensile Reinforced", "Standard Weave"
  thickness: string; // e.g., "0.5mm", "0.35mm", "0.22mm"
  colorOptions: string[];
  features: string[];
  bestFor: string[];
  basePricePerSqm: number; // rough estimated cost in UGX
  imageKey: 'truck' | 'coffee' | 'factory';
}

export interface CustomSpecs {
  length: number; // in meters
  width: number; // in meters
  gsm: number;
  material: string;
  uvCoating: 'standard' | 'extra-equatorial' | 'heavy-industrial';
  reinforcement: {
    eyeletsEnabled: boolean;
    eyeletIntervalCm: number; // 30cm, 50cm, 100cm
    reinforcedCorners: boolean;
    doubleStitchedHem: boolean;
    ropeInHem: boolean;
  };
  color: string;
  application: string;
  notes: string;
}

export interface QuoteRequest {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  deliveryLocation: string; // Kampala, Gulu, Mbale, etc.
  regionalSector: 'retailer' | 'smallholder-farmer' | 'cooperative' | 'logistics-trucker' | 'construction-firm' | 'export-trader';
  customSpecs: CustomSpecs;
  totalArea: number; // L * W
  totalWeightKg: number;
  calculatedPriceUGX: number;
  createdAt: string;
  status: 'pending' | 'calculated' | 'approved';
}

export interface FarmerAdvisoryInput {
  cropType: 'coffee-arabica' | 'coffee-robusta' | 'maize' | 'beans' | 'cocoa' | 'general';
  estimatedVolumeKg: number;
  moistureLevelPercent: string;
  regionalLocation: string; // e.g., Kapchorwa, Mbale, Masaka, Gulu
  currentWeather: string; // e.g., Rainy, High Humidity, Direct Equatorial Sun
  specialProtectionNeeded: boolean; // e.g., nocturnal ground condensation protection, transport covers
}

export interface AdvisoryResult {
  stepByStepGuidance: string[];
  recommendedGsm: number;
  protectionStrategies: string[];
  bestPracticesText: string;
  generatedByAI: boolean;
  responseTimestamp: string;
}

export interface RegionalImpactData {
  regionName: string;
  coordinates: { x: number; y: number }; // percentage layout coordinates for interactive SVG map
  details: string;
  statistics: {
    farmersServed: number;
    postHarvestLossDecreasePercent: number;
    coffeePremiumIncreasePercent: number;
  };
  keyCommodity: string;
}
