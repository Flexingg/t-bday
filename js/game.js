class ImpossibleQuizGame {
    constructor() {
        this.currentLevelIdx = 0;
        this.lives = 3;
        this.skips = 1;
        this.timer = null;
        this.timeLeft = 0;
        this.cleanupListeners = [];
        this.customTimerCallback = null;
        this.totalQuestions = window.LEVELS.length;

        // Cache DOM elements
        this.elStage = document.getElementById('stage-container');
        this.elLevelBadge = document.getElementById('level-display');
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
        this.lives = 3;
        this.skips = 1;
        this.currentLevelIdx = 0;
        this.updateHUD();
        this.loadLevel(0);
    }

    restartGame() {
        this.clearTimersAndListeners();
        this.start();
    }

    updateHUD() {
        if (this.elLevelBadge) {
            this.elLevelBadge.innerHTML = `⭐ Level <span id="level-num">${this.currentLevelIdx + 1}</span> / ${this.totalQuestions}`;
        }
        if (this.elSkips) {
            this.elSkips.innerText = this.skips;
        }
        this.elHearts.forEach((h, idx) => {
            if (idx < this.lives) {
                h.classList.remove('lost');
            } else {
                h.classList.add('lost');
            }
        });
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
            this.triggerGrandVictory();
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
        
        // Award bonus skip at milestones
        if (this.currentLevelIdx === 9 || this.currentLevelIdx === 19) {
            this.skips++;
            this.showToast("⭐ BONUS SKIP EARNED! ⭐", "correct");
        }

        setTimeout(() => {
            this.nextLevel();
        }, 600);
    }

    nextLevel() {
        if (this.currentLevelIdx + 1 < this.totalQuestions) {
            this.loadLevel(this.currentLevelIdx + 1);
        } else {
            this.triggerGrandVictory();
        }
    }

    loseLife(reason) {
        window.sound.playWrong();
        window.sound.playShatter();
        this.lives--;
        this.updateHUD();

        // Shake stage
        this.elStage.classList.remove('shake-it');
        void this.elStage.offsetWidth; // trigger reflow
        this.elStage.classList.add('shake-it');

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
            "Defeated by lateral thinking! Better luck next time!"
        ];
        const roast = insults[Math.floor(Math.random() * insults.length)];

        this.elStage.innerHTML = `
            <div id="game-over-screen">
                <div style="font-size: 70px; margin-bottom: 10px;">💀 💣 💥</div>
                <h1 style="font-size: 38px; color: #ff3366; text-shadow: 3px 3px 0 #000; font-weight: 900;">GAME OVER!</h1>
                <p style="font-size: 20px; margin: 15px 0; color: #ffd700;">${reason || 'You ran out of lives!'}</p>
                <p style="font-size: 15px; opacity: 0.8; font-style: italic; margin-bottom: 25px;">"${roast}"</p>
                <div style="font-size: 16px; margin-bottom: 20px;">You made it to <strong>Level ${this.currentLevelIdx + 1}</strong> of ${this.totalQuestions}</div>
                <button class="start-btn" onclick="window.game.restartGame()">🔄 TRY AGAIN</button>
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
                        YOU CONQUERED ALL 30 IMPOSSIBLE LEVELS!
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

                    <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px; flex-wrap: wrap;">
                        <button class="icon-btn" onclick="window.confetti.explode(150); window.sound.playBoing();">🎉 MORE CONFETTI</button>
                        <button class="icon-btn" onclick="window.sound.playFanfare();">🎺 PLAY FANFARE</button>
                        <button class="icon-btn" onclick="window.game.restartGame();">🔄 PLAY AGAIN</button>
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
