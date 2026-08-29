# 🎂 The Impossible Birthday Quiz (T-Bday Edition)

A high-polish, self-hosted web game inspired by the legendary Flash game *The Impossible Quiz* (by Splapp-me-do). Tailored as a special birthday challenge for **T**, featuring 30 tricky levels, bizarre trivia, interactive mini-games, and a secret reward reveal at the end!

---

## 🎮 Features & Gameplay Mechanics

- **❤️ 3 Lives System:** Make 3 mistakes and face a classic roast game-over screen with instant retry.
- **💣 Bomb Timers (5s - 15s):** Fast-paced defusal puzzles with ticking sounds and panic warnings.
- **🧠 Bizarre & Hardcore Trivia:**
  - *The 1325 War of the Oaken Bucket*
  - *Diamond hailstorms on Saturn and Jupiter*
  - *The Wood Frog that freezes 65% of its body water into solid ice*
  - *Wombats producing cubic feces*
  - *Nintendo's 1889 Hanafuda playing cards origin*
  - *Alaska's law against waking sleeping bears for selfies*
  - *Raindrop terminal velocity (~9 m/s)*
- **🖱️ Interactive Flash-Era Mechanics:**
  - Dark Flashlight Room
  - Wire Defusal
  - Runaway and fleeing buttons
  - Cursor maze navigation
  - Sequential tape unwrap
  - Color mixing synthesis (Blue + Yellow = Green)
  - Reverse keyboard typing
  - Feed the birthday avatar
  - Smallest dot punctuation trick
  - Simon Says psychological trap
- **🔊 Web Audio API Sound Synthesizer:** Zero external audio dependencies! Procedural chimes, boings, buzzers, bomb ticks, explosions, and optional 8-bit chiptune BGM.
- **🏆 Grand Finale (Level 30):**
  - Interactive 3-dial titanium vault mechanism (`[ 7 | T | 21 ]`).
  - Confetti explosion + victory fanfare.
  - Secret Birthday Reward reveal: **`its under Rhodes mattress`** with a 1-click clipboard copy button.

---

## 🚀 Running via Docker Compose

The application is containerized with Nginx Alpine and ready to run:

```powershell
cd C:\RandallEngineering\T-Bday
docker compose up -d --build
```

### Accessing the Game:
- **Local Browser:** [http://localhost:8080](http://localhost:8080)
- **Local Network / Mobile:** `http://<YOUR-IP-ADDRESS>:8080`

### Checking Container Health:
```powershell
docker compose ps
```

### Stopping the Stack:
```powershell
docker compose down
```

---

## 🛠️ Secret Dev / Testing Controls

For testing and auditing levels:
- **Dev Skip:** Press `Shift + N` on your keyboard to instantly advance to the next level.
- **Bonus Skips:** Earned at Level 10 and Level 20.
- **Sound / BGM Controls:** Toggle sound effects or 8-bit chiptune background music directly in the top HUD.
