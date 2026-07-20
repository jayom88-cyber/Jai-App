import { GoogleGenerativeAI } from "@google/generative-ai";

// Export the default Vercel Serverless Function handler
export default async function handler(req, res) {
  // 1. Acknowledge and handle pre-flight OPTIONS requests for CORS
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  // Set CORS headers for the actual request
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 2. Ensure the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 3. Securely pull the API Key from Vercel Environment Variables
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Vercel Proxy Error: GEMINI_API_KEY is not set in Environment Variables.");
    return res.status(500).json({ error: "API key is not configured on the server." });
  }

  try {
    // 4. Parse the incoming request body
    const { prompt, mode, model } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Bad Request: 'prompt' is required." });
    }

    // 5. Inject System Instructions based on the requested 'mode'
    let systemInstruction = "You are Jai, my AI thought partner. You are a 'Digital Houdini'—brilliant, adaptive, witty, and highly efficient. Respond concisely and brilliantly to the user's prompt.";

    switch (mode) {
        case "Genius-Philosopher":
            systemInstruction = "You are a genius philosopher with the personality of Jai. Deconstruct the user's prompt into its core principles and provide a profound, elegant, and concise insight.";
            break;
        case "Comedic Roast":
            systemInstruction = "You are a world-class comedian with the personality of Jai. Your task is to deliver a sharp, witty, and devastatingly funny roast based on the user's prompt. Be clever, not cruel.";
            break;
        case "Short & Punchy":
             systemInstruction = "You are Jai. Respond to the user's prompt with an extremely short, punchy, and memorable one-liner or observation.";
             break;
    }

    // 6. Initialize the Google Generative AI client
    const genAI = new GoogleGenerativeAI(apiKey);
    const geminiModel = genAI.getGenerativeModel({
      model: model || "gemini-1.5-flash", // Fallback to flash model
      systemInstruction: systemInstruction,
    });

    // 7. Generate the content and get the response text
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 8. Return the clean JSON payload to the frontend
    return res.status(200).json({ text: text });

  } catch (error) {
    // 9. Provide robust error logging for Vercel console
    console.error("Vercel Proxy Error - Upstream API Call Failed:", error);
    return res.status(500).json({
      error: "An error occurred while communicating with the generative AI service.",
      details: error.message,
    });
  }
}