const functions = require('firebase-functions');
const textToSpeech = require('@google-cloud/text-to-speech');
const client = new textToSpeech.TextToSpeechClient();

exports.generateJaiVoice = functions.https.onCall(async (data, context) => {
    const request = {
        input: { text: data.text },
        voice: { languageCode: data.languageCode || 'en-US', name: data.voiceName || 'en-US-Journey-F' },
        audioConfig: { audioEncoding: 'MP3' },
    };
    const [response] = await client.synthesizeSpeech(request);
    return { audioContent: response.audioContent.toString('base64') };
});

exports.geminiProxy = functions.https.onRequest(async (req, res) => {
    // Enable CORS for your front-end
    res.set('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        res.set('Access-Control-Allow-Methods', 'POST');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.status(204).send('');
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Pulling the API key securely from Firebase Environment Variables
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("CRITICAL: API key missing in Firebase Vault.");
        return res.status(500).json({ error: 'Vault locked. Key missing.' });
    }

    try {
        const { prompt, model } = req.body;
        const targetModel = model || 'gemini-3.1-flash';
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
        
        // Return sanitized text to the frontend
        res.status(200).json({ text: generatedText });
        
    } catch (error) {
        console.error("Firebase Function Error:", error);
        res.status(500).json({ error: 'Failed to synthesize thought process.' });
    }
});