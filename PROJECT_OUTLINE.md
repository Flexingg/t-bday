# 🎂 T-Bday: The Impossible Birthday Quiz

> A self-hosted, Flash-era-inspired puzzle/troll game modeled after *The Impossible Quiz*. Featuring 30 tricky, absurd, and hilarious levels culminating in a hardcoded Steam Gift Card reveal.

---

## 🎯 1. Project Overview

### Concept
A web-based tribute to the legendary Flash game *The Impossible Quiz* (by Splapp-me-do), tailored as a birthday challenge for "T". The player is presented with questions, puzzles, and mini-games that defy conventional logic, requiring lateral thinking, UI manipulation, mouse precision, and a sense of humor.

### Core Mechanics & Features
- **3 Lives System (❤️ ❤️ ❤️):** Fail a question or trigger a trap, lose a life. Lose all 3, and you get a classic Game Over screen with silly insults and have to restart (or use a rare "Skip" power-up).
- **Bomb Timers (💣 10s):** Select high-intensity levels feature ticking countdown bombs. If the timer hits zero, instant Game Over.
- **Troll UI & Meta Puzzles:** Buttons that move, answers hidden in the question text, invisible hitboxes, drag-and-drop objects, right-click traps, and browser-level interactions (tab focus, keybinds).
- **Audio & Visual FX:** Cartoonish sound effects (buzzers, boings, splats, fanfare, bomb tick-tocks) and retro Flash-inspired bold comic visuals.
- **Grand Prize Finale (Level 30):** Successfully beating Level 30 triggers a celebratory confetti canvas, celebratory audio, and unveils the hardcoded Steam Gift Card Code with a 1-click "Copy to Clipboard" button.

---

## 🛠️ 2. Recommended Tech Stack & Architecture

To make self-hosting frictionless and responsive with zero complex backend requirements:

```
[ Frontend (HTML5 + CSS3 + Vanilla JS / Vite) ]
   ├── Canvas / DOM Engine (Interactive puzzles, drag & drop, cursor mazes)
   ├── Web Audio API / Howler.js (Goofy retro SFX & background music)
   ├── Confetti Engine (Canvas-Confetti for the Level 30 celebration)
   └── State Controller (Lives, current level, skips, timer, audio mute)
```

### Stack Options
1. **Option A: Pure Vanilla Frontend (Recommended)**
   - **Tech:** Single-page HTML5, modern CSS (Tailwind or custom CSS), Vanilla TypeScript/JavaScript.
   - **Hosting:** Run instantly via `python -m http.server`, Caddy, Nginx, or Docker.
   - **Pros:** Zero build pipeline friction, lightweight, instant reload.

2. **Option B: Node.js / Express or Python Backend**
   - **Tech:** Fast lightweight server that delivers the static assets and can optionally gate the gift card code behind server-side level completion verification (so tech-savvy players can't just open DevTools `Ctrl+Shift+I` and search for the Steam code).

---

## 🔒 3. Steam Gift Card Protection Strategies

To prevent the player from easily inspecting the frontend code via DevTools to grab the code early:

1. **Option 1: AES / XOR Obfuscation (Client-side)**
   - The code is encrypted in JS (`"XXXXX-XXXXX-XXXXX"`). The decryption key is generated dynamically from the exact sequence of answers of all 30 levels. If they don't solve level 30 legitimately, the decrypted text is gibberish.
2. **Option 2: Direct Hardcode (Simplest)**
   - Place `const STEAM_GIFT_CARD = "YOUR-STEAM-CODE-HERE";` in a dedicated config file `src/config.js` with an honor-system agreement.
3. **Option 3: Scratch-off / Interactive Reveal UI**
   - A virtual coin scratch-card canvas overlay where the user must click and drag to "scratch off" the silver coating to reveal the code digit by digit.

---

## 🕹️ 4. The 30 Level Masterplan

| Level | Prompt / Screen | The Trick / Mechanic | The Solution |
|---|---|---|---|
| **1** | *"How many candles are on the cake?"* | 4 answers: 10, 25, None, 🎂. A cake is drawn with 5 candles. | Click the number `5` hidden inside the level counter `#1` or count candle wicks. |
| **2** | *"Click the largest gift box."* | Shows 4 gift boxes of varying visual sizes, but one answer option is the word **"BOX"** in 72pt font. | Click the word **"BOX"**. |
| **3** | *"Blow out the candle!"* | There is a lit candle on screen. Clicking it does nothing. | Drag a small cloud icon across the flame or blow into microphone / click the "O" in "BLOW". |
| **4** | *"Don't click the red button."* | Big tempting red button, 10s bomb timer ticking down. | Do literally nothing. Let the timer run out without clicking (or click the green dot in the corner). |
| **5** | *"Put the cat in the birthday hat."* | A cat and a party hat on screen. Dragging the hat to the cat misses. | Drag the word "cat" from the question into the word "hat". |
| **6** | *"Which one is NOT edible?"* | Pizza, Burger, Rocks, Cake. | Click "Rocks"... but wait, "Rocks" is right, except the real trick is clicking the question mark `?` because punctuation isn't edible. |
| **7** | *"Navigate the maze without touching the walls!"* | Cursor maze. Moving outside path triggers game over. | Right-click (or hold click) to teleport cursor to the finish line, bypassing the maze walls. |
| **8** | *"What is T's true age?"* | Choices: Real Age, 99, Eternal, 21. | Click "21" (flattery always wins) or click the digit inside the copyright footer. |
| **9** | *"Catch the runaway balloon!"* | Balloon floats rapidly away whenever cursor gets near it. | Move cursor off-screen to the right, re-enter from the left directly onto the balloon's path. |
| **10** | *"Quick! Spell 'BIRTHDAY' backwards."* | 4 multiple choice buttons with scrambled letters. | None of the buttons are right. Type `Y-A-D-H-T-R-I-B` on the physical keyboard. |
| **11** | *"Find the hidden party popper."* | Screen is completely dark (flashlight cursor effect). | Search the dark area with the flashlight circle until the popper is revealed, then click it. |
| **12** | *"Choose the correct answer:"* `1 + 1 = ?` | Options: 2, 11, Window, Depends. | "Window" (classic elementary school riddle: 1+1 drawn together makes a window). |
| **13** | *"Stop the party disaster!"* | A cup is falling off a table. 5-second countdown. | Drag the table to the left underneath the falling cup to catch it. |
| **14** | *"Click the smallest dot."* | 4 visible dots. The actual smallest dot is the dot over the `i` in the word "Click". | Click the dot on the letter `i`. |
| **15** | *"Feed the birthday boy."* | A hungry avatar mouth. Food items around the screen. | Drag all the food into the mouth, then drag the level number `#15` in because he is still hungry! |
| **16** | *"Press the green key."* | 3 piano keys: Red, Blue, Yellow. | Drag the Blue key on top of the Yellow key to blend them into Green, then click it. |
| **17** | *"Where is the exit?"* | Standard quiz UI. No obvious exit button. | Click the browser-like faux "X" close icon in the top corner of the game box. |
| **18** | *"What goes up but never comes down?"* | Options: Balloon, Age, Rocket, Rent. | "Age" (Birthday theme). |
| **19** | *"Unwrap the present!"* | A wrapped box with 5 layers of tape. | Click the tape strips in the correct numerical order (1 to 5) before the bomb explodes. |
| **20** | *"Search for the switch."* | The screen goes completely blank white. | Hover over the top center to reveal the invisible "Light Switch" toggle. |
| **21** | *"Simon Says: Click Blue."* | Colored buttons. Then: *"Now click Red."* (Without Simon Says). | Do NOT click Red; wait for Simon to ask properly or click Simon's face. |
| **22** | *"Match the pairs (Memory Game)."* | 6 cards face down. When matched, one card is a wild troll face. | Match the troll face with the level number. |
| **23** | *"Help! Defuse the bomb in 3 seconds!"* | 3 colored wires: Red, Blue, Striped. | Cut the wire by dragging a pair of scissors across the wire, not just clicking. |
| **24** | *"How many letters in 'The Alphabet'?"* | Options: 26, 11, 24, Infinite. | **11** (`T-h-e` `A-l-p-h-a-b-e-t` = 11 letters). |
| **25** | *"Don't blink!"* | Fast flashing images with a number hidden for 0.05s. | Answer is the lucky birthday number, or click "Pause" button hidden in UI. |
| **26** | *"Which balloon has the prize?"* | 5 balloons floating. Popping each one reveals "Nope!". | Pop the last balloon using a dart dragged from the UI header. |
| **27** | *"Click the Next button."* | The "Next" button dodges the mouse cursor dynamically. | Corner the button against the edge or press `Tab` + `Enter`. |
| **28** | *"Solve this equation:"* `🎂 + 🎁 - 🎈 = ?` | Visual algebra puzzle with tricky hidden multipliers. | Solve the tricky PEMDAS math trap. |
| **29** | *"Are you ready for your present?"* | Options: Yes, Absolutely, No, Maybe. | Clicking "Yes" moves the button; you have to drag "Yes" onto "No" to make "YES!". |
| **30** | **THE FINAL BOSS: The Grand Birthday Vault** | A giant high-tech birthday vault lock with 3 mini-puzzles in sequence under a 30s timer. | Solve the final 3-step sequence to unlock the vault doors! |

---

## 🎁 5. The Grand Finale Screen (Level 30 Win State)

When Level 30 is cleared:
1. **Victory Audio:** Fanfare / Celebration soundtrack starts playing.
2. **Confetti Explosion:** Multi-colored confetti showers the screen via canvas particle physics.
3. **Steam Gift Card Card Component:**
   - Realistic digital Steam Gift Card card graphic with shiny foil border.
   - Code box displaying: `XXXXX-XXXXX-XXXXX`
   - **[Copy Code]** button with animated "Copied!" feedback.
   - Direct link: *"Redeem on Steam (store.steampowered.com/account/redeemwalletcode)"*.
   - Personalized custom birthday message for T from the creator.

---

## 📁 6. Suggested Project Directory Structure

```
C:/RandallEngineering/T-Bday/
├── index.html               # Main entrypoint game UI
├── package.json             # Dev dependencies (optional if using Vite/Tailwind)
├── PROJECT_OUTLINE.md       # Game design & level roadmap specification
├── README.md                # Quickstart & hosting instructions
├── src/
│   ├── config.js            # Secret Steam Code & game settings
│   ├── main.js              # Core game loop, life counter, score & state
│   ├── sound.js             # Web Audio / Sound FX synthesizer & loader
│   ├── levels/              # Modular level scripts
│   │   ├── level_01_10.js   # Levels 1 to 10 logic
│   │   ├── level_11_20.js   # Levels 11 to 20 logic
│   │   └── level_21_30.js   # Levels 21 to 30 logic
│   └── styles/
│       ├── main.css         # Retro Flash aesthetic, comic fonts, animations
│       └── components.css   # Bomb timers, lives icons, popup modals
└── assets/
    ├── audio/               # Buzzer, boing, win fanfare, bomb ticking
    └── images/              # Birthday cake, balloons, vault, Steam card art
```

---

## 🚀 7. How to Self-Host (Quick Guide)

### Method 1: Python One-Liner (Easiest)
```powershell
cd C:\RandallEngineering\T-Bday
python -m http.server 8080
```
Open `http://localhost:8080` (or `http://<your-lan-ip>:8080` for mobile/LAN access).

### Method 2: Node / Vite Dev Server
```powershell
cd C:\RandallEngineering\T-Bday
npx serve .
```

### Method 3: Docker (Production / Always-On)
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
```
```powershell
docker build -t tbday-quiz .
docker run -d -p 8080:80 tbday-quiz
```
