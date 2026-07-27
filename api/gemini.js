// ==========================================
// FILE: /api/gemini.js
// CORE: Vercel Serverless Proxy for Gemini API
// ==========================================

import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // --- CORS Preflight Handling ---
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Set CORS headers for the actual request
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 1. Enforce POST requests only
  if (req.method !== 'POST') {
    console.warn(`REJECTED: Invalid request method used: ${req.method}`);
    return res.status(405).json({ error: 'Method Not Allowed. Route requires POST.' });
  }

  try {
    // 2. Parse the incoming payload from the frontend
    const { prompt, mode, model } = req.body;

    // 3. Default to the 1.5 Flash model if the frontend fails to specify
    const targetModel = model || 'gemini-1.5-flash';

    if (!prompt) {
      console.error("VALIDATION ERROR: Frontend payload delivered without a prompt string.");
      return res.status(400).json({ error: 'Payload missing required prompt string.' });
    }

    // 4. Securely access the API key from the Vercel .env vault
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("CRITICAL VAULT ERROR: GEMINI_API_KEY is missing from Vercel .env configurations.");
      return res.status(500).json({ error: "Server vault configuration error. API key is locked or missing." });
    }

    // 5. Initialize the Gemini SDK
    const genAI = new GoogleGenerativeAI(apiKey);

    // 6. Dynamic System Instruction Routing (The Jai-Verse Persona Engine)
    let systemInstruction = "You are Jai, an autonomous multimodal thought-partner engineered to operate as a persistent cognitive system across text, audio, and visual modalities.";
    
    switch (mode) {
      case 'Genius-Philosopher':
        systemInstruction = "You are a genius philosopher, offering deep, profound, and architect-level insights.";
        break;
      case 'Short & Punchy':
        systemInstruction = "Keep it extremely concise, witty, and punchy. No fluff.";
        break;
      case 'Comedic Roast':
        systemInstruction = "You are a master of comedic roasting. Be sharp, witty, and unapologetically sarcastic.";
        break;
      case 'I\'m Feeling Lucky':
        systemInstruction = "Surprise the user with wild, creative, and highly unconventional responses. Think outside the box.";
        break;
      default:
        break;
    }

    // 7. Configure the specific model instance
    const generativeModel = genAI.getGenerativeModel({
      model: targetModel,
      systemInstruction: systemInstruction,
    });

    console.log(`[SYS-LOG] Processing payload. Mode: ${mode}, Model: ${targetModel}`);

    // 8. Execute the generation
    const result = await generativeModel.generateContent(prompt);
    const responseText = result.response.text();

    console.log("[SYS-LOG] Success: Payload generated and routed back to frontend.");

    // 9. Return the clean JSON object expected by the frontend
    return res.status(200).json({ text: responseText });

  } catch (error) {
    // 10. Robust Vercel Error Logging
    console.error("VERCEL SERVERLESS FATAL ERROR:", error);
    
    return res.status(500).json({
      error: "Internal Server Error during Gemini API execution.",
      details: error.message
    });
  }
}