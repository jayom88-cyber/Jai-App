export default async function handler(req, res) {
    // 1. Pre-flight checks: Only accept POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }
    
    const { prompt, model } = req.body;
    
    // 2. Access the Secure Vault: Pulls the key from Vercel Environment Variables
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("CRITICAL: GEMINI_API_KEY environment variable is missing.");
        return res.status(500).json({ error: 'Cognitive Core offline. Key missing in Vault.' });
    }

    try {
        const targetModel = model || 'gemini-1.5-flash';
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;
        
        const payload = {
            contents: [{ parts: [{ text: `You are Jai, my AI thought partner. Respond concisely to the following: ${prompt}` }] }]
        };

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`Google API Gateway returned HTTP ${response.status}`);
        }
        
        const data = await response.json();
        const generatedText = data.candidates[0].content.parts[0].text;
        
        // 3. Return sanitized payload to the frontend
        res.status(200).json({ text: generatedText });
        
    } catch (error) {
        console.error("Vercel Function Error:", error);
        res.status(500).json({ error: 'Failed to synthesize thought process.' });
    }
}