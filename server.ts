/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Standard middlewares
app.use(express.json());

// In-memory simple storage to keep quote submissions during session
const activeQuotes: any[] = [
  {
    id: "Q-9481",
    customerName: "Ssenyonga David",
    email: "david.ssenyonga@coffee-logistics-ug.com",
    phone: "+256 761414008",
    deliveryLocation: "Masaka Regional Store",
    regionalSector: "cooperative",
    customSpecs: {
      length: 12,
      width: 6,
      gsm: 650,
      material: "Premium High-GSM Reinforced PVC",
      uvCoating: "extra-equatorial",
      reinforcement: {
        eyeletsEnabled: true,
        eyeletIntervalCm: 50,
        reinforcedCorners: true,
        doubleStitchedHem: true,
        ropeInHem: true
      },
      color: "Forest Green",
      application: "Coffee Drying and Overnight Protective Shuttering",
      notes: "Needed urgently for the upcoming Masaka Robusta peak harvest. High humidity expected."
    },
    totalArea: 72,
    totalWeightKg: 46.8,
    calculatedPriceUGX: 1584000,
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: "approved"
  },
  {
    id: "Q-4720",
    customerName: "Kanyike & Sons Ltd",
    email: "kanyiketransporters@gmail.com",
    phone: "+256 761414008",
    deliveryLocation: "Kampala Central Store",
    regionalSector: "logistics-trucker",
    customSpecs: {
      length: 15,
      width: 8,
      gsm: 800,
      material: "Ultimate Heavy Duty Shield PVC",
      uvCoating: "heavy-industrial",
      reinforcement: {
        eyeletsEnabled: true,
        eyeletIntervalCm: 30,
        reinforcedCorners: true,
        doubleStitchedHem: true,
        ropeInHem: true
      },
      color: "Ocean Blue",
      application: "Truck Trailer Cover for Kampala-Mombasa transit corridor",
      notes: "Requires brass double-eyelets and custom 50mm welded bands for wind resistance."
    },
    totalArea: 120,
    totalWeightKg: 96,
    calculatedPriceUGX: 3120000,
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    status: "calculated"
  }
];

// Lazy initialization of GoogleGenAI
let ai: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is not defined. AI functionality will run in fallback mock mode.");
      throw new Error("GEMINI_API_KEY environment variable is required to run the AI Post-Harvest Advisor.");
    }
    ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return ai;
}

// REST endpoints
app.get('/api/quotes', (req, res) => {
  res.json(activeQuotes);
});

app.post('/api/quotes', (req, res) => {
  const newQuote = {
    ...req.body,
    id: `Q-${Math.floor(1000 + Math.random() * 9000)}`,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };
  activeQuotes.unshift(newQuote);
  res.status(201).json(newQuote);
});

// Update Quote Status
app.patch('/api/quotes/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const quote = activeQuotes.find(q => q.id === id);
  if (quote) {
    quote.status = status || quote.status;
    res.json(quote);
  } else {
    res.status(404).json({ error: "Quote not found" });
  }
});

// Post-Harvest Advisory endpoint using Gemini 3.5-flash (free-tier/default)
app.post('/api/advisory/generate', async (req, res) => {
  const input = req.body;
  
  const { cropType, estimatedVolumeKg, moistureLevelPercent, regionalLocation, currentWeather, specialProtectionNeeded } = input;
  
  const prompt = `You are the lead Post-Harvest Handling Specialist and Material Engineering Consultant at TSS Uganda (Kampala).
Your mission is to provide an elite, localized, scientific and highly practical post-harvest handling checklist and material recommendation for a farmer/buyer who has submitted the following data:

Crop Type: ${cropType}
Estimated Crop Volume: ${estimatedVolumeKg} kg
Current Moisture Level of Grain: ${moistureLevelPercent}%
Regional Geography: ${regionalLocation} (Uganda)
Current Weather Conditions during harvest: ${currentWeather}
Special Protections Needed: ${specialProtectionNeeded ? "Yes, includes humidity damp barriers or transit water-proofing" : "Standard sun drying and nocturnal sealing"}

Provide your expert response as a JSON object matching this schema:
{
  "recommendedGsm": <Integer: recommended grams-per-square-meter for drying or shielding, typically choose from (180, 250, 400, 650, 800) depending on durability needs>,
  "stepByStepGuidance": [<Array of strings: detailed, practical step-by-step drying or shielding actions tailored for Kampala commercial, or coffee farming practices>],
  "protectionStrategies": [<Array of strings: protective methods to address weather conditions like high equatorial sun, rainstorms, and condensation risks>],
  "bestPracticesText": "<Raw string of detailed elite crop protection and post-harvest tips to minimize mycotoxins, maintain bean premium grade, and improve local household income>"
}

Ensure the response contains clear references to how TSS Uganda premium tarpaulins (such as UV protection formulas, hermetic seal seams, and sturdy eyelets) solve their problems. Use realistic Ugandan agricultural and transit contexts (e.g. drying Arabica at Mount Elgon Kapchorwa vs Robusta in Masaka, navigating Kampala, preventing yellow mold, preserving aroma).
Return ONLY the JSON. No markdown backticks or surrounding text.`;

  try {
    const aiInstance = getAI();
    const modelResponse = await aiInstance.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedGsm: { type: Type.INTEGER },
            stepByStepGuidance: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            protectionStrategies: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            bestPracticesText: { type: Type.STRING }
          },
          required: ['recommendedGsm', 'stepByStepGuidance', 'protectionStrategies', 'bestPracticesText']
        }
      }
    });

    if (modelResponse.text) {
      const parsedAdvisory = JSON.parse(modelResponse.text.trim());
      res.json({
        ...parsedAdvisory,
        generatedByAI: true,
        responseTimestamp: new Date().toISOString()
      });
    } else {
      throw new Error("Empty model response");
    }
  } catch (err: any) {
    console.error("Gemini advisory simulation error:", err);
    // Graceful fallback if API is not configured or fails
    const defaultRecommendedGsm = cropType.includes('coffee') ? 250 : 180;
    res.json({
      recommendedGsm: defaultRecommendedGsm,
      stepByStepGuidance: [
        `1. Spread the ${cropType.replace('-', ' ')} evenly directly onto a clean TSS Uganda heavy duty agricultural tarpaulin.`,
        "2. Ensure the layer thickness does not exceed 3cm to facilitate consistent airflow and fast moisture release under the equatorial sun.",
        "3. Turn the beans/grains every 2 hours using a smooth wooden rake to prevent bruising of fragile coffee husks.",
        "4. Quickly fold the tarpaulin into a hermetic triangular tent design (the TSS 'Enclosure Method') immediately if rain clouds accumulate over Kampala.",
        "5. Under no circumstances should crops dry directly on bare soil. Soil contact matches dirt with coffee beans, introduces mold spores, and lowers export premium grades."
      ],
      protectionStrategies: [
        "UV Shielding: Equatorial Africa sun causes intense radiation. Our TSS UV-treated layers protect crops from photochemical degradation.",
        "Hermetic Damp Barrier: Place a primary black high-density ground barrier sheet beneath to stop ground moisture ascending into drying crop layers at night."
      ],
      bestPracticesText: "Post-harvest handling is the ultimate driver of Uganda's global coffee competitiveness. By drying on TSS food-grade heavy-duty tarpaulins, farmers in regional cooperatives like Sironko, Mbale, and Kasese completely eliminate soil mold contamination, reducing ochratoxin levels to export safety standards. High-GSM tarpaulins with micro-weave structures ensure zero soil contact and faster, more reliable drying rates, boosting farmgate prices by up to 35% and securing regional household livelihoods.",
      generatedByAI: false,
      responseTimestamp: new Date().toISOString(),
      note: "Running in offline fallback mode. Configure GEMINI_API_KEY in Settings > Secrets to activate real-time AI consulting."
    });
  }
});

// Configure Vite middleware in development, and host static in prod
const startApp = async () => {
  // Serve the root-level assets directory statically under /assets
  app.use('/assets', express.static(path.join(process.cwd(), 'assets')));

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`TSS Uganda server running on http://0.0.0.0:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  });
};

startApp().catch((err) => {
  console.error("Error launching TSS Uganda full-stack server:", err);
});
