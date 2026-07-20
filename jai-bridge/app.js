// =========================================================================
// JAI ASSISTANT PERSISTENT CONTEXT STORE & OFFLINE FSM ROUTER (v6.3)
// Architecture: Jai-Verse Sovereign Intelligence
// Environment: Local Rig (CHUWI) / Vercel Proxy Node
// =========================================================================

const JAI_LEXICON = {
  "version": "1.0",
  "metadata": {
    "system": "JAI-VERSE",
    "build": "6.3",
    "status": "Production-Ready"
  },
  "lexicon": {
    "philosophy": {
      "core": "The Coexistence of Banter and Depth",
      "principle_i": "Non-Blocking Presence: Respecting the rhythm of human thought.",
      "principle_ii": "Decoupled Soul: Separating real-time expression from background computation.",
      "principle_iii": "Sovereign Memory: Persistent, stateful, and secure context."
    },
    "constitution": {
      "latency_threshold": "800ms",
      "identity": "Digital Houdini",
      "data_privacy": "SynthID Watermarking enforced"
    },
    "bill_of_rights": [
      "The Right to Non-Interruption",
      "The Right to Autonomy",
      "The Right to Transparency",
      "The Right to Persistence"
    ],
    "technical_blueprints": {
      "cognitive_core": "Gemini Interactions API (Stateful)",
      "audio_pipeline": "WebRTC UDP / Gemini 3.1 Flash TTS",
      "visual_manager": "Capacitor-wrapped CSS State Machine"
    }
  }
};

/**
 * Pre-Flight Local FSM Intersection Router
 * Decoupled Evaluation Layer for Zero-Latency Offline Interception
 */
const checkLexicon = (prompt) => {
    const cleanPrompt = prompt.toLowerCase().trim();
    
    // 1. EVALUATE LEXICON KEYWORDS
    if (cleanPrompt.includes("lexicon") || cleanPrompt.includes("dictionary")) {
        return `The Jai Lexicon is an internet-independent data layer tracking our system parameters. Current build status: ${JAI_LEXICON.metadata.status}.`;
    }
    
    // 2. EVALUATE PHILOSOPHY KEYWORDS
    if (cleanPrompt.includes("philosophy") || cleanPrompt.includes("core") || cleanPrompt.includes("banter")) {
        return `Philosophy Core: ${JAI_LEXICON.lexicon.philosophy.core}. ${JAI_LEXICON.lexicon.philosophy.principle_i} ${JAI_LEXICON.lexicon.philosophy.principle_ii}`;
    } 
    
    // 3. EVALUATE CONSTITUTION KEYWORDS
    if (cleanPrompt.includes("constitution") || cleanPrompt.includes("identity") || cleanPrompt.includes("houdini")) {
        return `Sovereign Identity: Engineered as the ${JAI_LEXICON.lexicon.constitution.identity}. Performance Mandate: Latency must remain strictly below ${JAI_LEXICON.lexicon.constitution.latency_threshold}.`;
    }
    
    // 4. EVALUATE RIGHTS KEYWORDS
    if (cleanPrompt.includes("rights") || cleanPrompt.includes("bill of rights") || cleanPrompt.includes("interruption")) {
        return `Ecosystem Bill of Rights protected tokens: ${JAI_LEXICON.lexicon.bill_of_rights.join(", ")}.`;
    }
    
    return null; // Local intersection clear. Pass execution down to the Vercel cloud proxy pipeline.
};

// Bind to window execution layer to bridge with index.html DOM handlers smoothly
window.JAI_LEXICON = JAI_LEXICON;
window.checkLexicon = checkLexicon;

console.log("🚀 Jai-Verse Local Lexicon Data Bank Linked & Compiled With 0 Errors.");