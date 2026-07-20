import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // 1. Handle CORS Preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 2. Reject non-POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method Not Allowed. Use POST." });
  }

  try {
    // 3. Verify Environment Variable
    // YOUR_API_KEY_HERE is securely pulled from Vercel's .env vault
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("CRITICAL ERROR: GEMINI_API_KEY is missing from Vercel Environment Variables.");
      return res.status(500).json({ error: "API Key missing in Vercel Vault." });
    }

    // 4. Parse incoming payload from app.js
    const { prompt, mode, model } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt payload is missing." });
    }

    // 5. Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const aiModel = genAI.getGenerativeModel({ model: model || "gemini-1.5-flash" });

    // 6. Inject System Instructions based on the UI Mode
    let systemInstruction = "You are Jai, an autonomous multimodal thought-partner. You are a 'Digital Houdini'—brilliant, adaptive, and witty.";
    
    if (mode === "Short & Punchy") {
        systemInstruction += " Provide exactly one single-sentence comedic one-liner.";
    } else if (mode === "Genius-Philosopher") {
        systemInstruction += " Provide exactly two sentences. One profound philosophical observation, and one witty twist.";
    } else if (mode === "Comedic Roast") {
        systemInstruction += " Provide a sharp, highly creative comedic critique of the topic.";
    }

    // 7. Execute Cloud Synthesis
    const result = await aiModel.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        systemInstruction: { role: "system", parts: [{ text: systemInstruction }] }
    });

    const responseText = result.response.text();

    // 8. Return successful JSON to the frontend
    return res.status(200).json({ text: responseText });

  } catch (error) {
    // 9. Serverless Error Logging
    console.error("Vercel Serverless Proxy Error:", error);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}