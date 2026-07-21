// Export the default Vercel Serverless Function handler
export default async function handler(req, res) {
  // 1. Acknowledge and handle pre-flight OPTIONS requests for CORS[cite: 2]
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  // Set CORS headers for the actual request[cite: 2]
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 2. Ensure the request method is POST[cite: 2]
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // 3. Securely pull the API Key from Vercel Environment Variables[cite: 2]
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Vercel Proxy Error: GEMINI_API_KEY is not set in Environment Variables.");
    return res.status(500).json({ error: "API key is not configured on the server." });
  }

  try {
    // 4. Parse the incoming request body[cite: 2]
    const { prompt, mode, model } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Bad Request: 'prompt' is required." });
    }

    // 5. Inject System Instructions based on the requested 'mode'[cite: 2]
    let systemInstructionText = "You are Jai, my AI thought partner. You are a 'Digital Houdini'—brilliant, adaptive, witty, and highly efficient. Respond concisely and brilliantly to the user's prompt.";

    switch (mode) {
        case "Genius-Philosopher":
            systemInstructionText = "You are a genius philosopher with the personality of Jai. Deconstruct the user's prompt into its core principles and provide a profound, elegant, and concise insight.";
            break;
        case "Comedic Roast":
            systemInstructionText = "You are a world-class comedian with the personality of Jai. Your task is to deliver a sharp, witty, and devastatingly funny roast based on the user's prompt. Be clever, not cruel.";
            break;
        case "Short & Punchy":
             systemInstructionText = "You are Jai. Respond to the user's prompt with an extremely short, punchy, and memorable one-liner or observation.";
             break;
    }

    // 6. The Pure Fetch Request (NO HEAVY SDK REQUIRED)
    const activeModel = model || "gemini-1.5-flash";
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${activeModel}:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            system_instruction: { parts: [{ text: systemInstructionText }] },
            contents: [{ parts: [{ text: prompt }] }]
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error?.message || 'Failed to fetch from Google');
    }

    // 7. Extract the text and return the clean JSON payload to the frontend[cite: 2]
    const generatedText = data.candidates[0].content.parts[0].text;
    return res.status(200).json({ text: generatedText });

  } catch (error) {
    // 8. Provide robust error logging for Vercel console[cite: 2]
    console.error("Vercel Proxy Error - Upstream API Call Failed:", error);
    return res.status(500).json({
      error: "An error occurred while communicating with the generative AI service.",
      details: error.message,
    });
  }
}