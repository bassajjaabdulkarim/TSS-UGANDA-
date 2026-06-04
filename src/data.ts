/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TarpaulinProduct, RegionalImpactData } from './types';

export const TSS_PRODUCTS: TarpaulinProduct[] = [
  {
    id: "p1",
    name: "TSS Heavy-Duty Carrier Shield",
    category: "heavy-duty",
    gsm: 650,
    material: "Multi-layered High-Density Polyester PVC Core",
    uvProtection: "Double Equatorial UV Shield (6.5% compound concentration)",
    waterproofLevel: "100% Hermetically Sealed Welded Seams",
    tearStrength: "Cross-woven High-Tensile 1300D Thread Matrix",
    thickness: "0.55 mm",
    colorOptions: ["Yellow"],
    features: [
      "Fitted with non-rusting solid brass eyelets spaced every 30cm",
      "Ultrasonically welded double-layered rope reinforced hems",
      "Special anti-fungal treatment on bottom coating prevents trailer mold",
      "Flexible down to -30°C and thermal barrier up to 70°C equatorial heat"
    ],
    bestFor: [
      "Long-haul truck cargo covering along Kampala-Mombasa & Kampala-Kigali corridors",
      "Building multi-season construction weatherproofing screens inside Kampala core",
      "Commercial grain storage stacks and outdoor machinery storage"
    ],
    basePricePerSqm: 185000,
    imageKey: "truck"
  },
  {
    id: "p2",
    name: "TSS Coffee Quality - Crop Guard Pro",
    category: "heavy-duty",
    gsm: 400,
    material: "Reinforced High-Density Polyethylene (HDPE) Core with Dual LDPE Sheaths",
    uvProtection: "Volcanic African Sun Stabilized (Max UV Barrier to block solar heat)",
    waterproofLevel: "100% Impermeable (Stops ground condensation rising)",
    tearStrength: "Double-thread Ripstop Grid weaving",
    thickness: "0.38 mm",
    colorOptions: ["Orange", "Green"],
    features: [
      "Food-grade certification (safe for direct coffee & food crop contact)",
      "Zero odors - preserves delicate green coffee bean aromas and volatile oils",
      "Ultra-slick hydrophobic surface allows rain runoff in tropical micro-storms",
      "Tough, lightweight frame allowing quick folding for lightning-fast rain response"
    ],
    bestFor: [
      "On-tarp coffee cherry and parchment drying on regional Ugandan farms",
      "Cooperative coffee collection depots (Masaka, Mbale, Kapchorwa, Kasese)",
      "Reducing post-harvest grain mold and maintaining specialty rating quality"
    ],
    basePricePerSqm: 11000,
    imageKey: "coffee"
  },
  {
    id: "p3",
    name: "TSS Economy Crop Defender",
    category: "economy-agri",
    gsm: 250,
    material: "Medium-Density Laminated Polyethylene Matrix",
    uvProtection: "Standard Solar UV-A/B Equatorial Coating",
    waterproofLevel: "Dual Laminated Water-Repellent Sheathing",
    tearStrength: "Standard Cross-Weave",
    thickness: "0.24 mm",
    colorOptions: ["Blue", "Army Green", "Grey"],
    features: [
      "Lightweight build easy for smallholder farmers to carry to remote shambas",
      "Reinforced corner patches with aluminum eyelets placed every 100cm",
      "Excellent heat retention properties - ideal for greenhouse composting layouts",
      "Highly affordable protective coverage for low-capital farming households"
    ],
    bestFor: [
      "Blue: Affordable & lightweight livestock roofing and small market stalls",
      "Army Green: Covering outdoor goods, equipment, and standing harvest stacks",
      "Grey: All-weather cover with high reflectivity, easily identified day or night"
    ],
    basePricePerSqm: 6800,
    imageKey: "factory"
  }
];

export const REGIONAL_IMPACT: RegionalImpactData[] = [
  {
    regionName: "Kampala Central (HQ)",
    coordinates: { x: 50, y: 70 }, // Centered around Kampala Central Store
    details: "TSS Uganda corporate headquarters & main fabrication workshop. Center of logistics, distribution coordination, custom eyelet tooling, and regional bulk supply exports.",
    statistics: {
      farmersServed: 12500,
      postHarvestLossDecreasePercent: 28,
      coffeePremiumIncreasePercent: 15
    },
    keyCommodity: "Wholesale & Custom Truck Covers"
  },
  {
    regionName: "Mount Elgon Region (Mbale & Kapchorwa)",
    coordinates: { x: 74, y: 56 },
    details: "Active coffee hub serving Bugisu Arabica farmers. Over 6,000 TSS Crop Guard mats deployed in Sironko, Kapchorwa, and Mbale, preventing ground humidity from spoiling specialty mountain beans.",
    statistics: {
      farmersServed: 8400,
      postHarvestLossDecreasePercent: 44,
      coffeePremiumIncreasePercent: 32
    },
    keyCommodity: "Bugisu Arabica Specialty Drying"
  },
  {
    regionName: "Greater Masaka Region",
    coordinates: { x: 42, y: 80 },
    details: "Heart of Uganda's Robusta Coffee belt. Partnered with local cooperatives and agricultural extension agents to sensitize farmers on sun-drying coffee on 250+ GSM clean tarps.",
    statistics: {
      farmersServed: 11200,
      postHarvestLossDecreasePercent: 38,
      coffeePremiumIncreasePercent: 25
    },
    keyCommodity: "Robusta Crop Quality Preserver"
  },
  {
    regionName: "Northern Logistics Hub (Gulu Region)",
    coordinates: { x: 46, y: 30 },
    details: "Critical logistics node connecting Uganda with South Sudan and DRC. High-GSM truck shields from TSS Uganda secure heavy-haul grain and agricultural cargo traversing border routes.",
    statistics: {
      farmersServed: 4500,
      postHarvestLossDecreasePercent: 32,
      coffeePremiumIncreasePercent: 18
    },
    keyCommodity: "Regional Transit & Moisture Armor"
  },
  {
    regionName: "Albertine Ridge (Kasese & Fort Portal)",
    coordinates: { x: 18, y: 64 },
    details: "Ruwenzori Arabica & Cocoa harvesting sector. Tarpaulins protect high-grade cocoa beans from erratic rainfall during sensitive fermentation and drying phases.",
    statistics: {
      farmersServed: 5300,
      postHarvestLossDecreasePercent: 40,
      coffeePremiumIncreasePercent: 28
    },
    keyCommodity: "Organic Cocoa & Arabica Shield"
  }
];

export const SOCIAL_BENEFITS = [
  {
    title: "Reducing Post-Harvest Losses",
    description: "Tarpaulins provide physical separation from the ground during drying. This single step eliminates soil moisture absorption, stones, and dangerous molds (such as Aspergillus), reducing regional crop waste from 35% down to under 5%.",
    metric: "-30%",
    metricLabel: "Average Grain Waste"
  },
  {
    title: "Empowering Smallholder Farmers",
    description: "By utilizing durable Crop Guard sheets, farmers maintain pristine crop characteristics, achieving standard quality grades that qualify them for coffee exports, tripling household premium earnings.",
    metric: "+35%",
    metricLabel: "Average Income Growth"
  },
  {
    title: "Youth Employments and Empowerment",
    description: "Operating from the commercial hub of Kampala, TSS Uganda actively employs Kampala youths in custom tooling, welding, logistics setups, and regional agricultural extension workshops.",
    metric: "45+",
    metricLabel: "Kampala Youths Employed"
  },
  {
    title: "Boosting Exports & Local Competitiveness",
    description: "Our high-specification UV and weather armor tarpaulins shield shipping trucks driving towards Kenya and regional borders, ensuring beans arrive in Mombasa port perfectly dry and ready for global markets.",
    metric: "1.2M",
    metricLabel: "Sqm Shielding Exports Annually"
  }
];

export const FARMER_TIPS = [
  {
    title: "Selecting the Right Tarpaulin GSM",
    content: "For small-volume drying (maize, sorghum), our 250 GSM Economy Crop Defender is perfect. For high-volume coffee drying where tarps are turned and folded daily, utilize our premier 400 GSM Food-Grade Crop Guard which features dedicated equatorial UV filters."
  },
  {
    title: "Avoiding Nocturnal Dew Condensation",
    content: "When folding crops at sunset, do not wrap them flat. Instead, raise the center pole slightly of your TSS tarpaulin to form an A-line tent. This allows the overnight damp dew to slide down the water-proof canvas exterior, rather than pooling inside."
  },
  {
    title: "Soil Contact is the Enemy of Premium Trade",
    content: "Drying directly on dirt lets dirt, dust, and chicken feces blend with the coffee cherries. Dirt contact is the main source of the toxic fungal chemical 'Ochratoxin A'. Drying exclusively on TSS tarpaulins ensures export compliance."
  }
];
