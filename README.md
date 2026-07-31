# JAI — Sovereign Multimodal Digital Assistant & Thought Partner (v3.0)

**Lead Engineer:** Jairo (Jay) Bonilla  
**Organization:** JAI-VERSE Sovereign Architecture  
**Stack:** OmniStack Local-First Architecture | HTML5 | Vanilla CSS3 (Deep Space UI) | JavaScript (ES6+) | Math.js | Compromise NLP | Web Speech API | WebCam Base64 API

---

## 🌟 System Overview

**JAI** is a sovereign, local-first multimodal digital assistant and thought-partner engineered for zero-lag local execution, unbreakable fault tolerance, and rich acoustic/visual interaction. 

Unlike traditional web applications that freeze when cloud endpoints fail, JAI implements a **4-Tier Graceful Degradation Architecture**: it leverages cloud intelligence (`/api/gemini`) when connected, but seamlessly pivots to a 3,000-word local dictionary, local historical vaults, and on-device natural language processing when offline or throttled.

---

## 🚀 Key Features & Architectural Innovations

### 1. 4-Tier Hybrid Lookup & Fault-Tolerant Router
- **Tier 1 (Cloud Route)**: Pings `/api/gemini` with an 8-second `AbortController` timeout for complex abstract reasoning.
- **Tier 2 (Sovereign Local Vault)**: Instantly queries `JAI_HISTORY_VAULT` (3000 BCE to Present), `JAI_LEXICON`, and a 3,000-word local high-frequency American Standard English vocabulary (`dictionary.json`).
- **Tier 3 (Online Public API Fallback)**: If a word is unmapped locally while online, pings the free public Dictionary API (`api.dictionaryapi.dev`).
- **Tier 4 (Offline Compromise.js NLP Engine)**: Performs root-word extraction and morphological analysis when entirely offline.

### 2. Digital Houdini TTS Chunking & Viseme Lip-Sync
- **Voice Prioritization**: Primary selection defaults to **Microsoft Dave / David** (US Male) and **US Female** (`Zira`, `Jenny`, `Aria`), with British English (`Daniel`) as secondary fallback.
- **Continuous Chunking (`breakTextIntoChunks`)**: Eliminates mobile browser speech synthesis cutoffs on multi-sentence streams.
- **Viseme Equalizer Animation**: Real-time smooth mouth-overlay viseme pulsing (`#pixar-mouth-open`, `#female-mouth-open`) matched to acoustic equalizer bars.

### 3. Ocular Nerve Base64 Visual Capture
- Instant 1-click snapshot from local camera hardware.
- Converts video frames directly into Base64 JPEG data URL payloads (`canvas.toDataURL('image/jpeg')`) ready for multimodal visual prompt processing.

### 4. Cosmic Deep Space UI & Tetra Genesis Gesture Controls
- Multi-layered procedural parallax galaxy background with animated starfields, shooting stars, and neon cyan/violet HSL glows.
- Interactive touch/drag and swipe gesture handlers (`touchstart`, `touchmove`, `touchend`) for Tetra Genesis shape manipulation.

---

## 🛠️ Project Structure

```
jai_digital_assitant_2026_omnistack/
├── index.html              # Main OmniStack single-file application
├── dictionary.json         # High-frequency 3,000-word local vocabulary & Lexicon
├── jai_history.js          # Sovereign Pan-American History Vault (3000 BCE–Present)
├── input.css               # Tailwind source styles
├── output.css              # Compiled utility CSS
├── README.md               # Project documentation & architecture overview
└── package.json            # Project manifest & configuration
```

---

## 🚦 Quick Start Guide

### Option 1: VS Code Live Server (Recommended)
1. Open VS Code: `File` ➔ `Open Folder...` ➔ Select `jai_digital_assitant_2026_omnistack`.
2. Right-click [`index.html`](file:///C:/Users/Jose/OneDrive/Desktop/jay%20folder/jai_digital_assitant_2026_omnistack/index.html) ➔ **"Open with Live Server"**.
3. Open browser at `http://127.0.0.1:5500`.

### Option 2: Direct Local Launch
Double-click `index.html` in Windows File Explorer to open directly in Chrome or Edge.

---

## 🛡️ License & Sovereign Rights
Created & Engineered by **Jairo (Jay) Bonilla** — JAI-VERSE © 2026. All rights reserved.
