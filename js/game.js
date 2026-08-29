class ImpossibleQuizGame {
    constructor() {
        this.currentLevelIdx = 0;
        this.lives = 3;
        this.skips = 1;
        this.isEternal = false;
        this.timer = null;
        this.timeLeft = 0;
        this.cleanupListeners = [];
        this.customTimerCallback = null;
        this.totalQuestions = window.LEVELS.length;

        // Cache DOM elements
        this.elStage = document.getElementById('stage-container');
        this.elLevelBadge = document.getElementById('level-display');
        this.elLivesBox = document.querySelector('.lives-box');
        this.elHearts = document.querySelectorAll('.life-heart');
        this.elSkips = document.getElementById('skip-count');
        this.elBombBar = document.getElementById('bomb-timer-bar');
        this.elBombText = document.getElementById('bomb-seconds');
        this.elFuseFill = document.getElementById('fuse-fill');
        this.elToast = document.getElementById('feedback-toast');

        this.initControls();
    }

    initControls() {
        // Sound toggle
        const btnMute = document.getElementById('btn-mute');
        if (btnMute) {
            btnMute.onclick = () => {
                const isMuted = window.sound.toggleMute();
                btnMute.innerText = isMuted ? '🔇 Sound OFF' : '🔊 Sound ON';
            };
        }

        // BGM toggle
        const btnBgm = document.getElementById('btn-bgm');
        if (btnBgm) {
            btnBgm.onclick = () => {
                if (window.sound.bgmPlaying) {
                    window.sound.stopBgm();
                    btnBgm.innerText = '🎵 BGM: Off';
                } else {
                    window.sound.startBgm();
                    btnBgm.innerText = '🎵 BGM: On';
                }
            };
        }

        // Skip button
        const btnSkip = document.getElementById('btn-skip');
        if (btnSkip) {
            btnSkip.onclick = () => {
                if (this.skips > 0 && this.currentLevelIdx < this.totalQuestions - 1) {
                    this.skips--;
                    this.updateHUD();
                    this.showToast("Skipped question!", "correct");
                    this.nextLevel();
                } else if (this.skips <= 0) {
                    this.showToast("No skips remaining!", "wrong");
                }
            };
        }

        // Restart button
        const btnRestart = document.getElementById('btn-restart');
        if (btnRestart) {
            btnRestart.onclick = () => this.restartGame();
        }

        // Secret testing hotkey: Press Shift + N to jump to next level (for dev testing)
        window.addEventListener('keydown', (e) => {
            if (e.shiftKey && (e.key === 'N' || e.key === 'n')) {
                console.log("Dev Skip triggered");
                this.nextLevel();
            }
        });
    }

    start() {
        this.isEternal = false;
        this.lives = 3;
        this.skips = 1;
        this.currentLevelIdx = 0;
        this.updateHUD();
        this.loadLevel(0);
    }

    startEternalMode() {
        this.clearTimersAndListeners();
        this.isEternal = true;
        this.lives = 1; // 1 strike = out (0 extra lives)
        this.skips = 0; // No skips in sudden death!
        this.currentLevelIdx = 30; // Starts at Level 31
        window.sound.playFanfare();
        this.showToast("💀 ENTERING ETERNAL MODE: SUDDEN DEATH! 💀", "wrong");
        this.updateHUD();
        this.loadLevel(30);
    }

    restartGame() {
        this.clearTimersAndListeners();
        if (this.isEternal) {
            this.startEternalMode();
        } else {
            this.start();
        }
    }

    updateHUD() {
        if (this.elLevelBadge) {
            if (this.isEternal) {
                this.elLevelBadge.style.background = "#ff3366";
                this.elLevelBadge.style.color = "#fff";
                this.elLevelBadge.innerHTML = `🔥 Level <span id="level-num">${this.currentLevelIdx + 1}</span> / 100 <small style="font-size:12px; font-weight:bold;">[ETERNAL]</small>`;
            } else {
                this.elLevelBadge.style.background = "var(--accent-yellow)";
                this.elLevelBadge.style.color = "#000";
                this.elLevelBadge.innerHTML = `⭐ Level <span id="level-num">${this.currentLevelIdx + 1}</span> / 30`;
            }
        }
        if (this.elSkips) {
            this.elSkips.innerText = this.skips;
        }

        if (this.elLivesBox) {
            if (this.isEternal) {
                this.elLivesBox.innerHTML = `
                    <span style="font-size: 14px; font-weight: 900; color: #ff3366; background: rgba(0,0,0,0.6); padding: 4px 10px; border-radius: 8px; border: 2px solid #ff3366;">
                        💀 SUDDEN DEATH (0 LIVES)
                    </span>
                `;
            } else {
                this.elLivesBox.innerHTML = `
                    <span class="life-heart ${this.lives < 1 ? 'lost' : ''}">❤️</span>
                    <span class="life-heart ${this.lives < 2 ? 'lost' : ''}">❤️</span>
                    <span class="life-heart ${this.lives < 3 ? 'lost' : ''}">❤️</span>
                `;
            }
        }
    }

    clearTimersAndListeners() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.customTimerCallback = null;
        this.cleanupListeners.forEach(fn => {
            try { fn(); } catch(e) {}
        });
        this.cleanupListeners = [];
        if (this.elBombBar) {
            this.elBombBar.style.display = 'none';
        }
    }

    loadLevel(idx) {
        this.clearTimersAndListeners();
        this.currentLevelIdx = idx;
        this.updateHUD();

        const lvl = window.LEVELS[idx];
        if (!lvl) {
            if (this.isEternal) {
                this.triggerEternalVictory();
            } else {
                this.triggerGrandVictory();
            }
            return;
        }

        // Render standard question or interactive
        let html = `
            <div class="question-box">
                <div id="level-title-text" class="question-text">${lvl.question}</div>
            </div>
        `;

        if (lvl.type === 'choice') {
            html += `<div class="answers-grid">`;
            lvl.options.forEach((opt, i) => {
                html += `<button class="quiz-btn answer-btn" data-idx="${i}">${opt.text}</button>`;
            });
            html += `</div>`;
        } else if (lvl.type === 'interactive') {
            html += lvl.html || '';
        }

        this.elStage.innerHTML = html;

        // Setup choice click listeners
        if (lvl.type === 'choice') {
            const btns = this.elStage.querySelectorAll('.answer-btn');
            btns.forEach(btn => {
                btn.onclick = () => {
                    const optIdx = parseInt(btn.getAttribute('data-idx'), 10);
                    const opt = lvl.options[optIdx];
                    if (opt.correct) {
                        window.sound.playCorrect();
                        this.solveLevel(opt.msg || "Correct!");
                    } else {
                        this.loseLife(opt.msg || "Wrong answer!");
                    }
                };
            });
        }

        // Run level custom setup script
        if (typeof lvl.setup === 'function') {
            lvl.setup(this.elStage, this);
        }

        // Setup Bomb Timer if specified
        if (lvl.timer) {
            this.startBombTimer(lvl.timer);
        }
    }

    startBombTimer(seconds) {
        this.timeLeft = seconds;
        const total = seconds;
        this.elBombBar.style.display = 'flex';
        this.elBombBar.classList.remove('urgent');
        this.elBombText.innerText = this.timeLeft.toFixed(1);
        this.elFuseFill.style.width = '100%';

        this.timer = setInterval(() => {
            this.timeLeft -= 0.1;
            window.sound.playBombTick();

            if (this.timeLeft <= 3.0) {
                this.elBombBar.classList.add('urgent');
            }

            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.timer = null;
                this.elBombBar.style.display = 'none';

                if (this.customTimerCallback) {
                    this.customTimerCallback();
                } else {
                    window.sound.playExplosion();
                    this.loseLife("💣 BOOM! The bomb timer ran out!");
                }
                return;
            }

            this.elBombText.innerText = Math.max(0, this.timeLeft).toFixed(1);
            const pct = (this.timeLeft / total) * 100;
            this.elFuseFill.style.width = `${pct}%`;
        }, 100);
    }

    solveLevel(message) {
        this.clearTimersAndListeners();
        this.showToast(message || "Level Cleared!", "correct");
        
        // Award bonus skip at milestones in classic mode
        if (!this.isEternal && (this.currentLevelIdx === 9 || this.currentLevelIdx === 19)) {
            this.skips++;
            this.showToast("⭐ BONUS SKIP EARNED! ⭐", "correct");
        }

        setTimeout(() => {
            this.nextLevel();
        }, 600);
    }

    nextLevel() {
        if (!this.isEternal && this.currentLevelIdx === 29) {
            // Level 30 completed!
            this.triggerGrandVictory();
            return;
        }

        if (this.currentLevelIdx + 1 < this.totalQuestions) {
            this.loadLevel(this.currentLevelIdx + 1);
        } else {
            if (this.isEternal) {
                this.triggerEternalVictory();
            } else {
                this.triggerGrandVictory();
            }
        }
    }

    loseLife(reason) {
        window.sound.playWrong();
        window.sound.playShatter();

        // Shake stage
        this.elStage.classList.remove('shake-it');
        void this.elStage.offsetWidth; // trigger reflow
        this.elStage.classList.add('shake-it');

        if (this.isEternal) {
            // ETERNAL SUDDEN DEATH: 1 mistake = instant game over!
            this.showToast("💀 SUDDEN DEATH STRIKE! YOU PERISHED! 💀", "wrong");
            setTimeout(() => {
                this.triggerEternalGameOver(reason);
            }, 500);
            return;
        }

        this.lives--;
        this.updateHUD();
        this.showToast(reason || "Ouch! You lost a life!", "wrong");

        if (this.lives <= 0) {
            setTimeout(() => {
                this.triggerGameOver(reason);
            }, 600);
        }
    }

    triggerGameOver(reason) {
        this.clearTimersAndListeners();
        window.sound.playExplosion();

        const insults = [
            "Your brain cells filed a formal complaint.",
            "Did you try turning your brain off and on again?",
            "T says: 'Is that really the best you can do on my birthday?'",
            "Game Over! The cake is not for you today!",
            "Defeated by crazy hard trivia! Better luck next time!"
        ];
        const roast = insults[Math.floor(Math.random() * insults.length)];

        this.elStage.innerHTML = `
            <div id="game-over-screen">
                <div style="font-size: 70px; margin-bottom: 10px;">💀 💣 💥</div>
                <h1 style="font-size: 38px; color: #ff3366; text-shadow: 3px 3px 0 #000; font-weight: 900;">GAME OVER!</h1>
                <p style="font-size: 20px; margin: 15px 0; color: #ffd700;">${reason || 'You ran out of lives!'}</p>
                <p style="font-size: 15px; opacity: 0.8; font-style: italic; margin-bottom: 25px;">"${roast}"</p>
                <div style="font-size: 16px; margin-bottom: 20px;">You made it to <strong>Level ${this.currentLevelIdx + 1}</strong> of 30</div>
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button class="start-btn" onclick="window.game.start()">🔄 TRY AGAIN</button>
                    <button class="start-btn" style="background:#ff3366; color:#fff;" onclick="window.game.startEternalMode()">🔥 TRY ETERNAL MODE</button>
                </div>
            </div>
        `;
    }

    triggerEternalGameOver(reason) {
        this.clearTimersAndListeners();
        window.sound.playExplosion();

        this.elStage.innerHTML = `
            <div id="game-over-screen">
                <div style="font-size: 70px; margin-bottom: 10px;">💀 🔥 ⚡</div>
                <h1 style="font-size: 38px; color: #ff3366; text-shadow: 3px 3px 0 #000; font-weight: 900;">
                    ETERNAL SUDDEN DEATH SQUASHED!
                </h1>
                <p style="font-size: 20px; margin: 15px 0; color: #ffd700;">${reason || 'One mistake ended your run!'}</p>
                <p style="font-size: 16px; color: #ff8a80; font-style: italic; margin-bottom: 25px;">
                    "There are no second chances in the Eternal Realm. Zero lives remaining."
                </p>
                <div style="font-size: 18px; margin-bottom: 25px; background: rgba(0,0,0,0.5); padding: 12px; border-radius: 12px; border: 2px solid #ff3366;">
                    You survived to <strong>Level ${this.currentLevelIdx + 1} / 100</strong>
                </div>
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button class="start-btn" style="background:#ff3366; color:#fff;" onclick="window.game.startEternalMode()">
                        🔥 RETRY ETERNAL MODE (Lvl 31)
                    </button>
                    <button class="start-btn" onclick="window.game.start()">
                        🏠 MAIN QUIZ (Lvl 1)
                    </button>
                </div>
            </div>
        `;
    }

    triggerGrandVictory() {
        this.clearTimersAndListeners();
        window.sound.playFanfare();
        window.confetti.rain(12000);
        window.confetti.explode(200);

        this.elStage.innerHTML = `
            <div id="victory-screen">
                <div class="victory-card">
                    <div style="font-size: 60px; margin-bottom: 5px;">👑 🎂 🏆</div>
                    <h1 class="game-title-hero" style="font-size: 36px; margin-bottom: 5px;">HAPPY BIRTHDAY T!</h1>
                    <div style="font-size: 18px; color: var(--accent-cyan); font-weight: bold; margin-bottom: 20px;">
                        YOU CONQUERED ALL 30 CRAZY HARD LEVELS!
                    </div>

                    <div class="reward-badge-container">
                        <div style="color: #fff; font-size: 14px; font-weight: bold; letter-spacing: 1px; margin-bottom: 10px;">
                            🎁 YOUR BIRTHDAY REWARD LOCATION:
                        </div>
                        <div id="secret-clue-box" class="reward-clue-text">
                            its under Rhodes mattress
                        </div>
                        <button id="btn-copy-clue" class="copy-btn">
                            📋 COPY SECRET CLUE
                        </button>
                    </div>

                    <p style="font-size: 15px; color: #e0e1dd; line-height: 1.5; margin-top: 15px;">
                        Go check the location right now to claim your actual birthday treasure! 🎈
                    </p>

                    <!-- ETERNAL MODE PORTAL BUTTON -->
                    <div style="margin: 25px auto 10px; background: rgba(0,0,0,0.6); padding: 18px; border-radius: 16px; border: 3px solid #ff3366; max-width: 540px;">
                        <div style="color: #ff3366; font-size: 16px; font-weight: 900; margin-bottom: 8px;">
                            🔥 THE ULTIMATE CHALLENGE AWAITS 🔥
                        </div>
                        <p style="font-size: 13px; color: #ccc; margin-bottom: 14px;">
                            Think you're a true trivia god? 70 additional hardcore questions (Levels 31 - 100). <strong>ZERO LIVES / SUDDEN DEATH.</strong>
                        </p>
                        <button class="start-btn pulse-anim" style="background: linear-gradient(90deg, #ff1744, #ff9100); color: #fff; font-size: 18px; padding: 14px 28px; width: 100%; border-color: #fff;" onclick="window.game.startEternalMode()">
                            🔥 ENTER ETERNAL MODE (Levels 31 - 100) 🔥
                        </button>
                    </div>

                    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">
                        <button class="icon-btn" onclick="window.confetti.explode(150); window.sound.playBoing();">🎉 MORE CONFETTI</button>
                        <button class="icon-btn" onclick="window.sound.playFanfare();">🎺 PLAY FANFARE</button>
                        <button class="icon-btn" onclick="window.game.start();">🔄 RESTART QUIZ</button>
                    </div>
                </div>
            </div>
        `;

        const copyBtn = document.getElementById('btn-copy-clue');
        if (copyBtn) {
            copyBtn.onclick = () => {
                navigator.clipboard.writeText("its under Rhodes mattress").then(() => {
                    copyBtn.innerText = "✅ COPIED TO CLIPBOARD!";
                    window.sound.playCorrect();
                    setTimeout(() => {
                        copyBtn.innerText = "📋 COPY SECRET CLUE";
                    }, 2500);
                }).catch(() => {
                    copyBtn.innerText = "✅ its under Rhodes mattress";
                });
            };
        }
    }

    triggerEternalVictory() {
        this.clearTimersAndListeners();
        window.sound.playFanfare();
        window.confetti.rain(15000);
        window.confetti.explode(300);

        this.elStage.innerHTML = `
            <div id="victory-screen">
                <div class="victory-card" style="background: radial-gradient(circle, #311b92 0%, #000000 100%); border-color: #00e5ff; box-shadow: 0 0 60px rgba(0,229,255,0.7);">
                    <div style="font-size: 70px; margin-bottom: 5px;">🌌 👑 ⚡</div>
                    <h1 class="game-title-hero" style="font-size: 38px; color: #00e5ff; text-shadow: 0 0 20px #00e5ff;">
                        THE ETERNAL DEITY OF TRIVIA!
                    </h1>
                    <div style="font-size: 20px; color: #ffd700; font-weight: 900; margin-bottom: 20px;">
                        🏆 YOU CONQUERED ALL 100 LEVELS WITH ZERO LIVES! 🏆
                    </div>

                    <div style="background: rgba(0,0,0,0.7); border: 3px dashed #00e5ff; border-radius: 16px; padding: 20px; margin: 20px auto; max-width: 520px;">
                        <p style="font-size: 18px; color: #fff; font-weight: bold; line-height: 1.6;">
                            You survived the ultimate 100-question gauntlet without a single mistake. Your intellect is officially legendary.
                        </p>
                    </div>

                    <div style="display: flex; gap: 12px; justify-content: center; margin-top: 25px; flex-wrap: wrap;">
                        <button class="icon-btn" onclick="window.confetti.explode(250); window.sound.playBoing();">🎉 COSMIC CONFETTI</button>
                        <button class="icon-btn" onclick="window.sound.playFanfare();">🎺 ETERNAL FANFARE</button>
                        <button class="icon-btn" onclick="window.game.start();">🏠 RETURN TO LEVEL 1</button>
                    </div>
                </div>
            </div>
        `;
    }

    showToast(msg, type = "normal") {
        if (!this.elToast) return;
        this.elToast.innerText = msg;
        this.elToast.className = `show ${type}`;
        setTimeout(() => {
            this.elToast.className = '';
        }, 1800);
    }
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
    window.game = new ImpossibleQuizGame();
});
